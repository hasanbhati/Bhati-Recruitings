// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // Add multilingual alert messages
    const alertMessages = {
        en: 'Thank you for your submission! We will review your application and get back to you soon.',
        hi: 'आपके आवेदन के लिए धन्यवाद! हम आपके आवेदन की समीक्षा करेंगे और जल्द ही आपसे संपर्क करेंगे।'
    };
    
    const currentLang = localStorage.getItem('preferred-language') || 'en';
    alert(alertMessages[currentLang]);
    this.reset();
});

// Navigation background change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('nav').style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        document.querySelector('nav').style.backgroundColor = '#fff';
    }
});

// Add file size validation
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('cv');
    const fileBtn = document.querySelector('.file-upload-btn');
    const fileName = document.querySelector('.file-name');

    // File button click handler
    fileBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // File change handler with size validation
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const maxSize = 5 * 1024 * 1024; // 5MB
        const lang = localStorage.getItem('preferred-language') || 'en';

        if (file && file.size > maxSize) {
            alert('File size should not exceed 5MB');
            this.value = ''; // Clear the file input
            fileName.textContent = translations[lang]['form_file_no_file'];
        } else if (file) {
            fileName.textContent = file.name;
        } else {
            fileName.textContent = translations[lang]['form_file_no_file'];
        }
    });
}); 