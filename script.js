/* ============================================================
   KOHZA.ORG — Digital Enforcement Bureau
   Bureau Theme Interaction Scripts
   ============================================================ */

(function () {
    'use strict';

    // === SCROLL REVEAL ===
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    // === NAV SCROLL STATE ===
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // === MOBILE MENU ===
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('active');
            const spans = toggle.querySelectorAll('span');
            if (isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
                spans[1].style.transform = 'rotate(-45deg) translate(0, -2px)';
                setTimeout(() => menu.style.opacity = '1', 10);
            } else {
                spans[0].style.transform = '';
                spans[1].style.transform = '';
                menu.style.opacity = '0';
            }
        });

        // Close mobile menu on link click
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                menu.classList.remove('active');
                menu.style.opacity = '0';
                toggle.querySelectorAll('span').forEach(s => s.style.transform = '');
            });
        });
    }

    // === SMOOTH ANCHOR SCROLL ===
    document.querySelectorAll('a[href]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        // If it contains a hash and points to the same page or just a hash
        if (href.includes('#')) {
            anchor.addEventListener('click', function (e) {
                const url = new URL(this.href);
                // Only prevent default if we're on the same page as the target
                if (url.pathname === window.location.pathname || href.startsWith('#')) {
                    const target = document.querySelector(url.hash);
                    if (target) {
                        e.preventDefault();
                        const offset = (nav ? nav.offsetHeight : 0) + 10;
                        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
                    }
                }
            });
        }
    });

    // === FAQ ACCORDION ===
    const faqQs = document.querySelectorAll('.faq-question');
    faqQs.forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            const icon = q.querySelector('.faq-icon');
            const isOpen = answer.style.display === 'block';

            // Close all
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            document.querySelectorAll('.faq-icon').forEach(i => i.textContent = '+');

            if (!isOpen) {
                answer.style.display = 'block';
                icon.textContent = '−';
            }
        });
    });

    // Hide all FAQ answers by default
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');

    // Reduce motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        reveals.forEach(el => el.classList.add('is-revealed'));
    }

    // === PAGE TRANSITION — smooth fade on navigation ===
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');

        // Only intercept real page transitions
        const isAnchor = href.startsWith('#');
        const isCrossPageAnchor = href.includes('.html#');
        const isExternalOrMail = href.startsWith('mailto:') || href.startsWith('http') || link.target === '_blank';

        if (href && !isAnchor && !isExternalOrMail) {
            link.addEventListener('click', function (e) {
                // If it's a cross-page anchor, let the browser handle it normally to jump to the section
                if (isCrossPageAnchor) return;

                e.preventDefault();
                const target = this.href;
                document.body.classList.add('page-leaving');
                setTimeout(() => {
                    window.location.href = target;
                }, 150);
            });
        }
    });

})();
