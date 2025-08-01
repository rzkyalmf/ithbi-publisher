# Catatan Keputusan Arsitektur

## Keputusan 1: Arsitektur Frontend

### Konteks
Perlu menentukan arsitektur frontend yang sesuai untuk website publisher Islami yang sederhana dan ringan.

### Keputusan
Menggunakan arsitektur berbasis komponen dengan React 19 dan pendekatan client-side rendering.

### Konsekuensi
- **Positif**: Pengembangan lebih cepat dengan komponen yang reusable, performa yang baik untuk website skala kecil-menengah.
- **Negatif**: Mungkin ada initial load yang sedikit lebih lambat dibanding static site.
- **Mitigasi**: Implementasi code splitting dan lazy loading untuk komponen yang tidak langsung dibutuhkan.

---

## Keputusan 2: Manajemen State

### Konteks
Perlu menentukan pendekatan manajemen state yang sesuai untuk website yang relatif sederhana tanpa interaksi kompleks.

### Keputusan
Menggunakan pendekatan state management sederhana dengan useState dan props drilling, tanpa state management library atau Context API.

### Konsekuensi
- **Positif**: Pendekatan paling ringan dan sederhana, tanpa dependencies tambahan, mudah dipahami untuk developer solo.
- **Negatif**: Mungkin memerlukan props drilling untuk komponen yang bersarang dalam.
- **Mitigasi**: Membuat struktur komponen yang tidak terlalu dalam dan menggunakan custom hooks untuk logika state yang digunakan di beberapa tempat.

---

## Keputusan 3: Styling Approach

### Konteks
Perlu menentukan pendekatan styling yang efisien dan mudah dikelola.

### Keputusan
Menggunakan Tailwind CSS untuk styling komponen.

### Konsekuensi
- **Positif**: Development yang cepat, file CSS yang lebih kecil setelah purging, konsistensi desain.
- **Negatif**: HTML mungkin terlihat lebih "berantakan" dengan banyak class.
- **Mitigasi**: Membuat komponen abstraksi untuk pattern UI yang sering digunakan.

---

## Keputusan 4: Routing

### Konteks
Perlu menentukan pendekatan routing yang sesuai untuk navigasi antar halaman.

### Keputusan
Menggunakan React Router v7 untuk client-side routing.

### Konsekuensi
- **Positif**: Navigasi yang mulus tanpa page refresh, pengalaman pengguna yang lebih baik.
- **Negatif**: Perlu penanganan khusus untuk SEO.
- **Mitigasi**: Implementasi metadata yang baik dan pertimbangkan React Helmet untuk pengelolaan head document.

---

## Keputusan 5: Data Fetching

### Konteks
Perlu menentukan pendekatan untuk mengambil data buku dan konten lainnya yang sederhana untuk MVP namun dapat dikembangkan di masa depan.

### Keputusan
Untuk MVP awal, menggunakan pendekatan sederhana dengan fetch API dan useState hooks. Untuk pengembangan selanjutnya, akan dipertimbangkan migrasi ke TanStack Query.

### Konsekuensi
- **Positif**: Memulai dengan pendekatan ringan dan sederhana, dengan jalur upgrade yang jelas untuk fitur yang lebih kompleks di masa depan.
- **Negatif**: Mungkin memerlukan refactoring saat migrasi ke TanStack Query.
- **Mitigasi**: Membuat custom hooks yang mengabstraksi logika fetching, sehingga implementasi internal dapat diubah tanpa mengubah interface yang digunakan komponen.

---

## Keputusan 6: Struktur Folder

### Konteks
Perlu menentukan struktur folder yang terorganisir dan skalabel.

### Keputusan
Menggunakan pendekatan feature-based folder structure.

```
src/
  ├── components/       # Shared/common components
  │   └── Seo.tsx       # Komponen untuk pengelolaan metadata
  ├── features/         # Feature-specific components and logic
  │   ├── home/
  │   ├── catalog/
  │   ├── book-detail/
  │   ├── about/
  │   └── contact/
  ├── layouts/          # Layout components
  │   └── MainLayout.tsx # Layout utama dengan Header dan Footer
  ├── hooks/            # Custom hooks untuk logika yang digunakan di beberapa tempat
  ├── utils/            # Utility functions
  ├── types/            # TypeScript type definitions
  ├── assets/           # Static assets
  ├── routes/           # Route definitions
  ├── data/             # Data statis dalam format JSON/TypeScript
  ├── pages/            # Page components
  │   ├── Home.tsx
  │   ├── Catalog.tsx
  │   ├── BookDetail.tsx
  │   ├── About.tsx
  │   ├── Contact.tsx
  │   └── NotFound.tsx  # Halaman 404
  ├── App.tsx           # Root component dengan ErrorBoundary
  └── main.tsx
```

### Konsekuensi
- **Positif**: Kode lebih terorganisir berdasarkan fitur, lebih mudah untuk menemukan dan mengelola kode terkait.
- **Negatif**: Mungkin ada beberapa duplikasi untuk komponen yang mirip antar fitur.
- **Mitigasi**: Ekstrak komponen yang benar-benar reusable ke folder `components`.

---

## Keputusan 7: Pendekatan Responsif

### Konteks
Perlu menentukan pendekatan untuk memastikan website responsif di berbagai perangkat.

### Keputusan
Menggunakan pendekatan mobile-first dengan Tailwind CSS breakpoints.

### Konsekuensi
- **Positif**: Pengalaman yang konsisten di semua perangkat, prioritas pada pengguna mobile yang semakin banyak.
- **Negatif**: Mungkin memerlukan penyesuaian tambahan untuk layout yang kompleks.
- **Mitigasi**: Menggunakan komponen yang adaptif dan testing di berbagai ukuran layar secara konsisten.

---

## Keputusan 8: Pengelolaan Konten

### Konteks
Perlu menentukan pendekatan untuk mengelola konten buku dan informasi dakwah.

### Keputusan
Untuk MVP, menggunakan data statis dalam format JSON/TypeScript. Untuk pengembangan selanjutnya, dapat dipertimbangkan headless CMS.

### Konsekuensi
- **Positif**: Implementasi cepat dan sederhana untuk MVP, tidak ada ketergantungan pada backend.
- **Negatif**: Pembaruan konten memerlukan deployment baru.
- **Mitigasi**: Struktur data yang baik untuk memudahkan transisi ke API dinamis di masa depan.

---

## Keputusan 9: Struktur Layout Global

### Konteks
Website membutuhkan elemen yang konsisten di seluruh halaman seperti Header, Footer, dan kemungkinan Sidebar.

### Keputusan
Menggunakan komponen layout global (`<Layout>`) yang membungkus konten halaman, dan disusun di level root `App.tsx`.

### Konsekuensi
- **Positif**: Konsistensi UI antar halaman, mudah menambahkan elemen global (seperti SEO meta, toast, dll).
- **Negatif**: Perlu pemisahan yang jelas antara halaman dan komponen layout.
- **Mitigasi**: Struktur folder `layouts/` untuk layout reusable (misal: `MainLayout`, `AuthLayout` jika diperlukan).

---

## Keputusan 10: SEO dan Metadata

### Konteks
Website Islami ini perlu bisa ditemukan di pencarian Google untuk menjangkau lebih banyak audiens.

### Keputusan
Menggunakan React Helmet untuk pengelolaan metadata halaman.

### Konsekuensi
- **Positif**: Kontrol penuh atas title, description, og:image, dll.
- **Negatif**: Perlu setup tambahan di setiap halaman.
- **Mitigasi**: Buat komponen `Seo.tsx` untuk menyederhanakan implementasi metadata di setiap halaman.

---

## Keputusan 11: Penanganan Error dan Halaman Tidak Ditemukan

### Konteks
Website perlu menangani situasi error dan halaman yang tidak ditemukan dengan baik untuk pengalaman pengguna yang lebih baik.

### Keputusan
Menyediakan halaman `404.tsx` khusus dan membuat ErrorBoundary untuk menangani error komponen yang tidak terduga.

### Konsekuensi
- **Positif**: UX lebih baik, pengguna tidak terjebak di halaman kosong/error.
- **Negatif**: Perlu sedikit setup tambahan.
- **Mitigasi**: Membuat komponen error yang informatif dan menawarkan navigasi alternatif.