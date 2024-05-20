// Function to handle smooth scrolling when clicking on navigation links
document.querySelectorAll('nav ul li a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Function to handle sending a message when clicking on the "Send me a message!" button
document.querySelector(".td-btn").addEventListener("click", function () {
  // Here you can add code to handle sending the message, like displaying a form or opening a modal
  alert("Functionality for sending a message will be implemented here!");
});
