document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Proszę wypełnić wszystkie pola formularza.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Proszę podać prawidłowy adres email.');
                return;
            }
            
            // In a real implementation, you would send the form data to a server
            // For now, we'll just show a success message
            alert('Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.');
            contactForm.reset();
        });
    }
    
    // Background image rotation
    const backgroundImages = [
        'pliki_grafik/tlo.jpg',
        'moje_produkcie/plan_filmowy3.jpg',
        'moje_role/plan_filmowy4.jpeg',
        'zdjecia_moje/kamera1.jpg'
    ];
    
    let currentImageIndex = 0;
    
    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    }
    
    // Change background image every 30 seconds
    setInterval(changeBackgroundImage, 30000);
});
