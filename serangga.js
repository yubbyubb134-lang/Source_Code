document.addEventListener("DOMContentLoaded", () => {
    
    const sections = document.querySelectorAll(".scroll-section");
    const body = document.body;
    
    // Ambil elemen tombol
    const backButtonTop = document.getElementById("backButtonTop");
    const backButtonBottom = document.getElementById("backButtonBottom");

    // --- Logic Scroll Animation ---

    const observerOptions = {
        threshold: 0.5 // Animasi jalan saat 50% bagian terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                // 1. Ambil data warna dari HTML
                const bgColor = entry.target.getAttribute("data-bgcolor");
                const textColor = entry.target.getAttribute("data-textcolor");
                
                // 2. Terapkan warna ke Body
                if (bgColor) {
                    body.style.backgroundColor = bgColor;
                }
                
                if (textColor) {
                    body.style.color = textColor;
                    
                    // Ganti warna border subtitle dan tombol agar kontras
                    const subtitle = entry.target.querySelector(".subtitle");
                    if(subtitle) subtitle.style.borderColor = textColor;
                    
                    const backButtons = document.querySelectorAll(".back-btn");
                    backButtons.forEach(btn => btn.style.color = textColor);
                }

                // 3. Tambahkan class 'active' untuk memicu animasi CSS
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
});