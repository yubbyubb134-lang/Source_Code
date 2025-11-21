document.addEventListener("DOMContentLoaded", () => {
    
    const parallaxLayers = document.querySelectorAll(".parallax-layer");
    const factSections = document.querySelectorAll(".mushroom-fact");
    
    // Ambil elemen tombol
    const backButtonTop = document.getElementById("backButtonTop");
    const backButtonBottom = document.getElementById("backButtonBottom");

    const goBack = () => {
        window.history.back();
    };

    if (backButtonTop) {
        backButtonTop.addEventListener("click", goBack);
    }
    if (backButtonBottom) {
        backButtonBottom.addEventListener("click", goBack);
    }

    // --- LOGIC PARALLAX SCROLLING ---
    const updateParallax = () => {
        const scrollY = window.scrollY;

        parallaxLayers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute("data-speed"));
            const yPos = -(scrollY * speed); // Gerakkan ke atas

            layer.style.transform = `translateY(${yPos}px)`;
        });
    };

    window.addEventListener('scroll', updateParallax);
    updateParallax(); // Panggil sekali saat load untuk posisi awal

    // --- LOGIC ACTIVE SECTION & FOREGROUND BLUR/FOCUS ---
    const observerOptions = {
        rootMargin: '0px',
        threshold: 0.5 // Menjadi aktif saat 50% dari section terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const layerFront = document.querySelector('.layer-front');
            if (entry.isIntersecting) {
                // Teks masuk ke viewport
                entry.target.classList.add("active");

                // Kurangi blur pada lapisan depan saat fakta muncul (menjadi fokus)
                if (layerFront) {
                    layerFront.style.filter = 'brightness(0.9) blur(0px)';
                }

            } else {
                // Teks keluar dari viewport
                entry.target.classList.remove("active");

                // Tambah blur pada lapisan depan saat fakta tidak fokus
                if (layerFront) {
                    layerFront.style.filter = 'brightness(0.9) blur(5px)';
                }
            }
        });
    }, observerOptions);

    factSections.forEach((section) => {
        observer.observe(section);
    });
});