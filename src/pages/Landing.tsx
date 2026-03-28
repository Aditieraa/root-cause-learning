import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, GitBranch, Route, Sparkles, ArrowRight, Users, BarChart3, Zap, ChevronDown, BookOpen, Target, Lightbulb } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

const features = [
  {
    icon: Brain,
    title: 'Root Cause Diagnosis',
    description: 'Traces why you struggle — not just what you got wrong. Finds the deepest missing prerequisite.',
    gradient: 'from-primary/20 to-success/20',
  },
  {
    icon: GitBranch,
    title: 'Concept Dependency Graph',
    description: 'Visual map of how concepts connect. See exactly which foundations are cracking.',
    gradient: 'from-accent/20 to-warning/20',
  },
  {
    icon: Route,
    title: 'Personalized Learning Path',
    description: 'A step-by-step recovery plan built from your root gaps, not generic recommendations.',
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    icon: Sparkles,
    title: 'AI Professor',
    description: 'An intelligent tutor that teaches from your weakest roots upward, adapting to your level.',
    gradient: 'from-accent/20 to-primary/20',
  },
];

const stats = [
  { value: '10K+', label: 'Students', icon: Users },
  { value: '95%', label: 'Gap Detection', icon: BarChart3 },
  { value: '3x', label: 'Faster Recovery', icon: Zap },
];

const steps = [
  { icon: BookOpen, title: 'Take a Quick Test', description: 'Answer questions or upload your work' },
  { icon: Target, title: 'Get Diagnosed', description: 'We find the real root of your struggles' },
  { icon: Lightbulb, title: 'Learn Smarter', description: 'Follow your personalized recovery path' },
];

const floatingVariants = {
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />

      {/* Nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="font-display text-2xl font-bold text-primary flex items-center gap-2">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <GitBranch className="h-6 w-6" />
            </motion.div>
            Rootly
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Log in
            </Link>
            <Link to="/signup">
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="btn-hero text-sm !px-5 !py-2.5 inline-block cursor-pointer"
              >
                Get Started
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section style={{ opacity: heroOpacity, scale: heroScale }} className="relative pt-36 pb-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              AI-Powered Learning Diagnosis
            </motion.span>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                Find the{' '}
                <span className="text-gradient relative">
                  root
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  />
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block text-muted-foreground"
              >
                of why you struggle
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Rootly doesn't just tell you what you got wrong. It traces the chain of missing concepts
              back to the very foundation — and builds your way back up.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/signup">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px hsla(152, 45%, 28%, 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-hero inline-flex items-center gap-2 justify-center cursor-pointer text-lg"
                >
                  Start Diagnosing <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
              <Link to="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-accent inline-flex items-center gap-2 justify-center cursor-pointer"
                >
                  View Demo Dashboard
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-24 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.15 }}
                className="text-center group"
              >
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="inline-block">
                  <stat.icon className="h-5 w-5 mx-auto mb-2 text-accent" />
                </motion.div>
                <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex justify-center mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-muted-foreground/50"
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How it works */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">Three steps to clarity</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${i * 0.5}s` }}
                  className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5"
                >
                  <step.icon className="h-9 w-9 text-primary" />
                </motion.div>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-widest">Powered by AI</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">How Rootly Works</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A diagnostic engine that thinks like the best teacher you've ever had.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-elevated)' }}
                  className={`card-elevated p-8 h-full bg-gradient-to-br ${feature.gradient} border border-border/60 backdrop-blur-sm`}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-5"
                  >
                    <feature.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden card-elevated p-12 md:p-20 text-center max-w-4xl mx-auto"
            style={{ background: 'var(--gradient-hero)' }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground/5 translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-5">
                Stop guessing. Start understanding.
              </h2>
              <p className="text-primary-foreground/80 mb-10 text-lg max-w-xl mx-auto">
                Take a quick diagnostic test and uncover the real reason behind your learning gaps.
              </p>
              <Link to="/signup">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-accent inline-flex items-center gap-2 text-lg cursor-pointer"
                >
                  Get Started Free <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold text-primary flex items-center gap-2">
            <GitBranch className="h-5 w-5" /> Rootly
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Rootly. Built for learners who want to understand why.</p>
        </div>
      </footer>
    </div>
  );
}
