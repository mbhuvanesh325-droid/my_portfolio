// ============================================
// Form Validation JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const formMessage = document.getElementById('formMessage');

    // Validation functions
    function validateName(name) {
        if (name.trim().length < 2) {
            return 'Name must be at least 2 characters long';
        }
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            return 'Name can only contain letters and spaces';
        }
        return '';
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    }

    function validateSubject(subject) {
        if (subject.trim().length < 3) {
            return 'Subject must be at least 3 characters long';
        }
        return '';
    }

    function validateMessage(message) {
        if (message.trim().length < 10) {
            return 'Message must be at least 10 characters long';
        }
        return '';
    }

    // Real-time validation
    nameInput.addEventListener('blur', function() {
        const error = validateName(nameInput.value);
        showError(nameError, error);
        toggleInputError(nameInput, error);
    });

    emailInput.addEventListener('blur', function() {
        const error = validateEmail(emailInput.value);
        showError(emailError, error);
        toggleInputError(emailInput, error);
    });

    subjectInput.addEventListener('blur', function() {
        const error = validateSubject(subjectInput.value);
        showError(subjectError, error);
        toggleInputError(subjectInput, error);
    });

    messageInput.addEventListener('blur', function() {
        const error = validateMessage(messageInput.value);
        showError(messageError, error);
        toggleInputError(messageInput, error);
    });

    // Clear errors on input
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        input.addEventListener('input', function() {
            const errorElement = document.getElementById(input.id + 'Error');
            if (errorElement) {
                showError(errorElement, '');
                toggleInputError(input, '');
            }
        });
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        const nameErrorMsg = validateName(nameInput.value);
        const emailErrorMsg = validateEmail(emailInput.value);
        const subjectErrorMsg = validateSubject(subjectInput.value);
        const messageErrorMsg = validateMessage(messageInput.value);

        showError(nameError, nameErrorMsg);
        showError(emailError, emailErrorMsg);
        showError(subjectError, subjectErrorMsg);
        showError(messageError, messageErrorMsg);

        toggleInputError(nameInput, nameErrorMsg);
        toggleInputError(emailInput, emailErrorMsg);
        toggleInputError(subjectInput, subjectErrorMsg);
        toggleInputError(messageInput, messageErrorMsg);

        // If no errors, submit form
        if (!nameErrorMsg && !emailErrorMsg && !subjectErrorMsg && !messageErrorMsg) {
            submitForm();
        }
    });

    function showError(errorElement, message) {
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = message ? 'block' : 'none';
        }
    }

    function toggleInputError(input, error) {
        if (error) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '';
        }
    }

    function submitForm() {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = 'Sending...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 1500);
    }

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
});
