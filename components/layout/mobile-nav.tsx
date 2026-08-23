'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, X, ChevronDown } from 'lucide-react';
import { NavItem } from '@/types/navigation';
import { WHATSAPP_CONFIG } from '@/data/navigation';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

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
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F7F8F5] shadow-2xl flex flex-col justify-between border-l border-slate-200 z-50 animate-in slide-in-from-right duration-200"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Header with Official Logo */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-xs bg-white">
              <Image
                src="/logo.png"
                alt="Curatrix Academic Advisors Logo"
                fill
                sizes="44px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-[#0A1A3A] leading-none">
                Curatrix<span className="text-[#8FBE00]">.</span>
              </span>
              <span className="text-[9px] font-extrabold tracking-widest uppercase text-slate-500 mt-0.5">
                Academic Advisors
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-xl text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <nav className="space-y-1.5">
            {items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = !!expandedSections[item.label];

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold text-slate-800 hover:text-[#00A8C6] hover:bg-white transition-colors"
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
                <div key={item.label} className="rounded-xl overflow-hidden bg-white border border-slate-200/80 mb-2">
                  <button
                    type="button"
                    onClick={() => toggleSection(item.label)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between px-3.5 py-3 text-sm font-bold text-slate-800 hover:text-[#00A8C6] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <Badge variant="green" size="sm">
                          {item.badge}
                        </Badge>
                      )}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-slate-500 transition-transform duration-200',
                        isExpanded && 'rotate-180 text-[#00A8C6]'
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-100 bg-[#F8FAFC]">
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={onClose}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white transition-colors"
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
        </div>

        {/* Footer WhatsApp Action */}
        <div className="p-6 border-t border-slate-200 bg-white space-y-2">
          <a
            href={WHATSAPP_CONFIG.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] py-3 px-4 text-sm font-bold text-slate-950 shadow-xs transition-all duration-200"
          >
            <MessageSquare className="h-4 w-4 fill-slate-950/20" />
            <span>Chat on WhatsApp</span>
          </a>
          <p className="text-center text-[11px] text-slate-500">
            Instant admissions advisory • 100% Free
          </p>
        </div>
      </div>
    </div>
  );
}
