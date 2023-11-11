/* W02-Task - Profile Home Page */

/* Step 2 - Variables */
const fullName = 'Alicia Unga-Dinh';
const currentYear = new Date().getFullYear(); 
const profilePicture = 'images/IMG_3700.JPG'; 

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`); 

/* Step 5 - Array */
const favoriteFoods = ['Albondigas', 'Ice cream', 'Sushi', 'Spam fried rice'];

foodElement.innerHTML = favoriteFoods.join('<br>'); 

const newFavoriteFood = 'Mochi butter cake';
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${newFavoriteFood}`;

favoriteFoods.shift();
foodElement.innerHTML = favoriteFoods.join('<br>');

favoriteFoods.pop();
foodElement.innerHTML = favoriteFoods.join('<br>');
//test