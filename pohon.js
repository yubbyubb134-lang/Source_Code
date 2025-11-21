//JS//
document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.getElementById('navbar');
    const blurOverlay = document.getElementById('blur-overlay');
    const btnPrimary = document.querySelector('.btn-primary[href="#apa"]'); 
    
    // --- KONSTANTA WARNA UNTUK EFEK SCROLL ---
    // Warna Awal (Dark Green: Primary Color)
    const START_R = 56;
    const START_G = 118;
    const START_B = 29;

    // Warna Akhir (Light/Near White: Background Light)
    const END_R = 247;
    const END_G = 247;
    const END_B = 247;

    const COLOR_CHANGE_DISTANCE = 2000; // Jarak scroll (dalam piksel) hingga warna mencapai terang maksimal

    // ... (countryData tetap sama) ...
    const countryData = {
        afrika: {
            title: "Tanzania & Gurun Sahara: Kontras Afrika",
            image: "https://i.pinimg.com/736x/1e/22/01/1e220105e9e3fb2b88b135e892a0c268.jpg",
            caption: "Taman Nasional Serengeti, tempat pohon Baobab tumbuh subur di iklim sabana.",
            fact: "Afrika adalah benua yang memiliki keanekaragaman iklim paling ekstrem di dunia, mulai dari hutan hujan tropis yang lebat di wilayah tengah hingga hamparan luas Gurun Sahara di bagian utara yang terkenal panas dan kering. Di antara kondisi alam yang begitu beragam ini, terdapat banyak jenis flora dan fauna yang beradaptasi dengan cara unik agar dapat bertahan hidup. Salah satu simbol ketahanan yang sangat dikenal adalah pohon baobab. Pohon raksasa ini mampu menyimpan air dalam batangnya yang besar, menjadikannya sumber kehidupan penting di daerah yang jarang hujan."
        },
        amerika: {
            title: "Pegunungan Sierra Nevada, Amerika Utara",
            image: "https://i.pinimg.com/736x/ed/8c/fb/ed8cfbc7c9fa0ab7873f5693038a04ce.jpg",
            caption: "Pohon Sequoia raksasa tumbuh di lereng barat Sierra Nevada, California.",
            fact: "Hutan di Amerika Utara merupakan rumah bagi beberapa pohon terbesar dan tertinggi di dunia, termasuk Sequoia dan Redwood yang terkenal karena ukurannya yang luar biasa. Di kawasan seperti California, pohon-pohon raksasa ini telah tumbuh selama ribuan tahun dan menjadi simbol kekuatan serta ketahanan alam. Tingginya bisa menjulang hingga lebih dari 100 meter, sementara diameternya mampu mencapai beberapa meter sehingga sulit untuk dipeluk oleh banyak orang sekaligus. Faktanya, beberapa Giant Sequoia bahkan memiliki volume kayu yang lebih besar daripada sebuah gedung pencakar langit, menjadikannya salah satu organisme terbesar yang pernah hidup di Bumi."
        },
        yaman: {
            title: "Pulau Socotra: Permata Unik Yaman",
            image: "https://i.pinimg.com/1200x/95/d9/51/95d951d4fc04f0e087eaa8343af5b691.jpg",
            caption: "Pohon Darah Naga (Dragon Blood Tree) yang khas di Dataran Tinggi Diksam, Socotra.",
            fact: "Pulau Socotra sering disebut sebagai ‘Galapagos Samudra Hindia’ karena memiliki tingkat keunikan hayati yang sangat tinggi, dengan sekitar 37% spesies tanaman yang bersifat endemik, artinya tidak ditemukan di tempat lain di Bumi. Salah satu yang paling terkenal adalah Pohon Darah Naga (Dragon Blood Tree), yang memiliki bentuk kanopi menyerupai payung raksasa dan menghasilkan getah merah pekat. Getah ini telah digunakan oleh manusia selama ribuan tahun sebagai bahan obat tradisional, pewarna alami, hingga bahan dalam ritual kuno. Keunikan lanskap, flora, dan faunanya membuat Socotra tampak seperti dunia lain, menjadikannya salah satu tempat paling penting untuk konservasi keanekaragaman hayati di planet ini."
        }
    };


    // --- FUNGSI BARU: MENGUBAH WARNA BACKGROUND BERDASARKAN SCROLL ---
    function updateBackgroundColor(scrollY) {
        // Hitung persentase scroll, dibatasi hingga 1.0 (100%)
        const scrollFraction = Math.min(scrollY / COLOR_CHANGE_DISTANCE, 1);

        // Interpolasi setiap komponen warna (R, G, B)
        const R = Math.round(START_R + (END_R - START_R) * scrollFraction);
        const G = Math.round(START_G + (END_G - START_G) * scrollFraction);
        const B = Math.round(START_B + (END_B - START_B) * scrollFraction);

        document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    }


    // --- 1. Navbar Scroll Effect & Blur Control (Diperbarui) ---
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Panggil fungsi perubahan warna
        updateBackgroundColor(scrollY); 
        
        // Kontrol Navbar
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // KONTROL BLUR OVERLAY
        const blurThreshold = 300; 
        
        if (scrollY > blurThreshold) {
            blurOverlay.style.opacity = '0';
        } else {
            const opacityValue = 1 - (scrollY / blurThreshold);
            blurOverlay.style.opacity = opacityValue.toString();
        }
        
        highlightActiveLink();
    });

    // ... (Sisa kode (Tabs, Scroll Reveal, Smooth Scroll, Modal) tetap sama di bawah ini) ...

    // --- 2. Tab Interaction for Facts Section ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- 3. Scroll Reveal Animation (AOS-like) ---
    const revealElements = document.querySelectorAll('.reveal');
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
    fadeInElements.forEach(el => observer.observe(el));

    // --- 4. Smooth Scroll Animation ---
    
    function scrollToElement(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight + 10; 
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // A. Navbar Links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            scrollToElement(this.getAttribute('href'));
            this.blur();
        });
    });

    // B. Tombol "Mulai Jelajahi"
    if (btnPrimary) {
        btnPrimary.addEventListener('click', (e) => {
            e.preventDefault(); 
            scrollToElement(btnPrimary.getAttribute('href')); 
            btnPrimary.blur();
        });
    }


    // --- 5. Active Navigation Link Highlighting ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightActiveLink() {
        let current = '';
        const navbarHeight = navbar.offsetHeight; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight; 
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    }

    highlightActiveLink(); 

    // --- 6. Modal / Popup Functionality ---
    const modal = document.getElementById('country-modal');
    const closeBtn = document.querySelector('.close-btn');
    const treeTags = document.querySelectorAll('.tree-tag');

    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const modalFact = document.getElementById('modal-fact');

    function closeModal() {
        modal.classList.add('hide'); 
        document.body.style.overflow = ''; 

        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('hide'); 
        }, 400); 
    }

    treeTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const countryKey = tag.getAttribute('data-country');
            const data = countryData[countryKey];

            if (data) {
                modalTitle.textContent = data.title;
                modalImage.src = data.image;
                modalImage.alt = `Dataran ${tag.textContent}`;
                modalCaption.textContent = data.caption;
                modalFact.textContent = data.fact;
                
                modal.classList.remove('hide'); 
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

});