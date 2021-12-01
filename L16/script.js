'use scrict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////////////////////////

// 242. Our First Ajax Call : XMLHttpRequest

// old school style
const getCountryData = function(country) {

    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function() {
        console.log(this.responseText);//json data 

        // convert to axtual data -> distructering
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html =`
            <article class="country">
                <img class="country__img" src="${data.flags.png}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 10000000).toFixed(1)}</p>
                    <p class="country__row"><span>🗣️</span>${
                       data && data.languages && Object.keys(data.languages).map(k=>data.languages[k])
                    }</p>
                    <p class="country__row"><span>💰</span>${
                        data && data.currencies && Object.keys(data.currencies).map(k=>data.currencies[k].name)
                    }</p>
                </div>
            </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
        console.log(`${data.borders[1]}`);
    });

    
}
getCountryData('bangladesh');
