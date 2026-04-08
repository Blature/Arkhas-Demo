import Link from "next/link";
import { Car, MapPin, Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000a1a] pt-16 pb-8 border-t border-white/5 mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center">
                <Car className="text-[#001f3f]" size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-heading font-bold tracking-wider text-white">Arkhas</span>
            </Link>
            <p className="text-textMuted leading-relaxed">
              Drive with Ease, Return with Peace... Because Your Choice is Right! Premium car rentals tailored for your comfort in Muscat.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surfaceLight flex items-center justify-center text-white hover:bg-brand-gold hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surfaceLight flex items-center justify-center text-white hover:bg-brand-gold hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surfaceLight flex items-center justify-center text-white hover:bg-brand-gold hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Our Fleet', 'Rules & Policy', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : link === 'Our Fleet' ? '/cars' : link === 'Rules & Policy' ? '/rules' : '#'}
                    className="text-textMuted hover:text-brand-gold transition-colors inline-block transform hover:translate-x-1"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Insurance Details', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-textMuted hover:text-brand-gold transition-colors inline-block transform hover:translate-x-1">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-textMuted">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                <span>Al Khuwair, Muscat<br />Sultanate of Oman</span>
              </li>
              <li className="flex items-center gap-3 text-textMuted">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <span>+968 77563086</span>
              </li>
              <li className="flex items-center gap-3 text-textMuted">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <span>booking@arkhas.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-textMuted">
          <p>© {new Date().getFullYear()} Arkhas. All rights reserved. Made by Arkhas Team.</p>
          <div className="flex items-center gap-1">
            <span>Designed for</span>
            <span className="text-white font-medium">Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
