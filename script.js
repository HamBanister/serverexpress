
document.addEventListener('DOMContentLoaded', function() {
    // Show call confirmation popup when page loads
    setTimeout(function() {
        showCallConfirmation();
    }, 500);
    
    function showCallConfirmation() {
        const confirmed = confirm("Welcome to Roku Customer Service!\n\nWould you like to call our support team now?\n\n📞 1-877-402-2443\n\nClick OK to call or Cancel to browse the website.");
        
        if (confirmed) {
            window.location.href = 'tel:+18774022443';
        }
    }
    
    // Add click handlers for support buttons
    const supportButtons = document.querySelectorAll('.support-btn');
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    supportButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.parentElement.querySelector('h3').textContent;
            alert(`Redirecting to ${cardTitle} support...`);
        });
    });
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const optionTitle = this.parentElement.querySelector('h4').textContent;
            
            if (optionTitle.includes('Live Chat')) {
                alert('Opening live chat window...');
            } else if (optionTitle.includes('Email')) {
                alert('Opening email form...');
            } else if (optionTitle.includes('Help Center')) {
                alert('Redirecting to Help Center...');
            }
        });
    });
    
    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Toll-free number is now handled by tel: link in HTML
});
