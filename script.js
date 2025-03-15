  // JavaScript Logic
  const firstPage = document.getElementById('first-page');
  const popupPage = document.getElementById('popup-page');
  const scrollablePage = document.getElementById('scrollable-page');

  document.getElementById('start-button').addEventListener('click', () => {
    // Hide the first page
    firstPage.style.display = 'none';

    // Show the pop-up page
    popupPage.style.display = 'flex';

    // After 3 seconds, hide the pop-up page and show the scrollable page
    setTimeout(() => {
      popupPage.style.display = 'none';
      scrollablePage.style.display = 'block';
    }, 1000); // 1000ms = 1 seconds
  });
  // Image Array
  const images = [
    "images/images1.png",
    "images/images2.png",
    "images/images3.png",
    "images/images4.png",
    "images/images5.png",
    "images/images6.png",
    "images/images7.png",
    "images/images8.png",
    "images/images9.png",
    "images/images10.png",
    "images/images11.png",
    "images/images12.png",

  ];

  let currentIndex = 0;

  // Open Lightbox
  function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    lightboxImage.src = images[currentIndex];
    lightbox.classList.remove("hidden");
  }

  // Close Lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("hidden");
  }

  // Change Image
  function changeImage(step) {
    currentIndex += step;

    // Ensure currentIndex stays within bounds
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = images[currentIndex];
  }
  // Footer Actions
  function openLocation() {
    window.open('https://shorturl.at/MIezu');
  }

  function addToCalendar() {
    window.open('https://calendar.app.google/Lhw5L4uFj4PU3icHA');
  }

  function viewImage() {
    // Implement image viewer functionality
  }
  function openTelegram() {
    window.open('https://t.me/sngleng');
  }

  function addToInstagram() {
    window.open('https://www.instagram.com/');
  }

  function viewTiktok() {
    window.open('https://www.tiktok.com/');
  }

  const audio = document.getElementById('backgroundAudio');

  // Attempt to play the audio automatically
  audio.play()
    .then(() => console.log("Audio is playing"))
    .catch((error) => console.warn("Autoplay was prevented. Error:", error));

  // Unmute the audio after user interaction
  document.addEventListener('click', () => {
    console.log("User clicked. Unmuting audio...");
    audio.muted = false;
    audio.play()
      .then(() => console.log("Audio unmuted and playing"))
      .catch((error) => console.error("Error unmuting audio:", error));
  });

  // script.js
  document.addEventListener('DOMContentLoaded', () => {
    // Get the query string from the URL
    const queryString = window.location.search;

    // Parse the query string into an object
    const urlParams = new URLSearchParams(queryString);

    // Extract the 'name' parameter
    const guestName = urlParams.get('name');

    // Find the placeholder element in the HTML
    const namePlaceholder = document.getElementById('guestName');

    // Replace the placeholder with the guest's name
    if (guestName && guestName.trim() !== "") {
      namePlaceholder.textContent = decodeURIComponent(guestName); // Decode URL-encoded characters
    } else {
      namePlaceholder.textContent = "Guest"; // Default if no name is provided
    }
  });