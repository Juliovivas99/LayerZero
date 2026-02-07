'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from '@/types';

interface NavigationProps {
  variant?: 'home' | 'ai';
}

export default function Navigation({ variant = 'home' }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const homeLinks: NavLink[] = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
  ];

  const aiLinks: NavLink[] = [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Protocol', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const links = variant === 'ai' ? aiLinks : homeLinks;
  const navClass = variant === 'ai' ? 'text-white' : 'mix-blend-difference text-white';

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 px-4 sm:px-6 py-6 md:px-12 transition-all duration-300 ${navClass}`}>
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Left Side - Logo + Links in Glass Pill */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Logo */}
            <Link href="/" className="text-lg sm:text-xl font-bold tracking-tighter uppercase leading-none hover:opacity-80 transition-opacity z-50">
              Layer Zero<br />Studio
            </Link>

            {/* Desktop Links in Glass Pill */}
            <div className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full glass border border-white/10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-xs font-medium tracking-wide uppercase hover:bg-white/10 rounded-full transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="hidden md:flex items-center gap-4">
            {variant === 'home' && (
              <Link
                href="/ai-services"
                className="text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4 py-2 px-3"
              >
                AI Services
              </Link>
            )}
            <a
              href="#contact"
              className="px-6 py-3 text-xs font-medium uppercase tracking-wide rounded-full glass border border-white/10 hover:bg-white/10 transition-all flex items-center"
            >
              Book a call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-3xl flex items-center z-50 touch-manipulation min-w-[44px] min-h-[44px] justify-center"
            aria-label="Toggle menu"
          >
            <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          {/* Navigation Links */}
          <div className="space-y-6 mb-12">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className={`block text-3xl sm:text-4xl font-bold tracking-tighter uppercase text-white hover:text-[#FF4D00] transition-colors ${
                  isMobileMenuOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="space-y-4 w-full max-w-sm">
            {variant === 'home' && (
              <Link
                href="/ai-services"
                onClick={handleMobileLinkClick}
                className="block w-full py-4 text-sm font-bold uppercase tracking-widest text-white border-2 border-white/30 rounded-full hover:bg-white hover:text-black transition-all"
              >
                AI Services
              </Link>
            )}
            <a
              href="#contact"
              onClick={handleMobileLinkClick}
              className="block w-full py-4 bg-[#FF4D00] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#ff6a00] transition-all shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
