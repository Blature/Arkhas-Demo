"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CARS } from "@/components/data";
import CarCard from "@/components/CarCard";
import { ShieldCheck, Clock, CheckCircle, ChevronRight } from "lucide-react";

export default function Home() {
  const featuredCars = CARS.slice(0, 3); // Preview grid

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10">
        {/* Background Graphic */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-navy/40 blur-[120px] rounded-full mix-blend-screen opacity-50" />
          <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-brand-gold/10 blur-[100px] rounded-full mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              Premium Car Rental in Muscat
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Drive with <span className="text-brand-gold">Ease</span>, <br/>Return with <span className="text-brand-gold">Peace</span>...
            </h1>
            <p className="text-xl text-textMuted border-l-4 border-brand-gold pl-4 italic">
              Because Your Choice is Right!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/cars" className="btn-primary">
                Explore Fleet <ChevronRight size={18} className="ml-1" />
              </Link>
              <a href="https://wa.me/96877563086" className="btn-secondary">
                Contact via WhatsApp
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[60vh] w-full"
          >
            {/* The main hero car image */}
            <Image 
              src="/assets/cars/photo_41_2026-04-08_15-56-29.jpg" 
              alt="Luxury Car Showcase" 
              fill 
              className="object-cover rounded-3xl shadow-2xl shadow-brand-navy/60 z-10 block"
              priority
            />
            {/* Decorative background blocks */}
            <div className="absolute -inset-4 border border-brand-gold/20 rounded-3xl z-0 transform rotate-3" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-navy to-brand-gold/20 rounded-3xl z-0 transform -rotate-3 opacity-30" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Why Choose Arkhas?</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: CheckCircle, title: "Ease of Booking", desc: "No complex paperwork. Reserve your car instantly via simple steps or direct WhatsApp." },
            { icon: Clock, title: "24/7 Support", desc: "Our committed customer service team is always on standby to assist you at any time." },
            { icon: ShieldCheck, title: "Comprehensive Insurance", desc: "Drive confidently with detailed CDW options to protect you on all roads." }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-8 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(0,31,63,0.5)]">
                <feat.icon size={32} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-textMuted leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Cars Preview */}
      <section className="container mx-auto px-4 md:px-8 pt-10">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Featured Fleet</h2>
            <p className="text-textMuted">Explore our most popular vehicles.</p>
          </div>
          <Link href="/cars" className="hidden border-b border-brand-gold pb-1 md:flex items-center text-brand-gold hover:text-yellow-400 transition-colors font-medium">
            View All Cars <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link href="/cars" className="btn-secondary w-full">
            View All Cars
          </Link>
        </div>
      </section>

      {/* Rules Overview */}
      <section className="container mx-auto px-4 md:px-8 pt-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-brand-navy/40 border border-brand-navy rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* subtle background styling */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Simple <span className="text-brand-gold">Rules</span>, Clear <span className="text-brand-gold">Journey</span>.</h2>
              <p className="text-textMuted mb-6 leading-relaxed">
                We believe in complete transparency. Our rules are straightforward so you can focus on the road ahead.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-textDefault">
                  <CheckCircle size={20} className="text-[#25D366]" />
                  200km daily mileage limit.
                </li>
                <li className="flex items-center gap-3 text-textDefault">
                  <CheckCircle size={20} className="text-[#25D366]" />
                  Same-to-Same Fuel Policy.
                </li>
                <li className="flex items-center gap-3 text-textDefault">
                  <CheckCircle size={20} className="text-[#25D366]" />
                  Valid ID & License Required.
                </li>
              </ul>
              <Link href="/rules" className="btn-secondary">
                Read Full Policy
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-brand-gold mb-2">19+</span>
                <span className="text-sm text-textMuted">Minimum Age</span>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center mt-8">
                <span className="text-4xl font-bold text-brand-gold mb-2">30d</span>
                <span className="text-sm text-textMuted">Deposit Refund</span>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center -mt-8">
                <span className="text-4xl font-bold text-brand-gold mb-2">24/7</span>
                <span className="text-sm text-textMuted">Support</span>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-brand-gold mb-2">CDW</span>
                <span className="text-sm text-textMuted">Insurance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
