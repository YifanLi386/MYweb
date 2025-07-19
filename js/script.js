const form = document.getElementById('contact-form');
const responseMsg = document.getElementById('form-response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  responseMsg.textContent = 'Message Sent! Thank you for contacting me.';
  form.reset();
});


document.addEventListener("DOMContentLoaded", () => {
    const toggleInput = document.getElementById('theme-toggle');
    if (toggleInput) {
        toggleInput.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode', toggleInput.checked);
        });
    }
});


window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("fade-out");
    setTimeout(() => loader.style.display = "none", 1000);
});


// Theme toggle logic with default dark mode and memory
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.getElementById("theme-toggle");

    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        toggle.checked = true;
    } else if (savedTheme === "light") {
        body.classList.remove("dark-mode");
        toggle.checked = false;
    } else {
        // Default: dark mode
        body.classList.add("dark-mode");
        toggle.checked = true;
    }

    // Toggle event
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});


// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
