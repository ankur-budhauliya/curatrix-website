'use client';

import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { Container } from '@/components/layout/container';

export function TouristVisaNotice() {
  return (
    <section aria-label="Important Tourist Visa Notice" className="py-8 bg-[#F8FAFC] border-t border-slate-200/80">
      <Container size="narrow">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div className="space-y-1 text-left">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <span>Important Travel &amp; Visa Advisory Notice</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Tourist visa eligibility, processing times, biometric criteria, and mandatory documentation requirements vary significantly by destination country and are subject strictly to official embassy regulations and consular jurisdiction. Curatrix Private Limited provides professional document preparation and filing assistance and does not guarantee visa issuance.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
