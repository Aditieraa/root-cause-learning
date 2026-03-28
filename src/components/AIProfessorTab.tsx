import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Image, FileText, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { ChatMessage } from '@/data/mockData';
import professorAvatar from '@/assets/ai-professor.png';

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'ai',
    content: "Hello! I'm Professor Albus, your AI learning companion. I've reviewed your dashboard — I can see you're struggling with Algebra because of weak Division fundamentals. Would you like me to start from there, or do you have a specific question?",
    timestamp: new Date(),
  },
];

export default function AIProfessorTab() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<string>('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: getAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-6 h-[calc(100vh-12rem)]">
      {/* Sidebar config */}
      <div className="card-elevated p-5 space-y-5 h-fit">
        <div className="flex items-center gap-3">
          <img src={professorAvatar} alt="AI Professor" className="w-12 h-12 rounded-full bg-muted" />
          <div>
            <h3 className="font-display font-semibold text-sm">Professor Albus</h3>
            <p className="text-xs text-muted-foreground">AI Learning Companion</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Mode</label>
            <Select value={mode} onValueChange={setMode}>
              <SelectTrigger className="text-sm"><SelectValue placeholder="Choose mode" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="school">School Learning</SelectItem>
                <SelectItem value="competitive">Competitive Prep</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Subject</label>
            <Select>
              <SelectTrigger className="text-sm"><SelectValue placeholder="Select subject" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Language</label>
            <Select>
              <SelectTrigger className="text-sm"><SelectValue placeholder="English" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="mr">Marathi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-lg bg-primary/5 p-3">
          <div className="flex items-center gap-2 text-xs font-medium text-primary mb-1">
            <Sparkles className="h-3.5 w-3.5" /> Using Your Data
          </div>
          <p className="text-xs text-muted-foreground">
            AI uses your dashboard data to personalize teaching from your root gaps.
          </p>
        </div>
      </div>

      {/* Chat */}
      <div className="card-elevated flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
              >
                {msg.role === 'ai' && (
                  <img src={professorAvatar} alt="" className="w-8 h-8 rounded-full bg-muted shrink-0" />
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-md'
                      : 'bg-muted text-foreground rounded-bl-md'
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground">
              <Image className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground">
              <FileText className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground">
              <Mic className="h-4 w-4" />
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask Professor Albus anything..."
              className="flex-1"
            />
            <Button onClick={sendMessage} size="icon" className="shrink-0 bg-primary text-primary-foreground">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getAIResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('division') || lower.includes('divide'))
    return "Great question! Division is fundamentally about splitting into equal groups. Let's start with a simple example: 12 ÷ 3 means 'how many groups of 3 fit into 12?' The answer is 4. Think of it as the inverse of multiplication — if 3 × 4 = 12, then 12 ÷ 3 = 4. Want me to walk through long division next?";
  if (lower.includes('fraction'))
    return "Fractions represent parts of a whole. But here's the key insight your root cause analysis shows: you need solid division skills first. A fraction like 3/4 literally means 3 divided by 4. Once division clicks, fractions become much more intuitive. Shall I show how they connect?";
  if (lower.includes('algebra'))
    return "Algebra is about finding unknowns. But your diagnostic shows the real blocker is further down — in Division and Fractions. I'd recommend we strengthen those first, then algebra will feel much more natural. Want to start from the root?";
  return "That's a great question! Based on your learning profile, let me connect this to your current path. Your main focus should be strengthening Division fundamentals first, as it's the root cause of several downstream gaps. Would you like me to explain this concept step by step?";
}
