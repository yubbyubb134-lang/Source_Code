/* --- 1. PARTICLE SYSTEM: FALLING STARS --- */
const canvas = document.getElementById('void-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

class Star {
    constructor() {
        this.reset();
    }

    reset() {
        // Spawn stars randomly
        this.x = (Math.random() * width - width / 2) * 2; // Spread wide
        this.y = (Math.random() * height - height / 2) * 2;
        this.z = Math.random() * 2000 + 500; // Distance
        this.size = 1;
    }

    update() {
        // Move closer (Z decreases) -> Falling into screen/blackhole
        this.z -= 15; // Speed of suction

        if (this.z <= 1) {
            this.reset();
        }
    }

    draw() {
        // Perspective projection
        const x = (this.x / this.z) * width/2 + width / 2;
        const y = (this.y / this.z) * height/2 + height / 2;
        
        // Size increases as it gets closer
        const s = (1 - this.z / 2000) * 3; 
        
        // Opacity based on distance
        const alpha = (1 - this.z / 2000);

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, s > 0 ? s : 0, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initStars() {
    stars = [];
    for (let i = 0; i < 600; i++) {
        stars.push(new Star());
    }
}

function animateStars() {
    // Create trails effect
    ctx.fillStyle = 'rgba(5, 5, 5, 0.3)'; 
    ctx.fillRect(0, 0, width, height);

    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animateStars);
}

initStars();
animateStars();

/* --- 2. CUSTOM GRAVITY CURSOR --- */
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');
let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth follow with lag
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    cursorBlur.style.left = `${curX}px`;
    cursorBlur.style.top = `${curY}px`;

    requestAnimationFrame(animateCursor);
}
animateCursor();

/* --- 3. SPAGHETTIFICATION INTERACTION --- */
const stretchText = document.getElementById('stretchTarget');
const spaghettiSection = document.querySelector('.spaghetti-section');

spaghettiSection.addEventListener('mousemove', (e) => {
    const rect = stretchText.getBoundingClientRect();
    const textCenterX = rect.left + rect.width / 2;
    const textCenterY = rect.top + rect.height / 2;

    // Calculate distance from mouse to text center
    const dist = Math.sqrt(
        Math.pow(e.clientX - textCenterX, 2) + 
        Math.pow(e.clientY - textCenterY, 2)
    );

    // Closer = More Stretch
    const maxDist = 400; // Radius of influence
    if (dist < maxDist) {
        const intensity = (maxDist - dist) / maxDist; // 0 to 1
        const stretchY = 1 + (intensity * 3); // Stretch up to 4x height
        const tracking = 10 * intensity; // Letter spacing increases
        const blur = intensity * 2;

        stretchText.style.transform = `scaleY(${stretchY}) scaleX(${1 - intensity/3})`;
        stretchText.style.letterSpacing = `${tracking}px`;
        stretchText.style.filter = `blur(${blur}px)`;
        stretchText.style.color = `rgb(255, ${255 - (intensity * 255)}, ${255 - (intensity * 255)})`; // Turn Red
    } else {
        stretchText.style.transform = 'scaleY(1)';
        stretchText.style.letterSpacing = 'normal';
        stretchText.style.filter = 'blur(0px)';
        stretchText.style.color = 'white';
    }
});

/* --- 4. TEXT SCRAMBLE DECODER (ON LOAD) --- */
const scrambleEl = document.querySelector('.scramble-text');
const chars = '!<>-_\\/[]{}—=+*^?#';
const originalText = scrambleEl.innerText;

let iteration = 0;
let interval = null;

// Trigger on load
setTimeout(() => {
    interval = setInterval(() => {
        scrambleEl.innerText = originalText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
        
        if(iteration >= originalText.length){ 
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
}, 500);

/* --- 5. HOVER EFFECTS FOR CARDS --- */
const cards = document.querySelectorAll('.void-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
    card.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
});
//JS (Add to the end)//
/* --- 6. CURSOR FIX FOR BUTTON --- */
const backButton = document.querySelector('.back-button');

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