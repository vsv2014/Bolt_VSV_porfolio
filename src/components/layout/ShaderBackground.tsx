import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

/* ------------------------------------------------------------------ *
 * A hand-written WebGL aurora.
 *
 * One fullscreen quad, one fragment shader: domain-warped fBm noise folded
 * into the palette, with a pointer-driven heat blob. Rendered at a fraction
 * of device pixels (soft gradients do not need resolution), paused when the
 * tab is hidden, and frozen to a single frame under reduced motion.
 *
 * Falls back to the CSS orbs when WebGL is unavailable or blocked.
 * ------------------------------------------------------------------ */

const VERTEX = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAGMENT = `
precision mediump float;

uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_ptr;
uniform float u_light;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv;
  p.x *= u_res.x / max(u_res.y, 1.0);

  float t = u_time * 0.03;

  // Domain warp: noise of noise gives the slow, liquid aurora motion.
  vec2 q = vec2(fbm(p * 1.35 + vec2(t, -t * 0.7)), fbm(p * 1.35 + vec2(-t * 0.8, t) + 5.2));
  float n = fbm(p * 1.05 + q * 1.65 + vec2(0.0, t * 0.5));

  vec3 violet = vec3(0.486, 0.361, 1.000);
  vec3 cyan   = vec3(0.208, 0.878, 1.000);
  vec3 rose   = vec3(1.000, 0.302, 0.616);
  vec3 lime   = vec3(0.784, 0.965, 0.365);

  vec3 col = mix(violet, cyan, smoothstep(0.24, 0.78, n));
  col = mix(col, rose, smoothstep(0.52, 0.96, fbm(p * 2.1 - q)));
  col = mix(col, lime, 0.22 * smoothstep(0.66, 1.0, n));

  // Pointer heat — a soft ember that follows the cursor.
  float d = distance(uv, u_ptr);
  col += 0.30 * exp(-d * 3.4) * vec3(0.95, 0.78, 0.42);

  // Edge falloff so the corners stay deep.
  float vig = smoothstep(1.45, 0.12, length(uv - 0.5) * 2.0);
  float alpha = (0.14 + 0.34 * n) * vig;
  alpha *= mix(1.0, 0.6, u_light);

  gl_FragColor = vec4(col, alpha);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();
  const reduceRef = useRef(reduceMotion);

  useEffect(() => {
    reduceRef.current = reduceMotion;
  }, [reduceMotion]);
  const pointer = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.35 });

  // Report whether the shader took over, so the caller can drop the CSS orbs.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.shader = active ? 'on' : 'off';
    return () => {
      delete root.dataset.shader;
    };
  }, [active]);

  // Runs once — the ref carries the current motion preference.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = (canvas.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: false }) ??
        canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    } catch {
      gl = null; // WebGL blocked or unavailable — the CSS orbs stay
    }

    if (!gl) return;


    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, 'u_res');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uPtr = gl.getUniformLocation(program, 'u_ptr');
    const uLight = gl.getUniformLocation(program, 'u_light');

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Soft gradients survive upscaling, so render well below device resolution
    // (hard-capped at 1100px wide) — the fragment cost drops with it.
    let width = 0;
    let height = 0;

    const resize = () => {
      const base = Math.min(window.devicePixelRatio || 1, 1.5) * 0.45;
      const scale = Math.min(base, 1100 / Math.max(window.innerWidth, 1));
      const nextW = Math.max(320, Math.floor(window.innerWidth * scale));
      const nextH = Math.max(240, Math.floor(window.innerHeight * scale));
      if (nextW === width && nextH === height) return;
      width = nextW;
      height = nextH;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uRes, width, height);
    };

    resize();
    // Some environments hand back a context that is already lost/blocklisted —
    // in that case keep the CSS orbs instead of showing a blank canvas.
    if (gl.isContextLost()) return;

    const onContextLost = (event: Event) => {
      event.preventDefault();
      running = false;
      cancelAnimationFrame(frame);
      setActive(false);
    };
    canvas.addEventListener('webglcontextlost', onContextLost);

    const onPointerMove = (event: PointerEvent) => {
      pointer.current.targetX = event.clientX / window.innerWidth;
      pointer.current.targetY = 1 - event.clientY / window.innerHeight;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    let frame = 0;
    let running = true;
    let last = performance.now();
    let elapsed = 0;

    let lastDraw = 0;
    const MIN_FRAME = 1000 / 45; // ambient motion is fine at 45fps

    const render = (now: number) => {
      if (running) frame = requestAnimationFrame(render);
      if (now - lastDraw < MIN_FRAME) return;
      lastDraw = now;

      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      elapsed += delta;

      // Ease the pointer so the ember trails rather than snaps.
      pointer.current.x += (pointer.current.targetX - pointer.current.x) * Math.min(1, delta * 3.2);
      pointer.current.y += (pointer.current.targetY - pointer.current.y) * Math.min(1, delta * 3.2);

      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uPtr, pointer.current.x, pointer.current.y);
      gl.uniform1f(uLight, document.documentElement.classList.contains('light') ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    // Reduced motion: draw one frame and stop — ambience without movement.
    running = !reduceRef.current;
    frame = requestAnimationFrame(render);
    setActive(true);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!reduceRef.current) {
        running = true;
        last = performance.now();
        frame = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibility);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
      setActive(false);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
      style={{ display: active ? 'block' : 'none' }}
    />
  );
}
