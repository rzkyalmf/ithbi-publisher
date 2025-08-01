# Desain UI/UX: Halaman Beranda

## Problem

Pengguna membutuhkan pintu masuk yang menarik dan informatif ke website publisher Islami. Mereka perlu mendapatkan gambaran cepat tentang buku-buku unggulan dan konten dakwah terbaru tanpa harus melakukan navigasi yang rumit.

## UX Insight

1. **Kesan Pertama**: Halaman beranda harus memberikan kesan profesional namun ramah, mencerminkan nilai-nilai Islami tanpa terlihat kaku atau terlalu formal.

2. **Hierarki Informasi**: Pengguna perlu melihat buku-buku unggulan terlebih dahulu, diikuti dengan konten dakwah, sehingga mereka langsung mendapatkan nilai dari kunjungan pertama.

3. **Navigasi Intuitif**: Pengguna harus bisa dengan mudah memahami cara menjelajahi website tanpa perlu berpikir terlalu keras.

4. **Kesederhanaan**: Mengingat target pengguna yang beragam, desain harus sederhana namun elegan, menghindari elemen yang terlalu kompleks atau mengganggu.

## Wireframe Text

```
+-------------------------------------------------------+
|                                                       |
| [LOGO]    Beranda  Katalog  Tentang  Kontak          | <- Header dengan navigasi utama
|                                                       |
+-------------------------------------------------------+
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |                 HERO BANNER                       |  | <- Banner utama dengan gambar/ilustrasi Islami
|  |                                                   |  |    dan headline tentang tujuan website
|  |  Temukan Buku-buku Dakwah Pilihan                |  |
|  |                                                   |  |
|  |  [TOMBOL: Lihat Katalog]                         |  |
|  |                                                   |  |
|  +---------------------------------------------------+  |
|                                                       |
|  BUKU UNGGULAN                                        | <- Heading section
|                                                       |
|  +----------+    +----------+    +----------+         |
|  |          |    |          |    |          |         |
|  |  [COVER] |    |  [COVER] |    |  [COVER] |         | <- Grid 3 buku unggulan
|  |          |    |          |    |          |         |
|  |  Judul   |    |  Judul   |    |  Judul   |         |
|  |  Penulis |    |  Penulis |    |  Penulis |         |
|  |          |    |          |    |          |         |
|  +----------+    +----------+    +----------+         |
|                                                       |
|  [TOMBOL: Lihat Semua Buku]                           | <- CTA ke katalog
|                                                       |
|  KUTIPAN DAKWAH                                       | <- Heading section
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |  "Kutipan inspiratif dari salah satu buku..."     |  | <- Card kutipan dakwah
|  |                                                   |  |
|  |  - Nama Penulis                                  |  |
|  |                                                   |  |
|  +---------------------------------------------------+  |
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |  "Kutipan inspiratif kedua..."                    |  | <- Card kutipan dakwah
|  |                                                   |  |
|  |  - Nama Penulis                                  |  |
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

## Mobile View

```
+------------------------+
|                        |
| [LOGO]      [MENU ≡]   | <- Header dengan hamburger menu
|                        |
+------------------------+
|                        |
|                        |
|       HERO BANNER      | <- Banner utama (responsif)
|                        |
|  Temukan Buku-buku     |
|  Dakwah Pilihan        |
|                        |
|  [Lihat Katalog]       |
|                        |
+------------------------+
|                        |
|  BUKU UNGGULAN         |
|                        |
|  +------------------+  |
|  |                  |  |
|  |     [COVER]      |  | <- Buku unggulan (scrollable horizontal)
|  |                  |  |
|  |  Judul           |  |
|  |  Penulis         |  |
|  |                  |  |
|  +------------------+  |
|                        |
|  [Lihat Semua Buku]    |
|                        |
+------------------------+
|                        |
|  KUTIPAN DAKWAH        |
|                        |
|  +------------------+  |
|  |                  |  |
|  |  "Kutipan..."    |  | <- Card kutipan dakwah
|  |                  |  |
|  |  - Penulis       |  |
|  |                  |  |
|  +------------------+  |
|                        |
+------------------------+
|                        |
|  [LOGO]                |
|                        |
|  Kontak:               |
|  WhatsApp              | <- Footer (responsif)
|  Email                 |
|                        |
|  © 2023                |
|                        |
+------------------------+
```

## Notes

### Elemen UI Penting

1. **Header**
   - Logo yang jelas dan mencerminkan identitas publisher Islami
   - Navigasi utama dengan highlight pada halaman aktif
   - Responsif dengan menu hamburger pada mobile

2. **Hero Banner**
   - Background image yang menarik (misalnya ilustrasi Islami atau foto buku dengan efek overlay)
   - Headline yang jelas dan to the point
   - CTA button yang kontras dan mudah dilihat

3. **Buku Unggulan**
   - Card buku dengan shadow ringan untuk dimensi
   - Hover effect sederhana (scale atau elevation)
   - Cover buku dengan rasio aspek konsisten

4. **Kutipan Dakwah**
   - Card dengan background subtle
   - Tipografi yang menonjolkan kutipan
   - Atribusi penulis yang jelas

5. **Footer**
   - Informasi kontak yang mudah ditemukan
   - Logo yang konsisten dengan header
   - Whitespace yang cukup untuk keterbacaan

### Pertimbangan Desain

1. **Warna**
   - Palet warna utama: hijau (melambangkan Islam), putih (kesucian), dan aksen emas/kuning (elegan)
   - Kontras yang cukup antara teks dan background
   - Penggunaan warna secara konsisten untuk elemen serupa

2. **Tipografi**
   - Font utama yang bersih dan mudah dibaca (sans-serif untuk body text)
   - Font sekunder yang lebih dekoratif untuk heading (bisa terinspirasi kaligrafi)
   - Ukuran teks yang cukup besar untuk keterbacaan optimal

3. **Spacing**
   - Whitespace yang cukup antara setiap section
   - Padding konsisten pada card dan container
   - Margin yang seimbang untuk menciptakan ritme visual

4. **Interaksi**
   - Hover state yang jelas pada elemen yang dapat diklik
   - Transisi halus untuk perubahan state
   - Feedback visual saat interaksi (klik, tap)

5. **Responsivitas**
   - Layout fluid yang beradaptasi dengan berbagai ukuran layar
   - Grid yang berubah dari 3 kolom (desktop) ke 1 kolom (mobile)
   - Prioritas konten pada viewport mobile