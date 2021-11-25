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

// 232. Managing workout data creating classes
class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    constructor(coords, distance, duration) {
        // this.date = ...
        // this.id =...
        this.coords = coords; // [lat, lng]
        this.distance = distance; //in km
        this.duration = duration; // in min
    }
}

class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }
    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
} 

class Cycling extends Workout {
    type = 'cycling'
    constructor(coords, distance, duration, elevationGain ){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }
    calcSpeed() {
        // km/hr
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// const run1 = new Running([39, 21], 5.2, 23, 170);
// const cycling1 = new Cycling([34,23], 23, 56, 254);

// console.log(run1, cycling1);
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

//////////////////////////////////////////////////////////////////////////
// APPLICATION ARCHITECTURE
class App {
    #map;
    #mapEvent;
    #workout = [];

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

        const validInputs = (...inputs) => inputs.every( inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every( inp => inp >0 );
        e.preventDefault();
        // 233. Creating a new workout 


        // get data form from
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;

        let workout;

        // check if data is valid

        // if activity running, create running object
        if( type === 'running') {
            
            const cadence = +inputCadence.value;

            // check if data is valid
            if(
                // !Number.isFinite(distance) || 
                // !Number.isFinite(duration) || 
                // !Number.isFinite(cadence)) 
                !validInputs(distance,duration,cadence) || 
                !allPositive(distance,duration,cadence)
               )
                return alert('Inputs have to be positive numbers!');

            workout = new Running([lat, lng], distance, duration, cadence);
            
        }

        // if activity cycling, create cycling object
        if(type === 'cycling') {
            const elevation = +inputElevation.value;
            if(!validInputs(duration, distance, elevation) ||
            !allPositive(distance,duration)
           ) 
            return alert('Inputs have to be positive numbers!');

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }
        // add new object to workout array
        this.#workout.push(workout);
        console.log(workout);

        // render workout on map as mark

        // render workout on list


        
        
        // Display marker
        this.renderWorkoutMarker(workout);
        
        form.classList.add('hidden');
        //hide form + clear input field
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    }

    renderWorkoutMarker(workout) {
        L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(
            L.popup({
                maxWitdh: 250,
                minWidth: 50,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`,
            })
        )
        .setPopupContent(`workout:${workout.distance} `)
        .openPopup();
    }

}
const app = new App();