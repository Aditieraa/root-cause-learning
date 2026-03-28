import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GitBranch, LayoutDashboard, Sparkles, ClipboardCheck, LogOut } from 'lucide-react';
import DashboardTab from '@/components/DashboardTab';
import AIProfessorTab from '@/components/AIProfessorTab';
import TestPracticeTab from '@/components/TestPracticeTab';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'professor', label: 'AI Professor', icon: Sparkles },
  { id: 'test', label: 'Test / Practice', icon: ClipboardCheck },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabId>('dashboard');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          <Link to="/" className="font-display text-xl font-bold text-primary flex items-center gap-2">
            <GitBranch className="h-5 w-5" /> Rootly
          </Link>
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <LogOut className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'professor' && <AIProfessorTab />}
          {activeTab === 'test' && <TestPracticeTab />}
        </motion.div>
      </main>
    </div>
  );
}
