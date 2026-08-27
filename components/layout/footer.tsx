import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { CONTACT_INFO, NAV_ITEMS, WHATSAPP_CONFIG } from '@/data/navigation';
import { DESTINATIONS_DATA } from '@/data/destinations';
import { SERVICES_DATA } from '@/data/services';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Curatrix Global Footer" className="bg-[#0B1315] text-slate-300 border-t border-white/10 pt-12 pb-8 sm:pt-16 sm:pb-10">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          {/* Brand Column (Col 1-4) with Enlarged Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 select-none group cursor-pointer"
              aria-label="Curatrix Private Limited Homepage"
            >
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Curatrix Private Limited Logo"
                  fill
                  sizes="64px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-[26px] font-black tracking-tight text-white leading-none group-hover:text-[#00A8C6] transition-colors">
                  Curatrix<span className="text-[#8FBE00]">.</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-slate-400 mt-1 uppercase">
                  Curatrix Private Limited
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Curatrix Private Limited provides transparent, bespoke study abroad advisory, profile evaluation, home counselling, and professional tourist visa assistance across selected global destinations.
            </p>

            {/* Social Link: Instagram Only */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CONTACT_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Curatrix Private Limited on Instagram"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-[#00A8C6] hover:border-[#00A8C6] transition-all duration-200 text-xs font-semibold"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-[#00A8C6] transition-colors font-semibold"
                >
                  🎓 Study Abroad
                </Link>
              </li>
              <li>
                <Link
                  href="/tourist-visa"
                  className="text-[#8FBE00] hover:underline font-semibold"
                >
                  ✈️ Tourist Visa
                </Link>
              </li>
              {NAV_ITEMS.slice(2).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#00A8C6] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (Col 7-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/tourist-visa"
                  className="text-[#8FBE00] hover:underline transition-colors font-medium"
                >
                  Tourist Visa Assistance
                </Link>
              </li>
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/#services"
                    className="text-slate-400 hover:text-[#8FBE00] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations & Official Contact Info (Col 9-12) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                Study Destinations
              </h4>
              <ul className="grid grid-cols-2 gap-1.5 text-xs">
                {DESTINATIONS_DATA.map((dest) => (
                  <li key={dest.id}>
                    <Link
                      href="/#destinations"
                      className="text-slate-400 hover:text-[#00A8C6] transition-colors flex items-center gap-1.5"
                    >
                      <span>{dest.flagEmoji}</span>
                      <span>{dest.country}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-[#8FBE00] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Office:</strong> {CONTACT_INFO.officeAddress}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="h-3.5 w-3.5 text-[#00A8C6] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MessageSquare className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                <a
                  href={WHATSAPP_CONFIG.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8FBE00] hover:underline font-semibold"
                >
                  WhatsApp: +91 9667795333
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Attribution */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {currentYear} Curatrix Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Bespoke Global University Admissions Advisory</span>
            <span>•</span>
            <Link href="/tourist-visa" className="hover:text-white transition-colors">
              Tourist Visa Services
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
