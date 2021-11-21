'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// 226. Using the Geolocation api
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    const map = L.map('map').setView(coords, 13); 
    // console.log(map);

    // 227. Dispaly a map using leaflet library
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: 
        '&copy; <a href="https://www.openstreetmap.org copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // L.marker(coords).addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup();

    // 228. Displaying a map marker
    map.on('click', function(mapEvent) {
        //  console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;
        console.log(lat, lng);
        L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
            maxWitdh: 250,
            minWidth: 50,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
        }))
        .setPopupContent('Workout')
        .openPopup();
    }); 
    }, function(){
        alert('Could not get your position');

    })
};
// console.log(firstName);