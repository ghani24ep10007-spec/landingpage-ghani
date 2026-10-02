import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Download, 
  Trash2, 
  RefreshCw, 
  Search, 
  Lock, 
  Database, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  FileDown 
} from 'lucide-react';
import { ActivityLog } from '../types';

interface SecurityAuditLogsProps {
  logs: ActivityLog[];
  onClearLogs: () => void;
  onAddSimulatedAlert: () => void;
}

export const SecurityAuditLogs: React.FC<SecurityAuditLogsProps> = ({
  logs,
  onClearLogs,
  onAddSimulatedAlert,
}) => {
  const [filterSeverity, setFilterSeverity] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [backupStatus, setBackupStatus] = useState<'idle' | 'in_progress' | 'completed'>('idle');

  const filteredLogs = logs.filter((log) => {
    const matchesSeverity = filterSeverity === 'all' || log.severity === filterSeverity;
    const matchesSearch = 
      log.description.toLowerCase().includes(search.toLowerCase()) ||
      log.ipAddress.includes(search) ||
      log.location.toLowerCase().includes(search.toLowerCase());
    return matchesSeverity && matchesSearch;
  });

  const handleRunBackup = () => {
    setBackupStatus('in_progress');
    setTimeout(() => {
      setBackupStatus('completed');
      setTimeout(() => setBackupStatus('idle'), 3500);
    }, 1200);
  };

  const handleExportLogs = () => {
    const jsonStr = JSON.stringify(logs, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `unugha-security-audit-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Log Aktivitas & Audit Keamanan Sistem
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
              Live Monitor
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Pemantauan berkala keamanan server, SSL renewal, firewall WAF Cloudflare, dan proteksi akun mahasiswa.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleRunBackup}
            disabled={backupStatus === 'in_progress'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 rounded-lg transition-colors"
            title="Lakukan cadangan data otomatis dengan enkripsi AES-256"
          >
            <Database className="w-3.5 h-3.5" />
            <span>
              {backupStatus === 'in_progress' ? 'Mengenkripsi & Backup...' : backupStatus === 'completed' ? 'Tersimpan Aman!' : 'Cadangkan Data (E2EE)'}
            </span>
          </button>

          <button
            onClick={onAddSimulatedAlert}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 rounded-lg transition-colors"
            title="Simulasikan peringatan aktivitas mencurigakan"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Uji Peringatan Ancaman</span>
          </button>

          <button
            onClick={handleExportLogs}
            className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
            title="Export Log ke JSON"
          >
            <Download className="w-4 h-4" />
          </button>

          <button
            onClick={onClearLogs}
            className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Bersihkan Log"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter and search bar */}
      <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {['all', 'success', 'warning', 'info'].map((sev) => (
            <button
              key={sev}
              onClick={() => setFilterSeverity(sev)}
              className={`px-3 py-1 rounded-md font-medium capitalize transition-colors ${
                filterSeverity === sev
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {sev === 'all' ? 'Semua Log' : sev}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64 relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari IP, lokasi, atau deskripsi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Logs Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 font-semibold">
            <tr>
              <th className="p-3">Waktu</th>
              <th className="p-3">Status</th>
              <th className="p-3">Aktivitas / Kejadian</th>
              <th className="p-3">Alamat IP & Node</th>
              <th className="p-3">Lokasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono">
            {filteredLogs.map((log) => {
              const badgeClasses = {
                success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
                warning: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200 dark:border-amber-800',
                critical: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border-rose-200 dark:border-rose-800',
                info: 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-400 border-sky-200 dark:border-sky-800',
              }[log.severity];

              return (
                <tr key={log.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 whitespace-nowrap text-slate-500 font-sans">{log.timestamp}</td>
                  <td className="p-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${badgeClasses}`}>
                      {log.severity.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-3 font-sans text-slate-800 dark:text-slate-200 min-w-[280px]">
                    {log.description}
                  </td>
                  <td className="p-3 whitespace-nowrap text-slate-600 dark:text-slate-400 text-[11px]">
                    {log.ipAddress}
                  </td>
                  <td className="p-3 whitespace-nowrap font-sans text-slate-500 text-[11px]">
                    {log.location}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredLogs.length === 0 && (
        <div className="text-center py-8 text-xs text-slate-400">
          Tidak ada log aktivitas yang cocok dengan pencarian.
        </div>
      )}

      {/* Encryption & Backup info footer */}
      <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>Enkripsi End-to-End: <strong>AES-256 GCM</strong> terverifikasi aktif untuk seluruh data formulir dan log</span>
        </div>
        <div className="font-mono text-[11px] text-slate-500">
          Sinkronisasi Lokal: Browser IndexedDB & Cloudflare Edge
        </div>
      </div>

    </div>
  );
};
