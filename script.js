// Main JavaScript for Rémi Sarro Portfolio Website

// Initialize EmailJS
(function() {
    // Initialize EmailJS with your public key only if EmailJS is loaded
    if (typeof emailjs !== 'undefined') {
        emailjs.init("XcOFld8QJMyBHJlLC");
    } else {
        console.warn('EmailJS not loaded - contact form will not work');
    }
})();

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initContactForm();
    initSkillsAnimations();
    initProjectsFilter();
    initScrollToTop();
    initTypingAnimation();
    initParallaxEffects();
});

// Navigation Functions
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('show-menu');
            navToggle.classList.toggle('show-menu');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show-menu');
            navToggle.classList.remove('show-menu');
        });
    });

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY >= 100) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        });
    }

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) navLink.classList.add('active');
            } else {
                if (navLink) navLink.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', scrollActive);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('stats-item')) {
                    animateCounter(entry.target);
                }
                
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animateElements = document.querySelectorAll(
        '.fade-in, .slide-up, .slide-left, .slide-right, .scale-in, .stats-item, .skill-item, .project-card, .service-card'
    );
    
    animateElements.forEach(el => observer.observe(el));
}

// Counter Animation
function animateCounter(element) {
    const counter = element.querySelector('.stats-number');
    if (!counter) return;
    
    const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
        } else {
            counter.textContent = Math.floor(current);
        }
    }, 16);
}

// Skill Bar Animation
function animateSkillBar(element) {
    const progressBar = element.querySelector('.skill-progress');
    const percentage = element.querySelector('.skill-percentage');
    
    if (progressBar && percentage) {
        const targetWidth = progressBar.getAttribute('data-width') || '0%';
        progressBar.style.width = targetWidth;
        
        // Animate percentage counter
        const targetPercent = parseInt(targetWidth);
        let currentPercent = 0;
        const increment = targetPercent / 60;
        
        const timer = setInterval(() => {
            currentPercent += increment;
            if (currentPercent >= targetPercent) {
                percentage.textContent = targetPercent + '%';
                clearInterval(timer);
            } else {
                percentage.textContent = Math.floor(currentPercent) + '%';
            }
        }, 16);
    }
}

// Contact Form Functions
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Clear previous errors
    clearFieldError(field);

    // Validation rules
    switch (fieldName) {
        case 'name':
            if (!fieldValue) {
                errorMessage = 'Le nom est requis';
                isValid = false;
            } else if (fieldValue.length < 2) {
                errorMessage = 'Le nom doit contenir au moins 2 caractères';
                isValid = false;
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!fieldValue) {
                errorMessage = 'L\'email est requis';
                isValid = false;
            } else if (!emailRegex.test(fieldValue)) {
                errorMessage = 'Veuillez entrer un email valide';
                isValid = false;
            }
            break;

        case 'subject':
            if (!fieldValue) {
                errorMessage = 'Le sujet est requis';
                isValid = false;
            }
            break;

        case 'message':
            if (!fieldValue) {
                errorMessage = 'Le message est requis';
                isValid = false;
            } else if (fieldValue.length < 10) {
                errorMessage = 'Le message doit contenir au moins 10 caractères';
                isValid = false;
            }
            break;
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    let errorElement = formGroup.querySelector('.form-error');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.classList.add('show');
    field.classList.add('error');
}

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');
    
    if (errorElement) {
        errorElement.classList.remove('show');
    }
    field.classList.remove('error');
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Validate all fields
    const formInputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isFormValid = true;
    
    formInputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    // Check privacy policy checkbox
    const privacyCheckbox = form.querySelector('input[name="privacy"]');
    if (privacyCheckbox && !privacyCheckbox.checked) {
        showFieldError(privacyCheckbox, 'Vous devez accepter la politique de confidentialité');
        isFormValid = false;
    }
    
    if (!isFormValid) {
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'block';
    
    try {
        // Get form data
        const templateParams = {
            from_name: form.querySelector('input[name="name"]').value,
            from_email: form.querySelector('input[name="email"]').value,
            subject: form.querySelector('select[name="subject"]').value || 'Demande de contact',
            message: form.querySelector('textarea[name="message"]').value,
            to_email: 'remi.sarro@gmail.com'
        };
        
        // Send email via EmailJS
        await emailjs.send('service_7pr0f5c', 'template_a2778nt', templateParams);
        
        // Show success message
        showFormSuccess();
        form.reset();
        
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        showFormError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'block';
        btnLoading.style.display = 'none';
    }
}

function simulateFormSubmission(formData) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            // Simulate success (90% of the time)
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject(new Error('Network error'));
            }
        }, 2000);
    });
}

function showFormSuccess() {
    const formWrapper = document.querySelector('.contact-form-wrapper');
    const successHTML = `
        <div class="form-success">
            <div class="success-icon">✓</div>
            <h3>Message envoyé avec succès !</h3>
            <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
        </div>
    `;
    
    formWrapper.innerHTML = successHTML;
    
    // Reset form after 5 seconds
    setTimeout(() => {
        location.reload();
    }, 5000);
}

function showFormError(message) {
    // Create or update error message
    let errorDiv = document.querySelector('.form-error-global');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'form-error-global';
        errorDiv.style.cssText = `
            background: #fee;
            color: #e74c3c;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border: 1px solid #e74c3c;
        `;
        document.querySelector('.contact-form').prepend(errorDiv);
    }
    
    errorDiv.textContent = message;
}

// Skills Animations
function initSkillsAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Projects Filter
function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Scroll to Top
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Typing Animation
function initTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-text');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        const speed = parseInt(element.getAttribute('data-speed')) || 100;
        
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Blinking cursor effect
                setInterval(() => {
                    element.style.borderRight = element.style.borderRight === 'none' 
                        ? '2px solid var(--primary-color)' 
                        : 'none';
                }, 500);
            }
        };
        
        // Start typing animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeWriter, 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Add escape key listener
        document.addEventListener('keydown', handleEscapeKey);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
        
        // Remove escape key listener
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        // Find the active modal and close it
        const activeModal = document.querySelector('.popup-overlay.active');
        if (activeModal) {
            const modalId = activeModal.id.replace('modal-', '');
            closeModal(modalId);
        }
    }
}

// Close modal when clicking on overlay
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlays = document.querySelectorAll('.popup-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                const modalId = overlay.id.replace('modal-', '');
                closeModal(modalId);
            }
        });
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Utility Functions
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

// Performance optimized scroll events
const optimizedScrollHandler = throttle(function() {
    // Handle scroll-dependent animations here
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
