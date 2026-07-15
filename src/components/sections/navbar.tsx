'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { SITE } from '@/lib/site';

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Financial Aid', href: '#financial-aid' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Scrolled past the top bar
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* TOP UTILITY BAR */}
      <div className="bg-void text-snow h-10 hidden lg:flex items-center justify-between px-8 text-xs font-semibold tracking-wide border-b border-gold/20">
        <a
          href={SITE.emailHref}
          className="flex items-center gap-2 hover:text-gold-light transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-gold" />
          <span>{SITE.email}</span>
        </a>

        <div className="flex items-center gap-6">
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
            <Phone className="w-3.5 h-3.5" />
            Call Admissions: <span className="text-snow">{SITE.phone}</span>
          </a>
          <a
            href="#apply"
            className="bg-crimson hover:bg-crimson-deep text-snow px-4 py-3 transition-colors uppercase tracking-widest flex items-center gap-2"
          >
            Apply Online
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <motion.nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-snow/95 backdrop-blur-xl border-b border-charcoal/10 shadow-premium'
            : 'bg-snow border-b border-charcoal/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="#top" className="flex-shrink-0 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-shield.png"
                alt="Interstate Connections LLC shield logo"
                className="h-12 md:h-16 w-auto drop-shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-extrabold text-void leading-tight tracking-tight uppercase">
                  Interstate
                </span>
                <span className="text-[10px] md:text-xs font-bold text-gold uppercase tracking-[0.2em] leading-none mt-0.5">
                  CDL Training Solutions
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-bold text-void uppercase tracking-wide hover:text-crimson transition-colors relative group"
                  >
                    {link.label}
                    {/* Hover indicator line */}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
                  </a>
                ))}
              </div>

              <a href="#apply">
                <Button className="bg-crimson hover:bg-crimson-deep text-snow shadow-premium font-bold rounded-lg px-8 py-6 text-base uppercase tracking-wider transition-all hover:scale-105 active:scale-95">
                  Start Career
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <a
                href={SITE.phoneHref}
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold"
                aria-label={`Call ${SITE.phone}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-void p-2 rounded-md hover:bg-charcoal/5"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-snow border-b border-charcoal/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-8 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-4 text-base font-bold uppercase tracking-wider text-void border-b border-charcoal/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}

                <div className="mt-6 pt-6 flex flex-col gap-4 px-4">
                  <a
                    href={SITE.emailHref}
                    className="flex items-center gap-3 bg-charcoal/5 p-4 rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-bold text-void text-sm">Email Admissions</p>
                      <p className="text-xs text-charcoal font-medium">{SITE.email}</p>
                    </div>
                  </a>

                  <a
                    href={SITE.phoneHref}
                    className="flex items-center justify-center gap-2 text-void font-extrabold bg-gold/10 py-4 rounded-xl"
                  >
                    <Phone className="w-5 h-5 text-gold" />
                    {SITE.phone}
                  </a>

                  <a href="#apply" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-crimson hover:bg-crimson-deep text-snow shadow-premium rounded-xl py-7 text-lg font-bold uppercase tracking-wider">
                      Apply Online
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
