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
 let map, mapEvent;
/*if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    map = L.map('map').setView(coords, 13); 
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

    
    // Handling clicks on map
    map.on('click', function (mapE) {

        // 229. Rendering Workout input form

        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
        //  console.log(mapEvent);
        // const { lat, lng } = mapEvent.latlng;
        // console.log(lat, lng);
        // L.marker([lat, lng])
        //     .addTo(map)
        //     .bindPopup(
        //         L.popup({
        //             maxWitdh: 250,
        //             minWidth: 50,
        //             autoClose: false,
        //             closeOnClick: false,
        //             className: 'running-popup',
        //         })
        //     )
        // .setPopupContent('Workout')
        // .openPopup();


    }); 
    }, 
    function () {
        alert('Could not get your position');

    })
};*/


/*form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // clear input field
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    
    // Display marker
    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    console.log(lat, lng);
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            L.popup({
                maxWitdh: 250,
                minWidth: 50,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup',
            })
        )
    .setPopupContent('Workout')
    .openPopup();
    // form.classList.add('hidden');
    
});*/

// change input field with selecting type

// console.log(firstName);

// 231. Refactoring for porject architecture
class App {
    #map;
    #mapEvent;
    constructor() {
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
    }
    _getPosition() {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                function() {
                    alert('Could not get your position');
                }
            );
        }
    }

    _loadMap( position ) {
        const {latitude} = position.coords;
        const {longitude} = position.coords;

        const coords = [latitude, longitude];

        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        // Handling clicks on map
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row ').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');     
    }

    _newWorkout(e) {
        e.preventDefault();
            
        // clear input field
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        
        // Display marker
        const { lat, lng } = this.#mapEvent.latlng;
        L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    maxWitdh: 250,
                    minWidth: 50,
                    autoClose: false,
                    closeOnClick: false,
                    className: 'running-popup',
                })
            )
            .setPopupContent('Workout')
            .openPopup();
        form.classList.add('hidden');
    }

}
const app = new App();