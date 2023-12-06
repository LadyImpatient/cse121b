function fetchAnimalInfo() {
    var animalInput = document.getElementById('animalInput');
    var animalName = animalInput.value.toLowerCase();
  
    // Replace 'YOUR_API_KEY' with your actual API key
    var apiKey = 'Vrq/HDRTSy/hPZSyqvw9+w==GGNoDqNnlY6trCBc';
  
    // Make a request directly to the Animal API
    fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
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
  
    // Display the first animal's information from the response
    var firstAnimal = animalInfo[0];
  
    var infoHTML = `
      <h2>${firstAnimal.name}</h2>
      <p><strong>Scientific Name:</strong> ${firstAnimal.taxonomy.scientific_name || 'N/A'}</p>
      <p><strong>Category:</strong> ${firstAnimal.characteristics.type || 'N/A'}</p>
      <p><strong>Family:</strong> ${firstAnimal.taxonomy.family || 'N/A'}</p>
      <p><strong>Order:</strong> ${firstAnimal.taxonomy.order || 'N/A'}</p>
      <p><strong>Locations:</strong> ${firstAnimal.locations.join(', ') || 'N/A'}</p>
      <p><strong>Main Prey:</strong> ${firstAnimal.characteristics.main_prey || 'N/A'}</p>
      <p><strong>Distinctive Feature:</strong> ${firstAnimal.characteristics.distinctive_feature || 'N/A'}</p>
      <p><strong>Temperament:</strong> ${firstAnimal.characteristics.temperament || 'N/A'}</p>
      <p><strong>Diet:</strong> ${firstAnimal.characteristics.diet || 'N/A'}</p>
      <p><strong>Average Litter Size:</strong> ${firstAnimal.characteristics.average_litter_size || 'N/A'}</p>
      <p><strong>Image:</strong></p>
      <img src="${firstAnimal.characteristics.image || 'N/A'}" alt="${firstAnimal.name}">
    `;
  
    // Append the animal information to the container
    animalInfoContainer.innerHTML = infoHTML;
  }
  