const planetData = {
    "Merkurius": {
        description: "Planet terkecil dan terdekat dengan Matahari. Suhunya ekstrem, panas di siang hari dan sangat dingin di malam hari.",
        color: "#a0a0a0", 
        url: "merkurius.html"
    },
    "Venus": {
        description: "Planet terpanas di Tata Surya dengan atmosfer tebal beracun yang memerangkap panas (efek rumah kaca).",
        color: "#e0c090",
        url: "venus.html"
    },
    "Bumi": {
        description: "Rumah kita. Satu-satunya tempat yang diketahui memiliki kehidupan dan air dalam bentuk cair di permukaannya.",
        color: "#3b7b9e",
        url: "bumi.html"
    },
    "Mars": {
        description: "Si Planet Merah. Memiliki gunung berapi terbesar di Tata Surya, Olympus Mons.",
        color: "#c9402e",
        url: "mars.html"
    },
    "Jupiter": {
        description: "Raksasa gas terbesar. Memiliki Bintik Merah Besar yang sebenarnya adalah badai raksasa.",
        color: "#d19a66",
        url: "jupiter.html"
    },
    "Saturnus": {
        description: "Dikenal dengan sistem cincinnya yang megah, terdiri dari miliaran partikel es dan batuan.",
        color: "#e6c382",
        url: "saturnus.html"
    },
    "Uranus": {
        description: "Raksasa es yang berotasi miring hingga hampir rebah. Berwarna biru pucat karena metana.",
        color: "#a0d8d8",
        url: "uranus.html"
    },
    "Neptunus": {
        description: "Planet terjauh, gelap, dingin, dan memiliki angin supersonik tercepat di Tata Surya.",
        color: "#4b69ff",
        url: "neptunus.html"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet');
    const modal = document.getElementById('planetModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLearnMore = document.getElementById('modalLearnMore');
    const modalPlanetImage = document.getElementById('modalPlanetImage');

    const showModal = (planetName) => {
        const data = planetData[planetName];
        if (data) {
            modalTitle.textContent = planetName;
            modalDescription.textContent = data.description;
            
            // Menggunakan linear gradient sederhana untuk gambar di modal
            modalPlanetImage.style.background = `radial-gradient(circle at 30% 30%, #ffffff, ${data.color})`;
            modalLearnMore.setAttribute('href', data.url); 
            modal.style.display = 'flex';
        }
    };

    const hideModal = () => {
        modal.style.display = 'none';
    };

    planets.forEach(planet => {
        planet.addEventListener('click', function() {
            // Mengambil data dari atribut data-planet tombol itu sendiri
            let planetName = this.getAttribute('data-planet');
            showModal(planetName);
        });
    });

    closeBtn.addEventListener('click', hideModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
});