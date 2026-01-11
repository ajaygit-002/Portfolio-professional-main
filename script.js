/* ============================================
   PROFESSIONAL SPACE-THEMED PORTFOLIO
   Interactive Effects & Animations
   Fully Responsive & Performance Optimized
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // RESPONSIVE CONFIG
    // ============================================
    const config = {
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
        isLandscape: window.innerHeight < window.innerWidth && window.innerWidth < 1024
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    
    document.addEventListener('DOMContentLoaded', function() {
        initStarField();
        initParticleCanvas();
        initNavigation();
        initScrollAnimations();
        initParallaxScrolling();
        initBackToTop();
        initContactForm();
        initScrollSpy();
        initNavbarScroll();
        
        // Handle responsive changes on resize
        window.addEventListener('resize', debounce(handleWindowResize, 250));
    });

    // ============================================
    // RESPONSIVE RESIZE HANDLER
    // ============================================
    
    function handleWindowResize() {
        const wasMobile = config.isMobile;
        config.isMobile = window.innerWidth < 768;
        config.isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        config.isDesktop = window.innerWidth >= 1024;
        config.isLandscape = window.innerHeight < window.innerWidth && window.innerWidth < 1024;
        
        // Reinitialize star field if transition from mobile to desktop or vice versa
        if (wasMobile !== config.isMobile) {
            const starsContainer = document.getElementById('stars-container');
            if (starsContainer) {
                starsContainer.innerHTML = '';
            }
            initStarField();
        }
    }

    // ============================================
    // STAR FIELD GENERATION
    // ============================================
    
    function initStarField() {
        const starsContainer = document.getElementById('stars-container');
        if (!starsContainer) return;
        
        // Responsive star count
        let starCount = 200;
        if (config.isMobile) {
            starCount = 80;
        } else if (config.isTablet) {
            starCount = 120;
        } else if (config.isDesktop && window.innerWidth >= 1920) {
            starCount = 250;
        }
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random size
            const sizes = ['small', 'medium', 'large'];
            const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
            star.classList.add(randomSize);
            
            // Random position
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            star.style.animationDelay = Math.random() * 3 + 's';
            
            starsContainer.appendChild(star);
        }
    }

    // ============================================
    // PARTICLE CANVAS EFFECT
    // ============================================
    
    function initParticleCanvas() {
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId = null;
        
        // Set canvas size with DPI awareness
        function resizeCanvas() {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
        }
        resizeCanvas();
        window.addEventListener('resize', debounce(resizeCanvas, 250));
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = Math.random() > 0.5 ? '#00d9ff' : '#7c3aed';
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                // Wrap around screen
                if (this.x < 0) this.x = window.innerWidth;
                if (this.x > window.innerWidth) this.x = 0;
                if (this.y < 0) this.y = window.innerHeight;
                if (this.y > window.innerHeight) this.y = 0;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
        }
        
        // Initialize particles - responsive particle count
        function initializeParticles() {
            particles = [];
            let particleCount = 60;
            
            if (config.isMobile) {
                particleCount = 25;
            } else if (config.isTablet) {
                particleCount = 40;
            } else if (window.innerWidth >= 1920) {
                particleCount = 80;
            }
            
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        initializeParticles();
        
        // Reinitialize particles on major resize
        window.addEventListener('resize', debounce(function() {
            const wasParticleCount = particles.length;
            initializeParticles();
        }, 500));
        
        // Animation loop with performance optimization
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1;
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            animationId = requestAnimationFrame(animate);
        }
        
        // Only animate if particles are visible
        animate();
        
        // Stop animation when tab is hidden (performance optimization)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden && animationId) {
                cancelAnimationFrame(animationId);
            } else if (!document.hidden) {
                animate();
            }
        });
    }

    // ============================================
    // PARALLAX SCROLLING
    // ============================================
    
    function initParallaxScrolling() {
        const starsContainer = document.getElementById('stars-container');
        if (!starsContainer) return;
        
        // Disable parallax on mobile for performance
        if (config.isMobile) return;
        
        window.addEventListener('scroll', throttle(function() {
            const scrollY = window.scrollY;
            starsContainer.style.transform = `translateY(${scrollY * 0.5}px)`;
        }, 16)); // ~60fps throttle
    }

    // ============================================
    // NAVIGATION
    // ============================================
    
    function initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked
                this.classList.add('active');
            });
        });
    }

    function initNavbarScroll() {
        const navbar = document.getElementById('mainNav');
        if (!navbar) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    function initScrollSpy() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        function updateActiveLink() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveLink, { passive: true });
    }

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    
    function initScrollAnimations() {
        const revealElements = document.querySelectorAll('[class*="reveal-"]');
        
        if (!('IntersectionObserver' in window)) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(element => {
            observer.observe(element);
        });
    }

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    
    function initBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        if (!backToTopBtn) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }, { passive: true });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // CONTACT FORM
    // ============================================
    
    function initContactForm() {
        const form = document.querySelector('.contact-form form');
        const formMessage = document.getElementById('formMessage');
        
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            if (!isValidEmail(data.email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
        
        function showFormMessage(message, type) {
            if (formMessage) {
                formMessage.textContent = message;
                formMessage.classList.remove('success', 'error');
                formMessage.classList.add(type);
                
                setTimeout(() => {
                    formMessage.classList.remove('success', 'error');
                }, 5000);
            }
        }
        
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

})();

// ============================================
// SMOOTH SCROLL POLYFILL FOR OLDER BROWSERS
// ============================================

if (!window.CSS || !CSS.supports('scroll-behavior: smooth')) {
    document.addEventListener('click', function(e) {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

// ============================================
// DARK MODE / THEME DETECTION
// ============================================

// Detect system preference for dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Listen for changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
});
