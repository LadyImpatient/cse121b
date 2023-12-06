const apiUrl = 'https://animals-endangered-environmentalism.p.rapidapi.com/';
const apiKey = 'ea42a23086mshfbce1a50f07b0bbp186f2bjsn732b350a0a4c';

function fetchEndangeredSpecies() {
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => displayEndangeredSpecies(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayEndangeredSpecies(speciesData) {
  const endangeredSpeciesList = [];

  // Assuming the data structure is similar, adjust the code accordingly
  for (let i = 0; i < speciesData.length; i++) {
    const species = speciesData[i];

    // Assuming 'EN' is still used to indicate endangered category
    if (species.category === 'EN') {
      const formattedSpecies = {
        scientificName: species.scientificName,
        commonName: species.commonName,
        populationTrend: species.populationTrend,
      };
      endangeredSpeciesList.push(formattedSpecies);
    }
  }

  const speciesListElement = document.getElementById('speciesList');
  speciesListElement.innerHTML = ''; // Clear previous data

  if (endangeredSpeciesList.length === 0) {
    speciesListElement.innerHTML = '<p>No endangered species found</p>';
    return;
  }

  endangeredSpeciesList.forEach(species => {
    const card = `
      <div class="species-card">
        <h2>${species.scientificName}</h2>
        <p>Common Name: ${species.commonName}</p>
        <p>Population Trend: ${species.populationTrend}</p>
      </div>
    `;
    speciesListElement.innerHTML += card;
  });
}

// Call the fetchEndangeredSpecies function when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchEndangeredSpecies);
