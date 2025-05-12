// Example 1: Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Select all the accordion questions
const accordionQuestions = document.querySelectorAll('.accordion__question');

accordionQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        // Find the corresponding answer
        const answer = question.nextElementSibling;
        
        // Toggle the display of the answer
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block'; // Show the answer
        } else {
            answer.style.display = 'none'; // Hide the answer
        }

        // Toggle the icon (optional)
        const icon = question.querySelector('i');
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});


// Example 3: Form validation for the feedback form (basic)
const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('submit', function (e) {
    const name = document.getElementById('exampleInputName1').value;
    const email = document.getElementById('exampleInputemail1').value;
    const message = document.getElementById('feedbackMessage').value;

    if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your feedback!');
    }
});

// Example 4: Live form submission - just for illustration purposes
// Submit feedback form via AJAX (you would need server-side processing to handle this properly)
const feedbackSubmitButton = document.querySelector('.btn-primary');
feedbackSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const feedbackData = {
        name: document.getElementById('exampleInputName1').value,
        email: document.getElementById('exampleInputemail1').value,
        phone: document.getElementById('exampleInputphoneNumber1').value,
        message: document.getElementById('feedbackMessage').value
    };

    // Simulate sending data via fetch (you would replace this with a real API call)
    fetch('your-server-endpoint', {
        method: 'POST',
        body: JSON.stringify(feedbackData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => alert('Feedback submitted successfully!'))
    .catch(error => alert('There was an error submitting your feedback.'));
});
