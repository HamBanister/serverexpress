
// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        // Close other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.querySelector('.faq-answer').classList.remove('active');
                item.querySelector('i').style.transform = 'rotate(0deg)';
            }
        });
        
        // Toggle current FAQ item
        answer.classList.toggle('active');
        icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});

// Form submission
document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message (you can replace this with actual form submission logic)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    e.target.reset();
});

// Chat support button
document.querySelector('.chat-support').addEventListener('click', () => {
    alert('Live chat feature coming soon! Please contact us at support@serverexpress.com');
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animated');
        }
    });
}

// Add animation class to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .plan-card, .stat, .about-text, .contact-item');
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
});

window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// Typing effect for hero title
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 30);
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    updateCounter();
}

// Initialize counter animations when stats come into view
function initCounters() {
    const stats = document.querySelectorAll('.stat h3');
    
    stats.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const text = entry.target.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    
                    if (text.includes('50,000')) {
                        animateCounter(entry.target, 50000);
                    } else if (text.includes('99.9')) {
                        entry.target.textContent = '99.9%';
                    } else if (text.includes('24')) {
                        entry.target.textContent = '24/7';
                    } else if (text.includes('13')) {
                        animateCounter(entry.target, 13);
                        setTimeout(() => {
                            entry.target.textContent = '13 Years';
                        }, 2000);
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
}

// Initialize counters on page load
document.addEventListener('DOMContentLoaded', initCounters);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effects for plan cards
document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        if (card.classList.contains('featured')) {
            card.style.transform = 'translateY(-5px) scale(1.05)';
        } else {
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
});
