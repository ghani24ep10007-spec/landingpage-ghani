import React from 'react';
import { 
  ShieldCheck, 
  LogIn, 
  Bell, 
  Moon, 
  Sun, 
  Globe, 
  Code2, 
  BookOpen, 
  Layers, 
  CloudLightning,
  UserCheck
} from 'lucide-react';
import { Language, UserProfile } from '../types';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  lang: Language;
  onToggleLanguage: () => void;
  onOpenLogin: () => void;
  onOpenCloudflareGuide: () => void;
  onOpenBladeCode: () => void;
  onOpenDocs: () => void;
  onOpenNotifications: () => void;
  unreadNotifsCount: number;
  user: UserProfile | null;
  onLogout: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  lang,
  onToggleLanguage,
  onOpenLogin,
  onOpenCloudflareGuide,
  onOpenBladeCode,
  onOpenDocs,
  onOpenNotifications,
  unreadNotifsCount,
  user,
  onLogout,
  activeSection,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Zone 1: Single Brand Wordmark element & UNUGHA emblem */}
          <div className="flex items-center gap-3">
            <a 
              href="#home" 
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
              aria-label="Sistem Informasi UNUGHA"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-800 via-emerald-600 to-amber-500 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[9px] flex items-center justify-center">
                  <span className="text-emerald-700 dark:text-emerald-400 font-extrabold text-xs tracking-tight">
                    UN
                  </span>
                </div>
              </div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                Sistem Informasi UNUGHA
              </span>
            </a>
          </div>

          {/* Zone 2: Navigation Links (Home, Fitur, Katalog, Kontak) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a 
              href="#home" 
              className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors pb-0.5 ${
                activeSection === 'home' ? 'text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-600' : ''
              }`}
            >
              Home
            </a>
            <a 
              href="#fitur" 
              className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors pb-0.5 ${
                activeSection === 'fitur' ? 'text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-600' : ''
              }`}
            >
              {lang === 'id' ? 'Fitur Utama' : 'Core Features'}
            </a>
            <a 
              href="#katalog" 
              className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors pb-0.5 ${
                activeSection === 'katalog' ? 'text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-600' : ''
              }`}
            >
              {lang === 'id' ? 'Katalog' : 'Catalog'}
            </a>
            <a 
              href="#kontak" 
              className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors pb-0.5 ${
                activeSection === 'kontak' ? 'text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-600' : ''
              }`}
            >
              {lang === 'id' ? 'Kontak' : 'Contact'}
            </a>
          </nav>

          {/* Zone 3: Primary Actions & Utility Tools */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Blade Code modal button */}
            <button
              onClick={onOpenBladeCode}
              title="Lihat & Salin welcome.blade.php"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-300/70 dark:border-slate-700"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden lg:inline">welcome.blade.php</span>
            </button>

            {/* Cloudflare & SSL status */}
            <button
              onClick={onOpenCloudflareGuide}
              title="Status SSL & Panduan Cloudflare Pages"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 rounded-lg transition-colors border border-emerald-200 dark:border-emerald-800"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">SSL & Cloudflare</span>
            </button>

            {/* Notification bell */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="Notifikasi Sistem"
              aria-label="Notifikasi Sistem"
            >
              <Bell className="w-4 h-4" />
              {unreadNotifsCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
              )}
              {unreadNotifsCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
              )}
            </button>

            {/* Language toggle */}
            <button
              onClick={onToggleLanguage}
              className="p-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors uppercase tracking-wider"
              title={lang === 'id' ? 'Ganti ke English' : 'Switch to Bahasa Indonesia'}
            >
              {lang}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title={darkMode ? 'Mode Terang' : 'Mode Gelap'}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* User Login / Profile button */}
            {user ? (
              <div className="flex items-center gap-2 pl-1 border-l border-slate-200 dark:border-slate-800">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                    {user.name.split(' ')[0]}
                  </div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400">
                    {user.nim}
                  </div>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 text-xs font-medium text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg border border-rose-200 dark:border-rose-900 transition-colors"
                  title="Logout"
                >
                  Keluar
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm active:scale-95 transition-all whitespace-nowrap"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </button>
            )}

          </div>

        </div>
      </div>
    </header>
  );
};
