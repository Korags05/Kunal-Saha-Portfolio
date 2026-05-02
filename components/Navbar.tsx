'use client';

import { personalInfo } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
      <nav
        className="w-full sm:w-auto flex items-center justify-between sm:gap-8 px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.85)'
            : 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.8) inset'
            : '0 4px 16px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.8) inset',
          border: '1px solid rgba(255,255,255,0.6)',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="rounded-lg px-2 sm:px-3 py-1.5 text-white font-bold text-xs sm:text-sm tracking-wide select-none flex-shrink-0"
          style={{
            background: '#E8541A',
            boxShadow: '0 3px 0px #a83a0e',
          }}
        >
          Korags05
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-150 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume Button - Desktop */}
        <a
          href={personalInfo.google_drive_resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block text-white font-semibold text-sm px-4 py-1.5 rounded-lg flex-shrink-0
                     active:translate-y-[2px] active:shadow-none transition-all duration-100 select-none whitespace-nowrap"
          style={{
            background: 'linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%)',
            boxShadow: '0 4px 0px #000000',
          }}
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded"
          aria-label="Toggle menu"
        >
          <span
            className="w-5 h-0.5 bg-gray-700 transition-all duration-300"
            style={{
              transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="w-5 h-0.5 bg-gray-700 transition-all duration-300"
            style={{
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="w-5 h-0.5 bg-gray-700 transition-all duration-300"
            style={{
              transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="absolute top-16 left-4 right-4 md:hidden rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <div className="flex flex-col divide-y divide-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-6 py-3 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.google_drive_resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white font-semibold text-sm rounded-b-lg text-center"
              style={{
                background: 'linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%)',
              }}
            >
              My resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
}