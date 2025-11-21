// Fungsi Toggle Accordion pada Kartu
function toggleDetail(cardElement) {
    // Tutup kartu lain jika ingin perilaku accordion (hanya satu terbuka)
    // Hilangkan bagian ini jika ingin membiarkan banyak kartu terbuka
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        if (card !== cardElement && card.classList.contains('open')) {
            card.classList.remove('open');
        }
    });

    // Toggle kartu yang diklik
    cardElement.classList.toggle('open');
}

// --- MODAL LOGIC ---
const modal = document.getElementById('funFactsModal');
const btn = document.getElementById('open-modal-btn');

function openModal() {
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

btn.addEventListener('click', openModal);

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// --- BACKGROUND EMOJI ANIMATION (Diperbaiki agar lebih smooth) ---
const emojiContainer = document.querySelector('.emoji-background');
const emojis = ['⚛️', '🌌', '🔭', '🧪', '⚡', '🚀', '🪐'];

function createFloatingEmoji() {
    const emojiEl = document.createElement('div');
    emojiEl.classList.add('emoji');
    emojiEl.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Posisi random horizontal
    emojiEl.style.left = Math.random() * 100 + 'vw';
    
    // Ukuran random
    const size = Math.random() * 1.5 + 1; // 1rem sampai 2.5rem
    emojiEl.style.fontSize = size + 'rem';
    
    // Durasi random
    const duration = Math.random() * 5 + 8; // 8s sampai 13s
    emojiEl.style.animationDuration = duration + 's';

    emojiContainer.appendChild(emojiEl);

    // Hapus elemen setelah animasi selesai untuk menjaga performa
    setTimeout(() => {
        emojiEl.remove();
    }, duration * 1000);
}

// Buat emoji baru setiap 800ms
setInterval(createFloatingEmoji, 800);