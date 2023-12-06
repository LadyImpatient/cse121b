const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://animals-endangered-environmentalism.p.rapidapi.com/assessed/2021',
  params: {type: 'during'},
  headers: {
    'X-RapidAPI-Key': 'ea42a23086mshfbce1a50f07b0bbp186f2bjsn732b350a0a4c',
    'X-RapidAPI-Host': 'animals-endangered-environmentalism.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

document.getElementById('randomizeButton').addEventListener('click', () => {
    fetchEndangeredSpecies();
});

function fetchEndangeredSpecies() {
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'luisvilla-animals-endangered-environmentalism-v1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey,
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => displayRandomSpecies(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayRandomSpecies(speciesData) {
    if (speciesData && speciesData.length > 0) {
        const randomIndex = Math.floor(Math.random() * speciesData.length);
        const randomSpecies = speciesData[randomIndex];

        // Create a species card
        const card = document.createElement('div');
        card.className = 'species-card';
        card.innerHTML = `
            <h2>${randomSpecies.scientificName}</h2>
            <p>Common Name: ${randomSpecies.common_names.join(', ')}</p>
            <p>Population Trend: ${randomSpecies.population_trend}</p>
        `;

        // Append the card to the species list
        const speciesListElement = document.getElementById('speciesList');
        speciesListElement.innerHTML = '';
        speciesListElement.appendChild(card);
    } else {
        const speciesListElement = document.getElementById('speciesList');
        speciesListElement.innerHTML = '<p>No endangered species found</p>';
    }
}
