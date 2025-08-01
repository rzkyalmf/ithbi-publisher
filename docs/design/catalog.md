# Desain UI/UX: Halaman Katalog Buku

## Problem

Pengguna membutuhkan cara yang terorganisir dan mudah untuk menjelajahi seluruh koleksi buku yang tersedia. Mereka perlu bisa melihat semua buku dalam satu tempat dengan informasi dasar yang cukup untuk memutuskan buku mana yang ingin dilihat lebih detail.

## UX Insight

1. **Scanning vs Searching**: Pengguna biasanya melakukan scanning visual terlebih dahulu sebelum mencari buku spesifik, sehingga tampilan grid dengan cover yang menonjol sangat penting.

2. **Filtering Sederhana**: Pengguna ingin mempersempit pilihan tanpa terlalu banyak klik, sehingga filter yang sederhana dan langsung terlihat lebih efektif daripada filter kompleks yang tersembunyi.

3. **Informasi Minimal**: Pada tahap browsing, pengguna hanya membutuhkan informasi dasar (judul, penulis, kategori) untuk memutuskan apakah ingin melihat detail lebih lanjut.

4. **Konsistensi Visual**: Pengguna akan lebih mudah memindai katalog jika semua item buku memiliki ukuran dan format yang konsisten.

## Wireframe Text

```
+-------------------------------------------------------+
|                                                       |
| [LOGO]    Beranda  Katalog  Tentang  Kontak          | <- Header dengan navigasi utama
|                                                       |
+-------------------------------------------------------+
|                                                       |
|  KATALOG BUKU                                         | <- Heading utama
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  | [Search: ____________]  Filter: [Kategori ▼]     |  | <- Search bar dan dropdown filter
|  |                                                   |  |
|  +---------------------------------------------------+  |
|                                                       |
|  Menampilkan 12 dari 24 buku                          | <- Info jumlah buku
|                                                       |
|  +----------+  +----------+  +----------+  +----------+ |
|  |          |  |          |  |          |  |          | |
|  |  [COVER] |  |  [COVER] |  |  [COVER] |  |  [COVER] | |
|  |          |  |          |  |          |  |          | |
|  |  Judul   |  |  Judul   |  |  Judul   |  |  Judul   | | <- Grid 4x3 buku
|  |  Penulis |  |  Penulis |  |  Penulis |  |  Penulis | |
|  |  Kategori|  |  Kategori|  |  Kategori|  |  Kategori| |
|  |          |  |          |  |          |  |          | |
|  +----------+  +----------+  +----------+  +----------+ |
|                                                       |
|  +----------+  +----------+  +----------+  +----------+ |
|  |          |  |          |  |          |  |          | |
|  |  [COVER] |  |  [COVER] |  |  [COVER] |  |  [COVER] | |
|  |          |  |          |  |          |  |          | |
|  |  Judul   |  |  Judul   |  |  Judul   |  |  Judul   | |
|  |  Penulis |  |  Penulis |  |  Penulis |  |  Penulis | |
|  |  Kategori|  |  Kategori|  |  Kategori|  |  Kategori| |
|  |          |  |          |  |          |  |          | |
|  +----------+  +----------+  +----------+  +----------+ |
|                                                       |
|  +----------+  +----------+  +----------+  +----------+ |
|  |          |  |          |  |          |  |          | |
|  |  [COVER] |  |  [COVER] |  |  [COVER] |  |  [COVER] | |
|  |          |  |          |  |          |  |          | |
|  |  Judul   |  |  Judul   |  |  Judul   |  |  Judul   | |
|  |  Penulis |  |  Penulis |  |  Penulis |  |  Penulis | |
|  |  Kategori|  |  Kategori|  |  Kategori|  |  Kategori| |
|  |          |  |          |  |          |  |          | |
|  +----------+  +----------+  +----------+  +----------+ |
|                                                       |
|  [◀ Prev]                                  [Next ▶]   | <- Pagination
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
|  KATALOG BUKU          |
|                        |
|  [Search: _________]   | <- Search bar full width
|                        |
|  Filter: [Kategori ▼]  | <- Dropdown filter
|                        |
|  Menampilkan 12 dari   |
|  24 buku               |
|                        |
|  +------------------+  |
|  |                  |  |
|  |     [COVER]      |  |
|  |                  |  |
|  |  Judul           |  | <- Buku dalam grid 2 kolom
|  |  Penulis         |  |    atau 1 kolom
|  |  Kategori        |  |
|  |                  |  |
|  +------------------+  |
|                        |
|  +------------------+  |
|  |                  |  |
|  |     [COVER]      |  |
|  |                  |  |
|  |  Judul           |  |
|  |  Penulis         |  |
|  |  Kategori        |  |
|  |                  |  |
|  +------------------+  |
|                        |
|  [◀ Prev]    [Next ▶]  | <- Pagination
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

1. **Search & Filter**
   - Search bar yang cukup lebar dan menonjol
   - Dropdown filter yang sederhana dengan label jelas
   - Hasil pencarian yang muncul secara real-time (opsional)

2. **Grid Buku**
   - Card buku dengan ukuran yang konsisten
   - Cover buku sebagai elemen visual utama
   - Informasi teks (judul, penulis, kategori) yang jelas dan terstruktur

3. **Pagination**
   - Tombol prev/next yang cukup besar untuk mudah diklik
   - Indikator halaman saat ini yang jelas
   - Responsif dan tetap mudah digunakan di mobile

4. **Empty State**
   - Tampilan khusus saat tidak ada buku yang sesuai filter/pencarian
   - Pesan yang informatif dan saran untuk mencoba filter lain

### Pertimbangan Desain

1. **Layout Grid**
   - Desktop: 4 kolom untuk memanfaatkan ruang layar lebar
   - Tablet: 3 kolom untuk keseimbangan antara ukuran dan jumlah
   - Mobile: 2 kolom (landscape) atau 1 kolom (portrait) untuk keterbacaan

2. **Card Buku**
   - Rasio aspek cover yang konsisten (misalnya 2:3)
   - Shadow atau border tipis untuk membedakan card dari background
   - Hover state yang menunjukkan bahwa item dapat diklik

3. **Tipografi**
   - Judul buku: ukuran medium, weight bold/semi-bold
   - Penulis: ukuran smaller, weight regular
   - Kategori: ukuran smallest, bisa dengan warna atau style berbeda

4. **Interaksi**
   - Hover effect pada card buku (scale atau elevation)
   - Animasi sederhana saat filter berubah atau halaman berganti
   - Feedback visual saat mengklik tombol pagination

5. **Optimasi Performa**
   - Lazy loading untuk gambar cover buku
   - Placeholder untuk cover yang belum dimuat
   - Transisi halus saat mengganti halaman atau filter

6. **Aksesibilitas**
   - Label yang jelas untuk search dan filter
   - Alt text untuk semua gambar cover
   - Fokus state yang jelas untuk navigasi keyboard