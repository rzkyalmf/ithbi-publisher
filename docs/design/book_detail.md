# Desain UI/UX: Halaman Detail Buku

## Problem

Pengguna membutuhkan informasi lengkap dan mendalam tentang sebuah buku sebelum memutuskan untuk menghubungi pihak publisher. Tanpa halaman detail yang komprehensif, pengguna tidak dapat menilai apakah buku tersebut sesuai dengan kebutuhan mereka.

## UX Insight

1. **Keputusan Pembelian**: Halaman detail adalah tempat di mana pengguna membuat keputusan akhir, sehingga perlu menyajikan informasi yang lengkap namun tidak membingungkan.

2. **Visual Dominan**: Cover buku adalah elemen visual utama yang membantu pengguna mengonfirmasi bahwa mereka melihat buku yang tepat.

3. **Scanning Konten**: Pengguna cenderung memindai (scan) konten daripada membaca kata per kata, sehingga struktur informasi yang jelas dengan heading dan paragraf pendek sangat penting.

4. **Call to Action**: Pengguna perlu tahu dengan jelas langkah selanjutnya setelah tertarik dengan buku (cara menghubungi untuk pembelian).

## Wireframe Text

```
+-------------------------------------------------------+
|                                                       |
| [LOGO]    Beranda  Katalog  Tentang  Kontak          | <- Header dengan navigasi utama
|                                                       |
+-------------------------------------------------------+
|                                                       |
|  [< Kembali ke Katalog]                               | <- Breadcrumb/back navigation
|                                                       |
|  +-------------------+  +---------------------------+  |
|  |                   |  |                           |  |
|  |                   |  |  JUDUL BUKU               |  | <- Judul buku (heading besar)
|  |                   |  |                           |  |
|  |                   |  |  Oleh: Nama Penulis       |  | <- Info penulis
|  |                   |  |                           |  |
|  |      [COVER]      |  |  Kategori: Aqidah         |  | <- Kategori buku
|  |                   |  |                           |  |
|  |                   |  |  DESKRIPSI                |  | <- Heading deskripsi
|  |                   |  |  Lorem ipsum dolor sit    |  |
|  |                   |  |  amet, consectetur...     |  | <- Deskripsi buku
|  |                   |  |  ...                      |  |
|  |                   |  |  ...                      |  |
|  |                   |  |                           |  |
|  +-------------------+  |  DETAIL BUKU              |  | <- Heading detail teknis
|                         |  - Jumlah halaman: 250     |  |
|  [Lihat Sampul Depan]   |  - Ukuran: 14 x 21 cm      |  | <- Detail teknis buku
|  [Lihat Sampul Belakang]|  - Tahun terbit: 2023      |  |    dalam format list
|                         |  - Kertas: HVS             |  |
|                         |                           |  |
|                         |  HARGA: Rp 85.000         |  | <- Informasi harga
|                         |                           |  |
|                         |  [HUBUNGI VIA WHATSAPP]   |  | <- CTA button utama
|                         |                           |  |
|                         |  atau                     |  |
|                         |                           |  |
|                         |  [KIRIM EMAIL]            |  | <- CTA button alternatif
|                         |                           |  |
|  +-------------------+  +---------------------------+  |
|                                                       |
|  TENTANG PENULIS                                      | <- Heading section penulis
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |  [FOTO]  Nama Penulis                            |  | <- Info penulis dengan foto
|  |                                                   |  |
|  |  Biografi singkat penulis. Lorem ipsum dolor sit  |  | <- Biografi penulis
|  |  amet, consectetur adipiscing elit...             |  |
|  |                                                   |  |
|  +---------------------------------------------------+  |
|                                                       |
|  KUTIPAN DARI BUKU                                    | <- Heading section kutipan
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |  "Kutipan inspiratif dari buku ini..."            |  | <- Kutipan dari buku
|  |                                                   |  |
|  +---------------------------------------------------+  |
|                                                       |
|  BUKU TERKAIT                                         | <- Heading section buku terkait
|                                                       |
|  +----------+    +----------+    +----------+         |
|  |          |    |          |    |          |         |
|  |  [COVER] |    |  [COVER] |    |  [COVER] |         | <- Buku terkait dalam format
|  |          |    |          |    |          |         |    carousel atau grid
|  |  Judul   |    |  Judul   |    |  Judul   |         |
|  |  Penulis |    |  Penulis |    |  Penulis |         |
|  |          |    |          |    |          |         |
|  +----------+    +----------+    +----------+         |
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

## Mobile View

```
+------------------------+
|                        |
| [LOGO]      [MENU ≡]   | <- Header dengan hamburger menu
|                        |
+------------------------+
|                        |
| [< Kembali ke Katalog] |
|                        |
| +--------------------+ |
| |                    | |
| |      [COVER]       | | <- Cover buku (centered)
| |                    | |
| +--------------------+ |
|                        |
| [Lihat Sampul Depan]   | <- Toggle view sampul
| [Lihat Sampul Belakang]|
|                        |
| JUDUL BUKU             | <- Judul buku
|                        |
| Oleh: Nama Penulis     | <- Info penulis
| Kategori: Aqidah       | <- Kategori
|                        |
| DESKRIPSI              |
| Lorem ipsum dolor sit  | <- Deskripsi buku
| amet, consectetur...   |
| ...                    |
|                        |
| DETAIL BUKU            |
| - Jumlah halaman: 250  | <- Detail teknis
| - Ukuran: 14 x 21 cm   |
| - Tahun terbit: 2023   |
| - Kertas: HVS          |
|                        |
| HARGA: Rp 85.000       | <- Harga
|                        |
| [HUBUNGI VIA WHATSAPP] | <- CTA button (full width)
|                        |
| atau                   |
|                        |
| [KIRIM EMAIL]          | <- CTA alternatif
|                        |
| TENTANG PENULIS        |
| +--------------------+ |
| | [FOTO] Nama Penulis | | <- Info penulis
| |                    | |
| | Biografi singkat   | |
| | penulis...         | |
| +--------------------+ |
|                        |
| KUTIPAN DARI BUKU      |
| +--------------------+ |
| | "Kutipan inspiratif | | <- Kutipan
| | dari buku ini..."  | |
| +--------------------+ |
|                        |
| BUKU TERKAIT           | <- Heading buku terkait
|                        |
| (Scrollable horizontal)| <- Carousel horizontal
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

1. **Cover Buku**
   - Ukuran yang cukup besar untuk melihat detail
   - Opsi untuk melihat sampul depan/belakang
   - Kemungkinan zoom untuk melihat detail (opsional)

2. **Informasi Buku**
   - Judul dengan ukuran font yang menonjol
   - Informasi penulis yang jelas
   - Deskripsi dengan paragraf yang mudah dibaca
   - Detail teknis dalam format list yang terstruktur

3. **Call to Action**
   - Button WhatsApp dengan warna yang kontras dan menonjol
   - Button email sebagai alternatif
   - Posisi yang strategis (visible without scrolling on desktop)

4. **Informasi Penulis**
   - Foto penulis (jika tersedia)
   - Biografi singkat yang informatif
   - Layout yang kompak namun informatif

5. **Konten Tambahan**
   - Kutipan dengan styling yang membedakannya dari teks lain
   - Buku terkait dalam format yang konsisten dengan katalog

### Pertimbangan Desain

1. **Layout**
   - Desktop: 2 kolom (cover di kiri, informasi di kanan)
   - Mobile: 1 kolom dengan urutan vertikal yang logis
   - Whitespace yang cukup untuk memisahkan setiap section

2. **Visual Hierarchy**
   - Judul buku sebagai elemen terbesar
   - CTA button yang menonjol dengan warna kontras
   - Heading yang jelas untuk setiap section

3. **Interaksi**
   - Gallery view untuk cover (jika ada multiple image)
   - Smooth scroll antar section
   - Hover state yang jelas pada semua elemen yang dapat diklik

4. **Responsivitas**
   - Adaptasi layout dari 2 kolom ke 1 kolom
   - Font size yang menyesuaikan untuk keterbacaan di mobile
   - Touch target yang cukup besar untuk mobile

5. **Optimasi**
   - Lazy loading untuk gambar
   - Preload cover utama untuk mengurangi layout shift
   - Kompresi gambar yang optimal tanpa mengorbankan kualitas

6. **Aksesibilitas**
   - Alt text untuk semua gambar
   - Struktur heading yang logis (h1, h2, h3)
   - Kontras warna yang cukup untuk semua teks