import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    uuid: "b3f6c9d0-7a12-4b8f-b2f0-3f98a1a2c101",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Minimalis 3 Dudukan",
    description:
      "<p>Sofa Minimalis 3 Dudukan: Kenyamanan Premium untuk Ruang Tamu Modern.</p><p>Sofa ini dirancang sebagai titik fokus ruang tamu kontemporer Anda. Dengan desain garis bersih dan bantalan yang tebal, ia menawarkan tempat duduk yang luas dan mewah untuk tiga orang.</p><ul><li>Bantalan busa kepadatan tinggi menjamin dukungan ergonomis yang tahan lama.</li><li>Rangka internal terbuat dari Kayu Jati Solid untuk durabilitas superior.</li><li>Pelapis kain Beludru premium memberikan sentuhan kelembutan dan kemewahan.</li></ul>",
    discount: 25,
    price_discount: 2625000,
    price: 3500000,
    rating: 4.8,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa 3 Dudukan",
      },
      {
        key: "Material Rangka",
        value: "Kayu Jati Solid",
      },
      {
        key: "Material Kain",
        value: "Beludru (Velvet)",
      },
      {
        key: "Dimensi",
        value: "200 x 90 x 80 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 2,
    uuid: "c7a2e1f4-91de-48f7-8b77-5e2d7e2b510a",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Makan Kayu Jati",
    description:
      "<p>Meja Makan Kayu Jati: Kekuatan Klasik untuk Kebersamaan Keluarga.</p><p>Meja makan ini adalah investasi abadi. Dibuat dari kayu jati asli yang dikenal akan ketahanan dan keindahan urat kayunya, meja ini ideal untuk menampung enam orang dengan nyaman.</p><ul><li>Material utama dari Kayu Jati memastikan daya tahan terhadap cuaca dan rayap.</li><li>Finishing halus menonjolkan tekstur alami, menambah kesan klasik dan mewah.</li><li>Permukaan luas, ideal untuk jamuan makan atau pertemuan formal.</li></ul>",
    discount: 15,
    price_discount: 3570000,
    price: 4200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Utama",
        value: "Kayu Jati",
      },
      {
        key: "Kapasitas",
        value: "6 Orang",
      },
      {
        key: "Bentuk",
        value: "Persegi Panjang",
      },
      {
        key: "Dimensi",
        value: "180 x 90 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 3,
    uuid: "f2b1a3c9-32e5-4f5a-9c87-61b83f55e3d2",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Rotan Santai",
    description:
      "<p>Kursi Rotan Santai: Sentuhan Natural Tropis yang Ringan dan Nyaman.</p><p>Kursi *handmade* ini menciptakan suasana relaksasi di mana pun diletakkan. Dibuat dari rotan alami yang ditenun secara presisi, kursi ini ringan namun sangat kokoh.</p><ul><li>Konstruksi dari Rotan Alami yang ramah lingkungan dan fleksibel.</li><li>Desain sandaran tinggi mendukung punggung secara optimal.</li><li>Sangat ideal untuk mempercantik ruang tamu, teras, atau sudut baca.</li></ul>",
    discount: 30,
    price_discount: 665000,
    price: 950000,
    rating: 4.2,
    specifications: [
      {
        key: "Material Utama",
        value: "Rotan Alami",
      },
      {
        key: "Penggunaan",
        value: "Indoor/Teras",
      },
      {
        key: "Termasuk Bantal",
        value: "Ya",
      },
      {
        key: "Tinggi Sandaran",
        value: "70 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 4,
    uuid: "a0d4c8b2-15f8-45b9-ae3b-2dbb94d55f61",
    category_id: 4,
    category_name: "Lemari",
    title: "Lemari Pakaian 2 Pintu",
    description:
      "<p>Lemari Pakaian 2 Pintu Geser: Solusi Penyimpanan Modern dan Efisien.</p><p>Maksimalkan ruang kamar tidur Anda dengan lemari minimalis ini. Pintu gesernya menghemat ruang, sementara interiornya yang cerdas menyediakan berbagai opsi penyimpanan.</p><ul><li>Dilengkapi sistem Pintu Geser (Sliding Door) yang halus dan hemat tempat.</li><li>Interior terstruktur dengan rak, laci, dan ruang gantungan yang luas.</li><li>Material MDF Lapis HPL menjamin tampilan modern dan mudah dibersihkan.</li></ul>",
    discount: 20,
    price_discount: 2240000,
    price: 2800000,
    rating: 3.4,
    specifications: [
      {
        key: "Jumlah Pintu",
        value: "2 Pintu Geser",
      },
      {
        key: "Material",
        value: "MDF Lapis HPL",
      },
      {
        key: "Fitur",
        value: "Gantungan, Rak, Laci Internal",
      },
      {
        key: "Dimensi",
        value: "150 x 60 x 200 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 5,
    uuid: "e3a5f6b9-8c2f-4d3b-9440-77e1af22a2a4",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Queen Size",
    description:
      "<p>Ranjang Queen Size: Perpaduan Rangka Kokoh dan Desain Elegan.</p><p>Ciptakan oasis tidur yang nyaman dan berkelas. Rangka tempat tidur ini menawarkan stabilitas luar biasa dan desain sandaran kepala yang empuk dan menarik.</p><ul><li>Rangka dibuat dari Kayu Mahoni pilihan yang sangat kuat dan tahan lama.</li><li>Ukuran Queen (160x200 cm) memberikan ruang tidur yang leluasa.</li><li>Desain elegan, menjadikannya pusat perhatian di kamar tidur utama Anda.</li></ul>",
    discount: 10,
    price_discount: 4680000,
    price: 5200000,
    rating: 5.0,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Queen (160x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Mahoni",
      },
      {
        key: "Sandaran Kepala",
        value: "Berlapis Busa",
      },
      {
        key: "Tinggi Rangka",
        value: "35 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 6,
    uuid: "d5c7a8f2-91b4-47fb-8423-09c2e1e5a3d9",
    category_id: 6,
    category_name: "Rak Buku",
    title: "Rak Buku Minimalis",
    description:
      "<p>Rak Buku Minimalis 5 Susun: Solusi Display yang Hemat Tempat dan Stylish.</p><p>Rak vertikal ramping ini adalah pilihan tepat untuk menata koleksi Anda di ruang yang terbatas. Desainnya yang terbuka memudahkan akses dan penataan dekorasi.</p><ul><li>Desain vertikal memaksimalkan penggunaan ruang dinding secara efisien.</li><li>Terbuat dari Baja Ringan dan Papan Partikel berkualitas dengan daya topang yang baik.</li><li>Ideal untuk ruang belajar, kantor, atau sudut rumah mana pun.</li></ul>",
    discount: 35,
    price_discount: 487500,
    price: 750000,
    rating: 4.1,
    specifications: [
      {
        key: "Jumlah Tingkat",
        value: "5 Susun",
      },
      {
        key: "Material",
        value: "Baja Ringan dan Papan Partikel",
      },
      {
        key: "Pemasangan",
        value: "Berdiri Bebas (Free Standing)",
      },
      {
        key: "Dimensi",
        value: "60 x 30 x 180 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 7,
    uuid: "b9f2e3d4-7c61-41a3-8a23-f22c5e5c7d91",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Bed Multifungsi",
    description:
      "<p>Sofa Bed Multifungsi: Konversi Cepat, Kenyamanan Ganda.</p><p>Sempurna untuk apartemen kecil atau kamar tamu, sofa bed ini menawarkan fleksibilitas maksimal. Berubah dengan mudah dari sofa duduk yang nyaman menjadi tempat tidur yang fungsional.</p><ul><li>Mekanisme Lipat Cepat yang praktis dan tidak memakan waktu.</li><li>Rangka campuran Besi dan Kayu menjamin stabilitas dalam mode sofa maupun tempat tidur.</li><li>Solusi hemat ruang tanpa mengorbankan kualitas.</li></ul>",
    discount: 40,
    price_discount: 1680000,
    price: 2800000,
    rating: 5.0,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa Bed",
      },
      {
        key: "Material Rangka",
        value: "Besi dan Kayu Campuran",
      },
      {
        key: "Mekanisme",
        value: "Lipat Cepat",
      },
      {
        key: "Ukuran Saat Dibuka",
        value: "180 x 100 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 8,
    uuid: "c1d7e9a3-5f42-4a93-91c4-6b2f4a6e5d2f",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Kerja Minimalis",
    description:
      "<p>Meja Kerja Minimalis: Fokus dan Rapi untuk Home Office.</p><p>Meja ini dirancang untuk menciptakan lingkungan kerja yang produktif dan bebas dari kekacauan. Permukaan yang luas didukung oleh desain minimalis dan fungsionalitas penyimpanan tersembunyi.</p><ul><li>Desain Modern dan Ramping cocok untuk semua jenis interior kantor rumah.</li><li>Dilengkapi laci penyimpanan terintegrasi untuk menata perlengkapan tulis.</li><li>Konstruksi Papan Partikel yang stabil dan mudah dipindahkan.</li></ul>",
    discount: 18,
    price_discount: 1230000,
    price: 1500000,
    rating: 4.9,
    specifications: [
      {
        key: "Material Utama",
        value: "Papan Partikel",
      },
      {
        key: "Fitur Tambahan",
        value: "1 Laci dan Ruang Kabel",
      },
      {
        key: "Gaya",
        value: "Minimalis/Modern",
      },
      {
        key: "Dimensi",
        value: "120 x 60 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 9,
    uuid: "a7e5b1c2-3d4f-44c9-b91e-8d2f7c4b5a61",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Kantor Ergonomis",
    description:
      "<p>Kursi Kantor Ergonomis: Dukungan Kesehatan untuk Produktivitas Optimal.</p><p>Kursi premium ini wajib dimiliki oleh para profesional. Dirancang dengan perhatian pada detail postur, ia mampu menyesuaikan diri dengan bentuk tubuh Anda untuk meminimalkan kelelahan.</p><ul><li>Dilengkapi fitur penyesuaian Hydraulic Gas Lift untuk ketinggian yang sempurna.</li><li>Pelapis Jaring (Mesh) Bernapas mencegah panas dan meningkatkan sirkulasi udara.</li><li>Sandaran punggung dan lengan dapat diatur untuk kenyamanan personal.</li></ul>",
    discount: 22,
    price_discount: 1716000,
    price: 2200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Pelapis",
        value: "Jaring (Mesh) Bernapas",
      },
      {
        key: "Fitur Pengaturan",
        value: "Tinggi, Sandaran Lengan, Sandaran Punggung",
      },
      {
        key: "Roda",
        value: "5 Roda Nilon",
      },
      {
        key: "Mekanisme",
        value: "Hydraulic Gas Lift",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631391-8cc5b9ce1dca?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1683121177357-30453583daed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 10,
    uuid: "f9c3d7a8-2e4b-49f3-9012-4b5e7c8d2f3a",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Anak",
    description:
      "<p>Tempat Tidur Anak: Desain Ceria, Keamanan Terjamin, dan Penyimpanan Cerdas.</p><p>Tempat tidur Single Size ini menawarkan lingkungan tidur yang aman dan nyaman bagi anak. Desainnya yang menyenangkan dilengkapi dengan fungsionalitas yang disukai orang tua.</p><ul><li>Rangka kokoh dari Kayu Pinus dengan konstruksi ramah anak.</li><li>Dilengkapi 2 Laci Penyimpanan di bawah kasur untuk menghemat ruang kamar.</li><li>Dirancang untuk usia 5 hingga 12 tahun dengan mempertimbangkan keamanan.</li></ul>",
    discount: 28,
    price_discount: 2232000,
    price: 3100000,
    rating: 4.8,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Single (100x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Pinus",
      },
      {
        key: "Fitur",
        value: "2 Laci Penyimpanan Bawah",
      },
      {
        key: "Usia yang Direkomendasikan",
        value: "5 - 12 Tahun",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },

  // start data example
  {
    id: 1,
    uuid: "b3f6c9d0-7a12-4b8f-b2f0-3f98a1a2c101",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Minimalis 3 Dudukan",
    description:
      "<p>Sofa Minimalis 3 Dudukan: Kenyamanan Premium untuk Ruang Tamu Modern.</p><p>Sofa ini dirancang sebagai titik fokus ruang tamu kontemporer Anda. Dengan desain garis bersih dan bantalan yang tebal, ia menawarkan tempat duduk yang luas dan mewah untuk tiga orang.</p><ul><li>Bantalan busa kepadatan tinggi menjamin dukungan ergonomis yang tahan lama.</li><li>Rangka internal terbuat dari Kayu Jati Solid untuk durabilitas superior.</li><li>Pelapis kain Beludru premium memberikan sentuhan kelembutan dan kemewahan.</li></ul>",
    discount: 25,
    price_discount: 2625000,
    price: 3500000,
    rating: 4.8,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa 3 Dudukan",
      },
      {
        key: "Material Rangka",
        value: "Kayu Jati Solid",
      },
      {
        key: "Material Kain",
        value: "Beludru (Velvet)",
      },
      {
        key: "Dimensi",
        value: "200 x 90 x 80 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 2,
    uuid: "c7a2e1f4-91de-48f7-8b77-5e2d7e2b510a",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Makan Kayu Jati",
    description:
      "<p>Meja Makan Kayu Jati: Kekuatan Klasik untuk Kebersamaan Keluarga.</p><p>Meja makan ini adalah investasi abadi. Dibuat dari kayu jati asli yang dikenal akan ketahanan dan keindahan urat kayunya, meja ini ideal untuk menampung enam orang dengan nyaman.</p><ul><li>Material utama dari Kayu Jati memastikan daya tahan terhadap cuaca dan rayap.</li><li>Finishing halus menonjolkan tekstur alami, menambah kesan klasik dan mewah.</li><li>Permukaan luas, ideal untuk jamuan makan atau pertemuan formal.</li></ul>",
    discount: 15,
    price_discount: 3570000,
    price: 4200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Utama",
        value: "Kayu Jati",
      },
      {
        key: "Kapasitas",
        value: "6 Orang",
      },
      {
        key: "Bentuk",
        value: "Persegi Panjang",
      },
      {
        key: "Dimensi",
        value: "180 x 90 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 3,
    uuid: "f2b1a3c9-32e5-4f5a-9c87-61b83f55e3d2",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Rotan Santai",
    description:
      "<p>Kursi Rotan Santai: Sentuhan Natural Tropis yang Ringan dan Nyaman.</p><p>Kursi *handmade* ini menciptakan suasana relaksasi di mana pun diletakkan. Dibuat dari rotan alami yang ditenun secara presisi, kursi ini ringan namun sangat kokoh.</p><ul><li>Konstruksi dari Rotan Alami yang ramah lingkungan dan fleksibel.</li><li>Desain sandaran tinggi mendukung punggung secara optimal.</li><li>Sangat ideal untuk mempercantik ruang tamu, teras, atau sudut baca.</li></ul>",
    discount: 30,
    price_discount: 665000,
    price: 950000,
    rating: 4.2,
    specifications: [
      {
        key: "Material Utama",
        value: "Rotan Alami",
      },
      {
        key: "Penggunaan",
        value: "Indoor/Teras",
      },
      {
        key: "Termasuk Bantal",
        value: "Ya",
      },
      {
        key: "Tinggi Sandaran",
        value: "70 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 4,
    uuid: "a0d4c8b2-15f8-45b9-ae3b-2dbb94d55f61",
    category_id: 4,
    category_name: "Lemari",
    title: "Lemari Pakaian 2 Pintu",
    description:
      "<p>Lemari Pakaian 2 Pintu Geser: Solusi Penyimpanan Modern dan Efisien.</p><p>Maksimalkan ruang kamar tidur Anda dengan lemari minimalis ini. Pintu gesernya menghemat ruang, sementara interiornya yang cerdas menyediakan berbagai opsi penyimpanan.</p><ul><li>Dilengkapi sistem Pintu Geser (Sliding Door) yang halus dan hemat tempat.</li><li>Interior terstruktur dengan rak, laci, dan ruang gantungan yang luas.</li><li>Material MDF Lapis HPL menjamin tampilan modern dan mudah dibersihkan.</li></ul>",
    discount: 20,
    price_discount: 2240000,
    price: 2800000,
    rating: 3.4,
    specifications: [
      {
        key: "Jumlah Pintu",
        value: "2 Pintu Geser",
      },
      {
        key: "Material",
        value: "MDF Lapis HPL",
      },
      {
        key: "Fitur",
        value: "Gantungan, Rak, Laci Internal",
      },
      {
        key: "Dimensi",
        value: "150 x 60 x 200 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 5,
    uuid: "e3a5f6b9-8c2f-4d3b-9440-77e1af22a2a4",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Queen Size",
    description:
      "<p>Ranjang Queen Size: Perpaduan Rangka Kokoh dan Desain Elegan.</p><p>Ciptakan oasis tidur yang nyaman dan berkelas. Rangka tempat tidur ini menawarkan stabilitas luar biasa dan desain sandaran kepala yang empuk dan menarik.</p><ul><li>Rangka dibuat dari Kayu Mahoni pilihan yang sangat kuat dan tahan lama.</li><li>Ukuran Queen (160x200 cm) memberikan ruang tidur yang leluasa.</li><li>Desain elegan, menjadikannya pusat perhatian di kamar tidur utama Anda.</li></ul>",
    discount: 10,
    price_discount: 4680000,
    price: 5200000,
    rating: 5.0,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Queen (160x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Mahoni",
      },
      {
        key: "Sandaran Kepala",
        value: "Berlapis Busa",
      },
      {
        key: "Tinggi Rangka",
        value: "35 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 6,
    uuid: "d5c7a8f2-91b4-47fb-8423-09c2e1e5a3d9",
    category_id: 6,
    category_name: "Rak Buku",
    title: "Rak Buku Minimalis",
    description:
      "<p>Rak Buku Minimalis 5 Susun: Solusi Display yang Hemat Tempat dan Stylish.</p><p>Rak vertikal ramping ini adalah pilihan tepat untuk menata koleksi Anda di ruang yang terbatas. Desainnya yang terbuka memudahkan akses dan penataan dekorasi.</p><ul><li>Desain vertikal memaksimalkan penggunaan ruang dinding secara efisien.</li><li>Terbuat dari Baja Ringan dan Papan Partikel berkualitas dengan daya topang yang baik.</li><li>Ideal untuk ruang belajar, kantor, atau sudut rumah mana pun.</li></ul>",
    discount: 35,
    price_discount: 487500,
    price: 750000,
    rating: 4.1,
    specifications: [
      {
        key: "Jumlah Tingkat",
        value: "5 Susun",
      },
      {
        key: "Material",
        value: "Baja Ringan dan Papan Partikel",
      },
      {
        key: "Pemasangan",
        value: "Berdiri Bebas (Free Standing)",
      },
      {
        key: "Dimensi",
        value: "60 x 30 x 180 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 7,
    uuid: "b9f2e3d4-7c61-41a3-8a23-f22c5e5c7d91",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Bed Multifungsi",
    description:
      "<p>Sofa Bed Multifungsi: Konversi Cepat, Kenyamanan Ganda.</p><p>Sempurna untuk apartemen kecil atau kamar tamu, sofa bed ini menawarkan fleksibilitas maksimal. Berubah dengan mudah dari sofa duduk yang nyaman menjadi tempat tidur yang fungsional.</p><ul><li>Mekanisme Lipat Cepat yang praktis dan tidak memakan waktu.</li><li>Rangka campuran Besi dan Kayu menjamin stabilitas dalam mode sofa maupun tempat tidur.</li><li>Solusi hemat ruang tanpa mengorbankan kualitas.</li></ul>",
    discount: 40,
    price_discount: 1680000,
    price: 2800000,
    rating: 5.0,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa Bed",
      },
      {
        key: "Material Rangka",
        value: "Besi dan Kayu Campuran",
      },
      {
        key: "Mekanisme",
        value: "Lipat Cepat",
      },
      {
        key: "Ukuran Saat Dibuka",
        value: "180 x 100 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 8,
    uuid: "c1d7e9a3-5f42-4a93-91c4-6b2f4a6e5d2f",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Kerja Minimalis",
    description:
      "<p>Meja Kerja Minimalis: Fokus dan Rapi untuk Home Office.</p><p>Meja ini dirancang untuk menciptakan lingkungan kerja yang produktif dan bebas dari kekacauan. Permukaan yang luas didukung oleh desain minimalis dan fungsionalitas penyimpanan tersembunyi.</p><ul><li>Desain Modern dan Ramping cocok untuk semua jenis interior kantor rumah.</li><li>Dilengkapi laci penyimpanan terintegrasi untuk menata perlengkapan tulis.</li><li>Konstruksi Papan Partikel yang stabil dan mudah dipindahkan.</li></ul>",
    discount: 18,
    price_discount: 1230000,
    price: 1500000,
    rating: 4.9,
    specifications: [
      {
        key: "Material Utama",
        value: "Papan Partikel",
      },
      {
        key: "Fitur Tambahan",
        value: "1 Laci dan Ruang Kabel",
      },
      {
        key: "Gaya",
        value: "Minimalis/Modern",
      },
      {
        key: "Dimensi",
        value: "120 x 60 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 9,
    uuid: "a7e5b1c2-3d4f-44c9-b91e-8d2f7c4b5a61",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Kantor Ergonomis",
    description:
      "<p>Kursi Kantor Ergonomis: Dukungan Kesehatan untuk Produktivitas Optimal.</p><p>Kursi premium ini wajib dimiliki oleh para profesional. Dirancang dengan perhatian pada detail postur, ia mampu menyesuaikan diri dengan bentuk tubuh Anda untuk meminimalkan kelelahan.</p><ul><li>Dilengkapi fitur penyesuaian Hydraulic Gas Lift untuk ketinggian yang sempurna.</li><li>Pelapis Jaring (Mesh) Bernapas mencegah panas dan meningkatkan sirkulasi udara.</li><li>Sandaran punggung dan lengan dapat diatur untuk kenyamanan personal.</li></ul>",
    discount: 22,
    price_discount: 1716000,
    price: 2200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Pelapis",
        value: "Jaring (Mesh) Bernapas",
      },
      {
        key: "Fitur Pengaturan",
        value: "Tinggi, Sandaran Lengan, Sandaran Punggung",
      },
      {
        key: "Roda",
        value: "5 Roda Nilon",
      },
      {
        key: "Mekanisme",
        value: "Hydraulic Gas Lift",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631391-8cc5b9ce1dca?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1683121177357-30453583daed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 10,
    uuid: "f9c3d7a8-2e4b-49f3-9012-4b5e7c8d2f3a",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Anak",
    description:
      "<p>Tempat Tidur Anak: Desain Ceria, Keamanan Terjamin, dan Penyimpanan Cerdas.</p><p>Tempat tidur Single Size ini menawarkan lingkungan tidur yang aman dan nyaman bagi anak. Desainnya yang menyenangkan dilengkapi dengan fungsionalitas yang disukai orang tua.</p><ul><li>Rangka kokoh dari Kayu Pinus dengan konstruksi ramah anak.</li><li>Dilengkapi 2 Laci Penyimpanan di bawah kasur untuk menghemat ruang kamar.</li><li>Dirancang untuk usia 5 hingga 12 tahun dengan mempertimbangkan keamanan.</li></ul>",
    discount: 28,
    price_discount: 2232000,
    price: 3100000,
    rating: 4.8,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Single (100x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Pinus",
      },
      {
        key: "Fitur",
        value: "2 Laci Penyimpanan Bawah",
      },
      {
        key: "Usia yang Direkomendasikan",
        value: "5 - 12 Tahun",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 1,
    uuid: "b3f6c9d0-7a12-4b8f-b2f0-3f98a1a2c101",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Minimalis 3 Dudukan",
    description:
      "<p>Sofa Minimalis 3 Dudukan: Kenyamanan Premium untuk Ruang Tamu Modern.</p><p>Sofa ini dirancang sebagai titik fokus ruang tamu kontemporer Anda. Dengan desain garis bersih dan bantalan yang tebal, ia menawarkan tempat duduk yang luas dan mewah untuk tiga orang.</p><ul><li>Bantalan busa kepadatan tinggi menjamin dukungan ergonomis yang tahan lama.</li><li>Rangka internal terbuat dari Kayu Jati Solid untuk durabilitas superior.</li><li>Pelapis kain Beludru premium memberikan sentuhan kelembutan dan kemewahan.</li></ul>",
    discount: 25,
    price_discount: 2625000,
    price: 3500000,
    rating: 4.8,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa 3 Dudukan",
      },
      {
        key: "Material Rangka",
        value: "Kayu Jati Solid",
      },
      {
        key: "Material Kain",
        value: "Beludru (Velvet)",
      },
      {
        key: "Dimensi",
        value: "200 x 90 x 80 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 2,
    uuid: "c7a2e1f4-91de-48f7-8b77-5e2d7e2b510a",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Makan Kayu Jati",
    description:
      "<p>Meja Makan Kayu Jati: Kekuatan Klasik untuk Kebersamaan Keluarga.</p><p>Meja makan ini adalah investasi abadi. Dibuat dari kayu jati asli yang dikenal akan ketahanan dan keindahan urat kayunya, meja ini ideal untuk menampung enam orang dengan nyaman.</p><ul><li>Material utama dari Kayu Jati memastikan daya tahan terhadap cuaca dan rayap.</li><li>Finishing halus menonjolkan tekstur alami, menambah kesan klasik dan mewah.</li><li>Permukaan luas, ideal untuk jamuan makan atau pertemuan formal.</li></ul>",
    discount: 15,
    price_discount: 3570000,
    price: 4200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Utama",
        value: "Kayu Jati",
      },
      {
        key: "Kapasitas",
        value: "6 Orang",
      },
      {
        key: "Bentuk",
        value: "Persegi Panjang",
      },
      {
        key: "Dimensi",
        value: "180 x 90 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 3,
    uuid: "f2b1a3c9-32e5-4f5a-9c87-61b83f55e3d2",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Rotan Santai",
    description:
      "<p>Kursi Rotan Santai: Sentuhan Natural Tropis yang Ringan dan Nyaman.</p><p>Kursi *handmade* ini menciptakan suasana relaksasi di mana pun diletakkan. Dibuat dari rotan alami yang ditenun secara presisi, kursi ini ringan namun sangat kokoh.</p><ul><li>Konstruksi dari Rotan Alami yang ramah lingkungan dan fleksibel.</li><li>Desain sandaran tinggi mendukung punggung secara optimal.</li><li>Sangat ideal untuk mempercantik ruang tamu, teras, atau sudut baca.</li></ul>",
    discount: 30,
    price_discount: 665000,
    price: 950000,
    rating: 4.2,
    specifications: [
      {
        key: "Material Utama",
        value: "Rotan Alami",
      },
      {
        key: "Penggunaan",
        value: "Indoor/Teras",
      },
      {
        key: "Termasuk Bantal",
        value: "Ya",
      },
      {
        key: "Tinggi Sandaran",
        value: "70 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 4,
    uuid: "a0d4c8b2-15f8-45b9-ae3b-2dbb94d55f61",
    category_id: 4,
    category_name: "Lemari",
    title: "Lemari Pakaian 2 Pintu",
    description:
      "<p>Lemari Pakaian 2 Pintu Geser: Solusi Penyimpanan Modern dan Efisien.</p><p>Maksimalkan ruang kamar tidur Anda dengan lemari minimalis ini. Pintu gesernya menghemat ruang, sementara interiornya yang cerdas menyediakan berbagai opsi penyimpanan.</p><ul><li>Dilengkapi sistem Pintu Geser (Sliding Door) yang halus dan hemat tempat.</li><li>Interior terstruktur dengan rak, laci, dan ruang gantungan yang luas.</li><li>Material MDF Lapis HPL menjamin tampilan modern dan mudah dibersihkan.</li></ul>",
    discount: 20,
    price_discount: 2240000,
    price: 2800000,
    rating: 3.4,
    specifications: [
      {
        key: "Jumlah Pintu",
        value: "2 Pintu Geser",
      },
      {
        key: "Material",
        value: "MDF Lapis HPL",
      },
      {
        key: "Fitur",
        value: "Gantungan, Rak, Laci Internal",
      },
      {
        key: "Dimensi",
        value: "150 x 60 x 200 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 5,
    uuid: "e3a5f6b9-8c2f-4d3b-9440-77e1af22a2a4",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Queen Size",
    description:
      "<p>Ranjang Queen Size: Perpaduan Rangka Kokoh dan Desain Elegan.</p><p>Ciptakan oasis tidur yang nyaman dan berkelas. Rangka tempat tidur ini menawarkan stabilitas luar biasa dan desain sandaran kepala yang empuk dan menarik.</p><ul><li>Rangka dibuat dari Kayu Mahoni pilihan yang sangat kuat dan tahan lama.</li><li>Ukuran Queen (160x200 cm) memberikan ruang tidur yang leluasa.</li><li>Desain elegan, menjadikannya pusat perhatian di kamar tidur utama Anda.</li></ul>",
    discount: 10,
    price_discount: 4680000,
    price: 5200000,
    rating: 5.0,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Queen (160x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Mahoni",
      },
      {
        key: "Sandaran Kepala",
        value: "Berlapis Busa",
      },
      {
        key: "Tinggi Rangka",
        value: "35 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 6,
    uuid: "d5c7a8f2-91b4-47fb-8423-09c2e1e5a3d9",
    category_id: 6,
    category_name: "Rak Buku",
    title: "Rak Buku Minimalis",
    description:
      "<p>Rak Buku Minimalis 5 Susun: Solusi Display yang Hemat Tempat dan Stylish.</p><p>Rak vertikal ramping ini adalah pilihan tepat untuk menata koleksi Anda di ruang yang terbatas. Desainnya yang terbuka memudahkan akses dan penataan dekorasi.</p><ul><li>Desain vertikal memaksimalkan penggunaan ruang dinding secara efisien.</li><li>Terbuat dari Baja Ringan dan Papan Partikel berkualitas dengan daya topang yang baik.</li><li>Ideal untuk ruang belajar, kantor, atau sudut rumah mana pun.</li></ul>",
    discount: 35,
    price_discount: 487500,
    price: 750000,
    rating: 4.1,
    specifications: [
      {
        key: "Jumlah Tingkat",
        value: "5 Susun",
      },
      {
        key: "Material",
        value: "Baja Ringan dan Papan Partikel",
      },
      {
        key: "Pemasangan",
        value: "Berdiri Bebas (Free Standing)",
      },
      {
        key: "Dimensi",
        value: "60 x 30 x 180 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 7,
    uuid: "b9f2e3d4-7c61-41a3-8a23-f22c5e5c7d91",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Bed Multifungsi",
    description:
      "<p>Sofa Bed Multifungsi: Konversi Cepat, Kenyamanan Ganda.</p><p>Sempurna untuk apartemen kecil atau kamar tamu, sofa bed ini menawarkan fleksibilitas maksimal. Berubah dengan mudah dari sofa duduk yang nyaman menjadi tempat tidur yang fungsional.</p><ul><li>Mekanisme Lipat Cepat yang praktis dan tidak memakan waktu.</li><li>Rangka campuran Besi dan Kayu menjamin stabilitas dalam mode sofa maupun tempat tidur.</li><li>Solusi hemat ruang tanpa mengorbankan kualitas.</li></ul>",
    discount: 40,
    price_discount: 1680000,
    price: 2800000,
    rating: 5.0,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa Bed",
      },
      {
        key: "Material Rangka",
        value: "Besi dan Kayu Campuran",
      },
      {
        key: "Mekanisme",
        value: "Lipat Cepat",
      },
      {
        key: "Ukuran Saat Dibuka",
        value: "180 x 100 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 8,
    uuid: "c1d7e9a3-5f42-4a93-91c4-6b2f4a6e5d2f",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Kerja Minimalis",
    description:
      "<p>Meja Kerja Minimalis: Fokus dan Rapi untuk Home Office.</p><p>Meja ini dirancang untuk menciptakan lingkungan kerja yang produktif dan bebas dari kekacauan. Permukaan yang luas didukung oleh desain minimalis dan fungsionalitas penyimpanan tersembunyi.</p><ul><li>Desain Modern dan Ramping cocok untuk semua jenis interior kantor rumah.</li><li>Dilengkapi laci penyimpanan terintegrasi untuk menata perlengkapan tulis.</li><li>Konstruksi Papan Partikel yang stabil dan mudah dipindahkan.</li></ul>",
    discount: 18,
    price_discount: 1230000,
    price: 1500000,
    rating: 4.9,
    specifications: [
      {
        key: "Material Utama",
        value: "Papan Partikel",
      },
      {
        key: "Fitur Tambahan",
        value: "1 Laci dan Ruang Kabel",
      },
      {
        key: "Gaya",
        value: "Minimalis/Modern",
      },
      {
        key: "Dimensi",
        value: "120 x 60 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 9,
    uuid: "a7e5b1c2-3d4f-44c9-b91e-8d2f7c4b5a61",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Kantor Ergonomis",
    description:
      "<p>Kursi Kantor Ergonomis: Dukungan Kesehatan untuk Produktivitas Optimal.</p><p>Kursi premium ini wajib dimiliki oleh para profesional. Dirancang dengan perhatian pada detail postur, ia mampu menyesuaikan diri dengan bentuk tubuh Anda untuk meminimalkan kelelahan.</p><ul><li>Dilengkapi fitur penyesuaian Hydraulic Gas Lift untuk ketinggian yang sempurna.</li><li>Pelapis Jaring (Mesh) Bernapas mencegah panas dan meningkatkan sirkulasi udara.</li><li>Sandaran punggung dan lengan dapat diatur untuk kenyamanan personal.</li></ul>",
    discount: 22,
    price_discount: 1716000,
    price: 2200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Pelapis",
        value: "Jaring (Mesh) Bernapas",
      },
      {
        key: "Fitur Pengaturan",
        value: "Tinggi, Sandaran Lengan, Sandaran Punggung",
      },
      {
        key: "Roda",
        value: "5 Roda Nilon",
      },
      {
        key: "Mekanisme",
        value: "Hydraulic Gas Lift",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631391-8cc5b9ce1dca?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1683121177357-30453583daed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 10,
    uuid: "f9c3d7a8-2e4b-49f3-9012-4b5e7c8d2f3a",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Anak",
    description:
      "<p>Tempat Tidur Anak: Desain Ceria, Keamanan Terjamin, dan Penyimpanan Cerdas.</p><p>Tempat tidur Single Size ini menawarkan lingkungan tidur yang aman dan nyaman bagi anak. Desainnya yang menyenangkan dilengkapi dengan fungsionalitas yang disukai orang tua.</p><ul><li>Rangka kokoh dari Kayu Pinus dengan konstruksi ramah anak.</li><li>Dilengkapi 2 Laci Penyimpanan di bawah kasur untuk menghemat ruang kamar.</li><li>Dirancang untuk usia 5 hingga 12 tahun dengan mempertimbangkan keamanan.</li></ul>",
    discount: 28,
    price_discount: 2232000,
    price: 3100000,
    rating: 4.8,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Single (100x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Pinus",
      },
      {
        key: "Fitur",
        value: "2 Laci Penyimpanan Bawah",
      },
      {
        key: "Usia yang Direkomendasikan",
        value: "5 - 12 Tahun",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 1,
    uuid: "b3f6c9d0-7a12-4b8f-b2f0-3f98a1a2c101",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Minimalis 3 Dudukan",
    description:
      "<p>Sofa Minimalis 3 Dudukan: Kenyamanan Premium untuk Ruang Tamu Modern.</p><p>Sofa ini dirancang sebagai titik fokus ruang tamu kontemporer Anda. Dengan desain garis bersih dan bantalan yang tebal, ia menawarkan tempat duduk yang luas dan mewah untuk tiga orang.</p><ul><li>Bantalan busa kepadatan tinggi menjamin dukungan ergonomis yang tahan lama.</li><li>Rangka internal terbuat dari Kayu Jati Solid untuk durabilitas superior.</li><li>Pelapis kain Beludru premium memberikan sentuhan kelembutan dan kemewahan.</li></ul>",
    discount: 25,
    price_discount: 2625000,
    price: 3500000,
    rating: 4.8,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa 3 Dudukan",
      },
      {
        key: "Material Rangka",
        value: "Kayu Jati Solid",
      },
      {
        key: "Material Kain",
        value: "Beludru (Velvet)",
      },
      {
        key: "Dimensi",
        value: "200 x 90 x 80 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 2,
    uuid: "c7a2e1f4-91de-48f7-8b77-5e2d7e2b510a",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Makan Kayu Jati",
    description:
      "<p>Meja Makan Kayu Jati: Kekuatan Klasik untuk Kebersamaan Keluarga.</p><p>Meja makan ini adalah investasi abadi. Dibuat dari kayu jati asli yang dikenal akan ketahanan dan keindahan urat kayunya, meja ini ideal untuk menampung enam orang dengan nyaman.</p><ul><li>Material utama dari Kayu Jati memastikan daya tahan terhadap cuaca dan rayap.</li><li>Finishing halus menonjolkan tekstur alami, menambah kesan klasik dan mewah.</li><li>Permukaan luas, ideal untuk jamuan makan atau pertemuan formal.</li></ul>",
    discount: 15,
    price_discount: 3570000,
    price: 4200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Utama",
        value: "Kayu Jati",
      },
      {
        key: "Kapasitas",
        value: "6 Orang",
      },
      {
        key: "Bentuk",
        value: "Persegi Panjang",
      },
      {
        key: "Dimensi",
        value: "180 x 90 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 3,
    uuid: "f2b1a3c9-32e5-4f5a-9c87-61b83f55e3d2",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Rotan Santai",
    description:
      "<p>Kursi Rotan Santai: Sentuhan Natural Tropis yang Ringan dan Nyaman.</p><p>Kursi *handmade* ini menciptakan suasana relaksasi di mana pun diletakkan. Dibuat dari rotan alami yang ditenun secara presisi, kursi ini ringan namun sangat kokoh.</p><ul><li>Konstruksi dari Rotan Alami yang ramah lingkungan dan fleksibel.</li><li>Desain sandaran tinggi mendukung punggung secara optimal.</li><li>Sangat ideal untuk mempercantik ruang tamu, teras, atau sudut baca.</li></ul>",
    discount: 30,
    price_discount: 665000,
    price: 950000,
    rating: 4.2,
    specifications: [
      {
        key: "Material Utama",
        value: "Rotan Alami",
      },
      {
        key: "Penggunaan",
        value: "Indoor/Teras",
      },
      {
        key: "Termasuk Bantal",
        value: "Ya",
      },
      {
        key: "Tinggi Sandaran",
        value: "70 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 4,
    uuid: "a0d4c8b2-15f8-45b9-ae3b-2dbb94d55f61",
    category_id: 4,
    category_name: "Lemari",
    title: "Lemari Pakaian 2 Pintu",
    description:
      "<p>Lemari Pakaian 2 Pintu Geser: Solusi Penyimpanan Modern dan Efisien.</p><p>Maksimalkan ruang kamar tidur Anda dengan lemari minimalis ini. Pintu gesernya menghemat ruang, sementara interiornya yang cerdas menyediakan berbagai opsi penyimpanan.</p><ul><li>Dilengkapi sistem Pintu Geser (Sliding Door) yang halus dan hemat tempat.</li><li>Interior terstruktur dengan rak, laci, dan ruang gantungan yang luas.</li><li>Material MDF Lapis HPL menjamin tampilan modern dan mudah dibersihkan.</li></ul>",
    discount: 20,
    price_discount: 2240000,
    price: 2800000,
    rating: 3.4,
    specifications: [
      {
        key: "Jumlah Pintu",
        value: "2 Pintu Geser",
      },
      {
        key: "Material",
        value: "MDF Lapis HPL",
      },
      {
        key: "Fitur",
        value: "Gantungan, Rak, Laci Internal",
      },
      {
        key: "Dimensi",
        value: "150 x 60 x 200 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 5,
    uuid: "e3a5f6b9-8c2f-4d3b-9440-77e1af22a2a4",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Queen Size",
    description:
      "<p>Ranjang Queen Size: Perpaduan Rangka Kokoh dan Desain Elegan.</p><p>Ciptakan oasis tidur yang nyaman dan berkelas. Rangka tempat tidur ini menawarkan stabilitas luar biasa dan desain sandaran kepala yang empuk dan menarik.</p><ul><li>Rangka dibuat dari Kayu Mahoni pilihan yang sangat kuat dan tahan lama.</li><li>Ukuran Queen (160x200 cm) memberikan ruang tidur yang leluasa.</li><li>Desain elegan, menjadikannya pusat perhatian di kamar tidur utama Anda.</li></ul>",
    discount: 10,
    price_discount: 4680000,
    price: 5200000,
    rating: 5.0,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Queen (160x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Mahoni",
      },
      {
        key: "Sandaran Kepala",
        value: "Berlapis Busa",
      },
      {
        key: "Tinggi Rangka",
        value: "35 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 6,
    uuid: "d5c7a8f2-91b4-47fb-8423-09c2e1e5a3d9",
    category_id: 6,
    category_name: "Rak Buku",
    title: "Rak Buku Minimalis",
    description:
      "<p>Rak Buku Minimalis 5 Susun: Solusi Display yang Hemat Tempat dan Stylish.</p><p>Rak vertikal ramping ini adalah pilihan tepat untuk menata koleksi Anda di ruang yang terbatas. Desainnya yang terbuka memudahkan akses dan penataan dekorasi.</p><ul><li>Desain vertikal memaksimalkan penggunaan ruang dinding secara efisien.</li><li>Terbuat dari Baja Ringan dan Papan Partikel berkualitas dengan daya topang yang baik.</li><li>Ideal untuk ruang belajar, kantor, atau sudut rumah mana pun.</li></ul>",
    discount: 35,
    price_discount: 487500,
    price: 750000,
    rating: 4.1,
    specifications: [
      {
        key: "Jumlah Tingkat",
        value: "5 Susun",
      },
      {
        key: "Material",
        value: "Baja Ringan dan Papan Partikel",
      },
      {
        key: "Pemasangan",
        value: "Berdiri Bebas (Free Standing)",
      },
      {
        key: "Dimensi",
        value: "60 x 30 x 180 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 7,
    uuid: "b9f2e3d4-7c61-41a3-8a23-f22c5e5c7d91",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Bed Multifungsi",
    description:
      "<p>Sofa Bed Multifungsi: Konversi Cepat, Kenyamanan Ganda.</p><p>Sempurna untuk apartemen kecil atau kamar tamu, sofa bed ini menawarkan fleksibilitas maksimal. Berubah dengan mudah dari sofa duduk yang nyaman menjadi tempat tidur yang fungsional.</p><ul><li>Mekanisme Lipat Cepat yang praktis dan tidak memakan waktu.</li><li>Rangka campuran Besi dan Kayu menjamin stabilitas dalam mode sofa maupun tempat tidur.</li><li>Solusi hemat ruang tanpa mengorbankan kualitas.</li></ul>",
    discount: 40,
    price_discount: 1680000,
    price: 2800000,
    rating: 5.0,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa Bed",
      },
      {
        key: "Material Rangka",
        value: "Besi dan Kayu Campuran",
      },
      {
        key: "Mekanisme",
        value: "Lipat Cepat",
      },
      {
        key: "Ukuran Saat Dibuka",
        value: "180 x 100 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 8,
    uuid: "c1d7e9a3-5f42-4a93-91c4-6b2f4a6e5d2f",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Kerja Minimalis",
    description:
      "<p>Meja Kerja Minimalis: Fokus dan Rapi untuk Home Office.</p><p>Meja ini dirancang untuk menciptakan lingkungan kerja yang produktif dan bebas dari kekacauan. Permukaan yang luas didukung oleh desain minimalis dan fungsionalitas penyimpanan tersembunyi.</p><ul><li>Desain Modern dan Ramping cocok untuk semua jenis interior kantor rumah.</li><li>Dilengkapi laci penyimpanan terintegrasi untuk menata perlengkapan tulis.</li><li>Konstruksi Papan Partikel yang stabil dan mudah dipindahkan.</li></ul>",
    discount: 18,
    price_discount: 1230000,
    price: 1500000,
    rating: 4.9,
    specifications: [
      {
        key: "Material Utama",
        value: "Papan Partikel",
      },
      {
        key: "Fitur Tambahan",
        value: "1 Laci dan Ruang Kabel",
      },
      {
        key: "Gaya",
        value: "Minimalis/Modern",
      },
      {
        key: "Dimensi",
        value: "120 x 60 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 9,
    uuid: "a7e5b1c2-3d4f-44c9-b91e-8d2f7c4b5a61",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Kantor Ergonomis",
    description:
      "<p>Kursi Kantor Ergonomis: Dukungan Kesehatan untuk Produktivitas Optimal.</p><p>Kursi premium ini wajib dimiliki oleh para profesional. Dirancang dengan perhatian pada detail postur, ia mampu menyesuaikan diri dengan bentuk tubuh Anda untuk meminimalkan kelelahan.</p><ul><li>Dilengkapi fitur penyesuaian Hydraulic Gas Lift untuk ketinggian yang sempurna.</li><li>Pelapis Jaring (Mesh) Bernapas mencegah panas dan meningkatkan sirkulasi udara.</li><li>Sandaran punggung dan lengan dapat diatur untuk kenyamanan personal.</li></ul>",
    discount: 22,
    price_discount: 1716000,
    price: 2200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Pelapis",
        value: "Jaring (Mesh) Bernapas",
      },
      {
        key: "Fitur Pengaturan",
        value: "Tinggi, Sandaran Lengan, Sandaran Punggung",
      },
      {
        key: "Roda",
        value: "5 Roda Nilon",
      },
      {
        key: "Mekanisme",
        value: "Hydraulic Gas Lift",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631391-8cc5b9ce1dca?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1683121177357-30453583daed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 10,
    uuid: "f9c3d7a8-2e4b-49f3-9012-4b5e7c8d2f3a",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Anak",
    description:
      "<p>Tempat Tidur Anak: Desain Ceria, Keamanan Terjamin, dan Penyimpanan Cerdas.</p><p>Tempat tidur Single Size ini menawarkan lingkungan tidur yang aman dan nyaman bagi anak. Desainnya yang menyenangkan dilengkapi dengan fungsionalitas yang disukai orang tua.</p><ul><li>Rangka kokoh dari Kayu Pinus dengan konstruksi ramah anak.</li><li>Dilengkapi 2 Laci Penyimpanan di bawah kasur untuk menghemat ruang kamar.</li><li>Dirancang untuk usia 5 hingga 12 tahun dengan mempertimbangkan keamanan.</li></ul>",
    discount: 28,
    price_discount: 2232000,
    price: 3100000,
    rating: 4.8,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Single (100x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Pinus",
      },
      {
        key: "Fitur",
        value: "2 Laci Penyimpanan Bawah",
      },
      {
        key: "Usia yang Direkomendasikan",
        value: "5 - 12 Tahun",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 1,
    uuid: "b3f6c9d0-7a12-4b8f-b2f0-3f98a1a2c101",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Minimalis 3 Dudukan",
    description:
      "<p>Sofa Minimalis 3 Dudukan: Kenyamanan Premium untuk Ruang Tamu Modern.</p><p>Sofa ini dirancang sebagai titik fokus ruang tamu kontemporer Anda. Dengan desain garis bersih dan bantalan yang tebal, ia menawarkan tempat duduk yang luas dan mewah untuk tiga orang.</p><ul><li>Bantalan busa kepadatan tinggi menjamin dukungan ergonomis yang tahan lama.</li><li>Rangka internal terbuat dari Kayu Jati Solid untuk durabilitas superior.</li><li>Pelapis kain Beludru premium memberikan sentuhan kelembutan dan kemewahan.</li></ul>",
    discount: 25,
    price_discount: 2625000,
    price: 3500000,
    rating: 4.8,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa 3 Dudukan",
      },
      {
        key: "Material Rangka",
        value: "Kayu Jati Solid",
      },
      {
        key: "Material Kain",
        value: "Beludru (Velvet)",
      },
      {
        key: "Dimensi",
        value: "200 x 90 x 80 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 2,
    uuid: "c7a2e1f4-91de-48f7-8b77-5e2d7e2b510a",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Makan Kayu Jati",
    description:
      "<p>Meja Makan Kayu Jati: Kekuatan Klasik untuk Kebersamaan Keluarga.</p><p>Meja makan ini adalah investasi abadi. Dibuat dari kayu jati asli yang dikenal akan ketahanan dan keindahan urat kayunya, meja ini ideal untuk menampung enam orang dengan nyaman.</p><ul><li>Material utama dari Kayu Jati memastikan daya tahan terhadap cuaca dan rayap.</li><li>Finishing halus menonjolkan tekstur alami, menambah kesan klasik dan mewah.</li><li>Permukaan luas, ideal untuk jamuan makan atau pertemuan formal.</li></ul>",
    discount: 15,
    price_discount: 3570000,
    price: 4200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Utama",
        value: "Kayu Jati",
      },
      {
        key: "Kapasitas",
        value: "6 Orang",
      },
      {
        key: "Bentuk",
        value: "Persegi Panjang",
      },
      {
        key: "Dimensi",
        value: "180 x 90 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 3,
    uuid: "f2b1a3c9-32e5-4f5a-9c87-61b83f55e3d2",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Rotan Santai",
    description:
      "<p>Kursi Rotan Santai: Sentuhan Natural Tropis yang Ringan dan Nyaman.</p><p>Kursi *handmade* ini menciptakan suasana relaksasi di mana pun diletakkan. Dibuat dari rotan alami yang ditenun secara presisi, kursi ini ringan namun sangat kokoh.</p><ul><li>Konstruksi dari Rotan Alami yang ramah lingkungan dan fleksibel.</li><li>Desain sandaran tinggi mendukung punggung secara optimal.</li><li>Sangat ideal untuk mempercantik ruang tamu, teras, atau sudut baca.</li></ul>",
    discount: 30,
    price_discount: 665000,
    price: 950000,
    rating: 4.2,
    specifications: [
      {
        key: "Material Utama",
        value: "Rotan Alami",
      },
      {
        key: "Penggunaan",
        value: "Indoor/Teras",
      },
      {
        key: "Termasuk Bantal",
        value: "Ya",
      },
      {
        key: "Tinggi Sandaran",
        value: "70 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 4,
    uuid: "a0d4c8b2-15f8-45b9-ae3b-2dbb94d55f61",
    category_id: 4,
    category_name: "Lemari",
    title: "Lemari Pakaian 2 Pintu",
    description:
      "<p>Lemari Pakaian 2 Pintu Geser: Solusi Penyimpanan Modern dan Efisien.</p><p>Maksimalkan ruang kamar tidur Anda dengan lemari minimalis ini. Pintu gesernya menghemat ruang, sementara interiornya yang cerdas menyediakan berbagai opsi penyimpanan.</p><ul><li>Dilengkapi sistem Pintu Geser (Sliding Door) yang halus dan hemat tempat.</li><li>Interior terstruktur dengan rak, laci, dan ruang gantungan yang luas.</li><li>Material MDF Lapis HPL menjamin tampilan modern dan mudah dibersihkan.</li></ul>",
    discount: 20,
    price_discount: 2240000,
    price: 2800000,
    rating: 3.4,
    specifications: [
      {
        key: "Jumlah Pintu",
        value: "2 Pintu Geser",
      },
      {
        key: "Material",
        value: "MDF Lapis HPL",
      },
      {
        key: "Fitur",
        value: "Gantungan, Rak, Laci Internal",
      },
      {
        key: "Dimensi",
        value: "150 x 60 x 200 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 5,
    uuid: "e3a5f6b9-8c2f-4d3b-9440-77e1af22a2a4",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Queen Size",
    description:
      "<p>Ranjang Queen Size: Perpaduan Rangka Kokoh dan Desain Elegan.</p><p>Ciptakan oasis tidur yang nyaman dan berkelas. Rangka tempat tidur ini menawarkan stabilitas luar biasa dan desain sandaran kepala yang empuk dan menarik.</p><ul><li>Rangka dibuat dari Kayu Mahoni pilihan yang sangat kuat dan tahan lama.</li><li>Ukuran Queen (160x200 cm) memberikan ruang tidur yang leluasa.</li><li>Desain elegan, menjadikannya pusat perhatian di kamar tidur utama Anda.</li></ul>",
    discount: 10,
    price_discount: 4680000,
    price: 5200000,
    rating: 5.0,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Queen (160x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Mahoni",
      },
      {
        key: "Sandaran Kepala",
        value: "Berlapis Busa",
      },
      {
        key: "Tinggi Rangka",
        value: "35 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 6,
    uuid: "d5c7a8f2-91b4-47fb-8423-09c2e1e5a3d9",
    category_id: 6,
    category_name: "Rak Buku",
    title: "Rak Buku Minimalis",
    description:
      "<p>Rak Buku Minimalis 5 Susun: Solusi Display yang Hemat Tempat dan Stylish.</p><p>Rak vertikal ramping ini adalah pilihan tepat untuk menata koleksi Anda di ruang yang terbatas. Desainnya yang terbuka memudahkan akses dan penataan dekorasi.</p><ul><li>Desain vertikal memaksimalkan penggunaan ruang dinding secara efisien.</li><li>Terbuat dari Baja Ringan dan Papan Partikel berkualitas dengan daya topang yang baik.</li><li>Ideal untuk ruang belajar, kantor, atau sudut rumah mana pun.</li></ul>",
    discount: 35,
    price_discount: 487500,
    price: 750000,
    rating: 4.1,
    specifications: [
      {
        key: "Jumlah Tingkat",
        value: "5 Susun",
      },
      {
        key: "Material",
        value: "Baja Ringan dan Papan Partikel",
      },
      {
        key: "Pemasangan",
        value: "Berdiri Bebas (Free Standing)",
      },
      {
        key: "Dimensi",
        value: "60 x 30 x 180 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 7,
    uuid: "b9f2e3d4-7c61-41a3-8a23-f22c5e5c7d91",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Bed Multifungsi",
    description:
      "<p>Sofa Bed Multifungsi: Konversi Cepat, Kenyamanan Ganda.</p><p>Sempurna untuk apartemen kecil atau kamar tamu, sofa bed ini menawarkan fleksibilitas maksimal. Berubah dengan mudah dari sofa duduk yang nyaman menjadi tempat tidur yang fungsional.</p><ul><li>Mekanisme Lipat Cepat yang praktis dan tidak memakan waktu.</li><li>Rangka campuran Besi dan Kayu menjamin stabilitas dalam mode sofa maupun tempat tidur.</li><li>Solusi hemat ruang tanpa mengorbankan kualitas.</li></ul>",
    discount: 40,
    price_discount: 1680000,
    price: 2800000,
    rating: 5.0,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa Bed",
      },
      {
        key: "Material Rangka",
        value: "Besi dan Kayu Campuran",
      },
      {
        key: "Mekanisme",
        value: "Lipat Cepat",
      },
      {
        key: "Ukuran Saat Dibuka",
        value: "180 x 100 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 8,
    uuid: "c1d7e9a3-5f42-4a93-91c4-6b2f4a6e5d2f",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Kerja Minimalis",
    description:
      "<p>Meja Kerja Minimalis: Fokus dan Rapi untuk Home Office.</p><p>Meja ini dirancang untuk menciptakan lingkungan kerja yang produktif dan bebas dari kekacauan. Permukaan yang luas didukung oleh desain minimalis dan fungsionalitas penyimpanan tersembunyi.</p><ul><li>Desain Modern dan Ramping cocok untuk semua jenis interior kantor rumah.</li><li>Dilengkapi laci penyimpanan terintegrasi untuk menata perlengkapan tulis.</li><li>Konstruksi Papan Partikel yang stabil dan mudah dipindahkan.</li></ul>",
    discount: 18,
    price_discount: 1230000,
    price: 1500000,
    rating: 4.9,
    specifications: [
      {
        key: "Material Utama",
        value: "Papan Partikel",
      },
      {
        key: "Fitur Tambahan",
        value: "1 Laci dan Ruang Kabel",
      },
      {
        key: "Gaya",
        value: "Minimalis/Modern",
      },
      {
        key: "Dimensi",
        value: "120 x 60 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 9,
    uuid: "a7e5b1c2-3d4f-44c9-b91e-8d2f7c4b5a61",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Kantor Ergonomis",
    description:
      "<p>Kursi Kantor Ergonomis: Dukungan Kesehatan untuk Produktivitas Optimal.</p><p>Kursi premium ini wajib dimiliki oleh para profesional. Dirancang dengan perhatian pada detail postur, ia mampu menyesuaikan diri dengan bentuk tubuh Anda untuk meminimalkan kelelahan.</p><ul><li>Dilengkapi fitur penyesuaian Hydraulic Gas Lift untuk ketinggian yang sempurna.</li><li>Pelapis Jaring (Mesh) Bernapas mencegah panas dan meningkatkan sirkulasi udara.</li><li>Sandaran punggung dan lengan dapat diatur untuk kenyamanan personal.</li></ul>",
    discount: 22,
    price_discount: 1716000,
    price: 2200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Pelapis",
        value: "Jaring (Mesh) Bernapas",
      },
      {
        key: "Fitur Pengaturan",
        value: "Tinggi, Sandaran Lengan, Sandaran Punggung",
      },
      {
        key: "Roda",
        value: "5 Roda Nilon",
      },
      {
        key: "Mekanisme",
        value: "Hydraulic Gas Lift",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631391-8cc5b9ce1dca?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1683121177357-30453583daed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 10,
    uuid: "f9c3d7a8-2e4b-49f3-9012-4b5e7c8d2f3a",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Anak",
    description:
      "<p>Tempat Tidur Anak: Desain Ceria, Keamanan Terjamin, dan Penyimpanan Cerdas.</p><p>Tempat tidur Single Size ini menawarkan lingkungan tidur yang aman dan nyaman bagi anak. Desainnya yang menyenangkan dilengkapi dengan fungsionalitas yang disukai orang tua.</p><ul><li>Rangka kokoh dari Kayu Pinus dengan konstruksi ramah anak.</li><li>Dilengkapi 2 Laci Penyimpanan di bawah kasur untuk menghemat ruang kamar.</li><li>Dirancang untuk usia 5 hingga 12 tahun dengan mempertimbangkan keamanan.</li></ul>",
    discount: 28,
    price_discount: 2232000,
    price: 3100000,
    rating: 4.8,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Single (100x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Pinus",
      },
      {
        key: "Fitur",
        value: "2 Laci Penyimpanan Bawah",
      },
      {
        key: "Usia yang Direkomendasikan",
        value: "5 - 12 Tahun",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 1,
    uuid: "b3f6c9d0-7a12-4b8f-b2f0-3f98a1a2c101",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Minimalis 3 Dudukan",
    description:
      "<p>Sofa Minimalis 3 Dudukan: Kenyamanan Premium untuk Ruang Tamu Modern.</p><p>Sofa ini dirancang sebagai titik fokus ruang tamu kontemporer Anda. Dengan desain garis bersih dan bantalan yang tebal, ia menawarkan tempat duduk yang luas dan mewah untuk tiga orang.</p><ul><li>Bantalan busa kepadatan tinggi menjamin dukungan ergonomis yang tahan lama.</li><li>Rangka internal terbuat dari Kayu Jati Solid untuk durabilitas superior.</li><li>Pelapis kain Beludru premium memberikan sentuhan kelembutan dan kemewahan.</li></ul>",
    discount: 25,
    price_discount: 2625000,
    price: 3500000,
    rating: 4.8,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa 3 Dudukan",
      },
      {
        key: "Material Rangka",
        value: "Kayu Jati Solid",
      },
      {
        key: "Material Kain",
        value: "Beludru (Velvet)",
      },
      {
        key: "Dimensi",
        value: "200 x 90 x 80 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 2,
    uuid: "c7a2e1f4-91de-48f7-8b77-5e2d7e2b510a",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Makan Kayu Jati",
    description:
      "<p>Meja Makan Kayu Jati: Kekuatan Klasik untuk Kebersamaan Keluarga.</p><p>Meja makan ini adalah investasi abadi. Dibuat dari kayu jati asli yang dikenal akan ketahanan dan keindahan urat kayunya, meja ini ideal untuk menampung enam orang dengan nyaman.</p><ul><li>Material utama dari Kayu Jati memastikan daya tahan terhadap cuaca dan rayap.</li><li>Finishing halus menonjolkan tekstur alami, menambah kesan klasik dan mewah.</li><li>Permukaan luas, ideal untuk jamuan makan atau pertemuan formal.</li></ul>",
    discount: 15,
    price_discount: 3570000,
    price: 4200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Utama",
        value: "Kayu Jati",
      },
      {
        key: "Kapasitas",
        value: "6 Orang",
      },
      {
        key: "Bentuk",
        value: "Persegi Panjang",
      },
      {
        key: "Dimensi",
        value: "180 x 90 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 3,
    uuid: "f2b1a3c9-32e5-4f5a-9c87-61b83f55e3d2",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Rotan Santai",
    description:
      "<p>Kursi Rotan Santai: Sentuhan Natural Tropis yang Ringan dan Nyaman.</p><p>Kursi *handmade* ini menciptakan suasana relaksasi di mana pun diletakkan. Dibuat dari rotan alami yang ditenun secara presisi, kursi ini ringan namun sangat kokoh.</p><ul><li>Konstruksi dari Rotan Alami yang ramah lingkungan dan fleksibel.</li><li>Desain sandaran tinggi mendukung punggung secara optimal.</li><li>Sangat ideal untuk mempercantik ruang tamu, teras, atau sudut baca.</li></ul>",
    discount: 30,
    price_discount: 665000,
    price: 950000,
    rating: 4.2,
    specifications: [
      {
        key: "Material Utama",
        value: "Rotan Alami",
      },
      {
        key: "Penggunaan",
        value: "Indoor/Teras",
      },
      {
        key: "Termasuk Bantal",
        value: "Ya",
      },
      {
        key: "Tinggi Sandaran",
        value: "70 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 4,
    uuid: "a0d4c8b2-15f8-45b9-ae3b-2dbb94d55f61",
    category_id: 4,
    category_name: "Lemari",
    title: "Lemari Pakaian 2 Pintu",
    description:
      "<p>Lemari Pakaian 2 Pintu Geser: Solusi Penyimpanan Modern dan Efisien.</p><p>Maksimalkan ruang kamar tidur Anda dengan lemari minimalis ini. Pintu gesernya menghemat ruang, sementara interiornya yang cerdas menyediakan berbagai opsi penyimpanan.</p><ul><li>Dilengkapi sistem Pintu Geser (Sliding Door) yang halus dan hemat tempat.</li><li>Interior terstruktur dengan rak, laci, dan ruang gantungan yang luas.</li><li>Material MDF Lapis HPL menjamin tampilan modern dan mudah dibersihkan.</li></ul>",
    discount: 20,
    price_discount: 2240000,
    price: 2800000,
    rating: 3.4,
    specifications: [
      {
        key: "Jumlah Pintu",
        value: "2 Pintu Geser",
      },
      {
        key: "Material",
        value: "MDF Lapis HPL",
      },
      {
        key: "Fitur",
        value: "Gantungan, Rak, Laci Internal",
      },
      {
        key: "Dimensi",
        value: "150 x 60 x 200 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 5,
    uuid: "e3a5f6b9-8c2f-4d3b-9440-77e1af22a2a4",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Queen Size",
    description:
      "<p>Ranjang Queen Size: Perpaduan Rangka Kokoh dan Desain Elegan.</p><p>Ciptakan oasis tidur yang nyaman dan berkelas. Rangka tempat tidur ini menawarkan stabilitas luar biasa dan desain sandaran kepala yang empuk dan menarik.</p><ul><li>Rangka dibuat dari Kayu Mahoni pilihan yang sangat kuat dan tahan lama.</li><li>Ukuran Queen (160x200 cm) memberikan ruang tidur yang leluasa.</li><li>Desain elegan, menjadikannya pusat perhatian di kamar tidur utama Anda.</li></ul>",
    discount: 10,
    price_discount: 4680000,
    price: 5200000,
    rating: 5.0,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Queen (160x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Mahoni",
      },
      {
        key: "Sandaran Kepala",
        value: "Berlapis Busa",
      },
      {
        key: "Tinggi Rangka",
        value: "35 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 6,
    uuid: "d5c7a8f2-91b4-47fb-8423-09c2e1e5a3d9",
    category_id: 6,
    category_name: "Rak Buku",
    title: "Rak Buku Minimalis",
    description:
      "<p>Rak Buku Minimalis 5 Susun: Solusi Display yang Hemat Tempat dan Stylish.</p><p>Rak vertikal ramping ini adalah pilihan tepat untuk menata koleksi Anda di ruang yang terbatas. Desainnya yang terbuka memudahkan akses dan penataan dekorasi.</p><ul><li>Desain vertikal memaksimalkan penggunaan ruang dinding secara efisien.</li><li>Terbuat dari Baja Ringan dan Papan Partikel berkualitas dengan daya topang yang baik.</li><li>Ideal untuk ruang belajar, kantor, atau sudut rumah mana pun.</li></ul>",
    discount: 35,
    price_discount: 487500,
    price: 750000,
    rating: 4.1,
    specifications: [
      {
        key: "Jumlah Tingkat",
        value: "5 Susun",
      },
      {
        key: "Material",
        value: "Baja Ringan dan Papan Partikel",
      },
      {
        key: "Pemasangan",
        value: "Berdiri Bebas (Free Standing)",
      },
      {
        key: "Dimensi",
        value: "60 x 30 x 180 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 7,
    uuid: "b9f2e3d4-7c61-41a3-8a23-f22c5e5c7d91",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Bed Multifungsi",
    description:
      "<p>Sofa Bed Multifungsi: Konversi Cepat, Kenyamanan Ganda.</p><p>Sempurna untuk apartemen kecil atau kamar tamu, sofa bed ini menawarkan fleksibilitas maksimal. Berubah dengan mudah dari sofa duduk yang nyaman menjadi tempat tidur yang fungsional.</p><ul><li>Mekanisme Lipat Cepat yang praktis dan tidak memakan waktu.</li><li>Rangka campuran Besi dan Kayu menjamin stabilitas dalam mode sofa maupun tempat tidur.</li><li>Solusi hemat ruang tanpa mengorbankan kualitas.</li></ul>",
    discount: 40,
    price_discount: 1680000,
    price: 2800000,
    rating: 5.0,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa Bed",
      },
      {
        key: "Material Rangka",
        value: "Besi dan Kayu Campuran",
      },
      {
        key: "Mekanisme",
        value: "Lipat Cepat",
      },
      {
        key: "Ukuran Saat Dibuka",
        value: "180 x 100 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 8,
    uuid: "c1d7e9a3-5f42-4a93-91c4-6b2f4a6e5d2f",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Kerja Minimalis",
    description:
      "<p>Meja Kerja Minimalis: Fokus dan Rapi untuk Home Office.</p><p>Meja ini dirancang untuk menciptakan lingkungan kerja yang produktif dan bebas dari kekacauan. Permukaan yang luas didukung oleh desain minimalis dan fungsionalitas penyimpanan tersembunyi.</p><ul><li>Desain Modern dan Ramping cocok untuk semua jenis interior kantor rumah.</li><li>Dilengkapi laci penyimpanan terintegrasi untuk menata perlengkapan tulis.</li><li>Konstruksi Papan Partikel yang stabil dan mudah dipindahkan.</li></ul>",
    discount: 18,
    price_discount: 1230000,
    price: 1500000,
    rating: 4.9,
    specifications: [
      {
        key: "Material Utama",
        value: "Papan Partikel",
      },
      {
        key: "Fitur Tambahan",
        value: "1 Laci dan Ruang Kabel",
      },
      {
        key: "Gaya",
        value: "Minimalis/Modern",
      },
      {
        key: "Dimensi",
        value: "120 x 60 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 9,
    uuid: "a7e5b1c2-3d4f-44c9-b91e-8d2f7c4b5a61",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Kantor Ergonomis",
    description:
      "<p>Kursi Kantor Ergonomis: Dukungan Kesehatan untuk Produktivitas Optimal.</p><p>Kursi premium ini wajib dimiliki oleh para profesional. Dirancang dengan perhatian pada detail postur, ia mampu menyesuaikan diri dengan bentuk tubuh Anda untuk meminimalkan kelelahan.</p><ul><li>Dilengkapi fitur penyesuaian Hydraulic Gas Lift untuk ketinggian yang sempurna.</li><li>Pelapis Jaring (Mesh) Bernapas mencegah panas dan meningkatkan sirkulasi udara.</li><li>Sandaran punggung dan lengan dapat diatur untuk kenyamanan personal.</li></ul>",
    discount: 22,
    price_discount: 1716000,
    price: 2200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Pelapis",
        value: "Jaring (Mesh) Bernapas",
      },
      {
        key: "Fitur Pengaturan",
        value: "Tinggi, Sandaran Lengan, Sandaran Punggung",
      },
      {
        key: "Roda",
        value: "5 Roda Nilon",
      },
      {
        key: "Mekanisme",
        value: "Hydraulic Gas Lift",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631391-8cc5b9ce1dca?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1683121177357-30453583daed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 10,
    uuid: "f9c3d7a8-2e4b-49f3-9012-4b5e7c8d2f3a",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Anak",
    description:
      "<p>Tempat Tidur Anak: Desain Ceria, Keamanan Terjamin, dan Penyimpanan Cerdas.</p><p>Tempat tidur Single Size ini menawarkan lingkungan tidur yang aman dan nyaman bagi anak. Desainnya yang menyenangkan dilengkapi dengan fungsionalitas yang disukai orang tua.</p><ul><li>Rangka kokoh dari Kayu Pinus dengan konstruksi ramah anak.</li><li>Dilengkapi 2 Laci Penyimpanan di bawah kasur untuk menghemat ruang kamar.</li><li>Dirancang untuk usia 5 hingga 12 tahun dengan mempertimbangkan keamanan.</li></ul>",
    discount: 28,
    price_discount: 2232000,
    price: 3100000,
    rating: 4.8,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Single (100x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Pinus",
      },
      {
        key: "Fitur",
        value: "2 Laci Penyimpanan Bawah",
      },
      {
        key: "Usia yang Direkomendasikan",
        value: "5 - 12 Tahun",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 1,
    uuid: "b3f6c9d0-7a12-4b8f-b2f0-3f98a1a2c101",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Minimalis 3 Dudukan",
    description:
      "<p>Sofa Minimalis 3 Dudukan: Kenyamanan Premium untuk Ruang Tamu Modern.</p><p>Sofa ini dirancang sebagai titik fokus ruang tamu kontemporer Anda. Dengan desain garis bersih dan bantalan yang tebal, ia menawarkan tempat duduk yang luas dan mewah untuk tiga orang.</p><ul><li>Bantalan busa kepadatan tinggi menjamin dukungan ergonomis yang tahan lama.</li><li>Rangka internal terbuat dari Kayu Jati Solid untuk durabilitas superior.</li><li>Pelapis kain Beludru premium memberikan sentuhan kelembutan dan kemewahan.</li></ul>",
    discount: 25,
    price_discount: 2625000,
    price: 3500000,
    rating: 4.8,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa 3 Dudukan",
      },
      {
        key: "Material Rangka",
        value: "Kayu Jati Solid",
      },
      {
        key: "Material Kain",
        value: "Beludru (Velvet)",
      },
      {
        key: "Dimensi",
        value: "200 x 90 x 80 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 2,
    uuid: "c7a2e1f4-91de-48f7-8b77-5e2d7e2b510a",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Makan Kayu Jati",
    description:
      "<p>Meja Makan Kayu Jati: Kekuatan Klasik untuk Kebersamaan Keluarga.</p><p>Meja makan ini adalah investasi abadi. Dibuat dari kayu jati asli yang dikenal akan ketahanan dan keindahan urat kayunya, meja ini ideal untuk menampung enam orang dengan nyaman.</p><ul><li>Material utama dari Kayu Jati memastikan daya tahan terhadap cuaca dan rayap.</li><li>Finishing halus menonjolkan tekstur alami, menambah kesan klasik dan mewah.</li><li>Permukaan luas, ideal untuk jamuan makan atau pertemuan formal.</li></ul>",
    discount: 15,
    price_discount: 3570000,
    price: 4200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Utama",
        value: "Kayu Jati",
      },
      {
        key: "Kapasitas",
        value: "6 Orang",
      },
      {
        key: "Bentuk",
        value: "Persegi Panjang",
      },
      {
        key: "Dimensi",
        value: "180 x 90 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 3,
    uuid: "f2b1a3c9-32e5-4f5a-9c87-61b83f55e3d2",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Rotan Santai",
    description:
      "<p>Kursi Rotan Santai: Sentuhan Natural Tropis yang Ringan dan Nyaman.</p><p>Kursi *handmade* ini menciptakan suasana relaksasi di mana pun diletakkan. Dibuat dari rotan alami yang ditenun secara presisi, kursi ini ringan namun sangat kokoh.</p><ul><li>Konstruksi dari Rotan Alami yang ramah lingkungan dan fleksibel.</li><li>Desain sandaran tinggi mendukung punggung secara optimal.</li><li>Sangat ideal untuk mempercantik ruang tamu, teras, atau sudut baca.</li></ul>",
    discount: 30,
    price_discount: 665000,
    price: 950000,
    rating: 4.2,
    specifications: [
      {
        key: "Material Utama",
        value: "Rotan Alami",
      },
      {
        key: "Penggunaan",
        value: "Indoor/Teras",
      },
      {
        key: "Termasuk Bantal",
        value: "Ya",
      },
      {
        key: "Tinggi Sandaran",
        value: "70 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 4,
    uuid: "a0d4c8b2-15f8-45b9-ae3b-2dbb94d55f61",
    category_id: 4,
    category_name: "Lemari",
    title: "Lemari Pakaian 2 Pintu",
    description:
      "<p>Lemari Pakaian 2 Pintu Geser: Solusi Penyimpanan Modern dan Efisien.</p><p>Maksimalkan ruang kamar tidur Anda dengan lemari minimalis ini. Pintu gesernya menghemat ruang, sementara interiornya yang cerdas menyediakan berbagai opsi penyimpanan.</p><ul><li>Dilengkapi sistem Pintu Geser (Sliding Door) yang halus dan hemat tempat.</li><li>Interior terstruktur dengan rak, laci, dan ruang gantungan yang luas.</li><li>Material MDF Lapis HPL menjamin tampilan modern dan mudah dibersihkan.</li></ul>",
    discount: 20,
    price_discount: 2240000,
    price: 2800000,
    rating: 3.4,
    specifications: [
      {
        key: "Jumlah Pintu",
        value: "2 Pintu Geser",
      },
      {
        key: "Material",
        value: "MDF Lapis HPL",
      },
      {
        key: "Fitur",
        value: "Gantungan, Rak, Laci Internal",
      },
      {
        key: "Dimensi",
        value: "150 x 60 x 200 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 5,
    uuid: "e3a5f6b9-8c2f-4d3b-9440-77e1af22a2a4",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Queen Size",
    description:
      "<p>Ranjang Queen Size: Perpaduan Rangka Kokoh dan Desain Elegan.</p><p>Ciptakan oasis tidur yang nyaman dan berkelas. Rangka tempat tidur ini menawarkan stabilitas luar biasa dan desain sandaran kepala yang empuk dan menarik.</p><ul><li>Rangka dibuat dari Kayu Mahoni pilihan yang sangat kuat dan tahan lama.</li><li>Ukuran Queen (160x200 cm) memberikan ruang tidur yang leluasa.</li><li>Desain elegan, menjadikannya pusat perhatian di kamar tidur utama Anda.</li></ul>",
    discount: 10,
    price_discount: 4680000,
    price: 5200000,
    rating: 5.0,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Queen (160x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Mahoni",
      },
      {
        key: "Sandaran Kepala",
        value: "Berlapis Busa",
      },
      {
        key: "Tinggi Rangka",
        value: "35 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 6,
    uuid: "d5c7a8f2-91b4-47fb-8423-09c2e1e5a3d9",
    category_id: 6,
    category_name: "Rak Buku",
    title: "Rak Buku Minimalis",
    description:
      "<p>Rak Buku Minimalis 5 Susun: Solusi Display yang Hemat Tempat dan Stylish.</p><p>Rak vertikal ramping ini adalah pilihan tepat untuk menata koleksi Anda di ruang yang terbatas. Desainnya yang terbuka memudahkan akses dan penataan dekorasi.</p><ul><li>Desain vertikal memaksimalkan penggunaan ruang dinding secara efisien.</li><li>Terbuat dari Baja Ringan dan Papan Partikel berkualitas dengan daya topang yang baik.</li><li>Ideal untuk ruang belajar, kantor, atau sudut rumah mana pun.</li></ul>",
    discount: 35,
    price_discount: 487500,
    price: 750000,
    rating: 4.1,
    specifications: [
      {
        key: "Jumlah Tingkat",
        value: "5 Susun",
      },
      {
        key: "Material",
        value: "Baja Ringan dan Papan Partikel",
      },
      {
        key: "Pemasangan",
        value: "Berdiri Bebas (Free Standing)",
      },
      {
        key: "Dimensi",
        value: "60 x 30 x 180 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 7,
    uuid: "b9f2e3d4-7c61-41a3-8a23-f22c5e5c7d91",
    category_id: 1,
    category_name: "Sofa",
    title: "Sofa Bed Multifungsi",
    description:
      "<p>Sofa Bed Multifungsi: Konversi Cepat, Kenyamanan Ganda.</p><p>Sempurna untuk apartemen kecil atau kamar tamu, sofa bed ini menawarkan fleksibilitas maksimal. Berubah dengan mudah dari sofa duduk yang nyaman menjadi tempat tidur yang fungsional.</p><ul><li>Mekanisme Lipat Cepat yang praktis dan tidak memakan waktu.</li><li>Rangka campuran Besi dan Kayu menjamin stabilitas dalam mode sofa maupun tempat tidur.</li><li>Solusi hemat ruang tanpa mengorbankan kualitas.</li></ul>",
    discount: 40,
    price_discount: 1680000,
    price: 2800000,
    rating: 5.0,
    specifications: [
      {
        key: "Tipe",
        value: "Sofa Bed",
      },
      {
        key: "Material Rangka",
        value: "Besi dan Kayu Campuran",
      },
      {
        key: "Mekanisme",
        value: "Lipat Cepat",
      },
      {
        key: "Ukuran Saat Dibuka",
        value: "180 x 100 cm",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 8,
    uuid: "c1d7e9a3-5f42-4a93-91c4-6b2f4a6e5d2f",
    category_id: 2,
    category_name: "Meja",
    title: "Meja Kerja Minimalis",
    description:
      "<p>Meja Kerja Minimalis: Fokus dan Rapi untuk Home Office.</p><p>Meja ini dirancang untuk menciptakan lingkungan kerja yang produktif dan bebas dari kekacauan. Permukaan yang luas didukung oleh desain minimalis dan fungsionalitas penyimpanan tersembunyi.</p><ul><li>Desain Modern dan Ramping cocok untuk semua jenis interior kantor rumah.</li><li>Dilengkapi laci penyimpanan terintegrasi untuk menata perlengkapan tulis.</li><li>Konstruksi Papan Partikel yang stabil dan mudah dipindahkan.</li></ul>",
    discount: 18,
    price_discount: 1230000,
    price: 1500000,
    rating: 4.9,
    specifications: [
      {
        key: "Material Utama",
        value: "Papan Partikel",
      },
      {
        key: "Fitur Tambahan",
        value: "1 Laci dan Ruang Kabel",
      },
      {
        key: "Gaya",
        value: "Minimalis/Modern",
      },
      {
        key: "Dimensi",
        value: "120 x 60 x 75 cm",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 9,
    uuid: "a7e5b1c2-3d4f-44c9-b91e-8d2f7c4b5a61",
    category_id: 3,
    category_name: "Kursi",
    title: "Kursi Kantor Ergonomis",
    description:
      "<p>Kursi Kantor Ergonomis: Dukungan Kesehatan untuk Produktivitas Optimal.</p><p>Kursi premium ini wajib dimiliki oleh para profesional. Dirancang dengan perhatian pada detail postur, ia mampu menyesuaikan diri dengan bentuk tubuh Anda untuk meminimalkan kelelahan.</p><ul><li>Dilengkapi fitur penyesuaian Hydraulic Gas Lift untuk ketinggian yang sempurna.</li><li>Pelapis Jaring (Mesh) Bernapas mencegah panas dan meningkatkan sirkulasi udara.</li><li>Sandaran punggung dan lengan dapat diatur untuk kenyamanan personal.</li></ul>",
    discount: 22,
    price_discount: 1716000,
    price: 2200000,
    rating: 5.0,
    specifications: [
      {
        key: "Material Pelapis",
        value: "Jaring (Mesh) Bernapas",
      },
      {
        key: "Fitur Pengaturan",
        value: "Tinggi, Sandaran Lengan, Sandaran Punggung",
      },
      {
        key: "Roda",
        value: "5 Roda Nilon",
      },
      {
        key: "Mekanisme",
        value: "Hydraulic Gas Lift",
      },
    ],
    galleries: [
      {
        url: "https://plus.unsplash.com/premium_photo-1690971631391-8cc5b9ce1dca?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1683121177357-30453583daed?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 10,
    uuid: "f9c3d7a8-2e4b-49f3-9012-4b5e7c8d2f3a",
    category_id: 5,
    category_name: "Tempat Tidur",
    title: "Tempat Tidur Anak",
    description:
      "<p>Tempat Tidur Anak: Desain Ceria, Keamanan Terjamin, dan Penyimpanan Cerdas.</p><p>Tempat tidur Single Size ini menawarkan lingkungan tidur yang aman dan nyaman bagi anak. Desainnya yang menyenangkan dilengkapi dengan fungsionalitas yang disukai orang tua.</p><ul><li>Rangka kokoh dari Kayu Pinus dengan konstruksi ramah anak.</li><li>Dilengkapi 2 Laci Penyimpanan di bawah kasur untuk menghemat ruang kamar.</li><li>Dirancang untuk usia 5 hingga 12 tahun dengan mempertimbangkan keamanan.</li></ul>",
    discount: 28,
    price_discount: 2232000,
    price: 3100000,
    rating: 4.8,
    specifications: [
      {
        key: "Ukuran Kasur",
        value: "Single (100x200 cm)",
      },
      {
        key: "Material Rangka",
        value: "Kayu Pinus",
      },
      {
        key: "Fitur",
        value: "2 Laci Penyimpanan Bawah",
      },
      {
        key: "Usia yang Direkomendasikan",
        value: "5 - 12 Tahun",
      },
    ],
    galleries: [
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  // end data example
];
