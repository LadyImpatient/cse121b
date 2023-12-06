const apiUrl = 'https://animals-endangered-environmentalism.p.rapidapi.com/';
const apiKey = 'ea42a23086mshfbce1a50f07b0bbp186f2bjsn732b350a0a4c';

document.getElementById('randomizeButton').addEventListener('click', fetchEndangeredSpecies);

function fetchEndangeredSpecies() {
  // Fetch data from the API
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ea42a23086mshfbce1a50f07b0bbp186f2bjsn732b350a0a4c',
    },
  })
    .then(response => response.json())
    .then(data => displayRandomSpecies(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayRandomSpecies(speciesData) {
  const randomSpecies = getRandomItem(speciesData);

  // Create a species card
  const card = document.createElement('div');
  card.className = 'species-card';
  card.innerHTML = `
    <h2>${randomSpecies.scientificName}</h2>
    <p>Common Name: ${randomSpecies.commonName}</p>
    <p>Population Trend: ${randomSpecies.populationTrend}</p>
  `;

  // Append the card to the species list
  const speciesListElement = document.getElementById('speciesList');
  speciesListElement.innerHTML = '';
  speciesListElement.appendChild(card);
}

function getRandomItem(array) {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * array.length);
  // Return the item at the random index
  return array[randomIndex];
}
