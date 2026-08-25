'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MessageSquare } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_CONFIG } from '@/data/navigation';
import { Container } from '@/components/layout/container';
import { AnnouncementBanner } from '@/components/layout/announcement-banner';
import { NavDropdown } from '@/components/layout/nav-dropdown';
import { MobileNav } from '@/components/layout/mobile-nav';
import { NavItem } from '@/types/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isItemActive = (item: NavItem) => {
    if (item.label === 'Study Abroad') {
      return pathname === '/' || pathname === '';
    }
    if (item.label === 'Tourist Visa') {
      return pathname === '/tourist-visa' || pathname?.startsWith('/tourist-visa');
    }
    return false;
  };

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
            ? 'bg-white/95 backdrop-blur-md border-slate-200/80 shadow-xs py-2 sm:py-2.5'
            : 'bg-[#F7F8F5]/95 border-transparent py-2.5 sm:py-3'
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Prominent Official Brand Logo & Name (Unified Link to Homepage) */}
            <Link
              href="/"
              className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8C6] rounded-xl p-1 -ml-1 select-none cursor-pointer"
              aria-label="Curatrix Private Limited Homepage"
            >
              {/* Enlarge Logo by ~18% (h-14 sm:h-16) */}
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full border border-slate-200/90 shadow-xs bg-white transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Curatrix Private Limited Logo"
                  fill
                  sizes="64px"
                  priority
                  className="object-contain p-0.5"
                />
              </div>

              {/* Official Brand Typography */}
              <div className="flex flex-col justify-center">
                <span className="text-xl sm:text-[23px] font-black tracking-tight text-[#0A1A3A] leading-none group-hover:text-[#00A8C6] transition-colors">
                  Curatrix<span className="text-[#8FBE00]">.</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-slate-500 mt-1">
                  Curatrix Private Limited
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1.5">
              {NAV_ITEMS.map((item) => (
                <NavDropdown
                  key={item.label}
                  item={item}
                  isActive={isItemActive(item)}
                />
              ))}
            </div>

            {/* Right Action Bar (Single Primary WhatsApp CTA) */}
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_CONFIG.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] active:scale-[0.98] px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-xs transition-all duration-200 shrink-0"
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
                className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8C6] transition-colors"
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
