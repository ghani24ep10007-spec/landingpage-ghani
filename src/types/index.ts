export type ViewportMode = 'responsive' | 'windows' | 'mac' | 'mobile';

export type Language = 'id' | 'en';

export interface ActivityLog {
  id: string;
  timestamp: string;
  eventType: 'login' | 'mfa_verified' | 'ssl_renewed' | 'cache_purged' | 'api_request' | 'security_alert';
  severity: 'info' | 'warning' | 'critical' | 'success';
  description: string;
  ipAddress: string;
  location: string;
  userAgent: string;
}

export interface CourseCatalogItem {
  id: string;
  code: string;
  title: string;
  sks: number;
  semester: number;
  lecturer: string;
  category: 'Wajib' | 'Pilihan' | 'Praktikum';
  description: string;
}

export interface SecurityNotification {
  id: string;
  title: string;
  message: string;
  type: 'security' | 'academic' | 'system';
  timestamp: string;
  read: boolean;
  severity: 'low' | 'medium' | 'high';
}

export interface UserProfile {
  name: string;
  nim: string;
  email: string;
  prodi: string;
  status: string;
  avatarUrl?: string;
  twoFactorEnabled: boolean;
}
