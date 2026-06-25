import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { Container, ButtonLink, IconLink } from '@/components/ui';
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

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* faint grid + single soft accent glow */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
        aria-hidden
      />

      <Container className="relative flex min-h-screen flex-col justify-center py-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          {/* Left — copy */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-mono text-xs uppercase tracking-[0.22em] text-brand-cyan"
            >
              {profile.role}
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl"
            >
              {profile.shortName}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="#projects" variant="primary">
                View work <ArrowDown className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={resumeHref} target="_blank" rel="noopener noreferrer" variant="secondary">
                Résumé <FileText className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex items-center gap-1"
            >
              {socials.map(({ label, href, icon }) => (
                <IconLink key={label} href={href} label={label} icon={icon} className="border-transparent hover:border-line" />
              ))}
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="order-first mx-auto md:order-none"
          >
            <div className="relative w-44 sm:w-56 md:w-full md:max-w-xs">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-purple/40 via-brand-pink/30 to-brand-cyan/40" aria-hidden />
              <img
                src={profilePic}
                alt={profile.name}
                width={320}
                height={320}
                className="relative aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.dl
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-bg px-5 py-5">
              <dt className="font-display text-2xl font-semibold text-fg sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
