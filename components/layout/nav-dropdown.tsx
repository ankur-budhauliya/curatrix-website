'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Compass,
  Home,
  Target,
  Award,
  FileEdit,
  ShieldCheck,
  PlaneTakeoff,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';
import { NavItem } from '@/types/navigation';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const iconComponentMap: Record<string, LucideIcon> = {
  compass: Compass,
  home: Home,
  target: Target,
  award: Award,
  edit: FileEdit,
  shield: ShieldCheck,
  plane: PlaneTakeoff,
  briefcase: Briefcase,
};

const countryFlagMap: Record<string, string> = {
  ie: '🇮🇪',
  lk: '🇱🇰',
  uae: '🇦🇪',
  my: '🇲🇾',
  vn: '🇻🇳',
  id: '🇮🇩',
  us: '🇺🇸',
  gb: '🇬🇧',
  au: '🇦🇺',
  ca: '🇨🇦',
};

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

  const renderIconBadge = (iconKey?: string) => {
    if (iconKey && countryFlagMap[iconKey]) {
      return (
        <span className="text-lg leading-none select-none">
          {countryFlagMap[iconKey]}
        </span>
      );
    }

    const IconCmp = (iconKey && iconComponentMap[iconKey]) || Compass;
    return <IconCmp className="h-4.5 w-4.5" />;
  };

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className={cn(
          'h-10 px-3.5 inline-flex items-center justify-center text-sm font-semibold transition-all duration-200 rounded-xl select-none',
          isActive
            ? 'text-[#00A8C6] bg-[#00A8C6]/10 font-bold border border-[#00A8C6]/20 shadow-2xs'
            : 'text-slate-700 hover:text-[#00A8C6] hover:bg-slate-100/80 border border-transparent'
        )}
      >
        <span>{item.label}</span>
        {item.badge && (
          <span className="ml-1.5 inline-block text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-[#8FBE00]/20 text-[#3b5200]">
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
      <Link
        href={item.href}
        onClick={() => setIsOpen(false)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          'h-10 px-3.5 inline-flex items-center justify-center gap-1.5 text-sm transition-all duration-200 rounded-xl cursor-pointer select-none',
          isActive
            ? 'text-[#00A8C6] bg-[#00A8C6]/10 font-bold border border-[#00A8C6]/20 shadow-2xs'
            : isOpen
            ? 'text-[#00A8C6] bg-slate-100/90 font-bold border border-slate-200/80'
            : 'text-slate-700 hover:text-[#00A8C6] hover:bg-slate-100/80 font-semibold border border-transparent'
        )}
      >
        <span>{item.label}</span>
        <svg
          className={cn(
            'w-4 h-4 transition-transform duration-200 shrink-0',
            isActive ? 'text-[#00A8C6]' : 'text-slate-400',
            isOpen && 'rotate-180 text-[#00A8C6]'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {/* Dropdown Menu Panel */}
      <div
        className={cn(
          'absolute left-0 top-[calc(100%+4px)] w-[360px] sm:w-[420px] max-h-[460px] overflow-y-auto z-50 transition-all duration-200 ease-out origin-top-left',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        )}
      >
        <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-3 shadow-2xl ring-1 ring-black/5 border border-slate-200/90">
          <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Explore {item.label}
            </span>
            <span className="text-[11px] text-[#00A8C6] font-semibold">
              Curatrix Private Limited
            </span>
          </div>

          <ul role="menu" className="space-y-1">
            {item.children.map((subItem) => (
              <li key={subItem.title} role="none">
                <Link
                  href={subItem.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-start gap-3.5 rounded-xl p-2.5 transition-all duration-200 hover:bg-slate-50/90 focus:bg-slate-50/90 focus:outline-none"
                >
                  {/* Floating Icon Badge - High Z-Index */}
                  <div className="relative z-10 shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A8C6]/10 text-[#00A8C6] border border-[#00A8C6]/20 shadow-2xs group-hover:bg-[#00A8C6] group-hover:text-white group-hover:border-[#00A8C6] group-hover:scale-105 transition-all duration-200">
                    {renderIconBadge(subItem.icon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-[#00A8C6] transition-colors">
                        {subItem.title}
                      </span>
                      {subItem.badge && (
                        <Badge variant="green" size="sm">
                          {subItem.badge}
                        </Badge>
                      )}
                    </div>
                    {subItem.description && (
                      <p className="mt-0.5 text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                        {subItem.description}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1.5 flex items-center justify-between text-xs bg-slate-50/80 rounded-xl">
            <span className="text-slate-500">
              {item.label === 'Tourist Visa'
                ? 'Planning an international holiday?'
                : 'Need personalized admissions guidance?'}
            </span>
            <Link
              href={item.label === 'Tourist Visa' ? '/tourist-visa' : '/#contact'}
              onClick={() => setIsOpen(false)}
              className="font-bold text-[#00A8C6] hover:text-[#0094ae] hover:underline"
            >
              {item.label === 'Tourist Visa' ? 'View Visa Page →' : 'Talk to an Advisor →'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
