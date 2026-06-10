// Data is loaded globally from data.js

// ==========================================
// Lenis Smooth Scrolling
// ==========================================
let lenis;
function initSmoothScroll() {
    if (typeof Lenis === 'undefined') return;

    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    }

    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target, { offset: -60 });
            }
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const menuButton = document.querySelector('.menu-button');
                if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// ==========================================
// Custom Cursor
// ==========================================
function initCustomCursor() {
    const dot = document.getElementById('cursorDot');
    const outline = document.getElementById('cursorOutline');
    if (!dot || !outline || window.innerWidth <= 768) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX - 3 + 'px';
        dot.style.top = mouseY - 3 + 'px';
    });

    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        outline.style.left = outlineX - 18 + 'px';
        outline.style.top = outlineY - 18 + 'px';
        requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Scale cursor on interactive elements
    const interactives = document.querySelectorAll('a, button, .project-link, .contact-card, .skill-card, .tab-btn');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.style.transform = 'scale(2.5)';
            outline.style.transform = 'scale(1.5)';
            outline.style.borderColor = 'rgba(79, 125, 249, 0.6)';
        });
        el.addEventListener('mouseleave', () => {
            dot.style.transform = 'scale(1)';
            outline.style.transform = 'scale(1)';
            outline.style.borderColor = 'rgba(79, 125, 249, 0.4)';
        });
    });
}

// ==========================================
// Particle Canvas
// ==========================================
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = window.innerWidth <= 768 ? 30 : 60;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(79, 125, 249, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(79, 125, 249, ${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }
    animate();
}

// ==========================================
// Typewriter Effect
// ==========================================
function initTypewriter() {
    const element = document.getElementById('typewriter');
    if (!element) return;

    const roles = [
        'Backend Developer',
        'WordPress Expert',
        'Laravel Developer',
        'PHP Engineer',
        'Full-Stack Builder'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            element.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            element.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before new word
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

// ==========================================
// Counter Animation (Stats)
// ==========================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                function updateCounter() {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                }
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ==========================================
// Header Scroll Effect
// ==========================================
function initHeaderScroll() {
    const header = document.getElementById('mainHeader');
    if (!header) return;

    let lastScroll = 0;

    function checkScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
}

// ==========================================
// Active Nav Link on Scroll
// ==========================================
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function onScroll() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
}

// ==========================================
// Skills Rendering
// ==========================================
function renderSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = '';

    skillsContainer.appendChild(createSkillCategory('Backend & CMS', skills.backend));
    skillsContainer.appendChild(createSkillCategory('Frontend', skills.frontend));
    skillsContainer.appendChild(createSkillCategory('Tools & Workflow', skills.tools));
}

function createSkillCategory(title, skillList) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category gs-reveal';

    let listHtml = skillList.map(skill => `
        <div class="skill-card">
            <i class="${skill.icon}"></i>
            <h4>${skill.name}</h4>
        </div>
    `).join('');

    categoryDiv.innerHTML = `
        <h3 class="category-title">${title}</h3>
        <div class="skill-grid">
            ${listHtml}
        </div>
    `;
    return categoryDiv;
}

// ==========================================
// Projects Rendering
// ==========================================
function renderProjects() {
    const wordpressList = document.getElementById('wordpress-list');
    const backendList = document.getElementById('backend-list');

    if (wordpressList) wordpressList.innerHTML = '';
    if (backendList) backendList.innerHTML = '';

    projects.forEach(project => {
        const li = document.createElement('li');
        li.className = 'project-item swiper-slide gs-reveal';
        li.innerHTML = `
            <div class="project-link" data-id="${project.id}">
                <div class="project-img-wrapper">
                    <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay">
                        <span>View Details</span>
                    </div>
                </div>
                <div class="project-info">
                    <p class="badge ${project.badgeClass}">${project.badge}</p>
                    <h3 class="project-title">${project.title}</h3>
                </div>
            </div>
        `;

        li.querySelector('.project-link').addEventListener('click', () => openProjectPanel(project.id));

        if (project.category === 'wordpress' && wordpressList) {
            wordpressList.appendChild(li);
        } else if (project.category === 'backend' && backendList) {
            backendList.appendChild(li);
        }
    });
}

// ==========================================
// Mobile Swiper
// ==========================================
let mobileSwipers = [];
function initMobileSwipers() {
    const swiperContainers = document.querySelectorAll('.mobile-swiper');

    if (window.innerWidth <= 768) {
        if (mobileSwipers.length === 0) {
            swiperContainers.forEach(container => {
                mobileSwipers.push(new Swiper(container, {
                    slidesPerView: 1.1,
                    spaceBetween: 16,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                }));
            });
        }
    } else {
        if (mobileSwipers.length > 0) {
            mobileSwipers.forEach(swiper => swiper.destroy(true, true));
            mobileSwipers = [];
        }
    }
}

// ==========================================
// Project Slide-in Panel
// ==========================================
let panelSwiper = null;

function openProjectPanel(id) {
    const panel = document.getElementById("projectPanel");
    const overlay = document.getElementById("panelOverlay");
    const panelImages = document.getElementById("panelImages");
    const panelTitle = document.getElementById("panelTitle");
    const panelDescription = document.getElementById("panelDescription");
    const projectLink = document.querySelector('.panel-view-website');

    const project = projects.find(p => p.id === id);
    if (!project) return;

    panelTitle.innerText = project.title;
    panelDescription.innerHTML = project.description;
    projectLink.href = project.link;

    if (panelSwiper) {
        panelSwiper.destroy(true, true);
        panelSwiper = null;
    }

    let slidesHtml = project.images.map(img =>
        `<div class="swiper-slide"><img src="${img}" alt="${project.title}"></div>`
    ).join('');

    panelImages.innerHTML = `
        <div class="swiper panel-swiper">
            <div class="swiper-wrapper">${slidesHtml}</div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `;

    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();

    panelSwiper = new Swiper('.panel-swiper', {
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function closeProjectPanel() {
    const panel = document.getElementById("projectPanel");
    const overlay = document.getElementById("panelOverlay");

    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (lenis) lenis.start();
}

window.closeProjectPanel = closeProjectPanel;
document.getElementById("panelOverlay")?.addEventListener('click', closeProjectPanel);

// ==========================================
// UI Interactions
// ==========================================
window.toggleMenu = function () {
    const navMenu = document.querySelector('.nav-menu');
    const menuButton = document.querySelector('.menu-button');

    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    } else {
        navMenu.classList.add('active');
        menuButton.setAttribute('aria-expanded', 'true');
    }
};

window.openTab = function (evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabContents.forEach(content => content.classList.remove('active'));
    tabBtns.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
};

// ==========================================
// GSAP Animations
// ==========================================
function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance animation - staggered
    const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTL
        .fromTo(".hero-badge", { opacity: 0, y: 20 }, { duration: 0.8, opacity: 1, y: 0 })
        .fromTo(".hero-greeting", { opacity: 0, y: 15 }, { duration: 0.6, opacity: 1, y: 0 }, "-=0.4")
        .fromTo(".hero-name", { opacity: 0, y: 40, skewY: 2 }, { duration: 0.9, opacity: 1, y: 0, skewY: 0 }, "-=0.3")
        .fromTo(".hero-role", { opacity: 0, x: -20 }, { duration: 0.7, opacity: 1, x: 0 }, "-=0.4")
        .fromTo(".hero-description", { opacity: 0, y: 20 }, { duration: 0.7, opacity: 1, y: 0 }, "-=0.3")
        .fromTo(".hero-cta .btn", { opacity: 0, y: 15 }, { duration: 0.6, opacity: 1, y: 0, stagger: 0.15 }, "-=0.3")
        .fromTo(".hero-stats .stat-item", { opacity: 0, y: 15 }, { duration: 0.5, opacity: 1, y: 0, stagger: 0.1 }, "-=0.3")
        .fromTo(".hero-stats .stat-divider", { opacity: 0, scaleY: 0 }, { duration: 0.4, opacity: 1, scaleY: 1 }, "-=0.4")
        .fromTo(".profile-card", { opacity: 0, scale: 0.85, rotation: -5 }, { duration: 1, opacity: 1, scale: 1, rotation: 0 }, "-=1")
        .fromTo(".floating-icon", { opacity: 0, scale: 0 }, { duration: 0.5, opacity: 1, scale: 1, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.5")
        .fromTo(".scroll-indicator", { opacity: 0, y: 20 }, { duration: 0.6, opacity: 1, y: 0 }, "-=0.3");

    // Scroll-based reveals
    const revealElements = document.querySelectorAll('.gs-reveal');
    revealElements.forEach((elem) => {
        gsap.fromTo(elem,
            { autoAlpha: 0, y: 40 },
            {
                duration: 0.8,
                autoAlpha: 1,
                y: 0,
                ease: "power3.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Parallax effect on hero glow
    gsap.to(".hero-glow--1", {
        y: -100,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
        }
    });

    gsap.to(".hero-glow--2", {
        y: -60,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
        }
    });

    // Section headers animation
    gsap.utils.toArray('.section-header').forEach(header => {
        const tag = header.querySelector('.section-tag');
        const title = header.querySelector('.section-title');
        const subtitle = header.querySelector('.section-subtitle');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: header,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });

        if (tag) tl.fromTo(tag, { opacity: 0, y: 20 }, { duration: 0.6, opacity: 1, y: 0, ease: "power3.out" });
        if (title) tl.fromTo(title, { opacity: 0, y: 25 }, { duration: 0.7, opacity: 1, y: 0, ease: "power3.out" }, "-=0.3");
        if (subtitle) tl.fromTo(subtitle, { opacity: 0, y: 20 }, { duration: 0.6, opacity: 1, y: 0, ease: "power3.out" }, "-=0.3");
    });

    // Skills cards stagger
    gsap.utils.toArray('.skill-category').forEach(category => {
        const cards = category.querySelectorAll('.skill-card');
        gsap.fromTo(cards,
            { opacity: 0, y: 20 },
            {
                duration: 0.5,
                opacity: 1,
                y: 0,
                stagger: 0.05,
                ease: "power3.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: category,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Contact cards stagger
    const contactCards = document.querySelectorAll('.contact-card');
    if (contactCards.length) {
        gsap.fromTo(contactCards,
            { opacity: 0, y: 25 },
            {
                duration: 0.5,
                opacity: 1,
                y: 0,
                stagger: 0.06,
                ease: "power3.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: '.contact-grid',
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            }
        );
    }
}

// ==========================================
// Profile Image Modal
// ==========================================
function initProfileModal() {
    const profileImg = document.querySelector('.profile-image-wrapper img');
    const modal = document.getElementById('profileModal');
    if (!profileImg || !modal) return;

    profileImg.style.cursor = 'pointer';
    profileImg.addEventListener('click', () => {
        modal.style.display = 'block';
        if (lenis) lenis.stop();
    });

    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            if (lenis) lenis.start();
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            if (lenis) lenis.start();
        }
    });
}

// ==========================================
// Back to Top Button & Scroll Indicator
// ==========================================
function initScrollButtons() {
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            if (typeof lenis !== 'undefined' && lenis) {
                lenis.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Scroll indicator in hero section
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                if (typeof lenis !== 'undefined' && lenis) {
                    lenis.scrollTo(projectsSection, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
                } else {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

// ==========================================
// Initialize Everything
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Mark body so CSS knows JS is running
    document.body.classList.add('js-loaded');

    // Render dynamic content first
    renderSkills();
    renderProjects();

    // Initialize features
    initSmoothScroll();
    initCustomCursor();
    initParticles();
    initTypewriter();
    initCounters();
    initHeaderScroll();
    initActiveNav();
    initMobileSwipers();
    initProfileModal();
    initScrollButtons();

    // Initialize GSAP animations AFTER everything is rendered
    // Use a small delay to ensure layout is calculated
    requestAnimationFrame(() => {
        initAnimations();
        // Refresh ScrollTrigger after all content is rendered
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    });

    // Resize handler
    window.addEventListener('resize', () => {
        initMobileSwipers();
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    });

    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
