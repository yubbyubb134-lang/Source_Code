// Database Hewan (Lengkap dengan URL Gambar)
const animalData = {
    singa: {
        title: "Singa (Panthera leo)",
        // URL gambar langsung dari Unsplash (bisa diganti file lokal nanti)
        image: "https://ik.trn.asia/uploads/2022/06/1656166237843.jpeg",
        desc: "Sang Raja Hutan yang sebenarnya lebih sering ditemukan di padang rumput.",
        facts: [
            "Auman singa terdengar hingga 8 km.",
            "Singa betina adalah pemburu utama.",
            "Menghabiskan 20 jam sehari untuk tidur."
        ]
    },
    gajah: {
        title: "Gajah Afrika",
        image: "https://jatimnet.com/jinet/assets/media/filer_public/13/8f/138f2ac6-b3e8-403d-9d49-99944417e70a/gajah_1.jpg",
        desc: "Mamalia darat terbesar yang sangat cerdas dan emosional.",
        facts: [
            "Gajah takut pada lebah.",
            "Belalai memiliki 40.000 otot.",
            "Satu-satunya mamalia yang tidak bisa melompat."
        ]
    },
    zebra: {
        title: "Zebra",
        image: "https://awsimages.detik.net.id/community/media/visual/2021/11/08/zebra.jpeg?w=1200",
        desc: "Kuda liar Afrika dengan pola belang hitam putih yang ikonik.",
        facts: [
            "Setiap zebra punya pola belang berbeda.",
            "Warna aslinya hitam dengan belang putih.",
            "Bisa tidur sambil berdiri."
        ]
    },
    jerapah: {
        title: "Jerapah",
        image: "https://awsimages.detik.net.id/community/media/visual/2024/08/23/manjanya-emily-si-bayi-jerapah-yang-baru-lahir-di-kebun-binatang-jerman-4_169.jpeg?w=650",
        desc: "Hewan tertinggi di dunia, pemakan daun akasia.",
        facts: [
            "Lidah jerapah berwarna hitam/biru.",
            "Jantungnya seberat 11 kg.",
            "Bayi jerapah bisa berdiri 30 menit setelah lahir."
        ]
    },
    kudanil: {
        title: "Kuda Nil",
        image: "https://asset.kompas.com/crops/c6No8-Wh39CteT0y6nt6Wnw_g1c=/0x0:966x644/1200x800/data/photo/2022/01/27/61f2ba3797996.jpg",
        desc: "Hewan semi-akuatik besar yang menghabiskan siang hari di air.",
        facts: [
            "Keringat kuda nil berwarna merah (tabir surya alami).",
            "Salah satu hewan paling berbahaya di Afrika.",
            "Bisa menahan napas hingga 5 menit."
        ]
    },
    badak: {
        title: "Badak",
        image: "https://www.greeners.co/wp-content/uploads/2021/06/Northern-White-Rhinoceros.jpg",
        desc: "Hewan purba bercula yang kulitnya sangat tebal seperti baja.",
        facts: [
            "Culanya terbuat dari keratin (seperti kuku manusia).",
            "Penglihatannya buruk, tapi penciumannya tajam.",
            "Suka berkubang di lumpur."
        ]
    },
    monyet: {
        title: "Monyet Hutan",
        image: "https://awsimages.detik.net.id/community/media/visual/2024/02/19/populasi-monyet-ekor-panjang_169.jpeg?w=650",
        desc: "Primata lincah yang hidup di kanopi pohon, memiliki keterampilan memanjat yang luar biasa.",
        facts: [
            "Monyet Rhesus di India terkadang diculik untuk penelitian ilmiah.",
            "Beberapa jenis monyet menggunakan alat untuk mendapatkan makanan.",
            "Mereka berkomunikasi menggunakan berbagai macam suara dan ekspresi wajah."
        ]
    },
    harimau: {
        title: "Harimau Sumatera",
        image: "https://cdn.rri.co.id/berita/Bintuhan/o/1750827554247-tiger-3264048_1280/upv30rpm6y78w5m.jpeg",
        desc: "Kucing terbesar di dunia, sering ditemukan sendirian berburu di hutan lebat.",
        facts: [
            "Tidak ada dua harimau yang memiliki pola belang yang sama.",
            "Mereka adalah perenang yang handal, tidak seperti kebanyakan kucing lain.",
            "Harimau bisa melompat sejauh 10 meter dalam satu lompatan."
        ]
    },
    orangutan: {
        title: "Orangutan",
        image: "https://asset.kompas.com/crops/yS5bhQN0mITTjLs47cUcJQGoSDs=/0x0:610x407/1200x800/data/photo/2023/05/29/6474a2b2dc374.jpeg",
        desc: "Primata dengan kecerdasan tinggi, kemampuan menggunakan alat dan mengobati luka, serta gaya hidup arboreal yang unik",
        facts: [
            "Memiliki kemiripan genetik yang sangat dekat dengan manusia (sekitar 96,4% hingga 97%). ",
            "Mamalia arboreal terbesar di dunia, menghabiskan hampir 95% hidupnya di atas pohon, dari makan hingga tidur.",
            "Nama orangutan berarti manusia dari hutan dalam bahasa Melayu."
        ]
    },


    beruang: {
        title: "Beruang Kutub",
        image: "https://image.idntimes.com/post/20241227/hans-jurgen-mager-qqwv91ttbre-unsplash-9d6a955acbff49659162904488b8b891-436023253aae69affdca140de0871650.jpg",
        desc: "Hewan predator terbesar di Arktik, beradaptasi sempurna dengan lingkungan bersalju dan es.",
        facts: [
            "Kulit mereka sebenarnya hitam, bukan putih.",
            "Mereka menghabiskan sebagian besar hidupnya di atas es laut.",
            "Dianggap sebagai mamalia laut karena sangat bergantung pada laut."
        ]
    },
    serigala: {
        title: "Serigala Arktik",
        image: "https://image.idntimes.com/post/20200916/howling-arctic-wolf-5543210c9174a85ca72d8c68a9ba2f16.jpeg",
        desc: "Subspesies serigala abu-abu yang hidup di tundra Arktik, ditandai dengan bulu putih tebal, tubuh lebih kecil, telinga dan moncong lebih pendek untuk menghemat panas tubuh.",
        facts: [
            "Mampu bertahan hidup di suhu di bawah nol derajat Celsius dan mengatasi kegelapan total selama lima bulan dalam setahun.",
            "Dapat bertahan hidup tanpa makan selama berhari-hari, bahkan berminggu-minggu saat musim dingin, dengan menelan makanan dalam jumlah besar saat kesempatan datang.",
            "Dapat mencapai kecepatan hingga sekitar \(64\) km/jam saat berburu."
        ]
    },
    rubah: {
        title: "Rubah Arktik",
        image: "https://imgsrv2.voi.id/5qHMW6YjCk_Z2tnWRkT-ffl1ilA8s-HVMjhWC-55PFo/auto/1280/853/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNjE3MDUvMjAyMjA0MjUxODU4LW1haW4uY3JvcHBlZF8xNjUwODg3OTI0LmpwZw.jpg",
        desc: "Mamalia kecil yang memiliki bulu tebal yang berubah warna mengikuti musim untuk kamuflase.",
        facts: [
            "Bisa bertahan di suhu hingga $-50^{\circ}\text{C}$.",
            "Mereka menggunakan ekornya sebagai selimut saat tidur.",
            "Rubah Arktik memiliki telinga kecil untuk meminimalkan kehilangan panas."
        ]
    }

};

// Setup Element DOM
const animals = document.querySelectorAll('.animal');
const modal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.close-btn');

const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalFacts = document.getElementById('modalFacts');

// Event Listener untuk setiap hewan
animals.forEach(animal => {
    animal.addEventListener('click', () => {
        const type = animal.getAttribute('data-type');
        const data = animalData[type];

        if (data) {
            // Update Konten Modal
            modalTitle.innerText = data.title;
            modalDesc.innerText = data.desc;
            modalImg.src = data.image; // Set gambar
            
            // Reset dan isi fakta
            modalFacts.innerHTML = '';
            data.facts.forEach(fact => {
                const li = document.createElement('li');
                li.innerText = fact;
                modalFacts.appendChild(li);
            });

            // Buka Modal
            modal.classList.add('show');
        }
    });
});

// Tutup Modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show');
    }
});