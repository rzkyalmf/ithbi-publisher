# Desain UI/UX: Halaman Kontak

## Problem

Pengguna membutuhkan cara yang jelas dan mudah untuk menghubungi publisher, baik untuk pertanyaan tentang produk, pemesanan buku, atau keperluan lainnya. Tanpa halaman kontak yang efektif, pengguna mungkin kesulitan menemukan informasi kontak yang diperlukan dan akhirnya meninggalkan situs.

## UX Insight

1. **Aksesibilitas Informasi**: Pengguna ingin menemukan informasi kontak dengan cepat dan tanpa usaha berlebih.

2. **Preferensi Kontak**: Pengguna memiliki preferensi berbeda dalam metode kontak (WhatsApp, email, telepon), sehingga perlu menyediakan beberapa opsi.

3. **Ekspektasi Respons**: Pengguna ingin tahu kapan mereka bisa mengharapkan respons dari publisher.

4. **Konteks Kontak**: Pengguna sering memiliki pertanyaan spesifik yang berulang, sehingga FAQ dapat mengurangi kebutuhan kontak langsung untuk pertanyaan umum.

## Wireframe Text

### Desktop View

```
+-------------------------------------------------------+
|                                                       |
| [LOGO]    Beranda  Katalog  Tentang  Kontak          | <- Header dengan navigasi utama
|                                                       |
+-------------------------------------------------------+
|                                                       |
|  HUBUNGI KAMI                                         | <- Heading utama (h1)
|                                                       |
|  Kami siap membantu Anda. Silakan hubungi kami        | <- Teks pengantar
|  melalui salah satu metode di bawah ini.              |
|                                                       |
|  +-------------------+  +---------------------------+  |
|  |                   |  |                           |  |
|  |                   |  |  INFORMASI KONTAK         |  | <- Heading section (h2)
|  |                   |  |                           |  |
|  |                   |  |  [ICON] WhatsApp          |  | <- WhatsApp dengan icon
|  |     [IMAGE]       |  |  08xxxxxxxxxx            |  |
|  |                   |  |  [CHAT SEKARANG]          |  | <- Button WhatsApp
|  |  Ilustrasi yang   |  |                           |  |
|  |  menggambarkan    |  |  [ICON] Email             |  | <- Email dengan icon
|  |  customer service |  |  contact@publisher.com    |  |
|  |  atau komunikasi  |  |  [KIRIM EMAIL]            |  | <- Button email
|  |                   |  |                           |  |
|  |                   |  |  [ICON] Alamat            |  | <- Alamat dengan icon
|  |                   |  |  Jl. Contoh No. 123       |  |
|  |                   |  |  Kota, Kode Pos           |  |
|  |                   |  |  [LIHAT PETA]             |  | <- Button peta (opsional)
|  |                   |  |                           |  |
|  +-------------------+  +---------------------------+  |
|                                                       |
|  JAM OPERASIONAL                                      | <- Heading section (h2)
|                                                       |
|  Senin - Jumat: 08.00 - 16.00 WIB                     | <- Jam operasional
|  Sabtu: 08.00 - 12.00 WIB                             |
|  Minggu & Hari Libur: Tutup                           |
|                                                       |
|  MEDIA SOSIAL                                         | <- Heading section (h2)
|                                                       |
|  [ICON FB] [ICON IG] [ICON TW] [ICON YT]              | <- Icon media sosial
|                                                       |
|  PERTANYAAN UMUM (FAQ)                                | <- Heading section (h2)
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |  Bagaimana cara memesan buku?                     |  | <- Pertanyaan FAQ (accordion)
|  |  [+]                                              |  |    dengan toggle
|  |                                                   |  |
|  +---------------------------------------------------+  |
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |  Apakah ada diskon untuk pembelian dalam jumlah   |  | <- Pertanyaan FAQ
|  |  banyak?                                          |  |
|  |  [+]                                              |  |
|  |                                                   |  |
|  +---------------------------------------------------+  |
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |  Berapa lama waktu pengiriman?                    |  | <- Pertanyaan FAQ
|  |  [+]                                              |  |
|  |                                                   |  |
|  +---------------------------------------------------+  |
|                                                       |
|  FORMULIR KONTAK (Opsional)                           | <- Heading section (h2)
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |  Nama:                                            |  | <- Input nama
|  |  [                                             ]  |  |
|  |                                                   |  |
|  |  Email:                                           |  | <- Input email
|  |  [                                             ]  |  |
|  |                                                   |  |
|  |  Subjek:                                          |  | <- Input subjek
|  |  [                                             ]  |  |
|  |                                                   |  |
|  |  Pesan:                                           |  | <- Textarea pesan
|  |  [                                             ]  |  |
|  |  [                                             ]  |  |
|  |  [                                             ]  |  |
|  |                                                   |  |
|  |  [KIRIM PESAN]                                    |  | <- Button submit
|  |                                                   |  |
|  +---------------------------------------------------+  |
|                                                       |
+-------------------------------------------------------+
|                                                       |
|  [LOGO]                                               |
|                                                       |
|  Kontak:                                              |
|  WhatsApp: 08xxxxxxxxxx                               | <- Footer dengan informasi kontak
|  Email: contact@publisher.com                         |
|                                                       |
|  © 2023 Publisher Islami                              |
|                                                       |
+-------------------------------------------------------+
```

### Mobile View

```
+------------------------+
|                        |
| [LOGO]      [MENU ≡]   | <- Header dengan hamburger menu
|                        |
+------------------------+
|                        |
| HUBUNGI KAMI           | <- Heading utama (h1)
|                        |
| Kami siap membantu     | <- Teks pengantar
| Anda. Silakan hubungi  |
| kami melalui salah     |
| satu metode di bawah.  |
|                        |
| +--------------------+ |
| |                    | |
| |      [IMAGE]       | | <- Ilustrasi
| |                    | |
| +--------------------+ |
|                        |
| INFORMASI KONTAK       | <- Heading section (h2)
|                        |
| [ICON] WhatsApp        | <- WhatsApp dengan icon
| 08xxxxxxxxxx           |
| [CHAT SEKARANG]        | <- Button WhatsApp (full width)
|                        |
| [ICON] Email           | <- Email dengan icon
| contact@publisher.com  |
| [KIRIM EMAIL]          | <- Button email (full width)
|                        |
| [ICON] Alamat          | <- Alamat dengan icon
| Jl. Contoh No. 123     |
| Kota, Kode Pos         |
| [LIHAT PETA]           | <- Button peta (full width)
|                        |
| JAM OPERASIONAL        | <- Heading section (h2)
|                        |
| Senin - Jumat:         | <- Jam operasional
| 08.00 - 16.00 WIB      |
|                        |
| Sabtu:                 |
| 08.00 - 12.00 WIB      |
|                        |
| Minggu & Hari Libur:   |
| Tutup                  |
|                        |
| MEDIA SOSIAL           | <- Heading section (h2)
|                        |
| [FB] [IG] [TW] [YT]    | <- Icon media sosial
|                        |
| PERTANYAAN UMUM (FAQ)  | <- Heading section (h2)
|                        |
| +--------------------+ |
| | Bagaimana cara     | | <- Pertanyaan FAQ
| | memesan buku?      | |
| | [+]                | |
| +--------------------+ |
|                        |
| +--------------------+ |
| | Apakah ada diskon  | | <- Pertanyaan FAQ
| | untuk pembelian    | |
| | dalam jumlah       | |
| | banyak?            | |
| | [+]                | |
| +--------------------+ |
|                        |
| +--------------------+ |
| | Berapa lama waktu  | | <- Pertanyaan FAQ
| | pengiriman?        | |
| | [+]                | |
| +--------------------+ |
|                        |
| FORMULIR KONTAK        | <- Heading section (h2)
| (Opsional)             |
|                        |
| Nama:                  | <- Input nama
| [                    ] |
|                        |
| Email:                 | <- Input email
| [                    ] |
|                        |
| Subjek:                | <- Input subjek
| [                    ] |
|                        |
| Pesan:                 | <- Textarea pesan
| [                    ] |
| [                    ] |
| [                    ] |
|                        |
| [KIRIM PESAN]          | <- Button submit (full width)
|                        |
+------------------------+
|                        |
| [LOGO]                 |
|                        |
| Kontak:                | <- Footer
| WhatsApp               |
| Email                  |
|                        |
| © 2023                 |
|                        |
+------------------------+
```

## Notes

### Elemen UI Penting

1. **Informasi Kontak**
   - WhatsApp dengan nomor yang jelas dan button untuk chat langsung
   - Email dengan alamat yang jelas dan button untuk mengirim email
   - Alamat fisik dengan format yang mudah dibaca
   - Icon yang intuitif untuk setiap metode kontak

2. **Jam Operasional**
   - Format yang jelas dan mudah dibaca
   - Informasi hari libur yang eksplisit

3. **Media Sosial**
   - Icon yang familiar untuk setiap platform
   - Ukuran yang cukup besar untuk touch target di mobile

4. **FAQ**
   - Format accordion untuk menghemat ruang
   - Pertanyaan yang jelas dan ringkas
   - Jawaban yang informatif namun tidak terlalu panjang

5. **Formulir Kontak (Opsional)**
   - Field yang esensial saja (nama, email, subjek, pesan)
   - Label yang jelas untuk setiap field
   - Button submit yang menonjol
   - Validasi form yang informatif

### Pertimbangan Desain

1. **Layout**
   - Desktop: 2 kolom untuk informasi kontak, 1 kolom untuk bagian lainnya
   - Mobile: 1 kolom dengan urutan prioritas (informasi kontak di atas)
   - Whitespace yang cukup untuk memisahkan setiap section

2. **Visual**
   - Ilustrasi yang relevan dengan tema kontak atau customer service
   - Icon yang konsisten untuk setiap metode kontak
   - Warna yang sesuai dengan brand identity

3. **Interaksi**
   - Hover state yang jelas pada semua button dan link
   - Accordion FAQ yang smooth saat dibuka/ditutup
   - Feedback visual saat form disubmit

4. **Responsivitas**
   - Button yang full width di mobile untuk touch target yang lebih besar
   - Spacing yang disesuaikan untuk keterbacaan di mobile
   - Prioritas konten yang dipertimbangkan untuk mobile view

5. **Aksesibilitas**
   - Alt text untuk semua gambar dan icon
   - Struktur heading yang logis (h1, h2, h3)
   - Kontras warna yang cukup untuk semua teks
   - Label yang terhubung dengan form field

6. **Optimasi**
   - Lazy loading untuk gambar
   - Validasi form di client-side untuk feedback cepat
   - Pesan konfirmasi setelah form disubmit