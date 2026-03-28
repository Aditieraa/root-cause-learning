import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GitBranch, Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left */}
      <div className="hidden lg:flex flex-1 items-center justify-center" style={{ background: 'var(--gradient-hero)' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center px-12"
        >
          <GitBranch className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="font-display text-4xl font-bold text-primary-foreground mb-4">Welcome back</h2>
          <p className="text-primary-foreground/80 text-lg">Continue your learning journey where you left off.</p>
        </motion.div>
      </div>

      {/* Right */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Link to="/" className="font-display text-2xl font-bold text-primary flex items-center gap-2 mb-8 lg:hidden">
            <GitBranch className="h-6 w-6" /> Rootly
          </Link>
          <h1 className="font-display text-3xl font-bold mb-2">Log in</h1>
          <p className="text-muted-foreground mb-8">Enter your credentials to access your dashboard</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Link to="/dashboard">
              <Button className="w-full btn-hero !rounded-lg mt-2" type="button">Log in</Button>
            </Link>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary font-medium hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
