import type { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { ArrowDown, ArrowUpRight, Award, Command, FileText, Sparkles } from 'lucide-react';
import { ButtonLink, Container, CountUp, IconLink, Typewriter } from '@/components/ui';
import { openPalette } from '@/lib/agent';
import { profile, socials, stats } from '@/data/site';
import profilePic from '@/assets/VSV-portfolio-pp.jpeg';

// Prefer an external (update-in-place) résumé URL; fall back to the bundled PDF.
const resumeHref = profile.resumeUrl || `${import.meta.env.BASE_URL}${profile.resumeFile}`;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/** Small frosted chip that floats around the portrait. */
const orbitChips = [
  { label: 'agentic workflows', className: 'left-[-18%] top-[12%]', delay: '0s' },
  { label: 'RAG · MCP tools', className: 'right-[-16%] top-[34%]', delay: '-2.4s' },
  { label: 'Restate · Kafka', className: 'left-[-14%] bottom-[18%]', delay: '-4.2s' },
  { label: 'Next.js · Angular', className: 'right-[-10%] bottom-[6%]', delay: '-6s' },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  // Soft spotlight that follows the pointer across the hero.
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(30);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${smoothX}% ${smoothY}%, rgba(168,85,247,0.16), transparent 65%)`;

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section id="home" className="relative isolate overflow-hidden" onMouseMove={handlePointerMove}>
      {/* Aurora backdrop + fading grid */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div
          className="animate-aurora absolute -top-40 -left-24 h-[38rem] w-[38rem] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', opacity: 0.32 }}
        />
        <div
          className="animate-aurora absolute -right-20 top-10 h-[32rem] w-[32rem] rounded-full blur-[130px] [animation-delay:-7s]"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', opacity: 0.26 }}
        />
        <div
          className="animate-aurora absolute -bottom-32 left-1/3 h-[30rem] w-[30rem] rounded-full blur-[140px] [animation-delay:-12s]"
          style={{ background: 'radial-gradient(circle, #ff0080 0%, transparent 70%)', opacity: 0.2 }}
        />
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-70" />
        {!reduceMotion && <motion.div className="absolute inset-0" style={{ background: spotlight }} />}
      </div>

      <Container className="relative flex min-h-screen flex-col justify-center pt-32 pb-16">
        <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr]">
          {/* Left — copy */}
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lime opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-lime" />
                </span>
                {profile.availability}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted">
                <Award className="h-3.5 w-3.5 text-brand-cyan" />
                {profile.recognition}
              </span>
            </motion.div>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-brand-cyan"
            >
              {profile.role}
            </motion.p>

            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 font-display text-4xl font-semibold leading-[1.03] tracking-tight text-fg sm:text-5xl lg:text-6xl"
            >
              {profile.shortName}
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-2xl font-display text-xl leading-snug tracking-tight text-muted sm:text-2xl"
            >
              I build{' '}
              <Typewriter phrases={[...profile.heroPhrases]} className="text-gradient-animated font-semibold" />
            </motion.p>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-base leading-relaxed text-muted"
            >
              {profile.tagline}
            </motion.p>

            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#agent" variant="primary">
                Ask my AI console <Sparkles className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#impact" variant="secondary">
                See the numbers <ArrowDown className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={resumeHref} target="_blank" rel="noopener noreferrer" variant="secondary">
                Résumé <FileText className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </motion.div>

            <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show" className="mt-7 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                {socials.map(({ label, href, icon }) => (
                  <IconLink key={label} href={href} label={label} icon={icon} className="border-transparent hover:border-line" />
                ))}
              </div>
              <button
                type="button"
                onClick={openPalette}
                className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 font-mono text-[11px] text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                <Command className="h-3.5 w-3.5" />
                press
                <kbd className="rounded border border-line px-1.5 py-0.5 text-[10px] text-fg">⌘K</kbd>
                to explore
              </button>
            </motion.div>
          </div>

          {/* Right — portrait with orbiting capability chips */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" className="order-first mx-auto md:order-none">
            <div className="relative w-44 sm:w-56 md:w-full md:max-w-xs">
              {/* rotating conic ring */}
              <div
                className="animate-spin-slow absolute -inset-[3px] rounded-[1.15rem] opacity-70"
                style={{
                  background: 'conic-gradient(from 0deg, #a855f7, #22d3ee, #ff0080, #a855f7)',
                  maskImage: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
                  WebkitMaskImage: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
                }}
                aria-hidden
              />
              <img
                src={profilePic}
                alt={profile.name}
                width={320}
                height={320}
                className="relative aspect-square w-full rounded-2xl border border-line object-cover"
              />

              {orbitChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`animate-float-slow pointer-events-none absolute hidden rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-[10px] whitespace-nowrap text-muted backdrop-blur-md md:block ${chip.className}`}
                  style={{ animationDelay: chip.delay }}
                  aria-hidden
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.dl
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-5 py-5">
              <dt className="font-display text-2xl font-semibold text-fg sm:text-3xl">
                {stat.countTo !== undefined ? (
                  <CountUp to={stat.countTo} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </dt>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">{stat.label}</dd>
              {stat.note && <dd className="mt-0.5 font-mono text-[10px] text-faint/70">{stat.note}</dd>}
            </div>
          ))}
        </motion.dl>

        {/* Capability marquee */}
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]" aria-hidden>
          <div className="animate-marquee flex w-max">
            {[...profile.keywords, ...profile.keywords].map((keyword, index) => (
              <span
                key={`${keyword}-${index}`}
                className="mr-3 rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] whitespace-nowrap text-muted"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
