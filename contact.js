document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form form');
  
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const image = document.getElementById('image').files[0];
  
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let valid = true;
  
        if (name === '') {
          alert('Please enter your name.');
          valid = false;
        }
  
        if (!email.match(emailPattern)) {
          alert('Please enter a valid email address.');
          valid = false;
        }
  
        if (message.length < 10) {
          alert('Please enter a message with at least 10 characters.');
          valid = false;
        }
  
        if (!valid) {
          event.preventDefault();
          return;
        }
  
        const confirmSend = confirm('Do you want to send this message?');
        if (!confirmSend) {
          event.preventDefault();
          return;
        }
  
        
        if (image) {
          console.log('Attached image:', image.name);
        }
  
    
        alert('Message sent successfully (simulated).');
        window.location.href = 'thankyou.html'; 
      });
    }
  });
  