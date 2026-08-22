'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from '@/types/navigation';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface NavDropdownProps {
  item: NavItem;
  isActive?: boolean;
}

export function NavDropdown({ item, isActive }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className={cn(
          'relative px-3.5 py-2 text-sm font-medium transition-colors duration-150 rounded-lg hover:text-[#00A8C6]',
          isActive ? 'text-[#00A8C6] font-semibold' : 'text-slate-700 hover:bg-slate-100/70'
        )}
      >
        <span>{item.label}</span>
        {item.badge && (
          <span className="ml-1.5 inline-block text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-[#8FBE00]/20 text-[#5a7b00]">
            {item.badge}
          </span>
        )}
      </Link>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-all duration-150 rounded-lg cursor-pointer select-none',
          isOpen || isActive
            ? 'text-[#00A8C6] bg-slate-100/80 font-semibold'
            : 'text-slate-700 hover:text-[#00A8C6] hover:bg-slate-100/70'
        )}
      >
        <span>{item.label}</span>
        <svg
          className={cn(
            'w-4 h-4 text-slate-500 transition-transform duration-200',
            isOpen && 'rotate-180 text-[#00A8C6]'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu Panel */}
      <div
        className={cn(
          'absolute left-0 top-full pt-2 w-[340px] sm:w-[400px] z-50 transition-all duration-200 ease-out origin-top-left',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        )}
      >
        <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-3 shadow-xl ring-1 ring-black/5 border border-slate-200/80">
          <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Explore {item.label}
            </span>
            <span className="text-[11px] text-[#00A8C6] font-medium">
              Curatrix Advisory
            </span>
          </div>

          <ul role="menu" className="space-y-1">
            {item.children.map((subItem) => (
              <li key={subItem.title} role="none">
                <Link
                  href={subItem.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors duration-150 hover:bg-[#F7F8F5] focus:bg-[#F7F8F5] focus:outline-none"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00A8C6]/10 text-[#00A8C6] transition-colors group-hover:bg-[#00A8C6] group-hover:text-white">
                    <span className="text-xs font-bold uppercase">
                      {subItem.icon || '✦'}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-800 group-hover:text-[#00A8C6] transition-colors">
                        {subItem.title}
                      </span>
                      {subItem.badge && (
                        <Badge variant="green" size="sm">
                          {subItem.badge}
                        </Badge>
                      )}
                    </div>
                    {subItem.description && (
                      <p className="mt-0.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {subItem.description}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1.5 flex items-center justify-between text-xs bg-slate-50/80 rounded-lg">
            <span className="text-slate-500">Need personalized guidance?</span>
            <Link
              href="#book-consultation"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-[#00A8C6] hover:text-[#0094ae] hover:underline"
            >
              Talk to an Advisor →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
