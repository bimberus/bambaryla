document.addEventListener('DOMContentLoaded', function() {
    // Gallery tab switching
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const galleries = document.querySelectorAll('.gallery');
    
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            galleryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all galleries
            galleries.forEach(gallery => gallery.classList.remove('active'));
            
            // Show the selected gallery
            const galleryId = `gallery-${this.dataset.gallery}`;
            document.getElementById(galleryId).classList.add('active');
        });
    });
    
    // Lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            
            if (img) {
                lightboxImg.src = img.src;
                lightboxCaption.textContent = img.alt;
                lightbox.style.display = 'block';
                
                // Prevent scrolling when lightbox is open
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close lightbox when clicking the close button
    if (closeLightbox) {
        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
            
            // Re-enable scrolling
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                
                // Re-enable scrolling
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            
            // Re-enable scrolling
            document.body.style.overflow = 'auto';
        }
    });
});
