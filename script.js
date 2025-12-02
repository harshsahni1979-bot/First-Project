// Page loaded message
console.log("Car Website Loaded Successfully!");

document.addEventListener("DOMContentLoaded", () => {
  // Contact form submission
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Message Sent Successfully! We will contact you soon.");
      form.reset();
    });
  }
});
