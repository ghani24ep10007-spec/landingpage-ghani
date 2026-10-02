{{--
  =============================================================================
  File: resources/views/welcome.blade.php
  Project: Sistem Informasi UNUGHA (Universitas Nahdlatul Ulama Al Ghazali Cilacap)
  Pengembang: Ghani Rizqi Ghaniadinata (ghani.24ep10007@students.unugha.id)
  Commit: feat: menambahkan navbar dan grid fitur pada landing page
  Styling: Tailwind CSS Utility Classes (No inline styles)
  =============================================================================
--}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistem Informasi UNUGHA Cilacap</title>

    <!-- Meta SEO & Open Graph -->
    <meta name="description" content="Portal Resmi Sistem Informasi Universitas Nahdlatul Ulama Al Ghazali Cilacap.">
    <meta property="og:title" content="Sistem Informasi UNUGHA">
    <meta property="og:description" content="Layanan akademik, katalog mata kuliah, dan pusat bantuan mahasiswa UNUGHA.">

    <!-- Fonts Google: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Tailwind CSS (Vite / CDN Support) -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans bg-slate-50 text-slate-800 antialiased selection:bg-emerald-600 selection:text-white dark:bg-slate-950 dark:text-slate-100">

    <!-- 1. NAVIGATION BAR SEDERHANA -->
    <header class="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/90 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">

                <!-- Zone 1: Logo Kampus & Teks Sistem Informasi UNUGHA -->
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-800 via-emerald-600 to-amber-400 p-0.5 shadow-sm flex items-center justify-center">
                        <div class="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
                            <span class="text-emerald-700 dark:text-emerald-400 font-black text-sm tracking-tighter">UN</span>
                        </div>
                    </div>
                    <a href="#home" class="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                        Sistem Informasi UNUGHA
                    </a>
                </div>

                <!-- Zone 2: Menu Utama (Home, Katalog, Kontak) -->
                <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <a href="#home" class="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Home</a>
                    <a href="#katalog" class="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Katalog</a>
                    <a href="#kontak" class="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Kontak</a>
                </nav>

                <!-- Zone 3: Tombol Login -->
                <div class="flex items-center gap-3">
                    <a href="#login" class="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 rounded-lg shadow-sm hover:bg-emerald-800 active:scale-95 transition-all">
                        Login
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section id="home" class="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/80 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-medium text-emerald-800 dark:text-emerald-300 mb-6">
                    <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    Portal Resmi Universitas Nahdlatul Ulama Al Ghazali Cilacap
                </div>
                <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                    Gerbang Digital Layanan Akademik Terpadu Mahasiswa
                </h1>
                <p class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Akses informasi perkuliahan, katalog mata kuliah, pengisian KRS online, dan layanan bantuan terpadu dengan aman, cepat, dan terpercaya.
                </p>
                <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <a href="#fitur" class="px-6 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-colors">
                        Jelajahi Fitur Sistem
                    </a>
                    <a href="#katalog" class="px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        Lihat Katalog Kuliah
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. TIGA BUAH CARD INFORMASI RINGKAS (CSS GRID) -->
    <section id="fitur" class="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-12">
                <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Fitur Utama Sistem Informasi
                </h2>
                <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Tiga layanan inti yang dirancang untuk mempermudah operasional akademik sivitas akademika UNUGHA.
                </p>
            </div>

            <!-- CSS Grid 3 Kolom Responsif -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <!-- Card 1: SIAKAD Terintegrasi -->
                <div class="flex flex-col p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-5">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        Portal Akademik & SIAKAD
                    </h3>
                    <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                        Manajemen rencana studi (KRS), cetak kartu hasil studi (KHS), pengecekan jadwal kuliah, dan rekapitulasi presensi perkuliahan secara real-time.
                    </p>
                    <div class="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        Otomatisasi Nilai & Transkrip →
                    </div>
                </div>

                <!-- Card 2: Katalog Modul & Mata Kuliah -->
                <div class="flex flex-col p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-700 dark:text-amber-400 mb-5">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        Katalog Modul & Kurikulum
                    </h3>
                    <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                        Eksplorasi silabus mata kuliah, profil dosen pengampu, materi ajar digital, serta persyaratan prasyarat kelulusan program studi Sistem Informasi.
                    </p>
                    <div class="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-amber-700 dark:text-amber-400">
                        Akses Silabus & E-Book →
                    </div>
                </div>

                <!-- Card 3: Layanan Bantuan & Kontak Terpadu -->
                <div class="flex flex-col p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 flex items-center justify-center text-teal-700 dark:text-teal-400 mb-5">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        Helpdesk & Kontak Terpadu
                    </h3>
                    <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                        Layanan konsultasi pembimbing akademik (PA), permohonan surat keterangan aktif kuliah, dan pelaporan kendala sistem secara responsif.
                    </p>
                    <div class="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-teal-700 dark:text-teal-400">
                        Tiket Bantuan & WhatsApp →
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- FOOTER RESMI -->
    <footer class="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-white font-bold text-base">Sistem Informasi UNUGHA Cilacap</span>
                    <p class="text-xs text-slate-500 mt-1">Jl. Kemerdekaan Barat No.17, Kesugihan Kidul, Cilacap, Jawa Tengah</p>
                </div>
                <div class="flex items-center gap-6 text-sm">
                    <a href="#home" class="hover:text-white transition-colors">Home</a>
                    <a href="#katalog" class="hover:text-white transition-colors">Katalog</a>
                    <a href="#kontak" class="hover:text-white transition-colors">Kontak</a>
                </div>
                <div class="text-xs text-slate-500">
                    &copy; {{ date('Y') }} UNUGHA. Dikembangkan oleh Ghani Rizqi Ghaniadinata.
                </div>
            </div>
        </div>
    </footer>

</body>
</html>
