// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// PDF Download Functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-pdf');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Hide the download button temporarily
            downloadBtn.style.display = 'none';
            
            // Get the element to convert (main content)
            const element = document.body;
            const filename = 'Serhii_Nevhasymov_CV.pdf';
            
            // Configure PDF options
            const opt = {
                margin: [10, 10, 10, 10],
                filename: filename,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    logging: false
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait' 
                }
            };
            
            // Generate and download PDF
            html2pdf().set(opt).from(element).save().then(function() {
                // Show the download button again
                downloadBtn.style.display = 'flex';
            }).catch(function(error) {
                console.error('PDF generation error:', error);
                downloadBtn.style.display = 'flex';
                alert('Error generating PDF. Please try again or use your browser\'s print function (Ctrl+P / Cmd+P) and save as PDF.');
            });
        });
    }
});
