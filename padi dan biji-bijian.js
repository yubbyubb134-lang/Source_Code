// --- 1. ANIMASI SCROLL (Intersection Observer) ---
const observerOptions = {
    threshold: 0.2 // Elemen muncul saat 20% terlihat
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        // Tambahan: Agar elemen hilang saat di-scroll ke atas
        // else {
        //     entry.target.classList.remove('visible');
        // }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// ----------------------------------------------------------------------

// --- 2. PRELOADER & SMOOTH SCROLL (BARU) ---

// 2a. Preloader: Menghilangkan layar loading setelah konten dimuat
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Menunggu sebentar (500ms) untuk memastikan semua konten render
        setTimeout(() => {
            preloader.style.opacity = '0'; // Mulai transisi opacity ke 0
            // Sembunyikan sepenuhnya setelah transisi selesai
            setTimeout(() => {
                preloader.style.visibility = 'hidden'; 
                preloader.style.display = 'none'; 
            }, 600); // 600ms harus sama atau lebih dari durasi transisi opacity di CSS
        }, 500); 
    }
});

// 2b. Smooth Scroll: Menerapkan guliran halus saat tombol "Jelajahi Panen" diklik
document.getElementById('btn-explore').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default (jump/loncatan tiba-tiba)

    const targetId = this.getAttribute('href'); // Mendapatkan '#explore'
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        // Gunakan metode scrollIntoView atau window.scrollTo untuk guliran halus
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' 
        });
    }
});

// ----------------------------------------------------------------------

// --- 3. GRAIN GALLERY INTERACTIVE ---
// Data Biji-bijian
const grainData = {
    gandum: {
        icon: "🌾",
        title: "Gandum (Wheat)",
        desc: "Tanaman yang paling luas area tanamnya di dunia. Mengandung gluten yang membuat adonan roti bisa mengembang elastis.",
        origin: "Timur Tengah",
        energy: "Tinggi (Karbohidrat Kompleks)"
    },
    jagung: {
        icon: "🌽",
        title: "Jagung (Corn)",
        desc: "Satu-satunya biji-bijian yang tidak bisa menyebar secara liar tanpa bantuan manusia karena kulitnya yang membungkus biji terlalu kuat.",
        origin: "Meksiko (Amerika Tengah)",
        energy: "Tinggi & Kaya Serat"
    },
    quinoa: {
        icon: "🥣",
        title: "Quinoa",
        desc: "Bukan biji-bijian sejati (pseudo-cereal). NASA mempertimbangkannya sebagai tanaman ideal untuk ditanam di luar angkasa karena nutrisinya lengkap.",
        origin: "Pegunungan Andes",
        energy: "Protein Lengkap (9 Asam Amino)"
    },
    barley: {
        icon: "🍺",
        title: "Jelai (Barley)",
        desc: "Salah satu biji-bijian pertama yang dibudidayakan manusia 10.000 tahun lalu. Sering digunakan untuk sereal sarapan dan bahan fermentasi.",
        origin: "Eurasia",
        energy: "Kaya Beta-Glukan (Jantung Sehat)"
    }
};

function changeGrain(type, btnElement) {
    const data = grainData[type];
    
    // Update UI Content
    const img = document.getElementById('grain-image');
    const title = document.getElementById('grain-title');
    const desc = document.getElementById('grain-desc');
    const stats = document.querySelector('.grain-stat');
    
    // Animasi Transisi Keluar
    img.style.transform = "scale(0.5) rotate(-20deg)";
    img.style.opacity = "0";
    
    setTimeout(() => {
        // Update data
        img.innerText = data.icon;
        title.innerText = data.title;
        desc.innerText = data.desc;
        stats.innerHTML = `<span>Asal: ${data.origin}</span><span>Energi: ${data.energy}</span>`;
        
        // Animasi Transisi Masuk
        img.style.transform = "scale(1) rotate(0deg)";
        img.style.opacity = "1";
    }, 300);

    // Update Button Active State
    document.querySelectorAll('.btn-grain').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}

// ----------------------------------------------------------------------

// --- 4. MYTH VS FACT GAME ---
const myths = [
    {
        question: "Beras merah lebih sehat daripada beras putih?",
        isFact: true,
        explanation: "FAKTA: Beras merah adalah gandum utuh (kulit ari masih ada), sehingga mengandung lebih banyak serat, vitamin, dan mineral dibandingkan beras putih yang sudah dipoles."
    },
    {
        question: "Menyimpan beras di kulkas bisa menghilangkan kutu?",
        isFact: true,
        explanation: "FAKTA: Suhu dingin di kulkas dapat membunuh telur kutu beras atau mencegahnya menetas. Membekukan beras selama 3 hari adalah cara efektif membasmi hama."
    },
    {
        question: "Makan karbohidrat (nasi) di malam hari bikin gemuk?",
        isFact: false,
        explanation: "MITOS: Kenaikan berat badan disebabkan oleh surplus kalori harian, bukan jam makan. Namun, makan besar sebelum tidur bisa mengganggu pencernaan."
    }
];

let currentMythIndex = 0;

function revealAnswer(userAnswerIsFact) {
    const myth = myths[currentMythIndex];
    const resultDiv = document.getElementById('myth-result');
    const title = document.getElementById('result-title');
    const desc = document.getElementById('result-desc');
    const btns = document.querySelector('.myth-buttons');

    resultDiv.classList.remove('hidden');
    btns.style.display = 'none'; // Sembunyikan tombol pilihan

    if (userAnswerIsFact === myth.isFact) {
        title.innerText = "✅ Jawaban Kamu Benar!";
        title.style.color = "green";
    } else {
        title.innerText = "❌ Kurang Tepat!";
        title.style.color = "red";
    }
    desc.innerText = myth.explanation;
}

function nextMyth() {
    currentMythIndex++;
    if (currentMythIndex >= myths.length) {
        currentMythIndex = 0; // Loop kembali ke awal
    }

    // Reset UI
    document.getElementById('myth-text').innerText = myths[currentMythIndex].question;
    document.getElementById('myth-result').classList.add('hidden');
    document.querySelector('.myth-buttons').style.display = 'block';
}