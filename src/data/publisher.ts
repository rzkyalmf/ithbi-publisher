import type { ContactInfo, FAQ, PublisherInfo } from "../types";

export const publisherInfo: PublisherInfo = {
  name: "Ilmu Thibbul Badil Indonesia",
  description:
    "Penerbit Ilmu Thibbul Badil Indonesia adalah penerbit yang berdedikasi untuk menyebarkan ilmu-ilmu Islam yang shahih dan bermanfaat. Kami berkomitmen untuk menerbitkan buku-buku berkualitas tinggi yang sesuai dengan Al-Quran dan As-Sunnah.",
  vision:
    "Menjadi penerbit terdepan dalam menyebarkan ilmu Islam yang shahih dan bermanfaat untuk umat.",
  mission: [
    "Menerbitkan buku-buku Islam berkualitas tinggi yang sesuai dengan Al-Quran dan As-Sunnah",
    "Menyediakan akses mudah terhadap ilmu-ilmu Islam untuk seluruh lapisan masyarakat",
    "Mendukung para ulama dan penulis dalam menyebarkan dakwah melalui karya tulis",
    "Membangun ekosistem literasi Islam yang sehat dan berkelanjutan",
  ],
  values: [
    {
      title: "Keshahihan",
      description:
        "Kami berkomitmen untuk hanya menerbitkan konten yang sesuai dengan Al-Quran dan As-Sunnah yang shahih.",
      icon: "shield-check",
    },
    {
      title: "Kualitas",
      description:
        "Setiap buku yang kami terbitkan melalui proses editorial yang ketat untuk memastikan kualitas terbaik.",
      icon: "star",
    },
    {
      title: "Aksesibilitas",
      description:
        "Kami berusaha membuat ilmu Islam dapat diakses oleh semua kalangan dengan harga yang terjangkau.",
      icon: "users",
    },
    {
      title: "Inovasi",
      description:
        "Kami terus berinovasi dalam penyajian dan distribusi untuk menjangkau lebih banyak pembaca.",
      icon: "lightbulb",
    },
    {
      title: "Amanah",
      description:
        "Kami menjalankan bisnis dengan penuh amanah dan tanggung jawab kepada Allah dan umat.",
      icon: "heart",
    },
  ],
  team: [
    {
      name: "Ryan Suryaman",
      position: "Direktur Utama",
      bio: "Praktisi Thibbun Nabawi & Ruqyah Syar'iyah dengan pengalaman kurang lebih 10 tahun.",
      photo: "/images/team/ahmad-fauzi.jpg",
    },
    {
      name: "Maulana Malik Ibrahim",
      position: "Editor",
      bio: "Magister Studi Islam dengan keahlian dalam editing dan review konten Islam.",
      photo: "/images/team/siti-khadijah.jpg",
    },
    {
      name: "Sandy Lucky Pratama",
      position: "Manajer Produksi",
      bio: "Berpengalaman dalam manajemen produksi buku dan quality control.",
      photo: "/images/team/muhammad-ridwan.jpg",
    },
  ],
};

export const contactInfo: ContactInfo = {
  whatsapp: "6285187695229",
  email: "ptakademiaththibbulbadil@gmail.com",
  address:
    "Perumahan Bukit Waringin, Blok G2/11 RT07/14, Kab. Bogor, Jawa Barat 16920",
  operatingHours: {
    weekdays: "08.00 - 16.00 WIB",
    saturday: "08.00 - 12.00 WIB",
    sunday: "Tutup",
  },
  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=100087710929348",
    instagram: "https://instagram.com/ith.bi",
    youtube: "https://www.youtube.com/@ithbi",
  },
};

export const faqs: FAQ[] = [
  {
    id: "cara-pesan",
    question: "Bagaimana cara memesan buku?",
    answer:
      "Anda dapat memesan buku melalui WhatsApp di nomor 085187695229 atau mengirim email ke ptakademiaththibbulbadil@gmail.com. Sertakan judul buku, jumlah yang diinginkan, dan alamat pengiriman.",
  },
  {
    id: "diskon-grosir",
    question: "Apakah ada diskon untuk pembelian dalam jumlah banyak?",
    answer:
      "Ya, kami memberikan diskon khusus untuk pembelian grosir. Diskon 10% untuk pembelian 10-50 buku, 15% untuk 51-100 buku, dan 20% untuk lebih dari 100 buku. Hubungi kami untuk informasi lebih lanjut.",
  },
  {
    id: "waktu-pengiriman",
    question: "Berapa lama waktu pengiriman?",
    answer:
      "Untuk wilayah Jabodetabek, pengiriman memakan waktu 1-2 hari kerja. Untuk luar Jabodetabek, 3-5 hari kerja. Pengiriman dilakukan setelah pembayaran dikonfirmasi.",
  },
  {
    id: "metode-pembayaran",
    question: "Apa saja metode pembayaran yang tersedia?",
    answer:
      "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BRI), e-wallet (OVO, GoPay, DANA), dan COD untuk wilayah tertentu.",
  },
  {
    id: "return-policy",
    question: "Bagaimana kebijakan pengembalian barang?",
    answer:
      "Kami menerima pengembalian dalam 7 hari setelah barang diterima jika terdapat kerusakan atau kesalahan pengiriman. Barang harus dalam kondisi asli dan belum dibaca.",
  },
  {
    id: "katalog-terbaru",
    question: "Bagaimana cara mendapatkan katalog terbaru?",
    answer:
      "Katalog terbaru dapat dilihat di website ini atau follow media sosial kami untuk update buku-buku terbaru. Anda juga bisa berlangganan newsletter melalui email.",
  },
];
