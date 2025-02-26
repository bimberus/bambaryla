document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const adminPanel = document.getElementById('admin-panel');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Get stored password or use default
            const storedPassword = localStorage.getItem('admin_password') || 'admin123';
            
            // Simple authentication (in a real app, this would be server-side)
            if (username === 'admin' && password === storedPassword) {
                loginSection.style.display = 'none';
                adminPanel.style.display = 'block';
                
                // Store login state in session storage
                sessionStorage.setItem('loggedIn', 'true');
                
                // Load initial content
                loadMediaGallery('zdjecia_moje');
                loadContentEditor('bio');
            } else {
                alert('Nieprawidłowa nazwa użytkownika lub hasło. Spróbuj ponownie.');
            }
        });
    }
    
    // Check if user is already logged in
    if (sessionStorage.getItem('loggedIn') === 'true') {
        loginSection.style.display = 'none';
        adminPanel.style.display = 'block';
        
        // Load initial content
        loadMediaGallery('zdjecia_moje');
        loadContentEditor('bio');
    }
    
    // Admin tab switching
    const adminTabs = document.querySelectorAll('.admin-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    adminTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            adminTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show the selected tab content
            const tabId = `${this.dataset.tab}-tab`;
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Media category selection
    const mediaCategory = document.getElementById('media-category');
    
    if (mediaCategory) {
        mediaCategory.addEventListener('change', function() {
            loadMediaGallery(this.value);
        });
    }
    
    // Content section selection
    const contentSection = document.getElementById('content-section');
    
    if (contentSection) {
        contentSection.addEventListener('change', function() {
            loadContentEditor(this.value);
        });
    }
    
    // Save content button
    const saveContentBtn = document.getElementById('save-content');
    
    if (saveContentBtn) {
        saveContentBtn.addEventListener('click', function() {
            const section = document.getElementById('content-section').value;
            const content = document.getElementById('content-editor').value;
            
            // In a real app, this would save to a server
            alert(`Zmiany w sekcji "${section}" zostały zapisane.`);
            
            // Store in local storage for demo purposes
            localStorage.setItem(`content_${section}`, content);
        });
    }
    
    // File upload form
    const uploadForm = document.getElementById('upload-form');
    
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const category = document.getElementById('media-category').value;
            const fileType = document.getElementById('file-type').value;
            const fileInput = document.getElementById('file-upload');
            const description = document.getElementById('file-description').value;
            
            if (fileInput.files.length === 0) {
                alert('Proszę wybrać plik do przesłania.');
                return;
            }
            
            // In a real app, this would upload to a server
            alert(`${fileType === 'video' ? 'Film' : 'Zdjęcie'} zostało przesłane do kategorii "${category}".`);
            
            // Reset form
            uploadForm.reset();
            
            // Refresh gallery
            loadMediaGallery(category);
        });
    }
    
    // Password change form
    const passwordForm = document.getElementById('password-form');
    
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Default password is admin123 if not changed yet
            const storedPassword = localStorage.getItem('admin_password') || 'admin123';
            
            if (currentPassword !== storedPassword) {
                alert('Aktualne hasło jest nieprawidłowe.');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                alert('Nowe hasło i potwierdzenie hasła nie są zgodne.');
                return;
            }
            
            if (newPassword.length < 6) {
                alert('Nowe hasło musi mieć co najmniej 6 znaków.');
                return;
            }
            
            // Store new password in localStorage
            localStorage.setItem('admin_password', newPassword);
            
            alert('Hasło zostało zmienione pomyślnie.');
            
            // Reset form
            passwordForm.reset();
        });
    }
    
    // Message reply buttons
    const replyButtons = document.querySelectorAll('.reply-btn');
    
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const messageItem = this.closest('.message-item');
            const sender = messageItem.querySelector('.message-sender').textContent;
            const subject = messageItem.querySelector('.message-subject').textContent;
            
            alert(`Odpowiadasz do: ${sender}\nTemat: ${subject}\n\nW pełnej implementacji, tutaj pojawiłoby się okno do odpowiedzi.`);
        });
    });
    
    // Message delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const messageItem = this.closest('.message-item');
            
            if (confirm('Czy na pewno chcesz usunąć tę wiadomość?')) {
                messageItem.remove();
            }
        });
    });
    
    // Function to load media gallery based on category
    function loadMediaGallery(category) {
        const galleryContainer = document.getElementById('admin-gallery');
        
        if (!galleryContainer) return;
        
        // Clear current gallery
        galleryContainer.innerHTML = '';
        
        // In a real app, this would fetch from a server
        // For demo, we'll show placeholder items based on category
        
        // Get media items based on selected category
        let mediaItems = [];
        
        switch(category) {
            case 'zdjecia_moje':
                mediaItems = [
                    { type: 'image', path: '../zdjecia_moje/kamera1.jpg' }
                ];
                break;
            case 'filmy':
                mediaItems = [
                    { type: 'video', path: '#', title: 'Przykładowy film 1' },
                    { type: 'video', path: '#', title: 'Przykładowy film 2' }
                ];
                break;
            case 'moje_produkcie':
                mediaItems = [
                    { type: 'image', path: '../moje_produkcie/plan_filmowy3.jpg' }
                ];
                break;
            case 'moje_role':
                mediaItems = [
                    { type: 'image', path: '../moje_role/plan_filmowy4.jpeg' }
                ];
                break;
            case 'pliki_grafik':
                mediaItems = [
                    { type: 'image', path: '../pliki_grafik/kamera.png' },
                    { type: 'image', path: '../pliki_grafik/tlo.jpg' }
                ];
                break;
        }
        
        if (mediaItems.length === 0) {
            galleryContainer.innerHTML = `
                <div class="gallery-placeholder">
                    <p>Brak plików w tej kategorii</p>
                </div>
            `;
            return;
        }
        
        // Create gallery items
        mediaItems.forEach(item => {
            const fileName = item.path.split('/').pop();
            const galleryItem = document.createElement('div');
            galleryItem.className = 'admin-gallery-item';
            
            if (item.type === 'image') {
                galleryItem.innerHTML = `
                    <img src="${item.path}" alt="${fileName}">
                    <div class="item-actions">
                        <button class="edit-btn" title="Edytuj"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn" title="Usuń"><i class="fas fa-trash"></i></button>
                    </div>
                `;
            } else if (item.type === 'video') {
                galleryItem.innerHTML = `
                    <video controls>
                        <source src="${item.path}" type="video/mp4">
                        Twoja przeglądarka nie obsługuje odtwarzania wideo.
                    </video>
                    <div class="video-caption">${item.title}</div>
                    <div class="item-actions">
                        <button class="edit-btn" title="Edytuj"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn" title="Usuń"><i class="fas fa-trash"></i></button>
                    </div>
                `;
            }
            
            galleryContainer.appendChild(galleryItem);
            
            // Add event listeners to buttons
            const editBtn = galleryItem.querySelector('.edit-btn');
            const deleteBtn = galleryItem.querySelector('.delete-btn');
            
            editBtn.addEventListener('click', function() {
                const itemName = item.type === 'video' ? item.title : fileName;
                const newDescription = prompt('Edytuj opis pliku:', itemName);
                if (newDescription) {
                    alert(`Opis pliku "${itemName}" został zmieniony na "${newDescription}".`);
                    if (item.type === 'video' && galleryItem.querySelector('.video-caption')) {
                        galleryItem.querySelector('.video-caption').textContent = newDescription;
                    }
                }
            });
            
            deleteBtn.addEventListener('click', function() {
                const itemName = item.type === 'video' ? item.title : fileName;
                if (confirm(`Czy na pewno chcesz usunąć plik "${itemName}"?`)) {
                    galleryItem.remove();
                    
                    if (galleryContainer.children.length === 0) {
                        galleryContainer.innerHTML = `
                            <div class="gallery-placeholder">
                                <p>Brak plików w tej kategorii</p>
                            </div>
                        `;
                    }
                }
            });
        });
    }
    
    // Function to load content editor based on section
    function loadContentEditor(section) {
        const contentEditor = document.getElementById('content-editor');
        
        if (!contentEditor) return;
        
        // Check if we have saved content in local storage
        const savedContent = localStorage.getItem(`content_${section}`);
        
        if (savedContent) {
            contentEditor.value = savedContent;
            return;
        }
        
        // Default content based on section
        let defaultContent = '';
        
        switch(section) {
            case 'bio':
                defaultContent = `Legendarny operator filmowy, którego kariera rozpoczęła się przypadkowo, gdy jako dostawca pizzy wpadł na plan filmu "Matrix 4" (dosłownie wpadł, przewracając się na kable). Zamiast go wyrzucić, sestry Wachowski były tak rozbawione jego wejściem, że zaproponowały mu pracę jako operator kamery B.

Od tego czasu jego charakterystyczny styl filmowania ("Metoda Golędzinowskiego" - kręcenie wszystkiego pod kątem 15 stopni, bo jak twierdzi "życie nie jest proste") zrewolucjonizował polską kinematografię.`;
                break;
            case 'achievements':
                defaultContent = `- Nominacja do "Złotego Statywu" za najstabilniejsze ujęcia w trzęsącym się helikopterze
- Wynalazca "Anti-Lens Flare" technologii (w przeciwieństwie do J.J. Abramsa)
- Jedyny operator, który kręcił film do góry nogami przez cały dzień "bo tak było wygodniej"`;
                break;
            case 'productions':
                defaultContent = `Ogniem i Mieczem 2: Electric Boogaloo (2023)
Czterej Pancerni i Robot (2022)
Alternatywy 5 (2021)
Kevin sam w Biedronce (2020)`;
                break;
            case 'roles':
                defaultContent = `"Zdziwiony Technik #3" - Serial "Na Wspólnej"
"Mężczyzna z Kawą" - Film "Poranek w Warszawie"
"Operator w Opałach" - Film dokumentalny "Za Kulisami"`;
                break;
        }
        
        contentEditor.value = defaultContent;
    }
});
