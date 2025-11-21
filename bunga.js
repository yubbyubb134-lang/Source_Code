// Data Bunga Unik
const flowers = [
    {
        id: 1,
        name: "Jade Vine",
        sciName: "Strongylodon macrobotrys",
        img: "https://cdn.shopify.com/s/files/1/0582/5344/3146/files/gps_generated_dcea1c57-5af3-4a86-af32-9fd686df7f2c_480x480.png",
        desc: "Tanaman merambat berkayu asli hutan hujan tropis Filipina. Bunga ini terkenal karena warnanya yang sangat langka di alam: pirus (turquoise) atau hijau giok yang menyala.",
        fact: "Warna bunganya yang unik berevolusi khusus untuk menarik kelelawar penyerbuk yang aktif di malam hari, karena warna ini terlihat kontras di bawah sinar bulan."
    },
    {
        id: 2,
        name: "Corpse Flower",
        sciName: "Rafflesia arnoldii",
        img: "https://www.indonesia-tourism.com/bengkulu/images/raflesia-arnoldii-bengkulu.jpg",
        desc: "Salah satu bunga tunggal terbesar di dunia. Ditemukan di hutan hujan Sumatera dan Kalimantan, Indonesia. Bunga ini tidak memiliki daun, batang, atau akar yang terlihat.",
        fact: "Baunya yang seperti daging busuk dirancang untuk menarik lalat bangkai untuk penyerbukan. Ia hanya mekar selama 5-7 hari setelah tumbuh selama 9 bulan!"
    },
    {
        id: 3,
        name: "Ghost Orchid",
        sciName: "Dendrophylax lindenii",
        img: "https://www.treehugger.com/thmb/7LphisPrQfVMmCLHnr3oXQTOqVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__07__ghost-orchid-fakahatchee-florida-04-d0ca1a04025645a58d38ae07dd0200dc.jpg",
        desc: "Anggrek langka yang berasal dari Florida, Kuba, dan Bahama. Ia tidak memiliki daun dan akarnya menempel erat pada pohon, sehingga bunganya terlihat mengapung di udara seperti hantu.",
        fact: "Bunga ini sangat sulit dibudidayakan di luar habitat aslinya dan menjadi inspirasi novel terkenal 'The Orchid Thief'. Ia terancam punah akibat perburuan liar."
    },
    {
        id: 4,
        name: "Bleeding Heart",
        sciName: "Lamprocapnos spectabilis",
        img: "https://www.almanac.com/sites/default/files/images/blossom-1425870_1920.jpg",
        desc: "Tanaman berbunga dari keluarga poppy yang berasal dari Siberia, Tiongkok utara, Korea, dan Jepang. Bentuknya sangat khas menyerupai hati yang meneteskan air mata.",
        fact: "Meskipun cantik, seluruh bagian tanaman ini beracun jika tertelan. Dalam bahasa bunga Victoria, bunga ini melambangkan cinta yang penuh gairah namun tragis."
    },
    {
        id: 5,
        name: "Middlemist's Red",
        sciName: "Camellia japonica",
        img: "https://www.odditycentral.com/wp-content/uploads/2021/09/Middlemist-red-flower.jpg",
        desc: "Sering disebut sebagai bunga paling langka di dunia. Saat ini hanya diketahui ada dua spesimen yang hidup: satu di Selandia Baru dan satu lagi di rumah kaca di Inggris.",
        fact: "Bunga ini dibawa dari China ke London oleh John Middlemist pada tahun 1804. Tak lama kemudian, spesies ini punah sepenuhnya di negara asalnya."
    },
    {
        id: 6,
        name: "Black Bat Flower",
        sciName: "Tacca chantrieri",
        img: "https://cdn.insteading.com/wp-content/uploads/2018/12/black-bat-flower.jpg",
        desc: "Tumbuhan berbunga unik dari keluarga ubi-ubian. Bentuknya yang hitam gelap dengan 'kumis' panjang membuatnya terlihat seperti kelelawar yang sedang terbang.",
        fact: "Kumis panjangnya bisa tumbuh hingga 28 inci! Meskipun terlihat menyeramkan, di Thailand akar tanaman ini digunakan dalam pengobatan tradisional."
    }
];

const container = document.getElementById('flowerContainer');
const modal = document.getElementById('flowerModal');
// Mencari tombol tutup modal
const closeBtn = modal.querySelector('.close-btn'); 

// 1. Generate Kartu Bunga secara Dinamis
flowers.forEach(flower => {
    const card = document.createElement('div');
    card.classList.add('flower-card');
    
    card.innerHTML = `
        <img src="${flower.img}" alt="${flower.name}" class="card-img">
        <h3 class="card-title">${flower.name}</h3>
        <button class="view-btn">Lihat Detail</button>
    `;

    const viewBtn = card.querySelector('.view-btn');

    // Menerapkan klik pada tombol "Lihat Detail" (mencegah event menyebar)
    viewBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        openModal(flower);
    });

    // Menerapkan klik pada seluruh area kartu (juga membuka modal)
    card.addEventListener('click', () => {
        openModal(flower);
    });

    container.appendChild(card);
});

// 2. Fungsi Buka Modal (Sekarang ID elemen sudah tersedia di HTML)
function openModal(flower) {
    // Mengisi data modal berdasarkan objek 'flower' yang dikirim
    document.getElementById('modalImg').src = flower.img;
    document.getElementById('modalTitle').innerText = flower.name;
    document.getElementById('modalSciName').innerText = flower.sciName;
    document.getElementById('modalDesc').innerText = flower.desc;
    document.getElementById('modalFact').innerText = flower.fact;

    // Tampilkan modal dengan transisi
    modal.classList.add('active');
}

// 3. Fungsi Tutup Modal
// Tutup ketika klik tombol 'X'
closeBtn.onclick = () => {
    modal.classList.remove('active');
}

// Tutup jika klik di luar area konten (di background gelap)
window.onclick = (event) => {
    if (event.target == modal) {
        modal.classList.remove('active');
    }
}