import React, { useState } from 'react';
import { 
  TrendingUp, 
  Activity, 
  Zap, 
  Globe, 
  Cpu, 
  Server, 
  ShieldCheck, 
  Smartphone, 
  Monitor, 
  ArrowUpRight 
} from 'lucide-react';

export const AnalyticsDashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d'>('24h');

  const stats = [
    {
      title: 'Kecepatan Muat (TTFB)',
      value: '84 ms',
      change: '-28% lebih cepat',
      sub: 'Ditenagai Cloudflare Edge CDN',
      icon: Zap,
      color: 'emerald',
    },
    {
      title: 'Cloudflare Cache Hit Ratio',
      value: '89.4%',
      change: '+14% optimalisasi',
      sub: 'Auto-Minify CSS & JS aktif',
      icon: Activity,
      color: 'sky',
    },
    {
      title: 'Permintaan Terenkripsi (SSL)',
      value: '100%',
      change: 'Strict HTTPS enforced',
      sub: 'Port 80 dialihkan ke 443',
      icon: ShieldCheck,
      color: 'amber',
    },
    {
      title: 'Total Kunjungan Portal',
      value: '14,820',
      change: '+32.4% minggu ini',
      sub: 'Sivitas akademika UNUGHA',
      icon: Globe,
      color: 'purple',
    },
  ];

  const devices = [
    { name: 'Windows 11 / 10', percentage: 54, color: 'bg-emerald-600' },
    { name: 'Smartphone (Android / iOS)', percentage: 38, color: 'bg-teal-500' },
    { name: 'macOS Safari / Chrome', percentage: 8, color: 'bg-slate-500' },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Dashboard Analitik Performa & Penggunaan Sistem
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-semibold">
              Cloudflare Speed Insights
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Metrik telemetri performa akses riil, rasio cache CDN, efisiensi kompresi, dan demografi perangkat pengguna.
          </p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg text-xs font-medium">
          {(['24h', '7d', '30d'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-3 py-1 rounded-md transition-colors ${
                timeframe === t
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t === '24h' ? '24 Jam' : t === '7d' ? '7 Hari' : '30 Hari'}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-semibold">{stat.title}</span>
                <Icon className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>{stat.change}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                  {stat.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Device & Performance breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        
        {/* Device Distribution */}
        <div className="lg:col-span-6 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Distribusi Perangkat Pengakses
            </h4>
            <span className="text-xs text-slate-400 font-mono">100% Responsif</span>
          </div>

          <div className="space-y-4">
            {devices.map((device, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{device.name}</span>
                  <span className="font-mono font-semibold text-slate-900 dark:text-white">{device.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${device.color} rounded-full transition-all duration-500`} 
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
            Data menunjukkan akses dominan berasal dari desktop Windows 11 di lab kampus dan smartphone mahasiswa saat pengisian jadwal kuliah.
          </p>
        </div>

        {/* Cloudflare Optimization Status */}
        <div className="lg:col-span-6 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Optimalisasi Jaringan & Auto-Minify
            </h4>
            <span className="text-xs text-emerald-600 font-semibold">Aktif</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-slate-400 text-[11px]">Kompresi CSS Tailwind</div>
              <div className="font-mono font-bold text-emerald-600 text-sm mt-0.5">-74% Size</div>
              <div className="text-[10px] text-slate-500">Purged unused classes</div>
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-slate-400 text-[11px]">Brotli Compression</div>
              <div className="font-mono font-bold text-sky-600 text-sm mt-0.5">Aktif (Level 11)</div>
              <div className="text-[10px] text-slate-500">Menghemat 3.4 MB/load</div>
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-slate-400 text-[11px]">HTTP/3 (QUIC)</div>
              <div className="font-mono font-bold text-slate-800 dark:text-slate-200 text-sm mt-0.5">Terkoneksi</div>
              <div className="text-[10px] text-slate-500">Zero round-trip handshake</div>
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-slate-400 text-[11px]">Edge Node Jakarta</div>
              <div className="font-mono font-bold text-slate-800 dark:text-slate-200 text-sm mt-0.5">CGK Node</div>
              <div className="text-[10px] text-slate-500">Latency Cilacap &lt; 22ms</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
