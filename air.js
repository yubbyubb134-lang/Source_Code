const seaAnimals = [
    { 
        emoji: '🐠', 
        name: 'Ikan Badut', 
        depth: 10, 
        zone: 'Epipelagic', 
        description: 'Terkenal berkat film "Nemo", ikan ini hidup bersimbiosis dengan anemon laut. Lapisan lendir di kulitnya melindungi dari sengatan anemon.',
        imageUrl: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
        emoji: '🐬', 
        name: 'Lumba-lumba', 
        depth: 20, 
        zone: 'Epipelagic', 
        description: 'Salah satu hewan paling cerdas di laut. Mereka menggunakan ekolokasi kompleks dan hidup dalam kelompok sosial yang erat.',
        imageUrl: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
        emoji: '🐢', 
        name: 'Penyu Hijau', 
        depth: 50, 
        zone: 'Epipelagic', 
        description: 'Reptil purba yang bisa menahan napas hingga 5 jam saat tidur di bawah air. Mereka kembali ke pantai kelahiran untuk bertelur.',
        imageUrl: 'https://i.pinimg.com/736x/3b/fa/b9/3bfab96bd78f2cd9aeceea74fdb38d53.jpg' 
    },
    { 
        emoji: '🦈', 
        name: 'Hiu Putih', 
        depth: 150, 
        zone: 'Epipelagic', 
        description: 'Predator puncak lautan. Memiliki 300 gigi tajam bergerigi dan dapat mendeteksi setetes darah dalam 100 liter air.',
        imageUrl: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
        emoji: '🦑', 
        name: 'Cumi-cumi Raksasa', 
        depth: 600, 
        zone: 'Mesopelagic', 
        description: 'Legenda Kraken! Memiliki mata sebesar bola basket untuk melihat di kegelapan. Sering bertarung dengan Paus Sperma.',
        imageUrl: 'https://i.pinimg.com/1200x/e4/13/ae/e413ae2afb7e722d5cf8d72cd34140a9.jpg' 
    },
    { 
        emoji: '🐋', 
        name: 'Paus Sperma', 
        depth: 1000, 
        zone: 'Mesopelagic', 
        description: 'Mamalia penyelam terdalam. Mampu menahan tekanan air yang bisa meremukkan kapal selam demi berburu cumi-cumi.',
        imageUrl: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
        emoji: '👾', 
        name: 'Anglerfish', 
        depth: 2000, 
        zone: 'Bathypelagic', 
        description: 'Monster laut dalam yang ikonik. Betina memiliki "pancingan" bercahaya (bioluminescent) di kepala untuk memikat mangsa di kegelapan total.',
        imageUrl: 'https://i.pinimg.com/1200x/59/fe/4d/59fe4dfb9c29a83c39dea2aeb2205c10.jpg' 
    },
    { 
        emoji: '🐙', 
        name: 'Vampire Squid', 
        depth: 3000, 
        zone: 'Bathypelagic', 
        description: 'Bukan vampir penghisap darah, tapi pemakan "salju laut" (sisa organisme). Mata merahnya terlihat menyeramkan di kegelapan.',
        imageUrl: 'https://i.pinimg.com/1200x/64/da/b2/64dab2bd0d62685ee85c0a8fa118a4d9.jpg'
    },
    { 
        emoji: '🦠', 
        name: 'Sea Pig', 
        depth: 4500, 
        zone: 'Abyssal', 
        description: 'Teripang laut dalam yang mirip babi merah muda. Mereka bertindak sebagai penyedot debu dasar laut, memakan partikel organik.',
        imageUrl: 'https://i.pinimg.com/1200x/f4/14/78/f414787acc0a310352909dd774f67d7f.jpg'
    }
];

const container = document.getElementById('animal-container');
const modalBackdrop = document.getElementById('modal-backdrop');
const closeBtn = document.getElementById('close-btn');

// --- Setup Intersection Observer untuk Animasi Scroll ---
const observerOptions = {
    threshold: 0.2, // Muncul ketika 20% kartu terlihat
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animasi hanya sekali
        }
    });
}, observerOptions);

// --- Render Hewan ---
function renderAnimals() {
    // Urutkan berdasarkan kedalaman
    seaAnimals.sort((a, b) => a.depth - b.depth);

    seaAnimals.forEach((animal) => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        
        // Click event untuk seluruh kartu
        card.addEventListener('click', () => showModal(animal));

        // Menambahkan gap visual besar jika kedalaman melompat jauh (opsional untuk efek dramatis)
        // Kita gunakan margin di CSS, tapi di sini bisa ditambah logika jika mau

        card.innerHTML = `
            <div class="card-emoji">${animal.emoji}</div>
            <div class="card-info">
                <div class="card-badges">
                    <span class="badge zone">${animal.zone}</span>
                    <span class="badge depth">${animal.depth}m</span>
                </div>
                <h3>${animal.name}</h3>
            </div>
            <img class="card-thumb" src="${animal.imageUrl}" alt="${animal.name}" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
        `;

        container.appendChild(card);
        observer.observe(card); // Daftarkan ke observer
    });
}

// --- Modal Logic ---
function showModal(animal) {
    document.getElementById('modal-emoji').textContent = animal.emoji;
    document.getElementById('modal-name').textContent = animal.name;
    document.getElementById('modal-badge').textContent = animal.zone;
    document.getElementById('modal-depth').textContent = animal.depth;
    document.getElementById('modal-description').textContent = animal.description;
    
    const img = document.getElementById('modal-img');
    img.src = animal.imageUrl;
    img.onerror = () => { img.src = 'https://via.placeholder.com/400x300?text=Gambar+Tidak+Tersedia'; };

    modalBackdrop.classList.add('active');
}

function hideModal() {
    modalBackdrop.classList.remove('active');
}

closeBtn.addEventListener('click', hideModal);

modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) hideModal();
});

// Close with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideModal();
});

// --- Depth Ruler Logic on Scroll ---
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    
    // Estimasi kedalaman maksimal (misal 5000m) berdasarkan scroll
    const currentVirtualDepth = Math.floor(scrollPercent * 5000);
    
    const depthDisplay = document.getElementById('current-depth');
    depthDisplay.textContent = `${currentVirtualDepth}m`;
    
    // Mengubah warna marker jika masuk zona dalam
    if(currentVirtualDepth > 1000) {
        depthDisplay.style.background = '#ff006e';
        depthDisplay.style.color = '#fff';
    } else {
        depthDisplay.style.background = '#00b4d8';
        depthDisplay.style.color = '#000';
    }
});

// Init
document.addEventListener('DOMContentLoaded', renderAnimals);