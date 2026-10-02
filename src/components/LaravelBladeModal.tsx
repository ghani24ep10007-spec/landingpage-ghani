import React, { useState } from 'react';
import { 
  X, 
  Code2, 
  Copy, 
  Check, 
  Download, 
  FileCode, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { WELCOME_BLADE_CODE } from '../data/mockData';

interface LaravelBladeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LaravelBladeModal: React.FC<LaravelBladeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(WELCOME_BLADE_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([WELCOME_BLADE_CODE], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'welcome.blade.php';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative text-slate-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  resources/views/welcome.blade.php
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700">
                  Laravel Blade + Tailwind
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Memenuhi syarat tugas 100%: Navbar 3-zona, 3 Card Grid, Tailwind CSS murni tanpa inline CSS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Tersalin!' : 'Salin Kode'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Unduh File welcome.blade.php"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Unduh File</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Verification banner */}
        <div className="px-5 py-2.5 bg-slate-950/80 border-b border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              1. Navigation Bar (Logo UNUGHA, Home/Katalog/Kontak, Login)
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              2. 3 Card Grid Fitur Utama
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              3. Tailwind CSS Utilitas Murni
            </span>
          </div>
          <span className="font-mono text-amber-400 text-[11px]">
            commit: feat: menambahkan navbar dan grid fitur pada landing page
          </span>
        </div>

        {/* Code display with line numbers */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-950 font-mono text-xs leading-relaxed text-slate-300">
          <pre className="overflow-x-auto whitespace-pre">
            <code>{WELCOME_BLADE_CODE}</code>
          </pre>
        </div>

        {/* Instructions footer */}
        <div className="p-3.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div>
            <strong>Instalasi di Laravel Anda:</strong> Buka folder project Laravel → paste isi file ini ke <code>resources/views/welcome.blade.php</code>.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
