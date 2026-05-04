// Smooth scroll for in-page nav only (avoid hijacking external/booking links)
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation links on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Print Version (Book a Meet uses a normal <a href> in HTML — works without JS, no popup blocking)

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-pdf');
    const body = document.body;

    const enterPrintMode = () => {
        downloadBtn.style.display = 'none';
        body.classList.add('pdf-mode');
        window.print();
    };

    const exitPrintMode = () => {
        body.classList.remove('pdf-mode');
        downloadBtn.style.display = 'flex';
    };

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            enterPrintMode();
        });
    }

    // Ensure we always exit print mode after printing
    window.addEventListener('afterprint', exitPrintMode);

    if (window.matchMedia) {
        const mediaQueryList = window.matchMedia('print');
        const handler = (e) => {
            if (!e.matches) {
                exitPrintMode();
            }
        };

        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', handler);
        } else if (mediaQueryList.addListener) {
            mediaQueryList.addListener(handler);
        }
    }
});
