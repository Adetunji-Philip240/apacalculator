//Loader

document.addEventListener("DOMContentLoaded", () => {
  // Simulate an API request or any async operation
  setTimeout(() => {
    hideLoader();
    showContent();
  }, 3000); // Replace with your actual data loading logic and time

  function hideLoader() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  }

  function showContent() {
    const content = document.getElementById("content");
    content.style.display = "block";
  }
});

// Theme
const htmlElem = document.querySelector("html");
const themeButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("themeIcon");

initTheme();

function initTheme() {
  const currentTheme = localStorage.getItem("theme") ?? "dark";

  htmlElem.classList.add(currentTheme);

  // Set the icon based on the current theme
  themeIcon.textContent = currentTheme === "dark" ? "🌙" : "🌞";
}

function setTheme() {
  const currentTheme = localStorage.getItem("theme") ?? "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Replace the theme class
  htmlElem.classList.replace(currentTheme, newTheme);

  // Store the new theme in localStorage
  localStorage.setItem("theme", newTheme);

  // Update the icon
  themeIcon.textContent = newTheme === "dark" ? "🌙" : "🌞";
}

themeButton.addEventListener("click", setTheme);

// greeting visitors
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet =
    "Good Morning 🌞 Scholar! As sun rises, so too does the chance to expand your mind. May your passion for learning illuminate your path today.😊.";
else if (hrs >= 12 && hrs <= 17)
  greet =
    "Good Afternoon 🌞 Scholar! As the day unfolds, take a moment to reflect on the knowledge you've gained so far. 😉.";
else if (hrs >= 17 && hrs <= 24)
  greet =
    "Good Evening 🌙 Scholar! May this evening be a time of contemplation, allowing you to connect the threads of knowledge and uncover new perspectives. When you are done using our site, make sure you rest well, for tomorrow brings another opportunity to expand your mind and make a meaningful contribution to your field of study!";

document.getElementById("greetings").innerHTML = "<b>" + greet + "</b>";
