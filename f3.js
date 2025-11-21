/* --- 1. MATRIX RAIN BACKGROUND --- */
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789';
const alphabet = katakana.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for(let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(5, 10, 15, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00f3ff'; // Cyan text
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < drops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i*fontSize, drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}
setInterval(drawMatrix, 30);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/* --- 2. TELEPORTATION LOGIC --- */
const btnTeleport = document.getElementById('btn-teleport');
const btnReset = document.getElementById('btn-reset');
const aliceCube = document.getElementById('object-alice');
const bobCube = document.getElementById('object-bob');
const consoleOut = document.getElementById('console-output');
const beam = document.querySelector('.scanner-beam');
const reconstructor = document.querySelector('.reconstructor-beam');
const dataStream = document.querySelector('.data-stream');
const entIcon = document.querySelector('.entanglement-icon');

function log(msg) {
    const p = document.createElement('p');
    p.textContent = `> ${msg}`;
    consoleOut.appendChild(p);
    consoleOut.scrollTop = consoleOut.scrollHeight;
}

function highlightStep(stepNum) {
    document.querySelectorAll('.step-item').forEach(item => item.classList.remove('active'));
    if(stepNum > 0) document.getElementById(`step-${stepNum}`).classList.add('active');
}

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startTeleportation() {
    btnTeleport.disabled = true;
    
    // Phase 1: Initialization
    log("INITIALIZING PROTOCOL...");
    await wait(500);
    highlightStep(1);
    log("GENERATING ENTANGLED PAIR (EPR)...");
    entIcon.classList.add('entanglement-active');
    await wait(1000);
    log("PAIR DISTRIBUTED TO ALICE & BOB.");

    // Phase 2: Bell Measurement (Alice)
    highlightStep(2);
    log("PERFORMING BELL STATE MEASUREMENT...");
    
    // Animate Scanner
    beam.style.opacity = 1;
    beam.style.top = "0%";
    beam.style.transition = "top 1.5s ease-in-out";
    
    setTimeout(() => { beam.style.top = "100%"; }, 50); // Trigger anim
    
    await wait(1500); // Wait for scan
    
    // Disintegrate Alice's Cube
    aliceCube.classList.add('hidden');
    beam.style.opacity = 0;
    beam.style.transition = "none";
    beam.style.top = "0%";
    
    log("STATE COLLAPSED. ORIGINAL DESTROYED.");
    
    // Phase 3: Transmission (Classical)
    highlightStep(3);
    log("TRANSMITTING 2 CLASSICAL BITS...");
    
    // Animate Data Stream
    dataStream.style.opacity = 1;
    dataStream.style.transition = "left 1s linear";
    dataStream.style.left = "0%";
    
    setTimeout(() => { dataStream.style.left = "100%"; }, 50);
    
    await wait(1000);
    dataStream.style.opacity = 0;
    dataStream.style.transition = "none";
    dataStream.style.left = "0%";
    
    // Phase 4: Reconstruction (Bob)
    highlightStep(4);
    log("DATA RECEIVED AT BOB'S STATION.");
    log("APPLYING UNITARY TRANSFORMATION...");
    
    // Animate Reconstruction
    reconstructor.style.opacity = 1;
    reconstructor.style.top = "100%";
    reconstructor.style.transition = "top 1.5s ease-in-out";
    setTimeout(() => { reconstructor.style.top = "0%"; }, 50);
    
    // Show Bob's Cube halfway through
    await wait(750);
    bobCube.classList.remove('hidden');
    
    await wait(750);
    reconstructor.style.opacity = 0;
    reconstructor.style.transition = "none";
    reconstructor.style.top = "100%";
    
    log("TELEPORTATION SUCCESSFUL.");
    log("QUANTUM STATE TRANSFERRED.");
    
    btnReset.disabled = false;
}

function resetSimulation() {
    btnReset.disabled = true;
    log("RESETTING SYSTEM...");
    
    // Hide Bob, Show Alice
    bobCube.classList.add('hidden');
    
    setTimeout(() => {
        aliceCube.classList.remove('hidden');
        entIcon.classList.remove('entanglement-active');
        highlightStep(0);
        log("SYSTEM READY.");
        btnTeleport.disabled = false;
    }, 1000);
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