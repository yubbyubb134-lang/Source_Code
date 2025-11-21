// xcv.js - Full Code (Diperbarui untuk mengatasi masalah tombol tidak bisa diklik)

// Database Fakta (Array of Strings)
const facts = [
    "Tahukah kamu? Jantung udang terletak di kepalanya.",
    "Tahukah kamu? Orang tidak bisa menjilat sikunya sendiri. (Kamu baru saja mencobanya, kan?)",
    "Tahukah kamu? Buaya tidak bisa menjulurkan lidahnya.",
    "Tahukah kamu? Secara fisik, babi tidak bisa melihat ke langit.",
    "Tahukah kamu? Mengenakan headphone selama satu jam saja bisa meningkatkan jumlah bakteri di telinga hingga 700 kali lipat.",
    "Tahukah kamu? Kecoak bisa hidup beberapa minggu tanpa kepala sebelum akhirnya mati karena kelaparan.",
    "Tahukah kamu? Venus adalah satu-satunya planet yang berputar searah jarum jam.",
    "Tahukah kamu? Nama 'Google' berasal dari kesalahan ejaan kata matematika 'Googol' (angka 1 diikuti 100 nol).",
    "Tahukah kamu? Sidik lidah manusia itu unik, sama seperti sidik jari.",
    "Tahukah kamu? Di Jepang, ada lebih banyak hewan peliharaan daripada anak-anak."
];

// EMOJI UNTUK ANIMASI BACKGROUND HERO
const heroEmojis = [
    '💡', '🧠', '🔬', '🔭', '🧬', '🤯', '📚', '🤔', '🧐', '🌟', '🌎', '💫', '🌌', '🧪'
];

// ===========================================
// M E N G A M B I L E L E M E N H T M L
// ===========================================
const factDisplay = document.getElementById('fact-display');
const generateBtn = document.getElementById('generate-btn');
const emojiBackground = document.getElementById('emoji-background');
const backgroundMusic = document.getElementById('background-music');
const splashOverlay = document.getElementById('splash-overlay');

// Tambahan untuk memastikan transisi fakta
if (factDisplay) {
    factDisplay.style.transition = "opacity 0.2s ease-in-out";
}


// ===========================================
// 1. L O G I K A A N I M A S I S P L I T S C R E E N ☁️
// ===========================================

// Fungsi untuk memainkan musik (dieksekusi saat interaksi pertama)
function playBackgroundMusic() {
    if (backgroundMusic && backgroundMusic.paused) {
        const playPromise = backgroundMusic.play();
        if (playPromise !== undefined) {
            // Hindari error "uncaught promise" jika play() diblokir
            playPromise.then(() => {}).catch(error => {
                console.warn('Musik diblokir oleh browser. Akan mencoba lagi pada klik berikutnya.');
            });
        }
    }
}

// Menghilangkan overlay saat semua sumber daya dimuat
window.addEventListener('load', () => {
    if (splashOverlay) {
        // Tunda selama 1 detik sebelum memulai animasi split
        setTimeout(() => {
            splashOverlay.classList.add('hidden'); // Memuat opacity: 0 dan pointer-events: none;
            
            // Hapus elemen sepenuhnya setelah transisi 0.8s
            setTimeout(() => {
                splashOverlay.remove();
            }, 800); 
        }, 1000); 
    }
});


// ===========================================
// 2. L O G I K A A N I M A S I E M O J I 💡
// ===========================================

function createRandomEmoji() {
    if (!emojiBackground) return;
    emojiBackground.innerHTML = '';
    const numEmojis = 10;
    
    for (let i = 0; i < numEmojis; i++) {
        const randomEmoji = heroEmojis[Math.floor(Math.random() * heroEmojis.length)];
        const emojiSpan = document.createElement('span');
        emojiSpan.className = 'hero-emoji';
        emojiSpan.textContent = randomEmoji;
        
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        
        emojiSpan.style.top = `${top}%`;
        emojiSpan.style.left = `${left}%`;
        emojiSpan.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.7 + Math.random() * 0.5})`;
        
        emojiBackground.appendChild(emojiSpan);
    }
}

createRandomEmoji();
setInterval(createRandomEmoji, 2000); 


// ===========================================
// 3. L O G I K A G E N E R A T O R F A K T A
// ===========================================

function generateFact() {
    // PENTING: Coba putar musik jika ini adalah interaksi pengguna pertama
    playBackgroundMusic();
    
    if (!factDisplay) return;

    // Efek loading sederhana (memudar keluar)
    factDisplay.style.opacity = 0;
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        
        factDisplay.textContent = facts[randomIndex];
        factDisplay.style.opacity = 1; // Memudar masuk
    }, 200); 
}

// Menambahkan event listener ke tombol
if (generateBtn) {
    generateBtn.addEventListener('click', generateFact);
}


// ===========================================
// 4. L O G I K A P O P - U P ( M O D A L ) 🔬
// ===========================================

const scienceCard = document.querySelector('#science-card-trigger'); 
const scienceModal = document.getElementById('science-modal');
const scienceCloseBtn = document.querySelector('.science-close'); 
const animalCard = document.querySelector('#animal-card-trigger');
const animalModal = document.getElementById('animal-modal');
const animalCloseBtn = document.querySelector('.animal-close'); 
const plantCard = document.querySelector('#plant-card-trigger');
const plantModal = document.getElementById('plant-modal');
const plantCloseBtn = document.querySelector('.plant-close'); 

function setupModal(card, modal, closeBtn) {
    if (!card || !modal || !closeBtn) return;

    // Fungsi membuka modal
    function openModal() { modal.style.display = 'block'; }
    function closeModal() { modal.style.display = 'none'; }

    // Event listener untuk Card (Membuka modal dan mencoba memutar musik)
    card.addEventListener('click', () => { 
        openModal();
        playBackgroundMusic(); 
    });

    // Event listener untuk Tombol Tutup (X)
    closeBtn.addEventListener('click', closeModal);

    // Tutup modal ketika pengguna mengklik di luar modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) { 
            closeModal(); 
        }
    });
}

// Terapkan setup untuk setiap modal
setupModal(scienceCard, scienceModal, scienceCloseBtn);
setupModal(animalCard, animalModal, animalCloseBtn);
setupModal(plantCard, plantModal, plantCloseBtn);


// ===========================================
// 5. L O G I K A S M O O T H S C R O L L
// ===========================================

const categoryLink = document.querySelector('.nav-links a[href="#kategori"]');
const categorySection = document.getElementById('kategori');

if (categoryLink && categorySection) {
    categoryLink.addEventListener('click', function(event) {
        event.preventDefault();
        categorySection.scrollIntoView({ behavior: 'smooth' });
        playBackgroundMusic(); // Coba mainkan musik
    });
}