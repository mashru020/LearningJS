'use strict';

/*// 126 Default Parameters
const bookings = [];
const createBooking = function(
    flightNum,
    numPassengers = 1, 
    price = 199 * numPassengers//ES6
) {

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;


    // inhenced object literal
    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH124',2,800);
createBooking('Lh123',2);
createBooking('Lh123', undefined ,500);*/

/*// 127. How passing Arguments Work (value vs reference)

const flight = 'LH234';
const mashru = {
    name: 'Mashrur Rahman',
    passport: 127346598740
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 127346598740) {
        alert('Checked in');
    }
    else {
        alert('Wrong passport!');
    }
}

checkIn(flight, mashru);
console.log(flight);
console.log(mashru);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random()*100000000000);
};

newPassport(mashru);
checkIn(flight, mashru);*/

// 128. First-Class and Higher-Order Functions

/*// 129. Functions Accepting Callback Functions
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScrpt is the best!', upperFirstWord);
transformer('JavaScrpt is the best!', oneWord);


//  JS uses callback all the time
const high5 = function() {
    console.log('👋');
}
document.body.addEventListener('ckick',high5);
['Mashr', 'Mahir', 'Nusrat'].forEach(high5);*/

/*// 130. Funciton returning function

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey');
greeterHey('Mashru');
greeterHey('Mahir');

greet('Hello')('Mashru');

// arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Mashru');*/

// The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flignt: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Mashrur Rahman');
lufthansa.book(456,'Mahir Faisal');
console.log(lufthansa);


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;
// Dose not work
// book(23, "Tahmaid khan"); 


//=============call method====================

// this keyword set to wurowings
book.call(eurowings, 23, 'Tahmid Khan');
console.log(eurowings);

book.call(lufthansa, 89, 'Adib Mahmud');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 56, 'Nusrat');
console.log(swiss);

// ================  Apply Method  ==========================
// takes the array of argument

const fligntData = [583, 'George Cooper'];
book.apply(swiss, fligntData);
console.log(swiss);

// better way to doing apply method in modern js
book.call(swiss, ...fligntData);
console.log(swiss);


// 