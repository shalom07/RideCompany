document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // You can connect this to Google Forms later if you want
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "block";
  }, 500);
});
