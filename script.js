// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Get form values
    const name = document.querySelector('.contact-form input[type="text"]').value;
    const email = document.querySelector('.contact-form input[type="email"]').value;
    const message = document.querySelector('.contact-form textarea').value;

    // 2. Construct the data to send
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // 3. Send the data to the server using Fetch API
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Thank you for your message! I will respond shortly.');
            this.reset(); // Reset the form
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.95)';
    }
});