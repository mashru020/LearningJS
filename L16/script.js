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
                <img class="country__img" src="https://flagcdn.com/w320/bd.png" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 10000000).toFixed(1)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages.ben}</p>
                    <p class="country__row"><span>💰</span>${data.currencies.BDT.name}</p>
                </div>
            </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
    });

    
}
getCountryData('bangladesh');