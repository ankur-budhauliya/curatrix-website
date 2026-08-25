'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageSquare, ArrowRight, Sparkles, GraduationCap, Globe, Award } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const COUNTRIES = [
  { id: 'usa', label: 'United States', flag: '🇺🇸' },
  { id: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
  { id: 'canada', label: 'Canada', flag: '🇨🇦' },
  { id: 'germany', label: 'Germany', flag: '🇩🇪' },
  { id: 'australia', label: 'Australia', flag: '🇦🇺' },
];

const DEGREES = [
  { id: 'bachelors', label: "Bachelor's Degree", sub: 'Undergraduate' },
  { id: 'masters', label: "Master's / MS / MBA", sub: 'Postgraduate' },
  { id: 'phd', label: 'PhD / Research', sub: 'Doctoral' },
];

const GPA_BRACKETS = [
  { id: 'high', label: '80%+ or 3.5+ GPA', sub: 'High Probability for Top 50' },
  { id: 'mid', label: '65% – 80% or 3.0+ GPA', sub: 'Strong Range for Top 150' },
  { id: 'standard', label: '50% – 65% or 2.5+ GPA', sub: 'Solid Range for Tier-2 / Direct Pathway' },
];

const TEST_STATUS = [
  { id: 'completed', label: 'IELTS / TOEFL / GRE Ready' },
  { id: 'planning', label: 'Planning to appear soon' },
  { id: 'waiver', label: 'Seeking Test Waiver Options' },
];

export function EligibilityCalculator() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].id);
  const [selectedDegree, setSelectedDegree] = useState(DEGREES[1].id);
  const [selectedGpa, setSelectedGpa] = useState(GPA_BRACKETS[0].id);
  const [selectedTest, setSelectedTest] = useState(TEST_STATUS[0].label);

  const countryObj = COUNTRIES.find((c) => c.id === selectedCountry) || COUNTRIES[0];
  const degreeObj = DEGREES.find((d) => d.id === selectedDegree) || DEGREES[1];
  const gpaObj = GPA_BRACKETS.find((g) => g.id === selectedGpa) || GPA_BRACKETS[0];

  const generateWhatsAppLink = () => {
    const text = `Hi Curatrix Private Limited,\n\nI evaluated my profile on the Study Abroad Eligibility Calculator:\n• Destination: ${countryObj.label} ${countryObj.flag}\n• Degree: ${degreeObj.label}\n• Academic Range: ${gpaObj.label}\n• Test Status: ${selectedTest}\n\nPlease share my personalized university shortlist and admission probability report.`;
    return `https://wa.me/919667795333?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="eligibility-calculator"
      aria-label="Study Abroad Eligibility and Profile Calculator"
      className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80 relative"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="Interactive Profile Evaluator"
          badgeVariant="blue"
          title="Check Your Study Abroad"
          highlight="Eligibility."
          subtitle="Select your preferred study destination, degree level, and academic background to benchmark your admissions readiness."
          className="mb-8 sm:mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Form Selectors (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Target Destination */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs space-y-3">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Globe className="h-4 w-4 text-[#00A8C6]" />
                <span>1. Select Target Country</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {COUNTRIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCountry(c.id)}
                    className={cn(
                      'flex items-center gap-2 p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer',
                      selectedCountry === c.id
                        ? 'bg-white border-[#00A8C6] shadow-xs text-slate-900 ring-2 ring-[#00A8C6]/20'
                        : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                    )}
                  >
                    <span className="text-lg leading-none">{c.flag}</span>
                    <span className="text-xs font-bold truncate">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Degree */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs space-y-3">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <GraduationCap className="h-4 w-4 text-[#8FBE00]" />
                <span>2. Select Degree Level</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {DEGREES.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDegree(d.id)}
                    className={cn(
                      'flex flex-col p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer',
                      selectedDegree === d.id
                        ? 'bg-white border-[#8FBE00] shadow-xs text-slate-900 ring-2 ring-[#8FBE00]/20'
                        : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                    )}
                  >
                    <span className="text-xs font-bold text-slate-900">{d.label}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">{d.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Academic GPA Bracket */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs space-y-3">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Award className="h-4 w-4 text-[#00A8C6]" />
                <span>3. Academic Score / GPA Bracket</span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {GPA_BRACKETS.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGpa(g.id)}
                    className={cn(
                      'flex items-center justify-between p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer',
                      selectedGpa === g.id
                        ? 'bg-white border-[#00A8C6] shadow-xs text-slate-900 ring-2 ring-[#00A8C6]/20'
                        : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                    )}
                  >
                    <span className="text-xs font-bold text-slate-900">{g.label}</span>
                    <span className="text-[11px] text-slate-500 font-medium">{g.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Test Readiness */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs space-y-3">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Calculator className="h-4 w-4 text-[#8FBE00]" />
                <span>4. Standardized Test Status</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {TEST_STATUS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTest(t.label)}
                    className={cn(
                      'flex items-center justify-center p-2.5 rounded-xl border text-center text-xs font-bold transition-all duration-200 cursor-pointer',
                      selectedTest === t.label
                        ? 'bg-white border-[#00A8C6] text-[#00A8C6] shadow-xs'
                        : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white'
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Admission Readiness Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl bg-slate-950 text-white p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl leading-none">{countryObj.flag}</span>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {countryObj.label} Admission Readiness
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {degreeObj.label} • {gpaObj.label.split(' ')[0]}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#8FBE00]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#8FBE00] border border-[#8FBE00]/30">
                  <Sparkles className="h-3 w-3" />
                  Live Diagnostic
                </span>
              </div>

              {/* Assessment Highlights */}
              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-semibold text-[#00A8C6] uppercase tracking-wider">
                    Target University Brackets
                  </div>
                  <div className="text-sm font-bold text-white">
                    {selectedGpa === 'high'
                      ? 'Ivy League / Russell Group / Top 50 Global Institutions'
                      : selectedGpa === 'mid'
                      ? 'Top 50 – 150 Ranked Global Universities'
                      : 'Tier-2 Flagship Universities & Direct Pathway Programs'}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-semibold text-[#8FBE00] uppercase tracking-wider">
                    Scholarship &amp; Funding Potential
                  </div>
                  <div className="text-sm font-bold text-white">
                    {selectedGpa === 'high'
                      ? 'High Merit Scholarship & Fellowship Feasibility'
                      : selectedGpa === 'mid'
                      ? 'Institutional Grants & Faculty Bursaries Eligible'
                      : 'Education Loan & Partial Grant Optimization Available'}
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                    <span>Free 1-on-1 Profile Strategy Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                    <span>Structured Dream, Reach &amp; Safe List Creation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                    <span>Home Counselling available for family discussions</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] active:scale-[0.98] py-3.5 px-4 text-sm font-bold text-slate-950 shadow-md transition-all duration-200"
                >
                  <MessageSquare className="h-4 w-4 fill-slate-950/20" />
                  <span>Get Shortlist on WhatsApp</span>
                  <ArrowRight className="h-4 w-4 text-slate-950" />
                </a>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  100% Free Initial Assessment by Curatrix Private Limited
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
