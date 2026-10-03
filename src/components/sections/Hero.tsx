import type { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, Award, Command, FileText, Sparkles } from 'lucide-react';
import { ButtonLink, Container, CountUp, IconLink, SplitWords, Typewriter } from '@/components/ui';
import { openPalette } from '@/lib/agent';
import { useVelocitySkew } from '@/lib/useVelocitySkew';
import { resumeHref } from '@/lib/resume';
import { profile, socials, stats } from '@/data/site';
import profilePic from '@/assets/VSV-portfolio-pp.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.35 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/** Capability chips floating around the portrait. */
const orbitChips = [
  { label: 'micro-frontends', className: 'left-[-20%] top-[10%]', delay: '0s' },
  { label: 'design systems', className: 'right-[-18%] top-[32%]', delay: '-2.4s' },
  { label: 'canvas editors', className: 'left-[-16%] bottom-[20%]', delay: '-4.2s' },
  { label: 'web performance', className: 'right-[-12%] bottom-[4%]', delay: '-6s' },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const skewY = useVelocitySkew(2.4);

  // Parallax: the copy drifts up and fades as the page scrolls away.
  const contentY = useTransform(scrollY, [0, 700], [0, 130]);
  const contentOpacity = useTransform(scrollY, [0, 520], [1, 0.1]);
  const portraitY = useTransform(scrollY, [0, 700], [0, -60]);

  // Pointer spotlight.
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(30);
  const smoothX = useSpring(mouseX, { stiffness: 55, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 55, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${smoothX}% ${smoothY}%, rgba(200,246,93,0.10), rgba(124,92,255,0.10) 40%, transparent 68%)`;

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section id="home" className="relative isolate overflow-hidden" onMouseMove={handlePointerMove}>
      {!reduceMotion && (
        <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ background: spotlight }} aria-hidden />
      )}

      <Container className="relative flex min-h-screen flex-col justify-center pt-32 pb-16">
        {/* Ticker band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 overflow-hidden border-y border-line/70 py-2.5"
          aria-hidden
        >
          <motion.div className="animate-marquee flex w-max items-center" style={reduceMotion ? undefined : { skewY }}>
            {[...profile.keywords, ...profile.keywords].map((keyword, index) => (
              <span key={`${keyword}-${index}`} className="flex items-center">
                <span className="px-4 font-mono text-[11px] whitespace-nowrap text-muted">{keyword}</span>
                <span className="text-brand-lime/70">✦</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid items-center gap-14 md:grid-cols-[1.35fr_1fr]">
          {/* Left — copy */}
          <motion.div style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lime opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-lime" />
                </span>
                {profile.availability}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted backdrop-blur">
                <Award className="h-3.5 w-3.5 text-brand-lime" />
                {profile.recognition}
              </span>
            </motion.div>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 font-mono text-[11px] uppercase tracking-[0.28em] text-brand-cyan"
            >
              {profile.role}
            </motion.p>

            <h1 className="mt-5 font-display text-[3.4rem] leading-[0.92] font-bold tracking-[-0.04em] text-fg sm:text-7xl lg:text-[5.6rem]">
              <SplitWords text="Santhosh" immediate delay={0.45} className="block" />
              <span className="block">
                <SplitWords
                  text="Veerannapet"
                  immediate
                  delay={0.6}
                  className="text-gradient-animated"
                />
              </span>
            </h1>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7 max-w-2xl font-display text-xl leading-snug tracking-tight text-muted sm:text-2xl"
            >
              I build{' '}
              <Typewriter phrases={[...profile.heroPhrases]} className="font-serif text-2xl font-normal italic text-fg sm:text-3xl" />
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

            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#agent" variant="primary" data-cursor data-cursor-label="ask" data-magnetic>
                Ask my AI console <Sparkles className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#craft" variant="secondary" data-cursor data-cursor-label="demos">
                Frontend craft <ArrowDown className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={resumeHref} target="_blank" rel="noopener noreferrer" variant="ghost">
                Résumé <FileText className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
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
          </motion.div>

          {/* Right — portrait */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={reduceMotion ? undefined : { y: portraitY }}
            className="order-first mx-auto md:order-none"
          >
            <div className="relative w-48 sm:w-60 md:w-full md:max-w-xs">
              <div
                className="animate-spin-slow absolute -inset-[3px] rounded-[1.4rem]"
                style={{
                  background: 'conic-gradient(from 0deg, #7c5cff, #35e0ff, #c8f65d, #ff4d9d, #7c5cff)',
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
                className="relative aspect-square w-full rounded-[1.3rem] border border-line object-cover grayscale-[18%] transition-[filter] duration-700 hover:grayscale-0"
              />

              {orbitChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`animate-float-slow glass pointer-events-none absolute hidden rounded-full border border-line px-3 py-1 font-mono text-[10px] whitespace-nowrap text-muted md:block ${chip.className}`}
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
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="group bg-bg/70 px-5 py-5 backdrop-blur transition-colors hover:bg-surface">
              <dt className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                {stat.countTo !== undefined ? (
                  <CountUp to={stat.countTo} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </dt>
              <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{stat.label}</dd>
              {stat.note && <dd className="mt-1 font-mono text-[10px] text-brand-lime/80">{stat.note}</dd>}
            </div>
          ))}
        </motion.dl>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-faint"
          aria-hidden
        >
          <span className="animate-scroll-cue">↓</span> scroll
        </motion.div>
      </Container>
    </section>
  );
}
