// --- sains3.js ---

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Definisi Elemen dan Data ---
    const modal = document.getElementById('welcome-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const endButton = document.getElementById('end-button');
    const slides = document.querySelectorAll('.slide');
    const sidebar = document.getElementById('sidebar'); 
    const root = document.documentElement; 

    // Daftar emoji yang akan digunakan secara acak
    const emojiList = [
        '✨', '🔬', '💡', '🌟', '⚛️', '🧪', '🔥', '💧', '🌍', '⚡',
        '🌀', '🌈', '🌱', '☀️', '🌕', '🌊', '💨', '💎', '🧊', '🌡️'
    ];

    // Ambil Data Warna dari Atribut HTML
    const slideData = {};
    slides.forEach(slide => {
        slideData[slide.id] = {
            color: slide.getAttribute('data-color'),
            icon: slide.getAttribute('data-icon')
        };
    });
    
    // --- 2. Logika Pop-up (Modal) ---
    
    function closePopup() {
        modal.classList.add('fade-out');
        backdrop.classList.add('fade-out');
        
        setTimeout(() => {
            modal.classList.remove('visible', 'fade-out');
            backdrop.classList.remove('visible', 'fade-out');
            
            initializeSlides();
            sidebar.classList.add('visible'); // Tampilkan sidebar setelah modal hilang
        }, 500); 
    }

    closeModalBtn.addEventListener('click', closePopup);

    modal.classList.add('visible');
    backdrop.classList.add('visible');
    
    // --- 3. Logika Sidebar Navigasi ---
    
    function createSidebar() {
        slides.forEach((slide, index) => {
            const slideNumber = index + 1;
            const button = document.createElement('button');
            button.classList.add('nav-button');
            button.textContent = slideNumber;
            button.setAttribute('data-target', slide.id);
            
            // Gulir ke slide saat tombol diklik
            button.addEventListener('click', () => {
                slide.scrollIntoView({ behavior: 'smooth' });
            });
            
            sidebar.appendChild(button);
        });
    }

    /**
     * Menggulir sidebar agar tombol aktif terlihat di tengah.
     */
    function scrollToActiveButton(button) {
        if (!button) return;

        const sidebarRect = sidebar.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        // Hitung posisi scroll untuk memposisikan tombol di tengah sidebar
        const scrollPosition = button.offsetTop - (sidebarRect.height / 2) + (buttonRect.height / 2);
        sidebar.scrollTop = scrollPosition;
    }


    // --- 4. Logika Emoji Latar Belakang Acak ---
    
    function addRandomEmojis(slideElement) {
        slideElement.querySelectorAll('.random-emoji').forEach(emoji => emoji.remove());

        const numberOfEmojis = 5; 
        for (let i = 0; i < numberOfEmojis; i++) {
            const emojiSpan = document.createElement('span');
            emojiSpan.classList.add('random-emoji');
            
            // Pilih emoji secara acak
            const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
            emojiSpan.textContent = randomEmoji;

            // Atur posisi secara acak (10% hingga 90% untuk menghindari tepi)
            const randomX = 10 + Math.random() * 80; 
            const randomY = 10 + Math.random() * 80; 
            emojiSpan.style.left = `${randomX}%`;
            emojiSpan.style.top = `${randomY}%`;

            // Atur ukuran dan rotasi sedikit acak
            const randomSize = 2 + Math.random() * 1.5; 
            const randomRotation = Math.random() * 360; 
            emojiSpan.style.fontSize = `${randomSize}em`;
            emojiSpan.style.transform = `rotate(${randomRotation}deg)`; 

            slideElement.appendChild(emojiSpan);
        }
    }
    
    function removeEmojis(slideElement) {
        slideElement.querySelectorAll('.random-emoji').forEach(emoji => emoji.remove());
    }


    // --- 5. Logika Intersection Observer (Transisi Warna, Status Aktif) ---
    
    function updateDisplay(id) {
        const data = slideData[id];
        if (!data) return;
        
        // 1. Ubah Background Body
        root.style.setProperty('--current-color', data.color);
        
        // 2. Logika Tombol Akhir
        if (id === 'slide-15') {
            endButton.classList.add('visible');
        } else {
            endButton.classList.remove('visible');
        }

        // 3. Update Status Aktif Sidebar
        const navButtons = document.querySelectorAll('.nav-button');
        let activeButton = null;
        
        navButtons.forEach(btn => {
            if (btn.getAttribute('data-target') === id) {
                btn.classList.add('active');
                activeButton = btn;
            } else {
                btn.classList.remove('active');
            }
        });

        // 4. Otomatis Gulir Sidebar
        if (activeButton) {
            scrollToActiveButton(activeButton);
        }
    }

    function initializeSlides() {
        createSidebar();

        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.5 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.id;
                const slide = entry.target;

                if (entry.isIntersecting) {
                    updateDisplay(id); 
                    slide.classList.add('visible');
                    addRandomEmojis(slide); 
                } else {
                    slide.classList.remove('visible');
                    removeEmojis(slide);
                }
            });
        }, observerOptions);

        slides.forEach(slide => {
            observer.observe(slide);
        });

        // Inisialisasi slide 1
        updateDisplay('slide-1');
        const slideOne = document.getElementById('slide-1');
        slideOne.classList.add('visible');
        addRandomEmojis(slideOne); 
    }
});