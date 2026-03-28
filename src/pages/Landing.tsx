import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, GitBranch, Route, Sparkles, ArrowRight, Users, BarChart3, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-roots.jpg';

const features = [
  {
    icon: Brain,
    title: 'Root Cause Diagnosis',
    description: 'Traces why you struggle — not just what you got wrong. Finds the deepest missing prerequisite.',
  },
  {
    icon: GitBranch,
    title: 'Concept Dependency Graph',
    description: 'Visual map of how concepts connect. See exactly which foundations are cracking.',
  },
  {
    icon: Route,
    title: 'Personalized Learning Path',
    description: 'A step-by-step recovery plan built from your root gaps, not generic recommendations.',
  },
  {
    icon: Sparkles,
    title: 'AI Professor',
    description: 'An intelligent tutor that teaches from your weakest roots upward, adapting to your level.',
  },
];

const stats = [
  { value: '10K+', label: 'Students', icon: Users },
  { value: '95%', label: 'Gap Detection', icon: BarChart3 },
  { value: '3x', label: 'Faster Recovery', icon: Zap },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="font-display text-2xl font-bold text-primary flex items-center gap-2">
            <GitBranch className="h-6 w-6" />
            Rootly
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Log in
            </Link>
            <Link to="/signup" className="btn-hero text-sm !px-5 !py-2.5 inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              AI-Powered Learning Diagnosis
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              Find the <span className="text-gradient">root</span> of why you struggle
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Rootly doesn't just tell you what you got wrong. It traces the chain of missing concepts
              back to the very foundation — and builds your way back up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="btn-hero inline-flex items-center gap-2 justify-center">
                Start Diagnosing <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/dashboard" className="btn-accent inline-flex items-center gap-2 justify-center">
                View Demo Dashboard
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-5 w-5 mx-auto mb-2 text-accent" />
                <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4">How Rootly Works</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A diagnostic engine that thinks like the best teacher you've ever had.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-elevated p-12 md:p-16 text-center max-w-3xl mx-auto"
            style={{ background: 'var(--gradient-hero)' }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Stop guessing. Start understanding.
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Take a quick diagnostic test and uncover the real reason behind your learning gaps.
            </p>
            <Link to="/signup" className="btn-accent inline-flex items-center gap-2 text-lg">
              Get Started Free <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
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
