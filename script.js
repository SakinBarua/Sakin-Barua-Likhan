document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Initialize AOS animation library
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Elements
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('back-to-top');
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const contactForm = document.getElementById('contact-form');
    
    // Typed.js for animated text in hero section
    const options = {
        strings: ['Web Developer', 'Project Creator', 'Innovator'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: ''
    };
    
    const typed = new Typed('#typed-text', options);
    
    // Initialize skill progress bars animation
    const skillProgress = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        root: null,
        threshold: 0.5
    };
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                progress.style.width = progress.parentElement.previousElementSibling.querySelector('.skill-percentage').textContent;
            }
        });
    }, observerOptions);
    
    skillProgress.forEach(progress => {
        // Initially set width to 0
        progress.style.width = '0%';
        skillObserver.observe(progress);
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
            
            // Scroll to target
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Transform hamburger to X
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'translateY(8px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }
    
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('show');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('show');
        }
        
        // Update active nav link based on scroll position
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Back to top button
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Dark/Light theme toggle
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        // Update theme icon
        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        
        // Save theme preference to localStorage
        const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Form validation
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Name validation
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Please enter your name';
                isValid = false;
            } else if (nameInput.value.trim().length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Email validation
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Please enter your email';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Message validation
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Please enter your message';
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'Message must be at least 10 characters';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            // If form is valid, submit
            if (isValid) {
                // In a real application, this would send the form data to a server
                // For now, we'll just show an alert
                alert('Message sent successfully! (This is a demo)');
                contactForm.reset();
            }
        });
    }
    
    // 3D elements interaction
    const cube = document.querySelector('.cube');
    if (cube) {
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            
            cube.style.transform = `rotateY(${x * 30}deg) rotateX(${y * -30}deg)`;
        });
    }
    
    // Initialize all project images with a loading animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const img = card.querySelector('.project-img');
        if (img) {
            img.style.opacity = '0';
            setTimeout(() => {
                img.style.transition = 'opacity 0.5s ease';
                img.style.opacity = '1';
            }, 300 + (index * 200));
        }
    });
    
    // Initialize project technologies counters
    const projectTech = document.querySelectorAll('.project-tech');
    projectTech.forEach(tech => {
        const spans = tech.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.opacity = '0';
            setTimeout(() => {
                span.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, 500 + (index * 100));
        });
    });
});