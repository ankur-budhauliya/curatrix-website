'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_ITEMS, CONTACT_INFO } from '@/data/navigation';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { AnnouncementBanner } from '@/components/layout/announcement-banner';
import { NavDropdown } from '@/components/layout/nav-dropdown';
import { MobileNav } from '@/components/layout/mobile-nav';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Urgent Announcement Bar */}
      <AnnouncementBanner />

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className={cn(
          'w-full transition-all duration-200 border-b',
          isScrolled
            ? 'bg-[#F7F8F5]/90 backdrop-blur-md border-black/[0.05] shadow-xs py-2 sm:py-2.5'
            : 'bg-[#F7F8F5]/95 border-transparent py-2.5 sm:py-3'
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-4">
            {/* Official Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8C6] rounded-xl p-1 -ml-1 select-none"
              aria-label="Curatrix Academic Advisors Homepage"
            >
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-full border border-slate-200/80 shadow-xs bg-white transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Curatrix Academic Advisors Logo"
                  fill
                  sizes="48px"
                  priority
                  className="object-contain p-0.5"
                />
              </div>

              {/* Brand Name & Tagline */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-tight text-[#0A1A3A] leading-none group-hover:text-[#00A8C6] transition-colors">
                  Curatrix<span className="text-[#8FBE00]">.</span>
                </span>
                <span className="text-[8px] sm:text-[9px] font-extrabold tracking-widest uppercase text-slate-500 mt-1">
                  Academic Advisors
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <NavDropdown key={item.label} item={item} />
              ))}
            </div>

            {/* Right Action Bar */}
            <div className="flex items-center gap-3">
              {/* Direct Helpline - Desktop */}
              <a
                href={CONTACT_INFO.phoneHref}
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#00A8C6] px-2.5 py-1.5 rounded-lg transition-colors"
                title="Call Admissions Desk"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00A8C6]/10 text-[#00A8C6]">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-slate-400 uppercase font-bold leading-none">
                    Helpline
                  </span>
                  <span className="leading-tight font-bold text-xs">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              {/* Consultation CTA Button */}
              <Button
                href={CONTACT_INFO.bookingHref}
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex py-2 px-4 shadow-sm"
                trailingIcon={
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                }
              >
                {CONTACT_INFO.bookingCTA}
              </Button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Open main menu"
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8C6] transition-colors"
              >
                <svg
                  className="w-5 h-5"
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
