document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Add active class to current navigation item
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            
            // Clear the form
            this.reset();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Votre message a été envoyé avec succès!';
            successMessage.style.color = '#00f5d4';
            successMessage.style.marginTop = '20px';
            successMessage.style.padding = '10px';
            successMessage.style.borderRadius = '4px';
            successMessage.style.backgroundColor = 'rgba(0, 245, 212, 0.1)';
            
            this.appendChild(successMessage);
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.product-card, .service-card, .about-content, .custom-content, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Add fade-in class for CSS animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 1s ease forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .product-card, .service-card, .about-content, .custom-content, .contact-info, .contact-form {
            opacity: 0;
        }
        
        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }

        /* Hover effect for product cards */
        .product-image {
            transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-image {
            transform: scale(1.05);
        }

        /* Text reveal animation */
        @keyframes textReveal {
            from {
                clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            }
            to {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
        }

        .hero-content h2 {
            animation: textReveal 1s ease forwards 0.5s;
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }

        .hero-content p {
            animation: textReveal 1s ease forwards 1s;
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }

        .hero-content .btn {
            animation: textReveal 1s ease forwards 1.5s;
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }
    `;
    document.head.appendChild(style);
    
    // Call animateOnScroll on page load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Add decorative blobs
    const addDecorativeBlobs = () => {
        const sections = document.querySelectorAll('.about-section, .services-section, .custom-section');
        
        sections.forEach((section, index) => {
            const blob = document.createElement('div');
            blob.className = 'decorative-blob';
            
            // Alternate blob positions
            if (index % 2 === 0) {
                blob.style.top = '-150px';
                blob.style.right = '-150px';
            } else {
                blob.style.bottom = '-150px';
                blob.style.left = '-150px';
            }
            
            section.appendChild(blob);
        });
    };
    
    addDecorativeBlobs();
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY; // Using scrollY instead of deprecated pageYOffset
        const heroContent = document.querySelector('.hero-content');
        const decorativeBlob = document.querySelector('.hero .decorative-blob');
        
        if (heroContent && decorativeBlob) {
            heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            decorativeBlob.style.transform = `translate(${scrollPosition * 0.1}px, ${scrollPosition * 0.1}px)`;
        }
    });
    
    // Placeholder images for product cards and sections
    const setPlaceholderImages = () => {
        // Product images
        const productImages = document.querySelectorAll('.product-image');
        const productImageUrls = [
            'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmslMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFpbG9yaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGFyayUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        ];
        
        productImages.forEach((image, index) => {
            if (index < productImageUrls.length) {
                image.style.backgroundImage = `url('${productImageUrls[index]}')`;
                image.style.backgroundSize = 'cover';
                image.style.backgroundPosition = 'center';
            }
        });
        
        // About and custom section images
        const aboutImage = document.querySelector('.about-image .image-frame');
        const customImage = document.querySelector('.custom-image .image-frame');
        
        if (aboutImage) {
            aboutImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')";
            aboutImage.style.backgroundSize = 'cover';
            aboutImage.style.backgroundPosition = 'center';
        }
        
        if (customImage) {
            customImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGFpbG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
            customImage.style.backgroundSize = 'cover';
            customImage.style.backgroundPosition = 'center';
        }
    };
    
    setPlaceholderImages();

    // Typing effect for tagline
    const createTypingEffect = () => {
        const tagline = document.querySelector('.tagline');
        if (tagline) {
            const text = tagline.textContent;
            tagline.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    tagline.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    };
    
    createTypingEffect();
});
