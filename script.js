// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // === Contact Form Alert ===
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    const name = document.getElementById("name").value;
    alert(`Thank you for your message, ${name}!`);
    form.reset(); // Clear form fields
  });

  // === Scroll-to-Top Button ===
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
