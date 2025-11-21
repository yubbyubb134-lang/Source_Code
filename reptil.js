// --- 1. DATABASE REPTIL ---
const reptileDetails = {
    bunglon: {
        title: "Bunglon (Chameleon)",
        icon: "🦎",
        desc: "Bunglon terkenal dengan matanya yang bisa bergerak independen (satu melihat ke depan, satu ke belakang). Kemampuan berubah warnanya dikendalikan oleh kristal nano di kulitnya yang memantulkan cahaya berbeda saat kulit meregang atau rileks. Lidah mereka bisa melesat sepanjang 2x panjang tubuhnya dalam hitungan 0.07 detik!"
    },
    buaya: {
        title: "Buaya Muara",
        icon: "🐊",
        desc: "Buaya adalah reptil paling cerdas dan memiliki struktur jantung yang paling kompleks di antara reptil lain. Mereka menelan batu (gastrolit) untuk membantu menggiling makanan di perut dan juga berfungsi sebagai pemberat (ballast) agar mereka bisa menyelam lebih dalam dengan stabil."
    },
    ular: {
        title: "Ular (Serpentes)",
        icon: "🐍",
        desc: "Karena tidak punya telinga luar, ular 'mendengar' dengan merasakan getaran dari tanah melalui tulang rahang mereka. Organ Jacobson di langit-langit mulut mereka adalah alat sensor super canggih yang menerjemahkan partikel kimia dari udara yang ditangkap oleh lidah."
    },
    kura: {
        title: "Kura-Kura & Penyu",
        icon: "🐢",
        desc: "Tempurung kura-kura memiliki ujung saraf, jadi mereka bisa merasakan jika kamu mengelus atau mengetuk tempurungnya. Beberapa spesies kura-kura air tawar dapat menyerap oksigen melalui kulit di area kloaka (pantat) mereka, memungkinkan mereka tidur di bawah air selama musim dingin."
    },
    gecko: {
        title: "Gecko & Tokek",
        icon: "🦎",
        desc: "Kemampuan menempel tokek bukan karena lem, tapi fisika kuantum (Gaya Van der Waals). Di jari kaki mereka terdapat jutaan bulu halus bernama 'setae'. Saking kuatnya, satu jari tokek secara teori bisa menahan beban berat seluruh tubuhnya. Mereka juga bisa menjilat matanya sendiri untuk membersihkannya."
    },
    komodo: {
        title: "Komodo Dragon",
        icon: "🐲",
        desc: "Komodo asli dari pulau Komodo, Indonesia. Dulu ilmuwan mengira gigitan mereka mematikan karena bakteri mulut yang kotor, tapi penelitian terbaru membuktikan mereka memiliki kelenjar bisa (venom) yang mencegah darah mangsa membeku, menyebabkan syok dan pendarahan fatal."
    },
    basilisk: {
        title: "Kadal Basilisk",
        icon: "🏃",
        desc: "Kadal ini memiliki kaki belakang dengan selaput kulit yang bisa melebar saat menyentuh air. Mereka menepuk permukaan air dengan sangat keras dan cepat untuk menciptakan kantong udara, memungkinkan mereka berlari di atas air sebelum kantong itu pecah. Ini hanya bisa dilakukan saat mereka berlari cepat."
    },
    iguana: {
        title: "Green Iguana",
        icon: "👁️",
        desc: "Iguana adalah perenang handal dan bisa jatuh dari ketinggian 15 meter tanpa terluka. 'Mata ketiga' (parietal eye) di atas kepala mereka terlihat seperti sisik pucat, berfungsi sebagai meteran surya untuk mendeteksi intensitas sinar UV dan membantu mengatur ritme sirkadian (tidur)."
    },
    bertanduk: {
        title: "Kadal Bertanduk",
        icon: "🩸",
        desc: "Saat terpojok, kadal ini meningkatkan tekanan darah di kepala hingga pembuluh darah kecil di sudut mata pecah. Mereka bisa menyemprotkan aliran darah ini dengan akurasi tinggi ke arah mata predator (seperti anjing atau serigala). Darah ini rasanya sangat tidak enak bagi predator."
    },
    tuatara: {
        title: "Tuatara",
        icon: "🦖",
        desc: "Hewan endemik Selandia Baru ini unik karena mereka bukan kadal. Mereka memiliki ciri kerangka yang mirip dengan reptil dari 200 juta tahun lalu. Tuatara memiliki metabolisme sangat lambat, bisa hidup lebih dari 100 tahun, dan telurnya butuh waktu hingga 15 bulan untuk menetas."
    },
    thorny: {
        title: "Thorny Devil",
        icon: "🌵",
        desc: "Di gurun Australia yang kering, Thorny Devil tidak perlu mencari genangan air. Kulit mereka penuh dengan alur mikroskopis (higroskopis). Embun pagi atau air yang menyentuh kaki mereka akan tersedot naik melalui kulit melawan gravitasi langsung menuju sudut mulut mereka."
    },
    cobra: {
        title: "King Cobra",
        icon: "👑",
        desc: "King Cobra adalah satu-satunya ular di dunia yang membuat sarang untuk telurnya dan menjaganya dengan agresif sampai menetas. Meski namanya Cobra, ia sebenarnya bukan 'True Cobra' (Naja), melainkan spesies tersendiri (Ophiophagus) yang berarti 'pemakan ular'."
    }
};

// --- 2. LOGIKA MODAL POP-UP ---
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalIcon = document.getElementById('modal-icon');
const modalDesc = document.getElementById('modal-desc');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.getAttribute('data-key');
        const data = reptileDetails[key];

        if (data) {
            modalTitle.innerText = data.title;
            modalIcon.innerText = data.icon;
            modalDesc.innerText = data.desc;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// --- 3. SCROLL ANIMATION ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-trigger').forEach(el => observer.observe(el));

// --- 4. FACT GENERATOR ---
const facts = [
    "Beberapa ular piton memiliki sisa kaki kecil.",
    "Darah reptil mengikuti suhu lingkungan.",
    "Kura-kura Galapagos bisa hidup setahun tanpa makan.",
    "Kadal bisa memutuskan ekornya (autotomi).",
    "Jantung buaya memiliki empat ruang.",
    "Lidah biru Skink digunakan untuk menakuti musuh.",
    "Penyu belimbing bisa menyelam 1.000 meter.",
    "Titanoboa beratnya lebih dari 1 ton.",
    "Marine Iguana makan di dalam laut.",
    "Anak buaya memanggil ibunya dari dalam telur.",
    "Reptil tidak bisa berkeringat."
];

function generateFact() {
    const display = document.getElementById('fact-display');
    display.style.opacity = 0;
    setTimeout(() => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        display.innerText = `"${randomFact}"`;
        display.style.opacity = 1;
    }, 300);
}

// --- 5. SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});