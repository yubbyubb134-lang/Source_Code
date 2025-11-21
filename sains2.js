const organDatabase = {
    otak: {
        title: "Otak Manusia",
        system: "Sistem Saraf Pusat",
        icon: "🧠",
        desc: "Pusat komando tubuh manusia. Otak memproses input sensorik, mengatur fungsi vital (napas, detak jantung), serta mengendalikan kognisi, memori, dan emosi. Terdiri dari serebrum, serebelum, dan batang otak.",
        fact: "Otak menghasilkan listrik sekitar 12-25 watt saat Anda sadar — cukup untuk menyalakan lampu LED kecil!",
        tip: "Tidur cukup 7-8 jam dan konsumsi asam lemak Omega-3 untuk kesehatan otak."
    },
    paru: {
        title: "Paru-Paru",
        system: "Sistem Pernapasan",
        icon: "🫁",
        desc: "Organ spons yang bertanggung jawab atas pertukaran gas. Oksigen dihirup masuk ke aliran darah, sementara karbon dioksida dikeluarkan. Paru kanan memiliki 3 lobus, paru kiri hanya 2 lobus.",
        fact: "Jika seluruh alveoli (kantong udara) di paru-paru dibentangkan, luasnya hampir setara dengan lapangan tenis tunggal.",
        tip: "Hindari polusi asap rokok dan lakukan latihan kardio rutin."
    },
    jantung: {
        title: "Jantung",
        system: "Sistem Kardiovaskular",
        icon: "❤️",
        desc: "Otot berongga yang bekerja sebagai pompa ganda. Sisi kanan memompa darah ke paru-paru (oksigenasi), sisi kiri memompa darah kaya oksigen ke seluruh tubuh.",
        fact: "Jantung memompa sekitar 7.500 liter darah setiap hari melalui pembuluh darah sepanjang 96.000 km.",
        tip: "Kurangi garam dan lemak jenuh untuk menjaga tekanan darah tetap normal."
    },
    hati: {
        title: "Hati (Liver)",
        system: "Sistem Pencernaan",
        icon: "🧬",
        desc: "Laboratorium kimia tubuh. Hati menyaring racun dari darah, memproduksi empedu untuk pencernaan lemak, menyimpan vitamin, dan mengatur kadar gula darah.",
        fact: "Hati adalah satu-satunya organ dalam yang memiliki kemampuan regenerasi. Ia bisa tumbuh kembali ke ukuran normal meski 75% bagiannya diangkat.",
        tip: "Batasi konsumsi alkohol dan obat-obatan yang tidak perlu."
    },
    lambung: {
        title: "Lambung",
        system: "Sistem Pencernaan",
        icon: "🍲",
        desc: "Kantong otot berbentuk huruf J. Lambung mengaduk makanan dengan asam klorida (HCl) dan enzim pepsin untuk memecah protein dan membunuh bakteri.",
        fact: "Lapisan mukosa lambung diperbarui sepenuhnya setiap 3-4 hari agar tidak ikut tecerna oleh asamnya sendiri.",
        tip: "Makan perlahan dan teratur untuk mencegah penyakit asam lambung (GERD)."
    },
    ginjal: {
        title: "Ginjal",
        system: "Sistem Ekskresi",
        icon: "🥜",
        desc: "Sepasang organ berbentuk kacang yang menyaring limbah dan kelebihan air dari darah menjadi urin. Ginjal juga mengatur keseimbangan elektrolit dan tekanan darah.",
        fact: "Ginjal menyaring seluruh darah dalam tubuh Anda sekitar 60 kali sehari.",
        tip: "Minum air putih minimal 8 gelas sehari untuk membantu kinerja ginjal."
    },
    usus: {
        title: "Usus (Intestines)",
        system: "Sistem Pencernaan",
        icon: "🌭",
        desc: "Terdiri dari Usus Halus (penyerapan nutrisi utama) dan Usus Besar (penyerapan air dan pembentukan feses). Permukaan usus halus memiliki vili untuk memaksimalkan penyerapan.",
        fact: "Usus adalah 'otak kedua' manusia karena mengandung lebih dari 100 juta sel saraf (sistem saraf enterik).",
        tip: "Konsumsi serat (sayur & buah) dan probiotik (yogurt) untuk pencernaan lancar."
    },
    kandungkemih: {
        title: "Kandung Kemih",
        system: "Sistem Ekskresi",
        icon: "💧",
        desc: "Organ berongga elastis yang berfungsi menampung urin dari ginjal sebelum dikeluarkan dari tubuh. Dindingnya relaks saat terisi dan berkontraksi saat buang air kecil.",
        fact: "Kandung kemih orang dewasa yang sehat dapat menampung hingga 400-600 ml urin.",
        tip: "Jangan sering menahan buang air kecil terlalu lama untuk mencegah infeksi."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const organGroups = document.querySelectorAll('.organ-group');
    const placeholderState = document.getElementById('placeholder-state');
    const detailState = document.getElementById('detail-state');

    // Elemen DOM yang akan diupdate
    const ui = {
        title: document.getElementById('detail-title'),
        system: document.getElementById('detail-system'),
        icon: document.getElementById('detail-icon'),
        desc: document.getElementById('detail-desc'),
        fact: document.getElementById('detail-fact'),
        tip: document.getElementById('detail-tip')
    };

    function displayOrganInfo(id) {
        const data = organDatabase[id];
        if (!data) return;

        // Sembunyikan placeholder, tampilkan detail
        placeholderState.classList.remove('active');
        detailState.classList.add('active');

        // Animasi reset sederhana
        detailState.style.animation = 'none';
        detailState.offsetHeight; /* trigger reflow */
        detailState.style.animation = 'fadeIn 0.5s ease-out';

        // Update Konten
        ui.title.textContent = data.title;
        ui.system.textContent = data.system;
        ui.icon.textContent = data.icon;
        ui.desc.textContent = data.desc;
        ui.fact.textContent = data.fact;
        ui.tip.textContent = data.tip;
    }

    organGroups.forEach(organ => {
        organ.addEventListener('click', function() {
            // 1. Reset semua organ
            organGroups.forEach(g => g.classList.remove('active'));
            
            // 2. Aktifkan organ yang diklik
            this.classList.add('active');
            
            // 3. Tampilkan Info
            const organId = this.getAttribute('data-id');
            displayOrganInfo(organId);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const organGroups = document.querySelectorAll('.organ-group');
    const placeholderState = document.getElementById('placeholder-state');
    const detailState = document.getElementById('detail-state');
    const emojiBackground = document.querySelector('.emoji-background'); // Ambil elemen kontainer emoji

    // Array emoji yang bisa Anda sesuaikan
    const emojis = ["🧠", "🫁", "❤️", "🧬", "🍲", "🥜", "🌭", "💧", "✨", "🌟", "🔬", "💡", "🧪"];

    // Fungsi untuk membuat dan menambahkan emoji secara acak
    function createRandomEmoji() {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        const emojiItem = document.createElement('span');
        emojiItem.classList.add('emoji-item');
        emojiItem.textContent = randomEmoji;

        // Posisi acak di bagian bawah layar
        const randomLeft = Math.random() * 100; // 0-100% dari lebar
        emojiItem.style.left = `${randomLeft}vw`;
        emojiItem.style.bottom = `-50px`; // Dimulai dari bawah layar

        emojiBackground.appendChild(emojiItem);

        // Hapus emoji setelah animasinya selesai untuk menghindari penumpukan DOM
        emojiItem.addEventListener('animationend', () => {
            emojiItem.remove();
        });
    }

    // Panggil fungsi createRandomEmoji setiap 1.5 detik
    setInterval(createRandomEmoji, 1500); // 1500ms = 1.5 detik

    // ... (sisa kode JavaScript Anda yang sudah ada) ...
});