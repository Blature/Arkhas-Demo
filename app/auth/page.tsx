"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Mail, Lock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-navy/60 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] bg-brand-gold/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="glass-panel p-8 sm:p-10 rounded-[2rem] shadow-2xl shadow-brand-navy/50 border border-white/10">
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold rounded-2xl mb-6 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <Car className="text-[#001f3f]" size={36} strokeWidth={2.5} />
            </Link>
            <h2 className="text-3xl font-heading font-bold text-white tracking-tight">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="mt-2 text-sm text-textMuted">
              {isLogin ? "Sign in to manage your bookings." : "Join Arkhas for an exclusive experience."}
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={18} />
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-surfaceLight/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-surfaceLight/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">Password</label>
                {isLogin && (
                  <a href="#" className="text-xs font-medium text-brand-gold hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-surfaceLight/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full gap-2 mt-4">
              {isLogin ? "Sign In" : "Sign Up"} <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 text-center bg-surfaceLight/30 rounded-xl p-4">
            <p className="text-sm text-textMuted">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-brand-gold hover:underline ml-1"
              >
                {isLogin ? "Create one now" : "Sign in instead"}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
