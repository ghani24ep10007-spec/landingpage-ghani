import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  GraduationCap, 
  Clock, 
  User, 
  Download, 
  FileText, 
  Check, 
  X 
} from 'lucide-react';
import { UNUGHA_COURSES } from '../data/mockData';
import { CourseCatalogItem, Language } from '../types';

interface CatalogSectionProps {
  lang: Language;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCourse, setActiveCourse] = useState<CourseCatalogItem | null>(null);

  const categories = [
    { id: 'all', label: lang === 'id' ? 'Semua Mata Kuliah' : 'All Courses' },
    { id: 'Wajib', label: lang === 'id' ? 'Mata Kuliah Wajib' : 'Compulsory' },
    { id: 'Pilihan', label: lang === 'id' ? 'Mata Kuliah Pilihan' : 'Elective' },
    { id: 'Praktikum', label: lang === 'id' ? 'Praktikum & Lab' : 'Practicum & Lab' },
  ];

  const filteredCourses = UNUGHA_COURSES.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.lecturer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="katalog" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/60 border-t border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-3 border border-emerald-200 dark:border-emerald-800">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Kurikulum Sistem Informasi UNUGHA' : 'UNUGHA Information Systems Curriculum'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {lang === 'id' ? 'Katalog Mata Kuliah & Modul Pembelajaran' : 'Course & Learning Module Catalog'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {lang === 'id'
                ? 'Daftar silabus, kompetensi pembelajaran, dan materi perkuliahan program studi S1 Sistem Informasi.'
                : 'Complete syllabus, learning competencies, and digital course resources for Information Systems degree.'}
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'id' ? 'Cari mata kuliah atau kode...' : 'Search course or code...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Filter Tabs (Interactive segmented buttons allowed by skill) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-md transition-all group"
            >
              <div>
                {/* Unboxed metadata per skill guideline */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-mono font-semibold text-emerald-700 dark:text-emerald-400">{course.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{course.sks} SKS</span>
                  <span aria-hidden="true">·</span>
                  <span>Semester {course.semester}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {course.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{course.lecturer}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveCourse(course)}
                  className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  Lihat Silabus Lengkap
                </button>
                <span className="text-[10px] text-slate-400">
                  Updated 2026/2027
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Tidak ada mata kuliah yang cocok</h3>
            <p className="text-xs text-slate-500 mt-1">Coba kata kunci lain atau ubah kategori filter.</p>
          </div>
        )}

        {/* Feature showcase banner */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-sm">
            <img
              src="/src/assets/images/unugha_student_study_1790980456131.jpg"
              alt="Aktivitas Belajar Mahasiswa UNUGHA"
              className="w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Perpustakaan & Repositori Digital
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Akses Ribuan Modul & Referensi Jurnal Internasional
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Seluruh mahasiswa aktif Sistem Informasi UNUGHA mendapatkan fasilitas akun akses e-journal IEEE, ACM Digital Library, serta repository tugas akhir dan skripsi sivitas akademika Al Ghazali.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Single Sign-On (SSO) Kampus
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Akses 24 Jam Non-Stop
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Syllabus Detail Modal */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveCourse(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">{activeCourse.code}</span>
                <span>·</span>
                <span>{activeCourse.category}</span>
                <span>·</span>
                <span>{activeCourse.sks} SKS (Semester {activeCourse.semester})</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {activeCourse.title}
              </h3>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs">
                <span className="text-slate-500">Dosen Pengampu: </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{activeCourse.lecturer}</span>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Capaian Pembelajaran:</div>
                {activeCourse.description}
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 space-y-2 text-xs text-emerald-900 dark:text-emerald-300">
                <div className="font-bold">Materi & Modul Kuliah Tersedia:</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Silabus RPS.pdf (1.2 MB)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Modul Praktikum.pdf (4.5 MB)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setActiveCourse(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    alert(`Silabus untuk ${activeCourse.title} (${activeCourse.code}) siap diunduh.`);
                    setActiveCourse(null);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Silabus (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
