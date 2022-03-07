'use scrict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////////////////////////

/*// 242. Our First Ajax Call : XMLHttpRequest

// old school style
const getCountryData = function(country) {

    // AJAX call
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function() {
        console.log(this.responseText);//json data 

        // convert to axtual data -> distructering
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html =`
            <article class="country ${className}">
                <img class="country__img" src="${data.flags.png}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 10000000).toFixed(1)}</p>
                    <p class="country__row"><span>🗣️</span>${
                    Object.keys(data.languages).map(k=>data.languages[k])
                    }</p>
                    <p class="country__row"><span>💰</span>${
                        Object.keys(data.currencies).map(k=>data.currencies[k].name)
                    }</p>
                </div>
            </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
    });   
}
getCountryData('bangladesh');*/

const renderCountry = function(data, className=' ') {
    const html =`
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 10000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${
                Object.keys(data.languages).map(k=>data.languages[k])
                }</p>
                <p class="country__row"><span>💰</span>${
                    Object.keys(data.currencies).map(k=>data.currencies[k].name)
                }</p>
            </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;
}

/*// 242. Our First Ajax Call : XMLHttpRequest

// old school style
const getCountryData = function(country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function() {
        console.log(this.responseText);//json data 

        // convert to axtual data -> distructering
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 1
        renderCountry(data);
// 244. Weclome to callback hell
        // Get Neighbour country (2)
        const [neighbour] = data.borders;
        if(!neighbour) return;
         // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function() {

            // convert to axtual data -> distructering
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);
            renderCountry(data2, 'neighbour');
        });
    });   
}
getCountryData('india');

// callback hell
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
                setTimeout(() => {
                    console.log('5 second passed');
                },1000);
            },1000);
        },1000);
    },1000);
},1000);*/


// 245. Promises and the Featch API
// const request = new XMLHttpRequest()
// request.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// request.send();

const request = fetch('https://restcountries.com/v3.1/alpha/portugal');
console.log(request);