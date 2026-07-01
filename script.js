/* ════════════════════════════════════════════════════
   BIRTHDAY WEBSITE — script.js
   Premium Blue-Themed Cinematic Birthday Experience
   ════════════════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════════════════════════
   ██  CUSTOMIZABLE CONTENT — EDIT HERE
   ════════════════════════════════════════════════════ */

/** Birthday letter message — edit freely */
const BIRTHDAY_LETTER = `Happy Birthday to my favourite person 🥹💙

You’re honestly one of the best things that has happened to me. Thank you for being the person who can make even an ordinary day feel special with just a text. I’ll never stop annoying you because that’s what I do to the people who have a special place in my heart, but you know I’ll always be there for you.

I hope I get to see that beautiful smile on your face forever. And always remember, whenever you’re sad or feeling low, I’ll be there to talk to you. You’re never alone, because I’ll always have your back.

On your special day, I just want you to be happy, surrounded by love, laughter, and everything that makes you smile. Stay the amazing person you are, and never change for anyone.

Happy Birthday once again, Gadhi. 🎂
💙`;

/**
 * PHOTO GALLERY
 * Add your image paths/URLs here.
 * caption is optional.
 * Example: { src: 'assets/images/photo1.jpg', caption: 'Laughing away 😄' }
 *
 * Placeholder Picsum photos are pre-filled — replace with real images.
 * Seed numbers are fixed so they always show the same photo.
 */
const GALLERY_IMAGES = [
    { src: 'assets/images/IMG_5922.PNG', caption: 'Pagli 😋' },
    { src: 'assets/images/IMG_7930.PNG', caption: 'Nakhrebaaz 🐶' },
    { src: 'assets/images/IMG_7085.PNG', caption: 'Khadoos 😒' },
    { src: 'assets/images/IMG_7931.PNG', caption: 'Sundar, offc. 🥹' },
    { src: 'assets/images/IMG_7932.PNG', caption: 'Bhondu 🥹' },
    { src: 'assets/images/IMG_7933.PNG', caption: 'Did I mention… sundar? 🥹' },
    { src: 'assets/images/IMG_7935.PNG', caption: 'Happy birthday! 🎂' }
];

/**
 * VIDEO GALLERY
 * Add your local video paths here.
 * thumb is optional — leave empty string to use a default.
 * Example: { src: 'assets/videos/clip1.mp4', caption: 'The best day ever', thumb: 'assets/images/thumb1.jpg' }
 */
const GALLERY_VIDEOS = [
    { src: 'assets/videos/birthday-video.mp4', caption: 'Happiest birthday pagal😏🫶', thumb: 'assets/images/IMG_7930.PNG' },

];

/* ════════════════════════════════════════════════════
   ██  LOADING SCREEN
   ════════════════════════════════════════════════════ */
(function initLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const beginBtn = document.getElementById('begin-btn');
    const mainSite = document.getElementById('main-site');
    const canvas = document.getElementById('loading-canvas');
    const ctx = canvas.getContext('2d');

    // Stars for loading canvas
    let stars = [];
    let raf;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        const count = Math.floor((canvas.width * canvas.height) / 3500);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.5 + 0.3,
                alpha: Math.random(),
                dAlpha: (Math.random() * 0.008 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
                speed: Math.random() * 0.15 + 0.05,
            });
        }
    }

    function drawLoading() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            s.alpha += s.dAlpha;
            if (s.alpha <= 0 || s.alpha >= 1) s.dAlpha *= -1;
            s.alpha = Math.max(0, Math.min(1, s.alpha));
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(202,240,248,${s.alpha})`;
            ctx.fill();
        });
        raf = requestAnimationFrame(drawLoading);
    }

    resizeCanvas();
    createStars();
    drawLoading();

    window.addEventListener('resize', () => { resizeCanvas(); createStars(); });

    // Show button after 2.2s
    setTimeout(() => beginBtn.classList.add('visible'), 2200);

    beginBtn.addEventListener('click', () => {
        cancelAnimationFrame(raf);
        loadingScreen.classList.add('fade-out');
        mainSite.classList.remove('hidden');
        document.body.style.overflow = 'auto';
        // Start everything
        initHeroCanvas();
        initHeroClouds();
        initHeroParticles();
        initNav();
        initReveal();
        initLetter();
        initGallery();
        initVideoGallery();
        initBlueWorld();
        initCake();

        initWishesCanvas();
        initAccessibility();
        setTimeout(() => loadingScreen.remove(), 900);
    });
})();

/* ════════════════════════════════════════════════════
   ██  NAV
   ════════════════════════════════════════════════════ */
function initNav() {
    const nav = document.getElementById('main-nav');
    const burger = document.getElementById('hamburger-btn');
    const links = nav.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    burger.addEventListener('click', () => {
        links.classList.toggle('open');
        burger.setAttribute('aria-expanded', links.classList.contains('open'));
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => links.classList.remove('open'));
    });
}

/* ════════════════════════════════════════════════════
   ██  HERO CANVAS (stars)
   ════════════════════════════════════════════════════ */
function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    let stars = [];
    let raf;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        buildStars();
    }

    function buildStars() {
        stars = [];
        const n = Math.floor((canvas.width * canvas.height) / 4000);
        for (let i = 0; i < n; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * 0.6, // stars only in upper portion
                r: Math.random() * 1.2 + 0.2,
                alpha: Math.random() * 0.6 + 0.2,
                dA: (Math.random() * 0.006 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            s.alpha += s.dA;
            if (s.alpha <= 0.1 || s.alpha >= 0.8) s.dA *= -1;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(202,240,248,${s.alpha})`;
            ctx.fill();
        });
        raf = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
}

/* ════════════════════════════════════════════════════
   ██  HERO CLOUDS
   ════════════════════════════════════════════════════ */
function initHeroClouds() {
    const container = document.getElementById('clouds-container');

    const cloudData = [
        { width: 180, height: 55, top: 12, duration: 60, delay: -10, opacity: 0.13 },
        { width: 260, height: 70, top: 22, duration: 80, delay: -30, opacity: 0.09 },
        { width: 140, height: 42, top: 35, duration: 50, delay: -5, opacity: 0.15 },
        { width: 300, height: 80, top: 18, duration: 95, delay: -50, opacity: 0.07 },
        { width: 200, height: 60, top: 42, duration: 70, delay: -20, opacity: 0.11 },
        { width: 120, height: 38, top: 8, duration: 45, delay: -15, opacity: 0.14 },
    ];

    cloudData.forEach(d => {
        const el = document.createElement('div');
        el.className = 'cloud';
        el.style.cssText = `
      width:${d.width}px; height:${d.height}px;
      top:${d.top}%;
      opacity:${d.opacity};
      animation-duration:${d.duration}s;
      animation-delay:${d.delay}s;
    `;
        el.setAttribute('aria-label', 'Click to make cloud float away');
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');

        // Easter egg: click cloud → floats away
        function floatAway() {
            el.classList.add('floated-away');
            setTimeout(() => el.remove(), 1000);
        }
        el.addEventListener('click', floatAway);
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') floatAway(); });

        container.appendChild(el);
    });
}

/* ════════════════════════════════════════════════════
   ██  HERO PARTICLES
   ════════════════════════════════════════════════════ */
function initHeroParticles() {
    const container = document.getElementById('hero-particles');
    const COUNT = 30;

    for (let i = 0; i < COUNT; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1.5;
        p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * -20}s;
      opacity: ${Math.random() * 0.5 + 0.2};
    `;
        container.appendChild(p);
    }
}

/* ════════════════════════════════════════════════════
   ██  SCROLL REVEAL (Intersection Observer)
   ════════════════════════════════════════════════════ */
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('revealed');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════
   ██  BIRTHDAY LETTER (Typewriter)
   ════════════════════════════════════════════════════ */
function initLetter() {
    const textEl = document.getElementById('letter-text');
    const cursorEl = document.getElementById('letter-cursor');
    let started = false;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !started) {
            started = true;
            typeWriter(BIRTHDAY_LETTER, textEl, cursorEl);
            observer.disconnect();
        }
    }, { threshold: 0.4 });

    observer.observe(textEl);
}

function typeWriter(text, el, cursor) {
    // Convert newlines to HTML
    const lines = text.split('\n');
    let lineIdx = 0;
    let charIdx = 0;
    let html = '';
    const speed = 28; // ms per character

    // Render paragraph breaks
    const paragraphs = text.split('\n\n').filter(Boolean);
    let fullHTML = '';
    let allChars = '';

    paragraphs.forEach((para, pIdx) => {
        allChars += para;
        if (pIdx < paragraphs.length - 1) allChars += '\n\n';
    });

    const chars = allChars.split('');
    let idx = 0;

    function tick() {
        if (idx >= chars.length) {
            cursor.classList.add('hidden-cursor');
            return;
        }
        const ch = chars[idx];
        if (ch === '\n') {
            if (chars[idx + 1] === '\n') {
                el.innerHTML += '</p><p class="letter-paragraph">';
                idx += 2;
            } else {
                el.innerHTML += '<br>';
                idx++;
            }
        } else {
            el.innerHTML += escapeHTML(ch);
            idx++;
        }
        setTimeout(tick, speed);
    }

    el.innerHTML = '<p class="letter-paragraph">';
    tick();
}

function escapeHTML(ch) {
    return ch.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ════════════════════════════════════════════════════
   ██  PHOTO GALLERY
   ════════════════════════════════════════════════════ */
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    let currentIndex = 0;

    // Build gallery items
    GALLERY_IMAGES.forEach((img, i) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('role', 'listitem');
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-label', `Photo ${i + 1}${img.caption ? ': ' + img.caption : ''}`);

        const imgEl = document.createElement('img');
        imgEl.loading = 'lazy';
        imgEl.src = img.src;
        imgEl.alt = img.caption || `Birthday photo ${i + 1}`;

        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        if (img.caption) {
            const cap = document.createElement('p');
            cap.className = 'gallery-caption';
            cap.textContent = img.caption;
            overlay.appendChild(cap);
        }

        item.appendChild(imgEl);
        item.appendChild(overlay);
        grid.appendChild(item);

        // Open lightbox
        function openLightbox() {
            currentIndex = i;
            showLightbox(i);
        }
        item.addEventListener('click', openLightbox);
        item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(); });
    });

    // Reveal items with stagger using IntersectionObserver
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const idx = Array.from(grid.children).indexOf(e.target);
                setTimeout(() => e.target.classList.add('revealed'), idx * 40);
                galleryObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    grid.querySelectorAll('.gallery-item').forEach(el => galleryObserver.observe(el));

    // Lightbox controls
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCaption = document.getElementById('lightbox-caption');
    const lbClose = document.getElementById('lightbox-close');
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');

    function showLightbox(index) {
        const photo = GALLERY_IMAGES[index];
        lbImg.src = photo.src;
        lbImg.alt = photo.caption || `Birthday photo ${index + 1}`;
        lbCaption.textContent = photo.caption || '';
        lightbox.hidden = false;
        lightbox.focus();
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.hidden = true;
        document.body.style.overflow = 'auto';
    }

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', () => { currentIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; showLightbox(currentIndex); });
    lbNext.addEventListener('click', () => { currentIndex = (currentIndex + 1) % GALLERY_IMAGES.length; showLightbox(currentIndex); });

    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

    document.addEventListener('keydown', e => {
        if (lightbox.hidden) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; showLightbox(currentIndex); }
        if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % GALLERY_IMAGES.length; showLightbox(currentIndex); }
    });

    // Mobile swipe
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 60) {
            if (dx < 0) { currentIndex = (currentIndex + 1) % GALLERY_IMAGES.length; }
            else { currentIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; }
            showLightbox(currentIndex);
        }
    }, { passive: true });
}

/* ════════════════════════════════════════════════════
   ██  VIDEO GALLERY
   ════════════════════════════════════════════════════ */
function initVideoGallery() {
    const grid = document.getElementById('videos-grid');
    const modal = document.getElementById('video-modal');
    const mVid = document.getElementById('modal-video');
    const mCap = document.getElementById('modal-video-caption');
    const mClose = document.getElementById('video-modal-close');
    const mFullscreen = document.getElementById('video-modal-fullscreen');

    // Blue gradient placeholder thumb
    const PLACEHOLDER_THUMB = (() => {
        const c = document.createElement('canvas');
        c.width = 320; c.height = 180;
        const ctx = c.getContext('2d');
        const grad = ctx.createLinearGradient(0, 0, 320, 180);
        grad.addColorStop(0, '#03045E');
        grad.addColorStop(0.5, '#0077B6');
        grad.addColorStop(1, '#48CAE4');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 320, 180);
        return c.toDataURL();
    })();

    GALLERY_VIDEOS.forEach((vid, i) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.setAttribute('role', 'listitem');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Video ${i + 1}${vid.caption ? ': ' + vid.caption : ''}`);

        card.innerHTML = `
      <div class="video-thumb">
        <img loading="lazy" src="${vid.thumb || PLACEHOLDER_THUMB}" alt="Video ${i + 1} thumbnail" />
        <div class="video-play-btn" aria-hidden="true">▶</div>
      </div>
      <div class="video-info">
        <p class="video-title">${vid.caption || `Moment ${i + 1}`}</p>
        <p class="video-meta">🎥 Click to play</p>
      </div>
    `;

        function openModal() {
            // Set src and show modal first, then load
            mVid.setAttribute('src', vid.src);
            mCap.textContent = vid.caption || '';
            modal.removeAttribute('hidden');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            mVid.load();
            // Try to play — browsers may block autoplay, that's OK
            const playPromise = mVid.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Autoplay blocked — user can click play manually
                });
            }
        }

        card.addEventListener('click', openModal);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); } });
        grid.appendChild(card);
    });

    function closeModal() {
        mVid.pause();
        mVid.removeAttribute('src');
        mVid.load();
        modal.setAttribute('hidden', '');
        modal.style.display = '';
        document.body.style.overflow = '';
        // Exit fullscreen if active
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
        }
    }

    // Fullscreen toggle
    if (mFullscreen) {
        mFullscreen.addEventListener('click', () => {
            const el = mVid;
            if (!document.fullscreenElement) {
                el.requestFullscreen().then(() => {
                    mFullscreen.textContent = '⛶'; // already in FS
                }).catch(() => {
                    // Fallback: try fullscreen on modal content
                    modal.querySelector('.video-modal-content').requestFullscreen().catch(() => {});
                });
            } else {
                document.exitFullscreen().catch(() => {});
            }
        });
    }

    mClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (!modal.hasAttribute('hidden') && e.key === 'Escape') closeModal(); });

    // Reveal cards
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const idx = Array.from(grid.children).indexOf(e.target);
                setTimeout(() => e.target.classList.add('revealed'), idx * 60);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.video-card').forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════════════════
   ██  BLUE WORLD
   ════════════════════════════════════════════════════ */
function initBlueWorld() {
    initBWClouds();
    initBWBirds();
    initBWBubbles();
    initBWMoon();
    initBWStars();
    initBWCanvas();
}

function initBWCanvas() {
    const canvas = document.getElementById('blue-world-canvas');
    const ctx = canvas.getContext('2d');
    let shootingStars = [];

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function addShootingStar() {
        if (Math.random() > 0.02) return;
        shootingStars.push({
            x: Math.random() * canvas.width * 0.8,
            y: Math.random() * canvas.height * 0.4,
            len: Math.random() * 120 + 60,
            speed: Math.random() * 8 + 6,
            alpha: 1,
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        addShootingStar();

        shootingStars = shootingStars.filter(s => {
            s.x += s.speed;
            s.y += s.speed * 0.5;
            s.alpha -= 0.025;

            if (s.alpha <= 0) return false;

            const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len * 0.5);
            grad.addColorStop(0, `rgba(202,240,248,${s.alpha})`);
            grad.addColorStop(1, 'rgba(202,240,248,0)');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s.x - s.len, s.y - s.len * 0.5);
            ctx.stroke();
            return true;
        });

        requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    resize();
    draw();
}

function initBWClouds() {
    const container = document.querySelector('.bw-clouds');
    const cloudData = [
        { width: 220, height: 65, top: 15, duration: 75, delay: -20, opacity: 0.12 },
        { width: 160, height: 48, top: 28, duration: 55, delay: -8, opacity: 0.14 },
        { width: 300, height: 85, top: 10, duration: 100, delay: -40, opacity: 0.08 },
        { width: 130, height: 40, top: 38, duration: 48, delay: -3, opacity: 0.16 },
    ];

    cloudData.forEach(d => {
        const el = document.createElement('div');
        el.className = 'bw-cloud';
        el.style.cssText = `
      width:${d.width}px; height:${d.height}px;
      top:${d.top}%; opacity:${d.opacity};
      animation-duration:${d.duration}s;
      animation-delay:${d.delay}s;
    `;
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        el.setAttribute('aria-label', 'Click cloud to make it float away');

        function floatAway() {
            el.classList.add('floated-away');
            setTimeout(() => el.remove(), 1000);
        }
        el.addEventListener('click', floatAway);
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') floatAway(); });
        container.appendChild(el);
    });
}

function initBWBirds() {
    const container = document.getElementById('bw-birds');
    const birds = ['🐦', '🦅', '🐦', '🐦', '🦆'];

    birds.forEach((emoji, i) => {
        const el = document.createElement('div');
        el.className = 'bird';
        el.textContent = emoji;
        el.style.cssText = `
      top: ${12 + i * 8}%;
      animation-duration: ${30 + i * 12}s;
      animation-delay: ${-i * 9}s;
      font-size: ${0.9 + Math.random() * 0.5}rem;
    `;
        container.appendChild(el);
    });
}

function initBWBubbles() {
    const container = document.getElementById('bw-bubbles');
    const COUNT = 18;

    function spawnBubble() {
        const el = document.createElement('div');
        el.className = 'bubble';
        const size = Math.random() * 50 + 15;
        el.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      bottom: ${Math.random() * 20}%;
      animation-duration: ${Math.random() * 10 + 8}s;
      animation-delay: ${Math.random() * -8}s;
    `;
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        el.setAttribute('aria-label', 'Click bubble to pop');

        function popBubble() {
            el.classList.add('popped');
            setTimeout(() => el.remove(), 500);
            // Spawn a new one after popping
            setTimeout(spawnBubble, 600);
        }
        el.addEventListener('click', popBubble);
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') popBubble(); });
        container.appendChild(el);
    }

    for (let i = 0; i < COUNT; i++) spawnBubble();
}

function initBWMoon() {
    const moon = document.getElementById('bw-moon');
    const section = document.getElementById('blue-world');

    moon.addEventListener('click', () => {
        section.classList.toggle('moon-bright');
        // Trigger brighter star state via CSS class
    });
    moon.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') section.classList.toggle('moon-bright');
    });
}

function initBWStars() {
    const container = document.getElementById('bw-stars');
    const hiddenMsg = document.getElementById('hidden-message');
    let starClickCount = 0;
    const COUNT = 40;

    for (let i = 0; i < COUNT; i++) {
        const el = document.createElement('div');
        el.className = 'bw-star-item';
        el.textContent = '★';
        el.style.cssText = `
      left: ${Math.random() * 95}%;
      top: ${Math.random() * 70}%;
      font-size: ${0.6 + Math.random() * 1}rem;
      animation-duration: ${2 + Math.random() * 3}s;
      animation-delay: ${Math.random() * -3}s;
    `;
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        el.setAttribute('aria-label', 'Star');

        el.addEventListener('click', triggerStar);
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') triggerStar(); });
        container.appendChild(el);
    }

    function triggerStar() {
        starClickCount++;
        if (starClickCount >= 5) {
            starClickCount = 0;
            showHiddenMessage();
        }
    }

    function showHiddenMessage() {
        hiddenMsg.hidden = false;
        hiddenMsg.addEventListener('click', () => { hiddenMsg.hidden = true; }, { once: true });
        setTimeout(() => { hiddenMsg.hidden = true; }, 5000);
    }
}

/* ════════════════════════════════════════════════════
   ██  BIRTHDAY CAKE
   ════════════════════════════════════════════════════ */
function initCake() {
    buildCandles();

    const container = document.getElementById('cake-container');
    const confettiBox = document.getElementById('confetti-container');
    const balloonsBox = document.getElementById('balloons-container');
    const wishText = document.getElementById('wish-text');
    let cakeClicked = false;

    container.addEventListener('click', launchCake);
    container.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') launchCake(); });

    function launchCake() {
        if (cakeClicked) return;
        cakeClicked = true;
        spawnConfetti(confettiBox, 80);
        spawnBalloons(balloonsBox, 8);
        wishText.classList.add('show');
    }
}

function buildCandles() {
    const row = document.getElementById('candles-row');
    const N = 7;
    for (let i = 0; i < N; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'candle-wrapper';
        wrapper.innerHTML = `
      <div class="candle-flame" style="animation-delay:${i * 0.18}s;"></div>
      <div class="candle-body"></div>
    `;
        row.appendChild(wrapper);
    }
}

function spawnConfetti(container, count) {
    const colors = ['#48CAE4', '#0077B6', '#CAF0F8', '#87CEEB', '#ffffff', '#023E8A', '#90E0EF'];
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        const angle = Math.random() * 360;
        const xDrift = (Math.random() - 0.5) * 400;
        el.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${Math.random() * 8 + 4}px;
      height: ${Math.random() * 8 + 4}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      --x-drift: ${xDrift}px;
      --rot: ${angle}deg;
      animation-duration: ${Math.random() * 2 + 1.5}s;
      animation-delay: ${Math.random() * 0.8}s;
    `;
        container.appendChild(el);
    }
    setTimeout(() => { container.innerHTML = ''; }, 4500);
}

function spawnBalloons(container, count) {
    const emojis = ['🎈', '🎈', '🎀', '🎉', '💙', '🎈', '🎊', '💫'];
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'balloon';
        const xDrift = (Math.random() - 0.5) * 200;
        el.style.cssText = `
      left: ${10 + Math.random() * 80}%;
      --x-drift: ${xDrift}px;
      animation-duration: ${Math.random() * 3 + 3}s;
      animation-delay: ${i * 0.3}s;
      font-size: ${2 + Math.random()}rem;
    `;
        el.textContent = emojis[i % emojis.length];
        el.setAttribute('role', 'button');
        el.setAttribute('aria-label', 'Balloon — click to pop');

        // Easter egg: click balloon → pop
        el.addEventListener('click', () => {
            el.classList.add('clicked');
            setTimeout(() => el.remove(), 500);
        });

        container.appendChild(el);
    }
    setTimeout(() => { container.innerHTML = ''; }, 8000);
}

/* ════════════════════════════════════════════════════
   ██  MUSIC SECTION
   ════════════════════════════════════════════════════ */
function initMusic() {
    const vinyl = document.getElementById('vinyl');
    const songEl = document.getElementById('music-song');
    const artistEl = document.getElementById('music-artist');
    const spotifyEl = document.getElementById('spotify-embed');

    // Set song info from config
    songEl.textContent = MUSIC_SONG;
    artistEl.textContent = MUSIC_ARTIST;

    // Spotify embed
    if (SPOTIFY_TRACK_ID) {
        spotifyEl.innerHTML = `
      <iframe
        src="https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&theme=0"
        width="100%" height="80" frameborder="0"
        allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    `;
    }

    // Spin vinyl when section is in view
    const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            vinyl.classList.add('spinning');
        } else {
            vinyl.classList.remove('spinning');
        }
    }, { threshold: 0.4 });
    obs.observe(document.getElementById('music'));
}

/* ════════════════════════════════════════════════════
   ██  FINAL WISHES CANVAS (stars)
   ════════════════════════════════════════════════════ */
function initWishesCanvas() {
    const canvas = document.getElementById('wishes-canvas');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        buildStars();
    }

    function buildStars() {
        stars = [];
        const n = Math.floor((canvas.width * canvas.height) / 3000);
        for (let i = 0; i < n; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.5 + 0.3,
                alpha: Math.random() * 0.7 + 0.2,
                dA: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            s.alpha += s.dA;
            if (s.alpha <= 0.1 || s.alpha >= 0.9) s.dA *= -1;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(202,240,248,${s.alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    resize();
    draw();
}

/* ════════════════════════════════════════════════════
   ██  ACCESSIBILITY
   ════════════════════════════════════════════════════ */
function initAccessibility() {
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('[style*="animation"]').forEach(el => {
            el.style.animation = 'none';
        });
    }
}

/* ════════════════════════════════════════════════════
   ██  README stub (in case the page loads without clicking begin)
   ════════════════════════════════════════════════════ */
console.info(`
💙 Birthday Website — by Swaroop
════════════════════════════════
Customizable variables are at the top of script.js:
  - BIRTHDAY_LETTER   : Edit the typewriter message
  - GALLERY_IMAGES    : Add/replace photo paths
  - GALLERY_VIDEOS    : Add local MP4 paths
  - SPOTIFY_TRACK_ID  : Add a Spotify track ID
  - MUSIC_SONG / MUSIC_ARTIST : Change music details
`);
