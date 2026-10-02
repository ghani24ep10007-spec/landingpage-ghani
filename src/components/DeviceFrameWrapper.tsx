import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Laptop, 
  Maximize2, 
  ShieldCheck, 
  AlertTriangle, 
  RotateCw, 
  Lock, 
  Unlock,
  ChevronLeft,
  ChevronRight,
  Minus,
  Square,
  X
} from 'lucide-react';
import { ViewportMode } from '../types';

interface DeviceFrameWrapperProps {
  mode: ViewportMode;
  onSelectMode: (mode: ViewportMode) => void;
  sslSecure: boolean;
  onToggleSslSimulation: () => void;
  children: React.ReactNode;
}

export const DeviceFrameWrapper: React.FC<DeviceFrameWrapperProps> = ({
  mode,
  onSelectMode,
  sslSecure,
  onToggleSslSimulation,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-950 transition-colors">
      
      {/* Top Device Switcher Floating Toolbar */}
      <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md text-white border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Device Mode Selectors */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-lg">
          <button
            onClick={() => onSelectMode('responsive')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
              mode === 'responsive' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
            title="Layar Penuh Bebas / Responsif Alami"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Responsif Penuh</span>
          </button>

          <button
            onClick={() => onSelectMode('windows')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
              mode === 'windows' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
            title="Simulasi Tampilan Windows 11 Chrome (Seperti Screenshot Anda)"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Windows 11 Frame</span>
          </button>

          <button
            onClick={() => onSelectMode('mac')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
              mode === 'mac' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
            title="Simulasi Tampilan macOS Safari"
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>macOS Safari</span>
          </button>

          <button
            onClick={() => onSelectMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
              mode === 'mobile' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
            title="Simulasi Tampilan Ponsel / Smartphone"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (Ponsel)</span>
          </button>
        </div>

        {/* SSL Status Switcher Simulator (Addresses user's "Not secure" screenshot) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 hidden sm:inline">Simulasi Status SSL:</span>
            <button
              onClick={onToggleSslSimulation}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                sslSecure 
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' 
                  : 'bg-rose-950 text-rose-300 border border-rose-700 animate-pulse'
              }`}
              title="Klik untuk mensimulasikan status SSL/TLS Cloudflare"
            >
              {sslSecure ? (
                <>
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Aman (HTTPS) - Strict</span>
                </>
              ) : (
                <>
                  <Unlock className="w-3 h-3 text-rose-400" />
                  <span>Not secure (HTTP Biasa)</span>
                </>
              )}
            </button>
          </div>
          <span className="text-[11px] text-slate-500 font-mono hidden md:inline">
            rizqighaniadinata.my.id
          </span>
        </div>

      </div>

      {/* Frame Container */}
      <div className="flex-1 flex justify-center items-start p-0 sm:p-4 md:p-6 transition-all">
        {mode === 'responsive' && (
          <div className="w-full bg-white dark:bg-slate-900 shadow-sm transition-colors">
            {children}
          </div>
        )}

        {mode === 'windows' && (
          <div className="w-full max-w-[1260px] bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700/80 my-2">
            {/* Windows 11 Chrome Title Bar */}
            <div className="bg-[#1f2229] px-4 py-2 flex items-center justify-between border-b border-slate-800 text-slate-300 select-none">
              <div className="flex items-center gap-2">
                {/* Active Tab */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2d323e] text-slate-200 rounded-t-lg text-xs font-medium border-t-2 border-emerald-500">
                  <div className="w-3.5 h-3.5 rounded bg-emerald-600 flex items-center justify-center text-[8px] text-white font-bold">
                    U
                  </div>
                  <span className="max-w-[180px] truncate">Sistem Informasi UNUGHA</span>
                  <X className="w-3 h-3 text-slate-400 hover:text-white cursor-pointer ml-1" />
                </div>
              </div>

              {/* Windows Window Controls */}
              <div className="flex items-center gap-4 text-slate-400">
                <Minus className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                <Square className="w-3 h-3 hover:text-white cursor-pointer" />
                <X className="w-3.5 h-3.5 hover:text-rose-400 cursor-pointer" />
              </div>
            </div>

            {/* Chrome Navigation & URL Bar (matching user's screenshot) */}
            <div className="bg-[#242731] px-4 py-2 flex items-center gap-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-slate-400">
                <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-white" />
                <ChevronRight className="w-4 h-4 text-slate-600" />
                <RotateCw className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
              </div>

              {/* Omnibox URL */}
              <div className="flex-1 bg-[#1a1c23] rounded-full px-3.5 py-1.5 flex items-center gap-2 text-xs border border-slate-700/60">
                {sslSecure ? (
                  <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <Lock className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">https://</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-rose-400 font-medium bg-rose-950/60 px-1.5 py-0.5 rounded">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Not secure</span>
                  </div>
                )}
                <span className="text-slate-200 font-mono">
                  rizqighaniadinata.my.id
                </span>
                <span className="text-slate-500 font-mono hidden sm:inline">
                  /sistem-informasi-unugha
                </span>
              </div>
            </div>

            {/* Embedded Web View Content */}
            <div className="max-h-[76vh] overflow-y-auto bg-white dark:bg-slate-900">
              {children}
            </div>

            {/* Windows 11 Taskbar Mockup */}
            <div className="bg-[#181b22] px-4 py-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 select-none">
              <div className="flex items-center gap-3 mx-auto sm:mx-0">
                <div className="w-4 h-4 text-sky-400 font-bold flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-sm" />
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-sm" />
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-sm" />
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-sm" />
                  </div>
                </div>
                <span className="hidden sm:inline font-sans text-slate-300">Windows 11 Pro · UNUGHA System Workstation</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                <span>ENG</span>
                <span>15:33 WIB</span>
              </div>
            </div>
          </div>
        )}

        {mode === 'mac' && (
          <div className="w-full max-w-[1200px] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 my-2">
            {/* macOS Safari Header Bar */}
            <div className="bg-[#2a2c30] px-4 py-3 flex items-center justify-between border-b border-slate-700/70 select-none">
              {/* Traffic Light Buttons */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
              </div>

              {/* Safari URL bar */}
              <div className="w-1/2 max-w-md bg-[#1e2023] rounded-lg px-3 py-1 flex items-center justify-center gap-2 text-xs text-slate-300 font-mono border border-slate-700/50">
                {sslSecure ? (
                  <Lock className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Unlock className="w-3 h-3 text-rose-400" />
                )}
                <span>rizqighaniadinata.my.id</span>
              </div>

              <div className="w-12" />
            </div>

            {/* Embedded Content */}
            <div className="max-h-[78vh] overflow-y-auto bg-white dark:bg-slate-900">
              {children}
            </div>
          </div>
        )}

        {mode === 'mobile' && (
          <div className="w-[390px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-4 border-slate-700 my-4 relative">
            {/* Smartphone Dynamic Island / Notch */}
            <div className="w-28 h-5 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
            </div>

            {/* Smartphone Browser Bar */}
            <div className="bg-slate-800 rounded-xl px-3 py-1.5 mb-2 flex items-center justify-between text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-1.5 truncate">
                {sslSecure ? (
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-rose-400 shrink-0" />
                )}
                <span className="text-[11px] truncate">rizqighaniadinata.my.id</span>
              </div>
              <RotateCw className="w-3 h-3 text-slate-400 shrink-0" />
            </div>

            {/* Mobile Screen Content */}
            <div className="h-[680px] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 scrollbar-none">
              {children}
            </div>

            {/* Mobile Home Indicator bar */}
            <div className="w-32 h-1 bg-slate-600 rounded-full mx-auto mt-3" />
          </div>
        )}
      </div>

    </div>
  );
};
