const registerForm = document.querySelector('form.register-form ');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm_password').value.trim();
        
        const emailError = document.getElementById('email-error');
        const usernameError = document.getElementById('username-error');
        const passwordError = document.getElementById('password-error');
        const confirmPasswordError = document.getElementById('confirm-password-error');

        let valid = true;


        emailError.textContent = '';
        usernameError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

    
        if (email === '') {
            emailError.textContent = 'Email is required';
            valid = false;
        }

        
        if (username === '') {
            usernameError.textContent = 'Username is required';
            valid = false;
        }

        
        if (password === '') {
            passwordError.textContent = 'Password is required';
            valid = false;
        }

    
        if (confirmPassword === '') {
            confirmPasswordError.textContent = 'Please confirm your password';
            valid = false;
        }

        
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); 
        } else {
            const confirmRegister = confirm('Are you sure you want to register?');
            if (!confirmRegister) {
                event.preventDefault(); 
            }
            else {
                event.preventDefault(); 
                window.location.href = 'success.html'; 
              }
        }
    });
}