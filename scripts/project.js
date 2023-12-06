function fetchAnimalInfo() {
    var animalInput = document.getElementById('animalInput');
    var animalName = animalInput.value.toLowerCase();
  
    // Replace 'YOUR_API_KEY' with your actual API key
    var apiKey = 'Vrq/HDRTSy/hPZSyqvw9+w==GGNoDqNnlY6trCBc';
  
    // Make a request directly to the Animal API
    fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(animalInfo => {
        displayAnimalInfo(animalInfo);
      })
      .catch(error => {
        console.error('Error fetching animal information:', error);
        alert('Error fetching animal information. Please try again.');
      });
  }
  
  function displayAnimalInfo(animalInfo) {
    var animalInfoContainer = document.getElementById('animalInfoContainer');
    animalInfoContainer.innerHTML = ''; // Clear previous content
  
    // Check if the API returned an error
    if (animalInfo.message) {
      animalInfoContainer.innerHTML = `<p>${animalInfo.message}</p>`;
      return;
    }
  
    // Display the animal information
    var infoHTML = `
      <h2>${animalInfo.name}</h2>
      <p><strong>Scientific Name:</strong> ${animalInfo.scientific_name}</p>
      <p><strong>Category:</strong> ${animalInfo.category}</p>
      <p><strong>Family:</strong> ${animalInfo.family}</p>
      <p><strong>Order:</strong> ${animalInfo.order}</p>
      <p><strong>Image:</strong></p>
      <img src="${animalInfo.image}" alt="${animalInfo.name}">
    `;
  
    // Append the animal information to the container
    animalInfoContainer.innerHTML = infoHTML;
  }
  