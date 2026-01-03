"use client";
import Link from 'next/link';
import { useMode } from '@/context/ModeContext';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Code2, Server, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import { getThemeStyles } from '@/lib/theme';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { mode, toggleMode, theme, appearance, toggleAppearance } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  const themeClasses = getThemeStyles(theme);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const focusRing = clsx(
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    themeClasses.focusRing,
    appearance === 'light' ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-slate-950"
  );

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={clsx(
      "fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-300",
      appearance === 'light' ? "bg-white/70 border-slate-200" : "bg-slate-950/80 border-slate-800/60"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
              <Link 
                key={link.name} 
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  focusRing,
                  isActive
                    ? clsx(themeClasses.accentText, "font-semibold")
                    : appearance === 'light'
                      ? "text-slate-600 hover:text-slate-900"
                      : "text-slate-300 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            )})}

          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* The Toggle Switch */}
            <button
              type="button"
              onClick={() => toggleMode(mode === 'dev' ? 'it' : 'dev')}
              className={clsx(
                'relative flex items-center w-28 sm:w-32 h-10 rounded-full cursor-pointer p-1 transition-colors duration-300',
                focusRing,
                appearance === 'light' ? 'border border-slate-200 bg-white/80' : 'border border-slate-800 bg-slate-900/70'
              )}
              role="switch"
              aria-checked={mode === "it"}
              aria-label={`Persona set to ${mode === "dev" ? "developer" : "IT specialist"}. Toggle persona`}
            >
              <motion.div
                layout
                transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 25 }}
                className={clsx(
                  'absolute h-8 rounded-full',
                  themeClasses.accentBg
                )}
                style={{
                  width: '50%',
                  left: mode === 'dev' ? '0.25rem' : 'calc(50% - 0.25rem)',
                }}
              />
              <div className="relative z-10 grid grid-cols-2 w-full text-[11px] sm:text-xs font-semibold">
                <div className={clsx("flex items-center justify-center gap-1", mode === 'dev' ? 'text-white' : 'text-slate-400')}>
                  <Code2 size={14} />
                  DEV
                </div>
                <div className={clsx("flex items-center justify-center gap-1", mode === 'it' ? 'text-white' : 'text-slate-400')}>
                  <Server size={14} />
                  IT
                </div>
              </div>
            </button>

            <button
              onClick={toggleAppearance}
              className={clsx(
                "flex items-center justify-center h-10 w-10 rounded-full border transition-colors",
                focusRing,
                appearance === 'light' ? 'border-slate-200 bg-white/70 text-slate-700 hover:bg-slate-100' : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:bg-slate-800'
              )}
              aria-label={appearance === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {appearance === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(appearance === 'light' ? "text-slate-700" : "text-slate-300", focusRing)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
            className={clsx(
              "md:hidden border-b",
              appearance === 'light' ? "bg-white/95 border-slate-200" : "bg-slate-900 border-slate-800"
            )}
            id="mobile-nav"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    focusRing,
                    isActive
                      ? clsx(themeClasses.accentText, appearance === 'light' ? "bg-slate-100" : "bg-slate-800/70")
                      : appearance === 'light'
                        ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                  )}
                >
                  {link.name}
                </Link>
              )})}
              <div className="px-5 pt-4 pb-3">
                <button
                  type="button"
                  onClick={() => toggleMode(mode === 'dev' ? 'it' : 'dev')}
                  className={clsx(
                    'relative flex items-center h-10 w-full rounded-full cursor-pointer p-1 transition-colors duration-300',
                    focusRing,
                    appearance === 'light' ? 'border border-slate-200 bg-white' : 'border border-slate-800 bg-slate-900'
                  )}
                  role="switch"
                  aria-checked={mode === "it"}
                  aria-label={`Persona set to ${mode === "dev" ? "developer" : "IT specialist"}. Toggle persona`}
                >
                  <motion.div
                    layout
                    className={clsx(
                      'absolute h-8 rounded-full',
                      themeClasses.accentBg
                    )}
                    transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 25 }}
                    style={{
                      left: mode === 'dev' ? '0.25rem' : 'calc(50% - 0.25rem)',
                      width: '50%',
                    }}
                  />
                  <div className="relative z-10 flex justify-around w-full text-xs font-medium">
                    <span className={mode === 'dev' ? 'text-white' : 'text-slate-400'}>DEV</span>
                    <span className={mode === 'it' ? 'text-white' : 'text-slate-400'}>IT</span>
                  </div>
                </button>
                <button
                  onClick={toggleAppearance}
                  className={clsx(
                    "mt-3 w-full flex items-center justify-center gap-2 h-10 rounded-full border transition-colors",
                    focusRing,
                    appearance === 'light'
                      ? 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                      : 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800'
                  )}
                  aria-label={appearance === "light" ? "Switch to dark mode" : "Switch to light mode"}
                >
                  {appearance === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  {appearance === 'light' ? 'Dark mode' : 'Light mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
