/* ============================================
   RESPONSIVE PORTFOLIO JAVASCRIPT
   ============================================ */

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav') && navList.classList.contains('active')) {
    navList.classList.remove('active');
  }
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// SCROLL ANIMATIONS (GSAP Integration)
// ============================================

// Check if GSAP is loaded
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Animate section headers on scroll
  gsap.utils.toArray('.section-content h3').forEach(heading => {
    gsap.from(heading, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Animate projects on scroll
  gsap.utils.toArray('.project').forEach(project => {
    gsap.from(project, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      scrollTrigger: {
        trigger: project,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Animate skills on scroll
  gsap.utils.toArray('.skill').forEach((skill, index) => {
    gsap.from(skill, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: skill.parentElement,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// ============================================
// ACTIVE NAVIGATION INDICATOR
// ============================================

window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-list a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ============================================
// RESPONSIVE HEIGHT FIX
// ============================================

function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVh();
window.addEventListener('resize', setVh);

// ============================================
// SKILL HOVER EFFECTS
// ============================================

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', function() {
    this.style.zIndex = 10;
  });

  skill.addEventListener('mouseleave', function() {
    this.style.zIndex = 1;
  });
});

// ============================================
// LAZY LOADING FOR IMAGES
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('.skill img').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// FORM SUBMISSION (For Contact Section)
// ============================================

const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form handling logic here
    console.log('Form submitted');
  });
}

// ============================================
// DARK MODE TOGGLE (Optional)
// ============================================

const darkModeToggle = localStorage.getItem('darkMode') === 'true';

if (darkModeToggle) {
  document.body.classList.add('dark-mode');
}

// Uncomment to enable dark mode toggle button
/*
const darkModeBtn = document.getElementById('darkModeToggle');
if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
}
*/

// ============================================
// PAGE LOAD ANIMATIONS
// ============================================

window.addEventListener('load', () => {
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-left', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2
    });

    gsap.from('.hero-right', {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      delay: 0.4
    });
  }
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%cWelcome to Ajay\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cMade with ❤️ using HTML, CSS & JavaScript', 'font-size: 12px; color: #64748b;');

/* ============================================
   STARFIELD BACKGROUND (Canvas)
   Responsive, performant starfield with gentle parallax
   ============================================ */

(function initStarfield() {
  const canvas = document.getElementById('space');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const stars = [];
  const STAR_COUNT = Math.round((w * h) / 8000); // density scales with area

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createStars() {
    stars.length = 0;
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.9 + 0.1,
        twinkle: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  let mouseX = 0.5, mouseY = 0.5;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / w;
    mouseY = e.clientY / h;
  });

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    createStars();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // subtle gradient overlay on top of radial background
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.phase += s.twinkle;
      const a = s.alpha * (0.6 + Math.sin(s.phase) * 0.4);

      // parallax offset based on mouse
      const px = (mouseX - 0.5) * 30 * (s.r + 0.3);
      const py = (mouseY - 0.5) * 20 * (s.r + 0.3);

      ctx.beginPath();
      ctx.globalAlpha = a;
      const gradient = ctx.createRadialGradient(s.x + px, s.y + py, 0, s.x + px, s.y + py, s.r * 6);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.4, 'rgba(200,220,255,0.45)');
      gradient.addColorStop(1, 'rgba(200,220,255,0)');
      ctx.fillStyle = gradient;
      ctx.arc(s.x + px, s.y + py, s.r * 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // slow drifting milky glow
    ctx.globalAlpha = 0.03;
    ctx.fillStyle = '#8b5cf6';
    ctx.beginPath();
    ctx.ellipse(w * 0.75 + (mouseX - 0.5) * 200, h * 0.2 + (mouseY - 0.5) * 120, w * 0.4, h * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    // throttle resize
    clearTimeout(window._starResize);
    window._starResize = setTimeout(resize, 120);
  });

  createStars();
  draw();
})();