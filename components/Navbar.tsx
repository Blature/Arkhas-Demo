"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Car, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/cars" },
    { name: "Rules & Policy", href: "/rules" },
    { name: "Login", href: "/auth" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass-panel py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Car className="text-[#001f3f]" size={24} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-heading font-bold tracking-wider text-white">Arkhas</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-gold ${pathname === link.href ? "text-brand-gold" : "text-gray-300"}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/96877563086"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-5 text-sm gap-2"
            >
              <Phone size={16} />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel border-t-0 py-6 px-4 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium p-3 rounded-lg flex items-center ${pathname === link.href ? "bg-brand-navy border border-brand-gold/30 text-brand-gold" : "text-gray-300 hover:bg-surfaceLight"}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/96877563086"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full"
            >
              Contact Support
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
