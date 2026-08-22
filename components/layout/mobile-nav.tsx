'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from '@/types/navigation';
import { CONTACT_INFO } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F7F8F5] shadow-2xl flex flex-col justify-between border-l border-slate-200 z-50 animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Header with Official Logo */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-xs bg-white">
              <Image
                src="/logo.png"
                alt="Curatrix Academic Advisors Logo"
                fill
                sizes="36px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-[#0A1A3A] leading-none">
                Curatrix<span className="text-[#8FBE00]">.</span>
              </span>
              <span className="text-[8px] font-extrabold tracking-widest uppercase text-slate-500 mt-0.5">
                Academic Advisors
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <nav className="space-y-1">
            {items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = !!expandedSections[item.label];

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-[#00A8C6] hover:bg-white transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge variant="green" size="sm">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="rounded-xl overflow-hidden bg-white/60 border border-slate-200/60 mb-2">
                  <button
                    type="button"
                    onClick={() => toggleSection(item.label)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between px-3.5 py-3 text-base font-semibold text-slate-800 hover:text-[#00A8C6] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <Badge variant="green" size="sm">
                          {item.badge}
                        </Badge>
                      )}
                    </span>
                    <svg
                      className={cn(
                        'w-4 h-4 text-slate-500 transition-transform duration-200',
                        isExpanded && 'rotate-180 text-[#00A8C6]'
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-100 bg-white">
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={onClose}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#00A8C6]/10 text-[10px] font-bold text-[#00A8C6] uppercase mt-0.5">
                            {sub.icon || '•'}
                          </span>
                          <div>
                            <div className="text-xs font-semibold text-slate-900">
                              {sub.title}
                            </div>
                            {sub.description && (
                              <div className="text-[11px] text-slate-500 line-clamp-1">
                                {sub.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Quick Contact Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#00A8C6]/10 to-[#8FBE00]/10 border border-[#00A8C6]/20">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
              Direct Admissions Helpline
            </div>
            <a
              href={CONTACT_INFO.phoneHref}
              className="text-sm font-extrabold text-[#00A8C6] hover:underline flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-200 bg-white/80 space-y-3">
          <Button
            href={CONTACT_INFO.bookingHref}
            variant="primary"
            size="lg"
            className="w-full shadow-md"
            onClick={onClose}
          >
            {CONTACT_INFO.bookingCTA}
          </Button>
          <div className="text-center">
            <span className="text-xs text-slate-500">
              Personalized strategy • 100% Free
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
