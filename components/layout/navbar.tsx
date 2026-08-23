'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_CONFIG } from '@/data/navigation';
import { Container } from '@/components/layout/container';
import { AnnouncementBanner } from '@/components/layout/announcement-banner';
import { NavDropdown } from '@/components/layout/nav-dropdown';
import { MobileNav } from '@/components/layout/mobile-nav';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Announcement Bar */}
      <AnnouncementBanner />

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className={cn(
          'w-full transition-all duration-200 border-b',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200/80 shadow-xs py-2.5 sm:py-3'
            : 'bg-[#F7F8F5]/95 border-transparent py-3 sm:py-3.5'
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-6">
            {/* Prominent Official Brand Logo (Enlarged 35-45%) */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8C6] rounded-xl p-1 -ml-1 select-none"
              aria-label="Curatrix Academic Advisors Homepage"
            >
              <div className="relative h-13 w-13 sm:h-15 sm:w-15 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-xs bg-white transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Curatrix Academic Advisors Logo"
                  fill
                  sizes="64px"
                  priority
                  className="object-contain p-0.5"
                />
              </div>

              {/* Brand Name & Subtext */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0A1A3A] leading-none group-hover:text-[#00A8C6] transition-colors">
                  Curatrix<span className="text-[#8FBE00]">.</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase text-slate-500 mt-1">
                  Academic Advisors
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <NavDropdown key={item.label} item={item} />
              ))}
            </div>

            {/* Right Action Bar (Single Primary WhatsApp CTA) */}
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_CONFIG.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] active:scale-[0.98] px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-xs transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4 fill-slate-950/20" />
                <span>Book Strategy Session</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Open main menu"
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8C6] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={NAV_ITEMS}
      />
    </header>
  );
}
