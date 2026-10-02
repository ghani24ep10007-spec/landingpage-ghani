import React from 'react';
import { 
  X, 
  Bell, 
  ShieldAlert, 
  CheckCircle, 
  BookOpen, 
  AlertTriangle, 
  Trash2, 
  Check 
} from 'lucide-react';
import { SecurityNotification } from '../types';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: SecurityNotification[];
  onMarkAllAsRead: () => void;
  onClearNotifications: () => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead,
  onClearNotifications,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full shadow-2xl overflow-hidden mt-12 sm:mr-6 flex flex-col max-h-[80vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Notifikasi Sistem Real-Time
              </h4>
              <p className="text-[11px] text-slate-500">
                Pembaruan keamanan & informasi akademik
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onMarkAllAsRead}
              className="p-1.5 text-xs text-slate-500 hover:text-emerald-600 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Tandai semua dibaca"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={onClearNotifications}
              className="p-1.5 text-xs text-slate-400 hover:text-rose-600 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Hapus semua"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60 p-2 space-y-1">
          {notifications.map((notif) => {
            const Icon = 
              notif.type === 'security' && notif.severity === 'high' ? AlertTriangle :
              notif.type === 'security' ? ShieldAlert : BookOpen;
            
            const iconColor = 
              notif.severity === 'high' ? 'text-rose-600 bg-rose-50 dark:bg-rose-950/60' :
              notif.type === 'security' ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60' :
              'text-sky-600 bg-sky-50 dark:bg-sky-950/60';

            return (
              <div
                key={notif.id}
                className={`p-3 rounded-xl transition-colors flex items-start gap-3 ${
                  notif.read ? 'opacity-70 bg-transparent' : 'bg-slate-50/80 dark:bg-slate-800/40'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {notif.title}
                    </h5>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap">
                      {notif.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {notif.message}
                  </p>
                </div>
              </div>
            );
          })}

          {notifications.length === 0 && (
            <div className="text-center py-8 text-xs text-slate-400">
              Tidak ada notifikasi saat ini.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Notifikasi Push Web Aktif</span>
          <span className="font-semibold text-emerald-600">Terhubung</span>
        </div>

      </div>
    </div>
  );
};
