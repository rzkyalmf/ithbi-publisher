# Desain UI/UX: Halaman Tentang Kami

## Problem

Pengguna perlu memahami identitas, visi, misi, dan nilai-nilai publisher Islami untuk membangun kepercayaan dan koneksi emosional. Tanpa halaman "Tentang Kami" yang informatif, pengguna mungkin ragu untuk berinteraksi lebih lanjut dengan platform.

## UX Insight

1. **Trust Building**: Halaman ini adalah kunci untuk membangun kepercayaan dengan menunjukkan transparansi dan profesionalisme publisher.

2. **Brand Story**: Pengguna ingin mengetahui cerita di balik publisher untuk membentuk koneksi emosional yang lebih kuat.

3. **Nilai Islami**: Pengguna mencari publisher yang sejalan dengan nilai-nilai Islam, sehingga perlu menekankan aspek ini dengan jelas.

4. **Scanning Content**: Pengguna cenderung memindai konten daripada membaca secara mendetail, sehingga perlu struktur visual yang jelas dengan heading dan paragraf pendek.

## Wireframe Text

### Desktop View

```
+-------------------------------------------------------+
|                                                       |
| [LOGO]    Beranda  Katalog  Tentang  Kontak          | <- Header dengan navigasi utama
|                                                       |
+-------------------------------------------------------+
|                                                       |
|  TENTANG KAMI                                         | <- Heading utama (h1)
|                                                       |
|  +---------------------------------------------------+  |
|  |                                                   |  |
|  |                 [BANNER IMAGE]                    |  | <- Banner image yang mewakili
|  |                                                   |  |    identitas publisher
|  +---------------------------------------------------+  |
|                                                       |
|  PROFIL PUBLISHER                                     | <- Heading section (h2)
|                                                       |
|  Lorem ipsum dolor sit amet, consectetur adipiscing    | <- Paragraf pengantar tentang
|  elit. Nulla facilisi. Phasellus euismod, nisi quis   |    sejarah dan latar belakang
|  viverra ultricies, nunc nisl ultricies nunc...       |    publisher
|                                                       |
|  +-------------------+  +---------------------------+  |
|  |                   |  |                           |  |
|  |                   |  |  VISI                     |  | <- Heading visi (h3)
|  |                   |  |                           |  |
|  |                   |  |  Lorem ipsum dolor sit    |  | <- Deskripsi visi
|  |     [IMAGE]       |  |  amet, consectetur...     |  |
|  |                   |  |                           |  |
|  |                   |  |  MISI                     |  | <- Heading misi (h3)
|  |                   |  |                           |  |
|  |                   |  |  1. Lorem ipsum dolor     |  | <- Daftar misi dalam format
|  |                   |  |  2. Consectetur adipiscing|  |    numbered list
|  |                   |  |  3. Nulla facilisi        |  |
|  |                   |  |                           |  |
|  +-------------------+  +---------------------------+  |
|                                                       |
|  NILAI-NILAI KAMI                                     | <- Heading section nilai (h2)
|                                                       |
|  +----------+    +----------+    +----------+         |
|  |          |    |          |    |          |         |
|  |  [ICON]  |    |  [ICON]  |    |  [ICON]  |         | <- Icon yang mewakili
|  |          |    |          |    |          |         |    nilai-nilai publisher
|  |  Nilai 1 |    |  Nilai 2 |    |  Nilai 3 |         | <- Heading nilai (h4)
|  |          |    |          |    |          |         |
|  |  Deskripsi|    |  Deskripsi|    |  Deskripsi|         | <- Deskripsi singkat
|  |  singkat  |    |  singkat  |    |  singkat  |         |    untuk setiap nilai
|  |          |    |          |    |          |         |
|  +----------+    +----------+    +----------+         |
|                                                       |
|  +----------+    +----------+                         |
|  |          |    |          |                         |
|  |  [ICON]  |    |  [ICON]  |                         | <- Icon tambahan untuk
|  |          |    |          |                         |    nilai-nilai lainnya
|  |  Nilai 4 |    |  Nilai 5 |                         |
|  |          |    |          |                         |
|  |  Deskripsi|    |  Deskripsi|                         |
|  |  singkat  |    |  singkat  |                         |
|  |          |    |          |                         |
|  +----------+    +----------+                         |
|                                                       |
|  TIM KAMI (Opsional)                                  | <- Heading section tim (h2)
|                                                       |
|  +----------+    +----------+    +----------+         |
|  |          |    |          |    |          |         |
|  |  [FOTO]  |    |  [FOTO]  |    |  [FOTO]  |         | <- Foto anggota tim
|  |          |    |          |    |          |         |
|  |  Nama    |    |  Nama    |    |  Nama    |         | <- Nama anggota tim
|  |  Jabatan |    |  Jabatan |    |  Jabatan |         | <- Jabatan
|  |          |    |          |    |          |         |
|  |  Deskripsi|    |  Deskripsi|    |  Deskripsi|         | <- Deskripsi singkat
|  |  singkat  |    |  singkat  |    |  singkat  |         |
|  |          |    |          |    |          |         |
|  +----------+    +----------+    +----------+         |
|                                                       |
|  HUBUNGI KAMI                                         | <- Heading section kontak (h2)
|                                                       |
|  Tertarik untuk bekerja sama atau memiliki pertanyaan?| <- Call to action text
|                                                       |
|  [HUBUNGI KAMI SEKARANG]                              | <- CTA button ke halaman kontak
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
| TENTANG KAMI           | <- Heading utama (h1)
|                        |
| +--------------------+ |
| |                    | |
| |   [BANNER IMAGE]   | | <- Banner image
| |                    | |
| +--------------------+ |
|                        |
| PROFIL PUBLISHER       | <- Heading section (h2)
|                        |
| Lorem ipsum dolor sit  | <- Paragraf pengantar
| amet, consectetur...   |
| ...                    |
|                        |
| +--------------------+ |
| |                    | |
| |      [IMAGE]       | | <- Image ilustrasi
| |                    | |
| +--------------------+ |
|                        |
| VISI                   | <- Heading visi (h3)
|                        |
| Lorem ipsum dolor sit  | <- Deskripsi visi
| amet, consectetur...   |
|                        |
| MISI                   | <- Heading misi (h3)
|                        |
| 1. Lorem ipsum dolor   | <- Daftar misi
| 2. Consectetur         |
| 3. Nulla facilisi      |
|                        |
| NILAI-NILAI KAMI       | <- Heading section nilai (h2)
|                        |
| +--------------------+ |
| | [ICON]              | |
| | Nilai 1             | | <- Card nilai 1
| | Deskripsi singkat   | |
| +--------------------+ |
|                        |
| +--------------------+ |
| | [ICON]              | |
| | Nilai 2             | | <- Card nilai 2
| | Deskripsi singkat   | |
| +--------------------+ |
|                        |
| +--------------------+ |
| | [ICON]              | |
| | Nilai 3             | | <- Card nilai 3
| | Deskripsi singkat   | |
| +--------------------+ |
|                        |
| +--------------------+ |
| | [ICON]              | |
| | Nilai 4             | | <- Card nilai 4
| | Deskripsi singkat   | |
| +--------------------+ |
|                        |
| +--------------------+ |
| | [ICON]              | |
| | Nilai 5             | | <- Card nilai 5
| | Deskripsi singkat   | |
| +--------------------+ |
|                        |
| TIM KAMI (Opsional)    | <- Heading section tim (h2)
|                        |
| (Scrollable horizontal)| <- Carousel horizontal
|                        |
| HUBUNGI KAMI           | <- Heading section kontak (h2)
|                        |
| Tertarik untuk bekerja | <- Call to action text
| sama atau memiliki     |
| pertanyaan?            |
|                        |
| [HUBUNGI KAMI SEKARANG]| <- CTA button (full width)
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

1. **Banner Image**
   - Image yang mewakili identitas publisher
   - Ukuran yang cukup besar untuk membuat kesan pertama yang kuat
   - Dapat berisi overlay teks dengan tagline publisher

2. **Profil Publisher**
   - Paragraf yang ringkas namun informatif
   - Bahasa yang personal dan mengundang
   - Mungkin disertai dengan gambar yang relevan

3. **Visi & Misi**
   - Visi dalam format paragraf singkat
   - Misi dalam format numbered list untuk kemudahan membaca
   - Visual yang mendukung pesan visi & misi

4. **Nilai-nilai**
   - Card dengan icon yang mewakili setiap nilai
   - Heading yang jelas untuk setiap nilai
   - Deskripsi singkat yang menjelaskan penerapan nilai tersebut

5. **Tim (Opsional)**
   - Foto profesional untuk setiap anggota tim
   - Informasi nama dan jabatan yang jelas
   - Deskripsi singkat tentang peran atau keahlian

6. **Call to Action**
   - Button yang jelas untuk mengarahkan ke halaman kontak
   - Teks yang mengundang interaksi lebih lanjut

### Pertimbangan Desain

1. **Warna & Tipografi**
   - Gunakan palet warna yang konsisten dengan brand
   - Tipografi yang mudah dibaca dengan hierarki yang jelas
   - Heading yang menonjol untuk memudahkan scanning

2. **Layout**
   - Desktop: Kombinasi 1-kolom dan 2-kolom untuk variasi visual
   - Mobile: Layout 1-kolom dengan urutan yang logis
   - Whitespace yang cukup untuk memisahkan setiap section

3. **Visual**
   - Gunakan gambar yang otentik dan mewakili identitas publisher
   - Icon yang konsisten untuk nilai-nilai
   - Hindari stock photo yang terlalu generik

4. **Responsivitas**
   - Adaptasi layout dari multi-kolom ke single-kolom
   - Card nilai-nilai yang stack di mobile
   - Tim dalam format carousel horizontal di mobile

5. **Tone & Voice**
   - Gunakan bahasa yang hangat dan personal
   - Tunjukkan nilai-nilai Islami dalam pilihan kata
   - Hindari jargon yang terlalu teknis

6. **Aksesibilitas**
   - Alt text untuk semua gambar
   - Struktur heading yang logis (h1, h2, h3, h4)
   - Kontras warna yang cukup untuk semua teks