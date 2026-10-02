import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Server, 
  Lock, 
  Globe 
} from 'lucide-react';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
  onExploreFeatures: () => void;
  onExploreCatalog: () => void;
  onOpenCloudflareGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onExploreFeatures,
  onExploreCatalog,
  onOpenCloudflareGuide,
}) => {
  return (
    <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800">
      {/* Background subtle mesh glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-transparent pointer-events-none -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Campus Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/80 text-xs font-medium text-emerald-800 dark:text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Universitas Nahdlatul Ulama Al Ghazali Cilacap</span>
              <span className="text-emerald-400">·</span>
              <span className="font-semibold text-emerald-900 dark:text-emerald-200">Prodi Sistem Informasi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              {lang === 'id' ? (
                <>
                  Pusat Layanan Akademik & <span className="text-emerald-700 dark:text-emerald-400">Teknologi Informasi</span> Sivitas UNUGHA
                </>
              ) : (
                <>
                  Unified Academic Portal & <span className="text-emerald-700 dark:text-emerald-400">Information Systems</span> of UNUGHA
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {lang === 'id'
                ? 'Solusi terintegrasi untuk pengisian KRS digital, rekapitulasi nilai mahasiswa, eksplorasi katalog mata kuliah, serta helpdesk kemahasiswaan berbasis cloud yang cepat dan terlindungi SSL/TLS enkripsi ketat.'
                : 'Integrated academic solution for digital study planning, course catalogs, student records, and automated campus helpdesk protected by strict Cloudflare SSL/TLS encryption.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreFeatures}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md hover:shadow-emerald-700/20 active:scale-95 transition-all"
              >
                <span>{lang === 'id' ? 'Akses Fitur Utama' : 'Explore Core Features'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm transition-all"
              >
                <span>{lang === 'id' ? 'Buka Katalog Kuliah' : 'View Course Catalog'}</span>
              </button>

              <button
                onClick={onOpenCloudflareGuide}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 text-xs font-medium text-emerald-800 dark:text-emerald-300 hover:underline"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{lang === 'id' ? 'Status Domain rizqighaniadinata.my.id' : 'Domain Security Status'}</span>
              </button>
            </div>

            {/* Verified Trust Markers */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">99.98%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Uptime Cloudflare Edge</div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">TLS 1.3</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Enkripsi Strict Otomatis</div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">&lt; 150ms</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Response Time Global</div>
              </div>
            </div>

          </div>

          {/* Right Column: Campus Image Card with Security Overlay */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 shadow-xl group">
              <img
                src="/src/assets/images/hero_unugha_campus_1790980442135.jpg"
                alt="Kampus Universitas Nahdlatul Ulama Al Ghazali Cilacap"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback styling if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.classList.add('bg-gradient-to-br', 'from-emerald-900', 'to-slate-900', 'p-8');
                  }
                }}
              />
              
              {/* Overlay Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      Gedung Kampus UNUGHA
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      Kesugihan, Cilacap, Jawa Tengah
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-600/90 text-white text-xs font-semibold backdrop-blur-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Terakreditasi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick deployment indicator card */}
            <div className="mt-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-slate-700 dark:text-slate-300">
                  rizqighaniadinata.my.id
                </span>
              </div>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                Cloudflare Pages Connected
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
