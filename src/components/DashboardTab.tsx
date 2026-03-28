import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { concepts, learningPath, performanceData } from '@/data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ConceptGraph from './ConceptGraph';

const fadeIn = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

export default function DashboardTab() {
  const weakConcepts = concepts.filter((c) => c.status === 'weak' || c.status === 'missing');

  return (
    <div className="space-y-6">
      {/* Root Cause */}
      <motion.div {...fadeIn} className="card-elevated p-6 border-l-4 border-l-danger">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-danger mt-0.5 shrink-0" />
          <div>
            <h3 className="font-display text-lg font-semibold mb-1">Root Cause Detected</h3>
            <p className="text-muted-foreground">
              You're struggling with <strong className="text-foreground">Algebra</strong> because of weak{' '}
              <strong className="text-foreground">Fractions</strong>, which stems from missing{' '}
              <strong className="text-foreground">Division</strong> fundamentals.
            </p>
            <div className="flex items-center gap-2 mt-3 text-sm font-medium">
              <span className="px-2 py-1 rounded bg-danger/10 text-danger">Division</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="px-2 py-1 rounded bg-warning/10 text-warning">Fractions</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="px-2 py-1 rounded bg-warning/10 text-warning">Algebra</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Weak Areas + Progress */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="card-elevated p-6">
          <h3 className="font-display text-lg font-semibold mb-4">Weak Areas</h3>
          <div className="space-y-3">
            {weakConcepts.map((c) => (
              <div key={c.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${c.status === 'missing' ? 'bg-danger' : 'bg-warning'}`} />
                  <span className="font-medium text-sm">{c.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${c.status === 'missing' ? 'bg-danger' : 'bg-warning'}`}
                      style={{ width: `${c.accuracy}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-8">{c.accuracy}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.15 }} className="card-elevated p-6">
          <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" /> Progress
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 15%, 88%)" />
              <XAxis dataKey="week" fontSize={12} stroke="hsl(150, 10%, 45%)" />
              <YAxis fontSize={12} stroke="hsl(150, 10%, 45%)" />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="hsl(152, 45%, 28%)" strokeWidth={2} dot={{ fill: 'hsl(152, 45%, 28%)' }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Concept Graph */}
      <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
        <ConceptGraph />
      </motion.div>

      {/* Learning Path */}
      <motion.div {...fadeIn} transition={{ delay: 0.25 }} className="card-elevated p-6">
        <h3 className="font-display text-lg font-semibold mb-4">Your Learning Path</h3>
        <div className="space-y-4">
          {learningPath.map((step) => (
            <div key={step.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                {step.status === 'completed' ? (
                  <CheckCircle2 className="h-6 w-6 text-success" />
                ) : step.status === 'current' ? (
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{step.step}</span>
                  </div>
                ) : (
                  <Circle className="h-6 w-6 text-muted-foreground" />
                )}
                {step.step < learningPath.length && <div className="w-0.5 h-full bg-border mt-1" />}
              </div>
              <div className={`pb-4 ${step.status === 'current' ? '' : 'opacity-60'}`}>
                <h4 className="font-semibold text-sm">{step.concept}</h4>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
