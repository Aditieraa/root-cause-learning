import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GitBranch, Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <div className="hidden lg:flex flex-1 items-center justify-center" style={{ background: 'var(--gradient-hero)' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-center px-12">
          <GitBranch className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="font-display text-4xl font-bold text-primary-foreground mb-4">Join Rootly</h2>
          <p className="text-primary-foreground/80 text-lg">Discover why you struggle and fix it from the root.</p>
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <Link to="/" className="font-display text-2xl font-bold text-primary flex items-center gap-2 mb-8 lg:hidden">
            <GitBranch className="h-6 w-6" /> Rootly
          </Link>
          <h1 className="font-display text-3xl font-bold mb-2">Create account</h1>
          <p className="text-muted-foreground mb-8">Start your diagnostic journey today</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Input type={showPassword ? 'text' : 'password'} placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school">School (6-12)</SelectItem>
                    <SelectItem value="competitive">JEE / NEET</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Board / Exam</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cbse">CBSE</SelectItem>
                    <SelectItem value="icse">ICSE</SelectItem>
                    <SelectItem value="state">State Board</SelectItem>
                    <SelectItem value="jee">JEE</SelectItem>
                    <SelectItem value="neet">NEET</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Link to="/dashboard">
              <Button className="w-full btn-hero !rounded-lg mt-2" type="button">Create Account</Button>
            </Link>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
