import React, { useState } from 'react';
import { 
  X, 
  BookMarked, 
  Copy, 
  Check, 
  Download, 
  Terminal, 
  GitBranch, 
  Globe, 
  ShieldCheck, 
  Key 
} from 'lucide-react';

interface DocumentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentationModal: React.FC<DocumentationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const readmeContent = `# Sistem Informasi UNUGHA (Universitas Nahdlatul Ulama Al Ghazali Cilacap)
> Repositori Resmi Tugas Praktikum Sistem Informasi & Web Enterprise
> Pengembang: **Ghani Rizqi Ghaniadinata** (Email: \`ghani.24ep10007@students.unugha.id\`)
> Domain Aktif: [https://rizqighaniadinata.my.id](https://rizqighaniadinata.my.id)

---

## 📌 Ringkasan Implementasi Tugas

Aplikasi ini mengimplementasikan seluruh kriteria tugas dengan standar industri web modern:
1. **Navigation Bar Sederhana**:
   - Logo UNUGHA & Teks "Sistem Informasi UNUGHA"
   - Menu: Home, Katalog, Kontak
   - Tombol Login interaktif dengan Multi-Factor Authentication (MFA / 2FA)
2. **3 Card Informasi Ringkas (CSS Grid)**:
   - Card 1: Portal Akademik & SIAKAD (KRS, KHS, Nilai, Transkrip)
   - Card 2: Katalog Modul & Kurikulum S1 Sistem Informasi
   - Card 3: Helpdesk & Layanan Terpadu Mahasiswa
3. **Styling 100% Tailwind CSS**: Seluruh antarmuka menggunakan utility classes murni tanpa inline styles.
4. **Responsivitas Multi-Platform**:
   - Tersedia simulator pratinjau responsif untuk Windows 11 Chrome, macOS Safari, dan Mobile (Smartphone).
5. **Panduan Konfigurasi Cloudflare & SSL**:
   - Mengatasi status "Not secure" pada domain \`rizqighaniadinata.my.id\` dengan mengaktifkan SSL/TLS Strict, Always Use HTTPS, dan proxy oranye.
   - Konfigurasi Subdomain Cloudflare Pages (contoh: \`ghani.rizqighaniadinata.my.id\` atau \`si.rizqighaniadinata.my.id\`).
   - Panduan Auto-Minify (HTML, CSS, JS) dan kompresi Brotli.
6. **Integrasi Kode Laravel**:
   - Disediakan berkas siap pakai untuk \`resources/views/welcome.blade.php\`.

---

## 🚀 Panduan Instalasi Lokal

### Prasyarat:
- Node.js versi 18 ke atas
- NPM atau PNPM

### Langkah-Langkah:
\`\`\`bash
# 1. Clone repositori dari GitHub
git clone https://github.com/ghani24ep10007-spec/unugha-sistem-informasi.git

# 2. Masuk ke direktori proyek
cd unugha-sistem-informasi

# 3. Pasang seluruh dependensi
npm install

# 4. Jalankan server pengembangan lokal (port 3000)
npm run dev

# 5. Build aplikasi untuk produksi
npm run build
\`\`\`

---

## 📦 Panduan Git Commit & Push (Syarat Tugas)

Jalankan perintah berikut di terminal:
\`\`\`bash
git add .
git commit -m "feat: menambahkan navbar dan grid fitur pada landing page"
git push origin main
\`\`\`

---

## 🔒 Mengatasi Status "Not Secure" & Setup SSL Cloudflare

Jika pada browser Anda (seperti screenshot Chrome) muncul peringatan **"Not secure"**:
1. Masuk ke [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Pilih domain \`rizqighaniadinata.my.id\`
3. Buka **SSL/TLS** -> **Overview** -> Ubah ke **Full (strict)**
4. Buka **SSL/TLS** -> **Edge Certificates** -> Aktifkan **Always Use HTTPS** = ON
5. Aktifkan **Automatic HTTPS Rewrites** = ON
6. Buka menu **DNS** -> Pastikan Proxy Status adalah **Proxied (Awan Oranye)**

---

## 🌐 Setup Subdomain pada Cloudflare Pages

1. Masuk ke **Workers & Pages** -> Pilih project Anda.
2. Buka tab **Custom domains** -> Klik **Set up a custom domain**.
3. Masukkan subdomain: \`ghani.rizqighaniadinata.my.id\` atau \`si.rizqighaniadinata.my.id\`.
4. Cloudflare otomatis membuat DNS Record CNAME ke \`<project>.pages.dev\` dengan proxy aktif.

---

## 🔌 Panduan Integrasi API Pihak Ketiga (SIAKAD & OAuth UNUGHA)

### Langkah 1: Registrasi Kredensial API
Dapatkan Client ID & Client Secret dari Biro Sistem Informasi UNUGHA atau Google Cloud Console (untuk Google Workspace unugha.id):
\`\`\`env
VITE_UNUGHA_API_BASE_URL=https://api.unugha.id/v1
VITE_UNUGHA_CLIENT_ID=unugha_si_client_2026
\`\`\`

### Langkah 2: Panggilan API dengan Autentikasi Bearer Token
\`\`\`typescript
export async function getStudentKRS(nim: string, token: string) {
  const response = await fetch(\`https://api.unugha.id/v1/mahasiswa/\${nim}/krs\`, {
    method: 'GET',
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Gagal mengambil data KRS');
  return await response.json();
}
\`\`\`

---

## 🛡️ Keamanan & Enkripsi Data
- **Multi-Factor Authentication (MFA)**: Kode verifikasi 6-digit OTP wajib untuk akses data nilai mahasiswa.
- **Enkripsi End-to-End**: Algoritma AES-256 GCM untuk pengiriman formulir tiket helpdesk.
- **Audit Log**: Seluruh upaya login dan pemblokiran firewall tercatat secara real-time.

---

&copy; 2026 Universitas Nahdlatul Ulama Al Ghazali Cilacap (UNUGHA).
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(readmeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([readmeContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Dokumentasi Lengkap README.md
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Lengkap dengan petunjuk tugas kampus, instalasi, Cloudflare SSL, Subdomain, dan API
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Tersalin!' : 'Salin Markdown'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
              title="Unduh file README.md"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Unduh README.md</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content viewer */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans text-xs sm:text-sm space-y-4">
          <pre className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {readmeContent}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Siap dikumpulkan pada portal e-learning kampus UNUGHA</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
