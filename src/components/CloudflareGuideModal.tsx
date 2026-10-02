import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Globe, 
  Zap, 
  Lock, 
  Settings, 
  Layers, 
  Check 
} from 'lucide-react';

interface CloudflareGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  sslSecure: boolean;
  onToggleSslSimulation: () => void;
}

export const CloudflareGuideModal: React.FC<CloudflareGuideModalProps> = ({
  isOpen,
  onClose,
  sslSecure,
  onToggleSslSimulation,
}) => {
  const [activeTab, setActiveTab] = useState<'fix_ssl' | 'subdomain' | 'dns' | 'autominify' | 'git'>('fix_ssl');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Panduan SSL/TLS & Cloudflare Pages (rizqighaniadinata.my.id)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Solusi mengatasi peringatan "Not secure", Subdomain, DNS, dan Auto-Minify
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 text-xs font-semibold scrollbar-none">
          <button
            onClick={() => setActiveTab('fix_ssl')}
            className={`py-3 px-3.5 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'fix_ssl'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Mengapa "Not secure"?</span>
          </button>

          <button
            onClick={() => setActiveTab('subdomain')}
            className={`py-3 px-3.5 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'subdomain'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Setup Subdomain Pages</span>
          </button>

          <button
            onClick={() => setActiveTab('dns')}
            className={`py-3 px-3.5 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'dns'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Konfigurasi DNS CNAME</span>
          </button>

          <button
            onClick={() => setActiveTab('autominify')}
            className={`py-3 px-3.5 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'autominify'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Auto-Minify & Cache</span>
          </button>

          <button
            onClick={() => setActiveTab('git')}
            className={`py-3 px-3.5 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'git'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Commit & GitHub Push</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
          
          {activeTab === 'fix_ssl' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 dark:text-amber-200 text-sm">
                    Penyebab Status "Not secure" pada <span className="font-mono">rizqighaniadinata.my.id</span>
                  </h4>
                  <p className="mt-1 text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    Berdasarkan screenshot Anda, browser Chrome menampilkan <em>"Not secure"</em> karena koneksi diakses melalui protokol <strong>HTTP (port 80)</strong> tanpa sertifikat SSL terenkripsi, atau Cloudflare SSL belum diset ke mode <strong>Full (strict)</strong> dan fitur <strong>Always Use HTTPS</strong> belum diaktifkan.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Langkah-Langkah Menghilangkan "Not secure" di Dashboard Cloudflare:
                </h4>
                
                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">1</span>
                      <span>Ubah Mode SSL/TLS ke "Full (strict)"</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 pl-7">
                      Masuk ke Cloudflare Dashboard → Pilih domain <code>rizqighaniadinata.my.id</code> → Menu <strong>SSL/TLS</strong> → Pada bagian <em>Overview</em>, pilih <strong>Full (strict)</strong>. Mode ini memastikan koneksi end-to-end terenkripsi tanpa celah.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">2</span>
                      <span>Aktifkan "Always Use HTTPS"</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 pl-7">
                      Masuk ke menu <strong>SSL/TLS</strong> → <strong>Edge Certificates</strong> → Geser tombol <strong>Always Use HTTPS</strong> ke posisi <strong>ON</strong>. Setiap pengunjung yang mengetik http:// otomatis dialihkan ke https:// aman.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">3</span>
                      <span>Aktifkan "Automatic HTTPS Rewrites"</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 pl-7">
                      Di halaman yang sama, aktifkan <strong>Automatic HTTPS Rewrites</strong> untuk mencegah mixed-content (gambar atau script yang masih memuat lewat HTTP).
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">4</span>
                      <span>Pastikan Proxy Status Berwarna Oranye (Proxied)</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 pl-7">
                      Buka menu <strong>DNS</strong> → <strong>Records</strong>. Pastikan status awan untuk domain/subdomain adalah <strong>Proxied (Awan Oranye)</strong>, BUKAN <em>DNS only (Awan Abu-abu)</em>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                <span className="text-xs font-medium">Uji simulasi status aman di pratinjau browser:</span>
                <button
                  onClick={onToggleSslSimulation}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
                >
                  {sslSecure ? 'Ganti ke Not Secure' : 'Ganti ke Aman (HTTPS)'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'subdomain' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Cara Deploy Landing Page dengan Subdomain di Cloudflare Pages:
              </h4>

              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="font-semibold text-slate-900 dark:text-white">Langkah 1: Hubungkan Repositori GitHub ke Cloudflare Pages</div>
                  <ol className="list-decimal pl-5 mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    <li>Buka <a href="https://dash.cloudflare.com" target="_blank" rel="noreferrer" className="text-emerald-600 underline">dash.cloudflare.com</a> dan masuk ke akun Anda.</li>
                    <li>Di bilah kiri, klik <strong>Compute (Workers & Pages)</strong> → <strong>Pages</strong>.</li>
                    <li>Klik <strong>Create application</strong> → Pilih tab <strong>Pages</strong> → <strong>Connect to Git</strong>.</li>
                    <li>Pilih repositori Anda: <code>ghani24ep10007-spec</code>.</li>
                  </ol>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="font-semibold text-slate-900 dark:text-white">Langkah 2: Konfigurasi Build Settings</div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-800 p-2.5 rounded font-mono">
                    <div>Framework preset:</div>
                    <div className="font-semibold">Vite (atau Create React App)</div>
                    <div>Build command:</div>
                    <div className="font-semibold text-emerald-600">npm run build</div>
                    <div>Build output directory:</div>
                    <div className="font-semibold text-emerald-600">dist</div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Klik <strong>Save and Deploy</strong>. Cloudflare akan merilis URL default: <code>nama-project.pages.dev</code>.</p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="font-semibold text-slate-900 dark:text-white">Langkah 3: Atur Custom Domain / Subdomain</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Pada proyek Pages Anda, buka tab <strong>Custom domains</strong> → Klik <strong>Set up a custom domain</strong>.
                  </p>
                  <div className="mt-2 p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs space-y-1">
                    <div>Contoh domain yang Anda gunakan:</div>
                    <div className="font-mono font-bold text-emerald-600">ghani.rizqighaniadinata.my.id</div>
                    <div>atau</div>
                    <div className="font-mono font-bold text-emerald-600">si.rizqighaniadinata.my.id</div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Cloudflare otomatis menambahkan DNS CNAME dan menerbitkan sertifikat SSL Edge gratis.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dns' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Tabel Konfigurasi DNS Record di Cloudflare:
              </h4>

              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-2.5">Type</th>
                      <th className="p-2.5">Name</th>
                      <th className="p-2.5">Target / Content</th>
                      <th className="p-2.5">Proxy Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr>
                      <td className="p-2.5 text-emerald-600 font-bold">CNAME</td>
                      <td className="p-2.5">ghani</td>
                      <td className="p-2.5">unugha-si.pages.dev</td>
                      <td className="p-2.5 text-orange-500 font-semibold">Proxied (Orange Cloud)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 text-emerald-600 font-bold">CNAME</td>
                      <td className="p-2.5">@ (Root)</td>
                      <td className="p-2.5">unugha-si.pages.dev</td>
                      <td className="p-2.5 text-orange-500 font-semibold">Proxied (Orange Cloud)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 text-emerald-600 font-bold">CNAME</td>
                      <td className="p-2.5">si</td>
                      <td className="p-2.5">unugha-si.pages.dev</td>
                      <td className="p-2.5 text-orange-500 font-semibold">Proxied (Orange Cloud)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">Penting: Jangan gunakan DNS Only (Awan Abu-abu)</div>
                <p className="text-slate-500">
                  Jika Proxy Status adalah DNS Only, lalu lintas situs tidak melewati server proxy Cloudflare sehingga sertifikat SSL Cloudflare tidak dapat dipasang dan status browser menjadi "Not secure".
                </p>
              </div>
            </div>
          )}

          {activeTab === 'autominify' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Mengaktifkan Auto-Minify & Cloudflare Speed Optimization:
              </h4>

              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="font-semibold text-slate-900 dark:text-white">1. Masuk ke Menu Speed</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Di Dashboard Cloudflare domain Anda, buka <strong>Speed</strong> → <strong>Optimization</strong> → <strong>Content Optimization</strong>.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="font-semibold text-slate-900 dark:text-white">2. Centang Seluruh Opsi Auto-Minify</div>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 pl-4 list-disc">
                    <li><strong>HTML</strong>: Memangkas komentar kode dan spasi tak perlu.</li>
                    <li><strong>CSS</strong>: Mengompres kelas utilitas Tailwind ke ukuran paling minimum.</li>
                    <li><strong>JavaScript</strong>: Mengoptimalkan bundle JS agar dieksekusi lebih cepat.</li>
                  </ul>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="font-semibold text-slate-900 dark:text-white">3. Aktifkan Brotli Compression & Early Hints</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Aktifkan kompresi <strong>Brotli</strong> untuk hemat bandwidth hingga 30% dan respon TTFB (Time to First Byte) di bawah 100ms.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'git' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Perintah Git Commit & Push sesuai Instruksi Tugas Kampus:
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Gunakan terminal / Git Bash di folder project Anda, lalu jalankan perintah berikut secara berurutan:
              </p>

              <div className="relative p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-2 border border-slate-800">
                <button
                  onClick={() => handleCopy(
                    `git add .\ngit commit -m "feat: menambahkan navbar dan grid fitur pada landing page"\ngit push origin main`,
                    'git-command'
                  )}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Salin Perintah Git"
                >
                  {copiedText === 'git-command' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <div className="text-slate-400"># 1. Tambahkan seluruh berkas perubahan</div>
                <div className="text-emerald-400">git add .</div>
                <div className="text-slate-400"># 2. Lakukan commit dengan pesan persis sesuai syarat tugas</div>
                <div className="text-amber-300">git commit -m "feat: menambahkan navbar dan grid fitur pada landing page"</div>
                <div className="text-slate-400"># 3. Unggah ke repositori GitHub Anda</div>
                <div className="text-sky-300">git push origin main</div>
              </div>

              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-800 dark:text-emerald-300">
                <strong>Catatan Pengumpulan E-Learning Kampus:</strong> Salin tautan repositori GitHub Anda (<code>https://github.com/ghani24ep10007-spec/...</code>) dan tautan landing page yang sudah live (<code>https://rizqighaniadinata.my.id</code>) lalu tempelkan di form portal tugas UNUGHA.
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            ghani.24ep10007@students.unugha.id
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:opacity-90 transition-opacity"
          >
            Selesai Membaca
          </button>
        </div>

      </div>
    </div>
  );
};
