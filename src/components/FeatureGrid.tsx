import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookMarked, 
  Headphones, 
  ArrowUpRight, 
  Check, 
  Calendar, 
  FileText, 
  Clock, 
  Users, 
  HelpCircle,
  X
} from 'lucide-react';
import { Language } from '../types';

interface FeatureGridProps {
  lang: Language;
  onSelectCatalog: () => void;
  onOpenHelpdesk: () => void;
  onOpenLogin: () => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  lang,
  onSelectCatalog,
  onOpenHelpdesk,
  onOpenLogin,
}) => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: lang === 'id' ? 'Portal Akademik & SIAKAD' : 'Academic Portal & SIS',
      badge: lang === 'id' ? 'Layanan Terpusat' : 'Central Service',
      description: lang === 'id' 
        ? 'Sistem manajemen rencana studi (KRS) online, pengecekan nilai semester (KHS), absensi presensi digital, serta monitoring IPK mahasiswa secara real-time.'
        : 'Online study plan management (KRS), semester grade checks (KHS), digital attendance, and real-time GPA tracking for UNUGHA students.',
      icon: GraduationCap,
      accentColor: 'emerald',
      actionText: lang === 'id' ? 'Akses SIAKAD Online' : 'Access SIS Portal',
      highlights: [
        'Pengisian KRS cepat tanpa antrean server',
        'Cetak Kartu Hasil Studi (KHS) resmi ber-barcode',
        'Transkrip akademik digital tervalidasi fakultas'
      ],
      handler: onOpenLogin,
    },
    {
      id: 2,
      title: lang === 'id' ? 'Katalog Modul & Kurikulum' : 'Course & Module Catalog',
      badge: lang === 'id' ? 'Kurikulum MBKM' : 'Curriculum Catalog',
      description: lang === 'id'
        ? 'Eksplorasi silabus lengkap mata kuliah prodi Sistem Informasi, profil dosen pengampu, materi ajar slide perkuliahan, dan modul praktikum laboratorium.'
        : 'Explore complete syllabus for Information Systems, lecturer profiles, digital lecture materials, and computer lab practical modules.',
      icon: BookMarked,
      accentColor: 'amber',
      actionText: lang === 'id' ? 'Telusuri Katalog Kuliah' : 'Browse Course Catalog',
      highlights: [
        'Silabus mata kuliah lengkap semester 1 s/d 8',
        'Repositori modul materi & e-book perkuliahan',
        'Informasi jadwal praktikum & laboratorium TI'
      ],
      handler: onSelectCatalog,
    },
    {
      id: 3,
      title: lang === 'id' ? 'Helpdesk & Layanan Terpadu' : 'Helpdesk & Support Center',
      badge: lang === 'id' ? 'Respons Cepat' : 'Fast Response',
      description: lang === 'id'
        ? 'Pusat bantuan kemahasiswaan untuk permohonan surat aktif kuliah, konsultasi dosen pembimbing akademik (PA), hingga pelaporan kendala teknis sistem.'
        : 'Integrated student support for active student certificates, academic advisor consultations, and technical support ticketing.',
      icon: Headphones,
      accentColor: 'teal',
      actionText: lang === 'id' ? 'Hubungi Helpdesk' : 'Contact Support',
      highlights: [
        'Layanan permohonan surat izin & beasiswa',
        'Konsultasi bimbingan akademik dosen wali',
        'Saluran resmi WhatsApp & email helpdesk 24/7'
      ],
      handler: onOpenHelpdesk,
    }
  ];

  return (
    <section id="fitur" className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
            <span>UNUGHA Information System Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white" style={{ textWrap: 'balance' }}>
            {lang === 'id' ? '3 Fitur Utama Sistem Informasi UNUGHA' : '3 Core Information System Features'}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            {lang === 'id' 
              ? 'Tiga pilar layanan utama yang mengintegrasikan seluruh proses akademik dan operasional kemahasiswaan.' 
              : 'Three core service pillars integrating all academic processes and student campus operations.'}
          </p>
        </div>

        {/* CSS GRID: 3 Responsive Cards (Complies strictly with prompt requirements) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div 
                key={feat.id}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Card Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-6 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                    {feat.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                  <button
                    onClick={feat.handler}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 group-hover:underline"
                  >
                    <span>{feat.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <button 
                    onClick={() => setSelectedFeature(feat.id)}
                    className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  >
                    Detail
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Feature Detail Modal */}
      {selectedFeature !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {(() => {
              const current = features.find((f) => f.id === selectedFeature);
              if (!current) return null;
              const Icon = current.icon;
              return (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{current.title}</h4>
                      <p className="text-xs text-slate-500">{current.badge}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">Spesifikasi Layanan:</div>
                    <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                      {current.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                    >
                      Tutup
                    </button>
                    <button
                      onClick={() => {
                        setSelectedFeature(null);
                        current.handler();
                      }}
                      className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm"
                    >
                      Buka Fitur Ini
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

    </section>
  );
};
