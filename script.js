// Get references to the button, popup, and close button
const openPopupBtn = document.getElementById("openPopupBtn");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

// Open the popup when the button is clicked
openPopupBtn.addEventListener("click", () => {
  popup.style.display = "flex"; // Show the popup
});

// Close the popup when the close button is clicked
closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none"; // Hide the popup
});

// Close the popup when clicking outside the popup content
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none"; // Hide the popup
  }
});