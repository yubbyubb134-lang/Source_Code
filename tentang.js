document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));


    // --- 1. Logika Modal Kontak ---
    const contactModal = document.getElementById("contactModal");
    const openContactBtn = document.getElementById("openModalBtn");
    const closeContactSpan = contactModal.querySelector(".close-btn"); 

    openContactBtn.onclick = function() {
        contactModal.style.display = "flex";
    }

    closeContactSpan.onclick = function() {
        contactModal.style.display = "none";
    }


    // --- 2. Logika Modal Detail Tim ---

    // 1. Definisikan Data Tim (Dengan Nama Baru)
    const teamData = {
        'alayyubi': { 
            name: "Al Ayyubi", 
            role: "CEO & Pendiri",
            photoUrl: "https://i.pinimg.com/736x/65/c9/4c/65c94cb419b9f8874d0044d36402cf8c.jpg", 
            bio: "Al Ayyubi adalah siswa SMKN 1 DLANGGU, yang masuk pada jurusan Rekayasa Perangkat Lunak dan masih menduduki kelas 10",
            email: "al.ayyubi@namabrand.com" 
        },
        'berlyn': { 
            name: "Berlyn Abimanyu", 
            role: "Chief Technology Officer (CTO)",
            photoUrl: "https://i.pinimg.com/1200x/8f/a6/e9/8fa6e9fce59e934f097ece9fd3d59148.jpg", 
            bio: "Berlyn Abimanyu adalah siswa SMKN 1 DLANGGU, yang masuk pada jurusan Rekayasa Perangkat Lunak dan masih menduduki kelas 10",
            email: "berlyn.abimanyu@namabrand.com" 
        }
    };

    const detailModal = document.getElementById("memberDetailModal");
    const detailContent = document.getElementById("member-detail-content");
    const memberTriggers = document.querySelectorAll('.open-member-modal');
    const closeDetailSpan = detailModal.querySelector(".detail-close-btn");

    // Fungsi untuk menampilkan modal dengan data spesifik
    memberTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const memberId = this.closest('.team-member').getAttribute('data-id');
            const data = teamData[memberId];

            if (data) {
                // Konten HTML dinamis (Hanya menampilkan Email)
                detailContent.innerHTML = `
                    <div id="detail-photo" style="background-image: url('${data.photoUrl}')"></div>
                    <div id="member-info">
                        <h4>${data.name}</h4>
                        <p class="role" style="color: var(--secondary-color); font-weight: 500;">${data.role}</p>
                    </div>
                    <div class="clear-float"></div>
                    <p>${data.bio}</p>
                    <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px; text-align: center;">
                        <a href="mailto:${data.email}">
                            <i class="fas fa-envelope"></i> Hubungi via Email
                        </a>
                    </div>
                `;
                detailModal.style.display = "flex";
            }
        });
    });

    // Logika menutup modal detail
    closeDetailSpan.onclick = function() {
        detailModal.style.display = "none";
    }

    // Logika menutup kedua modal ketika mengklik di luar area modal
    window.onclick = function(event) {
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
        if (event.target == detailModal) {
            detailModal.style.display = "none";
        }
    }
});