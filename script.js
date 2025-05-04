
document.addEventListener("DOMContentLoaded", function () {

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input, textarea");
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.border = "2px solid red";
          valid = false;
        } else {
          input.style.border = "1px solid #ccc";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Please fill out all fields correctly.");
      } else {
        alert("Your message has been sent successfully!");
      }
    });
  }

  
  const detailsTags = document.querySelectorAll("details");
  detailsTags.forEach(tag => {
    tag.addEventListener("toggle", () => {
      if (tag.open) {
        detailsTags.forEach(other => {
          if (other !== tag) other.open = false;
        });
      }
    });
  });


});
