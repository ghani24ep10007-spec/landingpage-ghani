# Sistem Informasi UNUGHA (Universitas Nahdlatul Ulama Al Ghazali Cilacap)
> Repositori Resmi Tugas Praktikum Sistem Informasi & Web Enterprise
> Pengembang: **Ghani Rizqi Ghaniadinata** (Email: `ghani.24ep10007@students.unugha.id`)
> Domain Aktif: [https://rizqighaniadinata.my.id](https://rizqighaniadinata.my.id)

---

## 📌 Ringkasan Implementasi Tugas

Aplikasi ini dibangun untuk memenuhi seluruh kriteria penugasan akademik Program Studi Sistem Informasi UNUGHA Cilacap:

1. **Navigation Bar Sederhana**:
   - Logo UNUGHA & Teks "Sistem Informasi UNUGHA"
   - Menu Navigasi: Home, Katalog, Kontak
   - Tombol "Login" interaktif terintegrasi dengan Multi-Factor Authentication (MFA / 2FA)
2. **3 Buah Card Informasi Ringkas (CSS Grid)**:
   - Card 1: Portal Akademik & SIAKAD (KRS, KHS, Nilai, Transkrip real-time)
   - Card 2: Katalog Modul & Kurikulum S1 Sistem Informasi
   - Card 3: Helpdesk & Layanan Terpadu Mahasiswa
3. **Styling Murni Tailwind CSS**:
   - Seluruh styling memanfaatkan utilitas Tailwind CSS tanpa menggunakan inline CSS biasa.
4. **Responsivitas Multi-Platform**:
   - Dilengkapi mode pratinjau responsif untuk Windows 11 Chrome, macOS Safari, dan Mobile (Smartphone).
5. **Konfigurasi Cloudflare & Solusi "Not Secure"**:
   - Panduan lengkap konfigurasi SSL/TLS Strict, Always Use HTTPS, Automatic HTTPS Rewrites, dan Proxy Status Oranye.
   - Konfigurasi Subdomain Cloudflare Pages (`ghani.rizqighaniadinata.my.id` atau `si.rizqighaniadinata.my.id`).
   - Fitur Auto-Minify (HTML, CSS, JS) untuk efisiensi loading website.
6. **Modifikasi `welcome.blade.php`**:
   - Disediakan template Laravel Blade yang siap di-copy langsung ke `resources/views/welcome.blade.php`.

---

## 🚀 Panduan Instalasi Lokal

### Prasyarat:
- Node.js versi 18 ke atas
- NPM atau PNPM

### Langkah-Langkah:
```bash
# 1. Clone repositori dari GitHub
git clone https://github.com/ghani24ep10007-spec/unugha-sistem-informasi.git

# 2. Masuk ke direktori proyek
cd unugha-sistem-informasi

# 3. Pasang dependensi
npm install

# 4. Jalankan server lokal
npm run dev

# 5. Build untuk produksi
npm run build
```

---

## 📦 Panduan Git Commit & Push (Sesuai Kriteria Tugas)

Gunakan terminal atau Git Bash untuk melakukan commit dan push:
```bash
# Tambahkan seluruh perubahan
git add .

# Lakukan commit dengan pesan persis sesuai instruksi
git commit -m "feat: menambahkan navbar dan grid fitur pada landing page"

# Unggah ke repositori GitHub Anda
git push origin main
```

---

## 🔒 Solusi Mengatasi Peringatan "Not Secure" pada `rizqighaniadinata.my.id`

Bila situs menampilkan peringatan "Not secure" pada browser Google Chrome:
1. Buka [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Pilih domain Anda: `rizqighaniadinata.my.id`.
3. Buka menu **SSL/TLS** -> **Overview**: Ubah mode dari *Off* / *Flexible* menjadi **Full (strict)**.
4. Buka menu **SSL/TLS** -> **Edge Certificates**:
   - Aktifkan **Always Use HTTPS** (ubah status ke **ON**).
   - Aktifkan **Automatic HTTPS Rewrites** (ubah status ke **ON**).
   - Aktifkan **HSTS** (HTTP Strict Transport Security).
5. Buka menu **DNS** -> **Records**:
   - Pastikan record domain dan subdomain memiliki status **Proxied (Awan Oranye)**.
   - Jika masih awan abu-abu (*DNS Only*), lalu lintas tidak melalui SSL Cloudflare sehingga muncul not secure.

---

## 🌐 Menghubungkan Subdomain ke Cloudflare Pages

1. Pada Cloudflare Dashboard, buka **Compute (Workers & Pages)** -> Pilih proyek Pages Anda.
2. Buka tab **Custom domains** -> Klik **Set up a custom domain**.
3. Ketik subdomain yang diinginkan:
   - `ghani.rizqighaniadinata.my.id` atau `si.rizqighaniadinata.my.id`.
4. Klik **Continue** dan konfirmasi DNS CNAME otomatis.

---

## ⚡ Mengaktifkan Auto-Minify (Speed Optimization)

1. Buka menu **Speed** -> **Optimization** -> **Content Optimization**.
2. Beri tanda centang pada:
   - [x] **HTML**
   - [x] **CSS**
   - [x] **JavaScript**
3. Aktifkan **Brotli Compression** untuk mengurangi ukuran transfer data hingga 30%.

---

## 🔌 Panduan Integrasi API Pihak Ketiga (SIAKAD UNUGHA API)

### 1. Inisialisasi API Endpoint
```typescript
const SIAKAD_API_URL = "https://api.unugha.id/v1";
```

### 2. Autentikasi Pengguna & Pengambilan Data KRS Mahasiswa
```typescript
export async function fetchMahasiswaKRS(nim: string, authToken: string) {
  const response = await fetch(`${SIAKAD_API_URL}/mahasiswa/${nim}/krs`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${authToken}`,
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Gagal mengambil data KRS mahasiswa");
  }

  return await response.json();
}
```

---

## 🛡️ Fitur Keamanan, Monitoring, dan Backup
- **Multi-Factor Authentication (MFA / 2FA)**: Verifikasi 6 digit OTP untuk proteksi akun sivitas akademika.
- **Audit Log Keamanan**: Log aktivitas real-time untuk pemantauan percobaan login dan inspeksi firewall WAF.
- **Cadangan Data & Enkripsi (E2EE)**: Algoritma enkripsi AES-256 untuk proteksi berkas formulir dan data lokal.
- **Aksesibilitas & Mode Gelap**: Kontras tinggi, font scaling, dan dukungan dwi-bahasa (ID / EN).

---

&copy; 2026 Universitas Nahdlatul Ulama Al Ghazali Cilacap (UNUGHA).
Hak Cipta Dilindungi Undang-Undang.
