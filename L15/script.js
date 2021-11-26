'use strict';



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
    clicks = 0;

    constructor(coords, distance, duration) {
        // this.date = ...
        // this.id =...
        this.coords = coords; // [lat, lng]
        this.distance = distance; //in km
        this.duration = duration; // in min
        
    }

    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }
    click() {
        this.clicks++;
    }
}

class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }
    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
} 

class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain ){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
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
    #workouts = [];
    #mapZoomLevel = 13;
    constructor() {
        
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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

        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

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
    _hideForm() {
        //hide form + clear input field
        
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        form.style.display = "none";
        form.classList.add('hidden');

        setTimeout(() => (form.style.display = 'grid'), 1000);
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row ').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');     
    }

    _newWorkout(e) {

        const validInputs = (...inputs) => inputs.every( inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every( inp => inp >= 0 );
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
                !validInputs(distance, duration, cadence) || 
                !allPositive(distance, duration, cadence)
            )
            return alert('Inputs have to be positive numbers!');

            workout = new Running([lat, lng], distance, duration, cadence);   
        }

        // if activity cycling, create cycling object
        if(type === 'cycling') {
            const elevation = +inputElevation.value;
            if(
                !validInputs(duration, distance, elevation) ||
                !allPositive(distance,duration)
            ) 
            return alert('Inputs have to be positive numbers!');

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }
        // add new object to workout array
        this.#workouts.push(workout);
        // console.log(workout);

        // render workout on map as mark

        // Display marker
        this._renderWorkoutMarker(workout);
        
        // render workout on list
        this._rnederWorkout(workout);
        this._hideForm();
        
    }

    _renderWorkoutMarker(workout) {
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
        .setPopupContent(`${workout.type ==='running' ?'🏃‍♂️' : '🚴‍♀️'}  ${workout.description}`)
        .openPopup();
    }

    // 234. Rendering Workout
    _rnederWorkout(workout) {
        
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${workout.type ==='running' ?'🏃‍♂️' : '🚴‍♀️'}</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div> 
        `;
        
        if(workout.type === 'running') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
            </li>
            `;
        }
        if(workout.type === 'cycling') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(1)}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                </div>
            </li>
            `;
            
        }
        form.insertAdjacentHTML('afterend',html);
    }

    // 235. Move to the marker
    _moveToPopup(e) {
        const workoutEl = e.target.closest('.workout');
        // console.log(workoutEl);
        if(!workoutEl) return;
        // console.log(workoutEl.dataset.id);
        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);
        console.log(workout);

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: true,
            }
        });

        // using publick interface
        workout.click();
    }
}
const app = new App();