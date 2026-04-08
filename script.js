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
    initLanguageSwitcher();
    initScrollAnimations();
    initContactForm();
    initSkillsAnimations();
    initProjectsFilter();
    initScrollToTop();
    initTypingAnimation();
    initParallaxEffects();
});

// --- i18n (FR default + EN dictionary) ---
const I18N_EN = {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Common
    'common.viewProject': 'View project',
    'common.learnMore': 'Learn more',
    'common.seeProjects': 'See my projects',
    'common.downloadCv': 'Download CV',
    'common.startProject': 'Start a project',
    'common.seeAllProjects': 'See all projects',
    'common.contactMe': 'Contact me',
    'common.sendMessage': 'Send a message',
    'common.startNow': 'Get started',
    'common.aboutProject': 'About the project',
    'common.features': 'Features',
    'common.technologies': 'Technologies',

    // Footer
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    // Index (Home)
    'home.subtitle': 'Full-Stack Developer / Project Manager',
    'home.heroDescription': "Like an astronaut, I turn your ideas into rockets ready to explore the universe of the web.",
    'home.whoAmI': 'Who am I?',
    'home.quickAboutP1': 'Engineer by training with a passion for web development and quality assurance. I combine technical expertise and creativity to build innovative, robust web solutions.',
    'home.quickAboutP2': 'Specialized in project management and modern web technologies, I ensure every project meets the highest standards of quality and user experience.',
    'home.experienceYears': "Years of experience",
    'home.projectsCompleted': 'Projects delivered',
    'home.satisfaction': 'Client satisfaction',
    'home.featuredProjects': 'Featured projects',
    'home.spacemanDesc': 'Modern web application with an intuitive user interface',
    'home.conciergerieDesc': 'Service platform with an advanced management system',
    'home.brebisDesc': 'Website promoting local heritage and traditions',
    'home.readyToLaunch': 'Ready to launch together?',
    'home.ctaText': "Let’s turn your ideas into digital reality. Contact me to discuss your project.",

    // Home footer intro
    'home.footerRole': 'Project manager & Web developer',
    'home.footerMission': 'Turning ideas into innovative web solutions',

    // About page
    'about.title': 'About me',
    'about.subtitle': 'Discover my background and my passion for web development',
    'about.storyTitle': 'My story',
    'about.timelineTitle': 'My journey',
    'about.valuesTitle': 'My values',
    'about.beyondCodeTitle': 'Beyond code',
    'about.ctaTitle': 'Ready for the adventure?',
    'about.ctaText': 'Let’s discover together how to turn your ideas into digital reality.',
    'about.bioP1': 'With an engineering background and experience in a demanding industrial environment, I developed a growing passion for web development and software quality—approaching every project with the rigor of a project manager and the curiosity of an astronaut.',
    'about.bioP2': 'My experience in technical project management gave me a global, structured vision and a strong ability to collaborate with multidisciplinary design teams. This transition to web development now lets me bridge industrial constraints, user needs and effective technical solutions.',
    'about.bioP3': 'By specializing in modern web technologies, I leverage my industrial foundation and organizational skills to design reliable, consistent, user‑experience‑oriented interfaces. Each project is a new transformation stage where coordination, anticipation and innovation are essential to reach the goal.',
    'about.bioP4': 'My quality- and QA-driven approach follows the industry’s high standards: performance, reliability and security are at the heart of every build. Whether it’s an industrial product or a web application, the expectation is the same: deliver impeccable work.',
    'about.highlightInnovationTitle': 'Innovation',
    'about.highlightInnovationText': 'Always looking for the latest technologies to propel your projects',
    'about.highlightPrecisionTitle': 'Precision',
    'about.highlightPrecisionText': 'A meticulous approach inherited from my engineering training',
    'about.highlightExcellenceTitle': 'Excellence',
    'about.highlightExcellenceText': 'Total commitment to quality and client satisfaction',
    'about.tl1Title': 'Freelance Web Developer',
    'about.tl1Text': 'Launch of my web development activity, with a focus on building showcase websites and modern web applications.',
    'about.tl2Title': 'Project Manager — Safran Aerosystems',
    'about.tl2Text': 'Equipment definition updates for international clients and internal PLM data processing tools.',
    'about.tl3Text': 'Project manager for bumper development (Porsche / Land Rover). Built strong project expertise and led design teams.',
    'about.tl4Title': 'Web Development Training',
    'about.tl4Text': 'Deep dive into modern web technologies: HTML5, CSS3, JavaScript, Python and related frameworks.',
    'about.tl5Title': 'Engineering Degree',
    'about.tl5Text': 'Graduated as an engineer—solid foundations for my methodical approach to development.',
    'about.tl6Title': 'First steps into code',
    'about.tl6Text': 'Discovered programming and immediately fell in love with web development. The space adventure begins!',
    'about.value1Title': 'Attention to detail',
    'about.value1Text': 'Every pixel matters; every line of code counts. Perfection lives in the details.',
    'about.value2Title': 'Collaboration',
    'about.value2Text': 'The best projects are born from collaboration. I listen, I understand, I propose.',
    'about.value3Title': 'Continuous learning',
    'about.value3Text': 'The web evolves constantly. I keep learning to stay at the cutting edge.',
    'about.value4Title': 'Performance',
    'about.value4Text': 'A fast website is a website that converts. Optimization is always a priority.',
    'about.personalP1': 'When I’m not deep in code, you’ll probably find me looking up at the starry sky or pushing my limits on a sports field. One invites me to dream bigger; the other to challenge myself every day.',
    'about.personalP2': 'Passionate about astronomy and sports, I see each web project as a careful exploration—a trajectory to define and a precise landing. Sports teach me rigor, endurance and a taste for challenge, qualities I bring into my work.',
    'about.personalP3': 'This passion for exploration and discovery fuels my creativity and inspires each of my professional projects.',

    // Skills page
    'skills.title': 'My skills',
    'skills.subtitle': 'A complete tech stack to propel your projects to the stars',
    'skills.technicalTitle': 'Technical skills',
    'skills.showcaseTitle': 'Showcase website',
    'skills.showcaseDesc': 'Build modern showcase sites to present an activity, inspire trust and convert with clear navigation.',
    'skills.ecommerceTitle': 'E-commerce website',
    'skills.ecommerceDesc': 'Set up conversion-oriented online stores: catalog, product pages, smooth checkout and a polished mobile experience.',
    'skills.webappTitle': 'Web application',
    'skills.webappDesc': 'Develop interactive web apps: dynamic interfaces, API integration and business logic for useful daily tools.',
    'skills.designTitle': 'Graphic design',
    'skills.designDesc': 'Create visual assets to strengthen identity: mockups, banners, web visuals and overall graphic consistency.',
    'skills.pmTitle': 'Project Manager / Product Owner',
    'skills.pmExpTitle': 'Project experience (automotive & aerospace)',
    'skills.pmExpText': 'I have 3 years of project management experience in the automotive and aerospace industries—two environments with very different ways of working. I quickly adapted to constraints, processes and rhythms specific to each sector, while staying focused on objectives, quality and deadlines.',
    'skills.pmBullet1': 'Project leadership and cross-functional coordination',
    'skills.pmBullet2': 'Requirements gathering, prioritization and action tracking',
    'skills.pmBullet3': 'Facilitation of rituals (follow-ups, progress meetings)',
    'skills.pmBullet4': 'Risk management, trade-offs and reporting',
    'skills.pmBullet5': 'Results-driven mindset: quality, cost, delivery',
    'skills.pmBullet6': 'Adaptation to each organization’s methods and tools',
    'skills.toolsPractices': 'Tools & practices',
    'skills.toolsTech': 'Tools & Technologies',
    'skills.webDev': 'Web development',
    'skills.pm': 'Project management',
    'skills.other': 'Other',
    'skills.languagesTitle': 'Language skills',
    'skills.french': 'French',
    'skills.native': 'Native language',
    'skills.english': 'English',
    'skills.fluentC1': 'Fluent (C1)',
    'skills.englishDesc': 'Able to work in international environments, technical writing and professional communication.',
    'skills.softTitle': 'Transferable skills',
    'skills.problemSolving': 'Problem solving',
    'skills.problemSolvingDesc': 'Analytical and methodical approach to identify and solve technical challenges',
    'skills.teamwork': 'Teamwork',
    'skills.teamworkDesc': 'Effective collaboration and clear communication with multidisciplinary teams',
    'skills.timeManagement': 'Time management',
    'skills.timeManagementDesc': 'Strong organization and respect for deadlines in an agile environment',
    'skills.adaptability': 'Adaptability',
    'skills.adaptabilityDesc': 'Ability to quickly adapt to new technologies and methodologies',
    'skills.creativity': 'Creativity',
    'skills.creativityDesc': 'Innovation in technical solutions and a creative approach to projects',
    'skills.continuousLearning': 'Continuous learning',
    'skills.continuousLearningDesc': 'Ongoing tech watch and training on the latest web trends',
    'skills.skillsCtaTitle': 'Ready to put these skills to work for your project?',
    'skills.skillsCtaText': 'Let’s discuss how my expertise can help propel your vision to success.',
    'skills.seeWork': 'See my work',

    // Projects page
    'projects.title': 'My web projects',
    'projects.subtitle': 'Explore my creative universe: from websites to apps, each project is a new space adventure',
    'projects.category.webapp': 'Web application',
    'projects.category.website': 'Website',
    'projects.category.portfolio': 'Portfolio',
    'projects.category.app': 'Application',
    'projects.category.ecommerce': 'E-commerce',
    'projects.spacemanText': 'Modern web application with an intuitive user interface and immersive space animations.',
    'projects.conciergerieText': 'Concierge service platform with an advanced management system and an admin interface.',
    'projects.robbieText': 'Photographer portfolio site with an interactive gallery and advanced filters.',
    'projects.brebisText': 'Creative website with a modern design and an optimized user experience to drive engagement.',
    'projects.transitioText': 'Transition app with smooth animations and a responsive multi-platform interface.',
    'projects.auvalText': 'E-commerce site for a florist: product catalog, highlighted creations and an optimized checkout flow.',
    'projects.ctaTitle': 'Ready to create something extraordinary?',
    'projects.ctaText': 'Each project is a new mission. Let’s embark together on your next digital adventure.',
    'projects.ctaSkills': 'See my skills',

    // Contact page
    'contact.title': 'Get in touch',
    'contact.subtitle': 'Ready to launch together? Let’s talk about your project and turn your ideas into digital reality',
    'contact.formTitle': 'Send me a message',
    'contact.formIntro': "Describe your project and I’ll get back to you as soon as possible.",
    'contact.fullName': 'Full name *',
    'contact.email': 'Email address *',
    'contact.subject': 'Subject *',
    'contact.message': 'Message *',
    'contact.send': 'Send',
    'contact.subjectPlaceholder': 'Select a topic',
    'contact.subject.showcase': 'Showcase website',
    'contact.subject.webapp': 'Web application',
    'contact.subject.ecommerce': 'E-commerce',
    'contact.subject.qa': 'QA & Testing',
    'contact.subject.maintenance': 'Maintenance',
    'contact.subject.other': 'Other',
    'contact.messagePlaceholder': 'Describe your project, your needs, your approximate budget...',
    'contact.privacy': 'I agree that my data will be used to contact me regarding my request *',
    'contact.sending': 'Sending...',
    'contact.successTitle': 'Message sent successfully!',
    'contact.successText': 'Thank you for your message. I will get back to you as soon as possible.',
    'contact.contactInfo': 'Contact information',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.locationText': 'France, available remotely',
    'contact.availability': 'Availability',
    'contact.availabilityText': 'Mon–Fri: 9am–6pm\nReply within 24h',
    'contact.socialTitle': 'Social networks',
    'contact.socialLinkedin': 'Professional profile',
    'contact.socialGithub': 'My code projects',
    'contact.socialCv': 'Download my resume',
    'contact.faqTitle': 'Frequently asked questions',
    'contact.faq1Q': 'What types of projects do you build?',
    'contact.faq1A': 'I build showcase websites, web applications, e-commerce platforms, and I also provide QA testing services. Every project is tailored to the client’s needs.',
    'contact.faq2Q': 'What is your working process?',
    'contact.faq2A': 'I start by analyzing your needs, then I propose the right technical solution. Development is iterative, with regular check-ins to validate progress.',
    'contact.faq3Q': 'How long does a project take?',
    'contact.faq3A': 'It depends on complexity: 2–4 weeks for a showcase website, 1–3 months for a complete web application. I always provide a detailed timeline upfront.',
    'contact.faq4Q': 'Do you offer maintenance?',
    'contact.faq4A': 'Yes. I offer maintenance contracts to ensure security, updates, and long-term reliability of your website.',
    'contact.faq5Q': 'Do you work remotely?',
    'contact.faq5A': 'Absolutely. I mostly work remotely, which allows me to support clients across France and internationally.',
    'contact.faq6Q': 'Could I build my website myself with Wix?',
    'contact.faq6A': 'You could, but Wix sites are often limited in customization, performance, and SEO. A developer ensures a unique, optimized and scalable site tailored to your exact needs.',
    'contact.ctaTitle': 'Ready to launch?',
    'contact.ctaText': 'Your project deserves special attention. Let’s discuss it together!',
    'contact.ctaEmail': 'Send an email',
    'contact.ctaCall': 'Call now',
};

function getCurrentLang() {
    const stored = localStorage.getItem('site_lang');
    return stored === 'en' ? 'en' : 'fr';
}

function applyI18n(lang) {
    // Set document lang attribute
    document.documentElement.setAttribute('lang', lang);

    const nodes = document.querySelectorAll('[data-i18n], [data-i18n-attr]');
    nodes.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const attr = el.getAttribute('data-i18n-attr'); // e.g. "content", "placeholder"

        // Store FR original once
        if (attr) {
            const current = el.getAttribute(attr) ?? '';
            if (!el.dataset.i18nFr) el.dataset.i18nFr = current;
        } else {
            const current = el.textContent ?? '';
            if (!el.dataset.i18nFr) el.dataset.i18nFr = current.trimEnd();
        }

        if (lang === 'fr') {
            if (attr) el.setAttribute(attr, el.dataset.i18nFr);
            else el.textContent = el.dataset.i18nFr;
            return;
        }

        if (!key) return;
        const enValue = I18N_EN[key];
        if (!enValue) return; // if missing, keep current

        if (attr) el.setAttribute(attr, enValue);
        else el.textContent = enValue;
    });
}

// Language Switcher (UI + persistence only; translations come later)
function initLanguageSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    if (!switcher) return;

    const toggle = switcher.querySelector('.lang-toggle');
    const menu = switcher.querySelector('.lang-menu');
    const options = Array.from(switcher.querySelectorAll('.lang-option'));
    const codeEl = switcher.querySelector('.lang-code');

    if (!toggle || !menu || !codeEl || options.length === 0) return;

    function setOpen(isOpen) {
        switcher.classList.toggle('is-open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    function close() {
        setOpen(false);
    }

    function open() {
        setOpen(true);
    }

    function applySelectedUI(lang) {
        // Update toggle label
        codeEl.textContent = lang.toUpperCase();

        // Update selected state in menu
        options.forEach(btn => {
            const isSelected = btn.getAttribute('data-lang') === lang;
            btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        });
    }

    // Initialize from storage
    const initialLang = getCurrentLang();
    applySelectedUI(initialLang);
    applyI18n(initialLang);

    // Toggle open/close
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const isOpen = switcher.classList.contains('is-open');
        setOpen(!isOpen);
    });

    // Handle option click
    options.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang') === 'en' ? 'en' : 'fr';
            localStorage.setItem('site_lang', lang);
            applySelectedUI(lang);
            applyI18n(lang);
            close();
        });
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!switcher.classList.contains('is-open')) return;
        if (!switcher.contains(e.target)) close();
    });

    // Close on escape
    document.addEventListener('keydown', function(e) {
        if (e.key !== 'Escape') return;
        if (switcher.classList.contains('is-open')) close();
    });
}

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
