'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from '@/types';

interface NavigationProps {
  variant?: 'home' | 'ai';
}

export default function Navigation({ variant = 'home' }: NavigationProps) {
  const pathname = usePathname();
  
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
  const navClass = variant === 'ai' ? 'glass text-white' : 'mix-blend-difference text-white';

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 py-6 md:px-12 transition-all duration-300 ${navClass}`}>
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase leading-none hover:opacity-80 transition-opacity">
          Layer Zero<br />Studio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide uppercase">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:underline underline-offset-4 decoration-2 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          {variant === 'home' && (
            <Link
              href="/ai-services"
              className="text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4"
            >
              AI Services
            </Link>
          )}
          <a
            href="#contact"
            className="px-6 py-3 border border-white/30 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-sm"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl flex items-center">
          <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
        </button>
      </div>
    </nav>
  );
}
