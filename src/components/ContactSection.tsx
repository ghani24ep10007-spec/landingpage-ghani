import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Building2 
} from 'lucide-react';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    nimOrEmail: '',
    subject: 'pertanyaan_akademik',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.nimOrEmail || !formData.message) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        nimOrEmail: '',
        subject: 'pertanyaan_akademik',
        message: '',
      });
    }, 700);
  };

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Campus Info & Addresses */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-xs font-semibold text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Layanan Terpadu Mahasiswa' : 'Student Support Center'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {lang === 'id' ? 'Hubungi Pusat Bantuan Sistem Informasi' : 'Contact UNUGHA Support Center'}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'id'
                ? 'Punya pertanyaan seputar pengisian KRS, login akun SIAKAD, validasi transkrip nilai, atau kendala server? Tim helpdesk UNUGHA siap membantu Anda.'
                : 'Need assistance with course enrollment, student account access, transcript validation, or server issues? Our helpdesk is ready to help.'}
            </p>

            <div className="space-y-4 pt-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Kampus Induk UNUGHA Cilacap</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Jl. Kemerdekaan Barat No.17, Kesugihan Kidul, Kec. Kesugihan, Kabupaten Cilacap, Jawa Tengah 53274
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Email Resmi</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                    si@unugha.id · akademik@unugha.id
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">WhatsApp Helpdesk</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    +62 821-3456-7890 (Hari Kerja: 08.00 - 16.00 WIB)
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">Jam Operasional Layanan:</div>
              <div className="text-slate-600 dark:text-slate-300">Senin - Kamis : 08:00 - 16:00 WIB</div>
              <div className="text-slate-600 dark:text-slate-300">Jumat : 08:00 - 11:30 & 13:00 - 16:30 WIB</div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {lang === 'id' ? 'Formulir Tiket Bantuan & Konsultasi' : 'Submit Support Ticket'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                {lang === 'id' 
                  ? 'Kirimkan pesan Anda, tiket akan diteruskan otomatis ke dosen wali atau biro akademik.' 
                  : 'Submit your message, ticket will be routed to your academic advisor or IT bureau.'}
              </p>

              {submitted ? (
                <div className="p-6 text-center space-y-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    Tiket Bantuan Berhasil Terkirim!
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300">
                    Nomor referensi tiket Anda: <span className="font-mono font-bold">#TIK-2026-UNU-984</span>. Tim akademik akan membalas via email dalam 1x24 jam.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-900/60 rounded-lg hover:bg-emerald-200 transition-colors"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Ghani Rizqi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        NIM atau Email Kampus *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="24ep10007@students.unugha.id"
                        value={formData.nimOrEmail}
                        onChange={(e) => setFormData({ ...formData, nimOrEmail: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Kategori Layanan
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                    >
                      <option value="pertanyaan_akademik">Kendala Pengisian KRS & Perubahan Jadwal</option>
                      <option value="reset_password">Permohonan Reset Password / Akun SIAKAD</option>
                      <option value="surat_aktif">Pengajuan Surat Keterangan Mahasiswa Aktif</option>
                      <option value="konsultasi_pa">Jadwal Bimbingan Dosen Pembimbing Akademik</option>
                      <option value="lainnya">Lainnya / Masukan Sistem</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Pesan atau Uraian Kendala *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Jelaskan kendala atau detail permohonan Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 rounded-lg shadow-sm transition-all"
                  >
                    {loading ? (
                      <span>Mengirim Tiket...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Tiket Bantuan</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
