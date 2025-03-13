// generator.js

// Function to generate a single link
function generateLink() {
    // Get the guest's name from the input field
    const guestName = document.getElementById('singleGuestName').value.trim();
  
    // Check if the name is provided
    if (guestName === "") {
      alert("Please enter a guest name.");
      return;
    }
  
    // Encode the name for use in the URL
    const encodedName = encodeURIComponent(guestName);
  
    // Base URL of your wedding invitation website
    const baseUrl = "https://leng2112.github.io/leabnhawedding/name=";
  
    // Generate the personalized link
    const invitationLink = baseUrl + encodedName;
  
    // Display the link on the page
    const linkContainer = document.getElementById('linkContainer');
    linkContainer.innerHTML = `<p><strong>${guestName}:</strong> <a href="${invitationLink}" target="_blank">${invitationLink}</a></p>`;
  }
  
  // Function to generate multiple links
  function generateLinks() {
    // Get the list of guest names from the textarea
    const guestNames = document.getElementById('multipleGuestNames').value.split('\n').map(name => name.trim());
  
    // Filter out empty lines
    const validNames = guestNames.filter(name => name !== "");
  
    if (validNames.length === 0) {
      alert("Please enter at least one guest name.");
      return;
    }
  
    // Base URL of your wedding invitation website
    const baseUrl = "https://leng2112.github.io/leabnhawedding/name=";
  
    // Generate links for each guest
    const linksHtml = validNames.map(name => {
      const encodedName = encodeURIComponent(name);
      const invitationLink = baseUrl + encodedName;
      return `<p><strong>${name}:</strong> <a href="${invitationLink}" target="_blank">${invitationLink}</a></p>`;
    }).join("");
  
    // Display the links on the page
    const linkContainer = document.getElementById('linkContainer');
    linkContainer.innerHTML = linksHtml;
  }