import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Play, RotateCcw, Upload, Mic, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testQuestions } from '@/data/mockData';

export default function TestPracticeTab() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = testQuestions[currentQ];

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === question.correctAnswer) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= testQuestions.length) {
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const restart = () => {
    setStarted(false);
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card-elevated p-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-2">Diagnostic Test</h2>
          <p className="text-muted-foreground mb-8">Take a quick assessment to identify your learning gaps. You can also upload content.</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <button className="card-glass p-4 hover:bg-muted/50 transition-colors text-center">
              <Play className="h-6 w-6 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">Quick Quiz</span>
              <p className="text-xs text-muted-foreground mt-1">5 diagnostic questions</p>
            </button>
            <button className="card-glass p-4 hover:bg-muted/50 transition-colors text-center">
              <Upload className="h-6 w-6 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">Upload PDF</span>
              <p className="text-xs text-muted-foreground mt-1">Analyze your work</p>
            </button>
            <button className="card-glass p-4 hover:bg-muted/50 transition-colors text-center">
              <Mic className="h-6 w-6 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">Voice Input</span>
              <p className="text-xs text-muted-foreground mt-1">Speak your answers</p>
            </button>
          </div>

          <Button onClick={() => setStarted(true)} className="btn-hero">
            <Play className="h-4 w-4 mr-2" /> Start Quick Quiz
          </Button>
        </motion.div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-elevated p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span className="font-display text-3xl font-bold text-primary">{Math.round((score / testQuestions.length) * 100)}%</span>
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">Test Complete!</h2>
          <p className="text-muted-foreground mb-2">
            You got {score} out of {testQuestions.length} correct.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Your results have been analyzed. Check the Dashboard tab for updated root cause diagnosis and learning path.
          </p>
          <div className="flex gap-3 justify-center">
            <Button onClick={restart} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" /> Retry
            </Button>
            <Button className="btn-hero !py-2 !px-5 !text-sm">
              <FileText className="h-4 w-4 mr-2" /> View Results
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground">
          Question {currentQ + 1} of {testQuestions.length}
        </span>
        <span className="text-xs px-2 py-1 rounded bg-muted font-medium">{question.concept} · {question.difficulty}</span>
      </div>

      <div className="w-full h-1.5 rounded-full bg-muted mb-6 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQ + 1) / testQuestions.length) * 100}%` }}
        />
      </div>

      <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card-elevated p-6">
        <h3 className="font-display text-xl font-semibold mb-6">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let optionClass = 'card-glass p-4 cursor-pointer transition-all hover:bg-muted/50';
            if (answered) {
              if (idx === question.correctAnswer) optionClass = 'border border-success bg-success/10 p-4 rounded-xl';
              else if (idx === selected) optionClass = 'border border-danger bg-danger/10 p-4 rounded-xl';
              else optionClass = 'card-glass p-4 opacity-50';
            } else if (idx === selected) {
              optionClass = 'card-glass p-4 ring-2 ring-primary';
            }

            return (
              <button key={idx} onClick={() => handleAnswer(idx)} className={`${optionClass} w-full text-left flex items-center gap-3`}>
                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm font-medium">{opt}</span>
                {answered && idx === question.correctAnswer && <CheckCircle2 className="h-5 w-5 text-success ml-auto" />}
                {answered && idx === selected && idx !== question.correctAnswer && <XCircle className="h-5 w-5 text-danger ml-auto" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {answered && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex justify-end">
              <Button onClick={nextQuestion} className="btn-hero !py-2 !px-5 !text-sm">
                {currentQ + 1 >= testQuestions.length ? 'See Results' : 'Next Question →'}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
