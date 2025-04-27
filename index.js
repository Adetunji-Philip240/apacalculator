
//Loader BEGIN

// Function to simulate loading
function hideLoader() {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".content");
  const loaderbody = document.querySelector(".loaderbody");
  loader.style.display = "none"; // Hide loader
  loaderbody.style.display = "none"; // Hide loader body
  content.style.display = "block"; // Show content
}

// Simulate a loading time (e.g., 2 seconds)
window.onload = function () {
  setTimeout(hideLoader, 1000); // Adjust time as needed
};
//Loader END
