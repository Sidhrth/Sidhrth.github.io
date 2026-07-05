/* ==========================================================================
   Sidharth Kaliappan — main.js
   Handles mobile nav, navbar scroll state, smooth scroll, and reveal anims.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* -------- Mobile hamburger menu -------- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when a nav link is clicked (mobile)
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    /* -------- Navbar: add .scrolled once user scrolls -------- */
    const navbar = document.getElementById('navbar');
    const setNavState = () => {
        if (!navbar) return;
        if (window.scrollY > 12) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    setNavState();
    window.addEventListener('scroll', setNavState, { passive: true });

    /* -------- Smooth anchor scroll with navbar offset -------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const targetId = anchor.getAttribute('href');
            if (targetId.length < 2) return;
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            const offset = 72; // navbar height
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    /* -------- Reveal on scroll for key content blocks -------- */
    const revealSelector = [
        '.section-header',
        '.about-prose',
        '.about-side',
        '.news-item',
        '.pub-item',
        '.research-item',
        '.teaching-item',
        '.contact-card',
        '.contact-lede'
    ].join(', ');

    const reveals = document.querySelectorAll(revealSelector);
    reveals.forEach(el => el.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(el => io.observe(el));
    } else {
        // Fallback: just reveal everything
        reveals.forEach(el => el.classList.add('in-view'));
    }

});

// Study recruitment banner dismiss
document.addEventListener('DOMContentLoaded', function () {
    var closeBtn = document.getElementById('study-banner-close');
    if (!closeBtn) return;
    try {
        if (localStorage.getItem('studyBannerDismissed') === '1') {
            document.body.classList.add('banner-dismissed');
        }
    } catch (e) {}
    closeBtn.addEventListener('click', function () {
        document.body.classList.add('banner-dismissed');
        try { localStorage.setItem('studyBannerDismissed', '1'); } catch (e) {}
    });
});
