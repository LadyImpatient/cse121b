function fetchAnimalInfo() {
    var animalInput = document.getElementById('animalInput');
    var animalName = animalInput.value.toLowerCase();

    var apiKey = 'Vrq/HDRTSy/hPZSyqvw9+w==GGNoDqNnlY6trCBc';

    // api request
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
    animalInfoContainer.innerHTML = '';

    // Check if the API returned an error
    if (animalInfo.message) {
        animalInfoContainer.innerHTML = `<p>${animalInfo.message}</p>`;
        return;
    }

    var firstAnimal = animalInfo[0];

    // find the information using array
    var locations = firstAnimal.locations ? firstAnimal.locations.join(', ') : 'N/A';

    var infoHTML = `
        <h2>${firstAnimal.name}</h2>
        <p><strong>Scientific Name:</strong> ${firstAnimal.taxonomy.scientific_name || 'N/A'}</p>
        <p><strong>Category:</strong> ${firstAnimal.characteristics.type || 'N/A'}</p>
        <p><strong>Family:</strong> ${firstAnimal.taxonomy.family || 'N/A'}</p>
        <p><strong>Order:</strong> ${firstAnimal.taxonomy.order || 'N/A'}</p>
        <p><strong>Locations:</strong> ${locations}</p>
        <p><strong>Main Prey:</strong> ${firstAnimal.characteristics.main_prey || 'N/A'}</p>
        <p><strong>Distinctive Feature:</strong> ${firstAnimal.characteristics.distinctive_feature || 'N/A'}</p>
        <p><strong>Temperament:</strong> ${firstAnimal.characteristics.temperament || 'N/A'}</p>
        <p><strong>Diet:</strong> ${firstAnimal.characteristics.diet || 'N/A'}</p>
        <p><strong>Average Litter Size:</strong> ${firstAnimal.characteristics.average_litter_size || 'N/A'}</p>
    `;

    animalInfoContainer.innerHTML = infoHTML;
}
