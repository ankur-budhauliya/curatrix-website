'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ANNOUNCEMENT_DATA } from '@/data/navigation';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 bg-[#0B1315] text-white py-2 text-xs transition-all border-b border-white/10"
    >
      <Container size="wide">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center justify-center gap-2.5 text-center flex-wrap">
            {ANNOUNCEMENT_DATA.badge && (
              <Badge variant="green" size="sm" pulse>
                {ANNOUNCEMENT_DATA.badge}
              </Badge>
            )}
            <span className="text-slate-200 font-normal hidden sm:inline">
              {ANNOUNCEMENT_DATA.text}
            </span>
            <span className="text-slate-200 font-normal sm:hidden">
              Fall 2026 Admissions Open
            </span>
            {ANNOUNCEMENT_DATA.linkText && ANNOUNCEMENT_DATA.href && (
              <Link
                href={ANNOUNCEMENT_DATA.href}
                className="inline-flex items-center gap-1 font-semibold text-[#8FBE00] hover:text-[#a3d600] underline underline-offset-2 transition-colors ml-1"
              >
                <span>{ANNOUNCEMENT_DATA.linkText}</span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement"
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors hover:bg-white/10 shrink-0"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </Container>
    </aside>
  );
}
