// Mobile navbar toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav-open");
    });
  }
});

// Fake contact form message (for assignment only)
function sendFakeMessage() {
  alert("Thank you! This form is for demonstration only.");
}
