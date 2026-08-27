'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MessageSquare, Menu } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 8);
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
            ? 'bg-white/95 backdrop-blur-md border-slate-200/80 shadow-xs'
            : 'bg-[#F7F8F5]/95 border-slate-200/50'
        )}
      >
        <Container size="wide">
          <div className="flex h-16 sm:h-[72px] items-center justify-between gap-4 lg:gap-8">
            {/* Brand Logo & Company Title (Unified Link to Homepage) */}
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8C6] select-none cursor-pointer py-1"
              aria-label="Curatrix Private Limited Homepage"
            >
              {/* Premium Circular Emblem */}
              <div className="relative h-11 w-11 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full border border-slate-200/90 shadow-2xs bg-white transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Curatrix Private Limited Logo"
                  fill
                  sizes="64px"
                  priority
                  className="object-contain p-0.5"
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0A1A3A] leading-none group-hover:text-[#00A8C6] transition-colors">
                  Curatrix<span className="text-[#8FBE00]">.</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-slate-500 mt-1">
                  Curatrix Private Limited
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links - Clean Spacing & Balanced Alignment */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => (
                <NavDropdown
                  key={item.label}
                  item={item}
                  isActive={isItemActive(item)}
                />
              ))}
            </div>

            {/* Right Action Bar (Standardized CTA & Mobile Hamburger) */}
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_CONFIG.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] active:scale-[0.98] text-xs sm:text-sm font-bold text-slate-950 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shrink-0"
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
                <Menu className="w-6 h-6" />
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
