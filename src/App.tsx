/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureGrid } from './components/FeatureGrid';
import { CatalogSection } from './components/CatalogSection';
import { ContactSection } from './components/ContactSection';
import { DeviceFrameWrapper } from './components/DeviceFrameWrapper';
import { LoginModal } from './components/LoginModal';
import { CloudflareGuideModal } from './components/CloudflareGuideModal';
import { LaravelBladeModal } from './components/LaravelBladeModal';
import { DocumentationModal } from './components/DocumentationModal';
import { SecurityAuditLogs } from './components/SecurityAuditLogs';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { NotificationCenter } from './components/NotificationCenter';
import { 
  Language, 
  ViewportMode, 
  UserProfile, 
  ActivityLog, 
  SecurityNotification 
} from './types';
import { INITIAL_LOGS, INITIAL_NOTIFICATIONS } from './data/mockData';
import { 
  ShieldCheck, 
  FileCode, 
  BookMarked, 
  GitBranch, 
  Lock, 
  CheckCircle2, 
  Globe, 
  ExternalLink,
  Sliders,
  Type
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [lang, setLang] = useState<Language>('id');
  const [viewportMode, setViewportMode] = useState<ViewportMode>('responsive');
  const [sslSecure, setSslSecure] = useState<boolean>(true);
  const [fontScale, setFontScale] = useState<'normal' | 'large'>('normal');

  // Modals state
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCloudflareGuideOpen, setIsCloudflareGuideOpen] = useState(false);
  const [isBladeCodeOpen, setIsBladeCodeOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Active section tracking
  const [activeSection, setActiveSection] = useState('home');

  // User state
  const [user, setUser] = useState<UserProfile | null>(null);

  // Logs and Notifications state
  const [logs, setLogs] = useState<ActivityLog[]>(INITIAL_LOGS);
  const [notifications, setNotifications] = useState<SecurityNotification[]>(INITIAL_NOTIFICATIONS);

  // Toggle dark mode class on document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'fitur', 'katalog', 'kontak'];
      const scrollPos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginSuccess = (loggedInUser: UserProfile) => {
    setUser(loggedInUser);
    const newLog: ActivityLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString('id-ID') + ' WIB',
      eventType: 'login',
      severity: 'success',
      description: `Autentikasi multi-faktor berhasil untuk NIM: ${loggedInUser.nim} (${loggedInUser.name})`,
      ipAddress: '180.252.170.89',
      location: 'Cilacap, Jawa Tengah',
      userAgent: navigator.userAgent.slice(0, 45) + '...',
    };
    setLogs((prev) => [newLog, ...prev]);

    const newNotif: SecurityNotification = {
      id: `notif-${Date.now()}`,
      title: 'Login Berhasil Terverifikasi',
      message: `Selamat datang kembali, ${loggedInUser.name}. Sesi aktif dilindungi TLS 1.3.`,
      type: 'academic',
      timestamp: 'Baru saja',
      read: false,
      severity: 'low',
    };
    setNotifications((prev) => [newNotif, ...prev]);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAddSimulatedAlert = () => {
    const fakeAlertLog: ActivityLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString('id-ID') + ' WIB',
      eventType: 'security_alert',
      severity: 'critical',
      description: 'Cloudflare WAF memblokir 12 percobaan SQL Injection pada endpoint /login',
      ipAddress: '198.51.100.88',
      location: 'Anonymized Proxy Network',
      userAgent: 'Automated-Scanner-Bot/2.1',
    };
    setLogs((prev) => [fakeAlertLog, ...prev]);

    const fakeAlertNotif: SecurityNotification = {
      id: `notif-${Date.now()}`,
      title: 'Peringatan Keamanan Terdeteksi!',
      message: 'Cloudflare WAF berhasil memblokir serangan mencurigakan dari IP 198.51.100.88.',
      type: 'security',
      timestamp: 'Baru saja',
      read: false,
      severity: 'high',
    };
    setNotifications((prev) => [fakeAlertNotif, ...prev]);
    setIsNotificationsOpen(true);
  };

  const unreadNotifsCount = notifications.filter((n) => !n.read).length;

  return (
    <DeviceFrameWrapper
      mode={viewportMode}
      onSelectMode={setViewportMode}
      sslSecure={sslSecure}
      onToggleSslSimulation={() => setSslSecure(!sslSecure)}
    >
      <div className={`min-h-screen flex flex-col ${fontScale === 'large' ? 'text-lg' : ''}`}>
        
        {/* Navigation Bar (Sesuai kriteria tugas nomor 1) */}
        <Navbar
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
          lang={lang}
          onToggleLanguage={() => setLang(lang === 'id' ? 'en' : 'id')}
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)}
          onOpenBladeCode={() => setIsBladeCodeOpen(true)}
          onOpenDocs={() => setIsDocsOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          unreadNotifsCount={unreadNotifsCount}
          user={user}
          onLogout={handleLogout}
          activeSection={activeSection}
        />

        {/* Floating Quick Action Hub */}
        <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold text-white">Status Penugasan Praktikum:</span>
              <span className="hidden sm:inline">Navbar & Grid 3-Card Tailwind Aktif</span>
            </div>

            <div className="flex items-center gap-2.5">
              {/* Font scaling toggle for accessibility */}
              <button
                onClick={() => setFontScale(fontScale === 'normal' ? 'large' : 'normal')}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-800 hover:bg-emerald-700 text-[11px] text-emerald-200"
                title="Atur Ukuran Teks Aksesibilitas"
              >
                <Type className="w-3 h-3" />
                <span>{fontScale === 'normal' ? 'Teks +A' : 'Teks Normal'}</span>
              </button>

              <button
                onClick={() => setIsBladeCodeOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] shadow-sm transition-colors"
              >
                <FileCode className="w-3 h-3" />
                <span>Salin welcome.blade.php</span>
              </button>

              <button
                onClick={() => setIsDocsOpen(true)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-800 hover:bg-emerald-700 text-[11px] text-emerald-200"
              >
                <BookMarked className="w-3 h-3" />
                <span>README.md</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            lang={lang}
            onExploreFeatures={() => {
              const el = document.getElementById('fitur');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onExploreCatalog={() => {
              const el = document.getElementById('katalog');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)}
          />

          {/* 3-Card Feature Grid (Sesuai kriteria tugas nomor 2) */}
          <FeatureGrid
            lang={lang}
            onSelectCatalog={() => {
              const el = document.getElementById('katalog');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenHelpdesk={() => {
              const el = document.getElementById('kontak');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenLogin={() => setIsLoginOpen(true)}
          />

          {/* Course Catalog Section */}
          <CatalogSection lang={lang} />

          {/* Real-Time Security & Activity Monitoring Panel */}
          <section className="py-12 bg-slate-100 dark:bg-slate-950/80 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <SecurityAuditLogs
                logs={logs}
                onClearLogs={() => setLogs([])}
                onAddSimulatedAlert={handleAddSimulatedAlert}
              />
              <AnalyticsDashboard />
            </div>
          </section>

          {/* Contact & Support Section */}
          <ContactSection lang={lang} />
        </main>

        {/* Official Campus Footer */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
              
              <div className="md:col-span-2 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-extrabold text-xs">
                    UN
                  </div>
                  <span className="text-white font-bold text-base">
                    Sistem Informasi UNUGHA Cilacap
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                  Portal resmi layanan akademik dan teknologi informasi Universitas Nahdlatul Ulama Al Ghazali Cilacap, terhubung dengan Cloudflare Edge CDN dan GitHub Pages.
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span>Domain: rizqighaniadinata.my.id</span>
                  <span>·</span>
                  <span>Repo: ghani24ep10007-spec</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Tautan Cepat
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
                  <li><a href="#fitur" className="hover:text-emerald-400 transition-colors">3 Fitur Utama (CSS Grid)</a></li>
                  <li><a href="#katalog" className="hover:text-emerald-400 transition-colors">Katalog Modul Kuliah</a></li>
                  <li><a href="#kontak" className="hover:text-emerald-400 transition-colors">Layanan & Helpdesk</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Alat Pengujian & Pengumpulan
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <button onClick={() => setIsBladeCodeOpen(true)} className="hover:text-emerald-400 transition-colors text-left">
                      Kode welcome.blade.php
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setIsCloudflareGuideOpen(true)} className="hover:text-emerald-400 transition-colors text-left">
                      Panduan Cloudflare SSL & DNS
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setIsDocsOpen(true)} className="hover:text-emerald-400 transition-colors text-left">
                      Dokumentasi README.md
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setViewportMode('windows')} className="hover:text-emerald-400 transition-colors text-left">
                      Pratinjau Windows 11 Chrome
                    </button>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div>
                &copy; {new Date().getFullYear()} UNUGHA Cilacap. Dikembangkan oleh <strong>Ghani Rizqi Ghaniadinata</strong> (NIM: 24ep10007).
              </div>
              <div className="flex items-center gap-4">
                <span>Commit: feat: menambahkan navbar dan grid fitur pada landing page</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Interactive Modals */}
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />

        <CloudflareGuideModal
          isOpen={isCloudflareGuideOpen}
          onClose={() => setIsCloudflareGuideOpen(false)}
          sslSecure={sslSecure}
          onToggleSslSimulation={() => setSslSecure(!sslSecure)}
        />

        <LaravelBladeModal
          isOpen={isBladeCodeOpen}
          onClose={() => setIsBladeCodeOpen(false)}
        />

        <DocumentationModal
          isOpen={isDocsOpen}
          onClose={() => setIsDocsOpen(false)}
        />

        <NotificationCenter
          isOpen={isNotificationsOpen}
          onClose={() => setIsNotificationsOpen(false)}
          notifications={notifications}
          onMarkAllAsRead={() => {
            setNotifications(notifications.map((n) => ({ ...n, read: true })));
          }}
          onClearNotifications={() => setNotifications([])}
        />

      </div>
    </DeviceFrameWrapper>
  );
}
