// Profile Object
let myProfile = {
    name: "Alicia Unga-Dinh",
    photo: "images/IMG_3700.JPG",
    favoriteFoods: [
      'Albondigas',
      'Ice Cream',
      'Bo Kho',
      'Peanut Butter',
      'Banana Pudding Pie'
    ],
    hobbies: [
      'Reading',
      'Coding',
      'Gaming',
      'Long Walks on the Beach'
    ],
    placesLived: []
  };
  
  // Add items to placesLived array
  myProfile.placesLived.push(
    { place: "Laie, Hawai'i", length: '4 years' },
    { place: 'Bakersfield, California', length: '3 months' },
    // Add additional places as needed
    { place: 'Kansas City, Missouri', length: 'A lot of years' }
  );
  
  // DOM Manipulation - Output
  
  // Name
  document.querySelector('#name').textContent = myProfile.name;
  
  // Photo
  document.querySelector('#photo').src = myProfile.photo;
  document.querySelector('#photo').alt = myProfile.name;
  
  // Favorite Foods
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  // Hobbies
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  // Places Lived
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  