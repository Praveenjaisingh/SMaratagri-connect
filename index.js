document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.querySelector('form.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const usernameError = document.getElementById('username-error');
            const passwordError = document.getElementById('password-error');
            
            let valid = true;

            
            usernameError.textContent = '';
            passwordError.textContent = '';

            
            if (username === '') {
                usernameError.textContent = 'Username is required';
                valid = false;
            }

            
            if (password === '') {
                passwordError.textContent = 'Password is required';
                valid = false;
            }

            if (!valid) {
                event.preventDefault(); 
            } else {
                const confirmLogin = confirm('Do you want to login now?');
                if (!confirmLogin) {
                    event.preventDefault(); 
                }
                else {
                    event.preventDefault(); 
                    window.location.href = 'home.html'; 
                  }
            }
        });
    }

    
});
