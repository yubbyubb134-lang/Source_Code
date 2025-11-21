/* --- 1. PAGE LOADER --- */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 800);
});

/* --- 2. CUSTOM CURSOR LOGIC --- */
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('button, .tilt-card');

let posX = 0, posY = 0;
let mouseX = 0, mouseY = 0;

// Smooth follow animation
setInterval(() => {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    follower.style.left = posX + 'px';
    follower.style.top = posY + 'px';
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
}, 10);

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Hover effects
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
    });
    link.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
    });
});

/* --- 3. PARTICLE SYSTEM (CANVAS) --- */
const canvas = document.getElementById('quantum-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = Math.random() > 0.5 ? '#00f3ff' : '#bc13fe';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
        // Draw lines if close
        particles.forEach(p2 => {
            let dx = p.x - p2.x;
            let dy = p.y - p2.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist/1000})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

/* --- 4. 3D TILT EFFECT FOR CARDS --- */
const cards = document.querySelectorAll('.tilt-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        card.style.border = '1px solid rgba(0, 243, 255, 0.5)';
        card.style.boxShadow = '0 10px 30px rgba(0, 243, 255, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        card.style.border = '1px solid var(--glass-border)';
        card.style.boxShadow = 'none';
    });
});

/* --- 5. SCHRODINGER BOX LOGIC --- */
function revealCat() {
    const box = document.getElementById('schrodingerBox');
    const text = document.querySelector('.status-text');
    
    // Animation reset
    text.style.opacity = 0;
    box.style.transform = "scale(0.95)";
    
    setTimeout(() => {
        const isAlive = Math.random() > 0.5;
        
        if(isAlive) {
            text.innerHTML = "😸<br>HIDUP";
            text.style.color = "#00f3ff";
            box.style.boxShadow = "0 0 50px #00f3ff";
            box.style.borderColor = "#00f3ff";
        } else {
            text.innerHTML = "💀<br>MATI";
            text.style.color = "#ff0055";
            box.style.boxShadow = "0 0 50px #ff0055";
            box.style.borderColor = "#ff0055";
        }
        
        text.style.opacity = 1;
        box.style.transform = "scale(1)";
    }, 300);
}

backButton.addEventListener('mouseenter', () => {
    document.body.style.cursor = 'default';
    cursor.style.display = 'none';
    cursorBlur.style.display = 'none';
});

backButton.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'none';
    cursor.style.display = 'block';
    cursorBlur.style.display = 'block';
});