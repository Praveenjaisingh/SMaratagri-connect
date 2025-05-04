document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("forgot-form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const emailInput = document.getElementById("email");
        const feedback = document.getElementById("feedback");
        const email = emailInput.value.trim();
  
        if (!email) {
          feedback.textContent = "Please enter your email.";
          feedback.style.color = "red";
          return;
        }
  
        fetch("forgot-password.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `email=${encodeURIComponent(email)}`
        })
          .then((res) => res.text())
          .then((response) => {
            if (response === "success") {
              feedback.textContent = "A password reset link has been sent to your email.";
              feedback.style.color = "green";
              form.reset();
            } else if (response === "not_found") {
              feedback.textContent = "Email not found.";
              feedback.style.color = "red";
            } else if (response === "invalid_email") {
              feedback.textContent = "Please enter a valid email address.";
              feedback.style.color = "red";
            } else {
              feedback.textContent = "An error occurred. Please try again.";
              feedback.style.color = "red";
            }
          })
          .catch(() => {
            feedback.textContent = "Something went wrong. Please try later.";
            feedback.style.color = "red";
          });
      });
    }
  });
  