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

/*// 131.The call and apply Methods

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


// 132. The Bind Method (with 131)

const bookEW = book.bind(eurowings);


const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Mashrur Rahman');
bookEW23('Martha Cooper');

// with Event Listener

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

// in event handeler this keyword always point to its attached element. 
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);


// solution is the bind method
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial application

const addText = (rate, value) => value + value * rate ;
console.log(addText(0.1, 200));

const addVAT = addText.bind(null,0.23);
//const addVAT = addText.bind(0.23);
// addVAT = value => value + value * 0.23;


// with function return function
const addText2 = function(rate) {
    return function(value){
        return value + value * rate;
    }
}
const addVat2 = addText2(.23);
console.log(addVat2(200));*/

/*// 133. Coding Challange #1
//1. Create a method called 'registerNewAnswer' on the 'pool' object. The method dose 2 things:
    // 1.1. Display a prompt window for the user to input the number of the selection option. The prompt should look like this: 
    //     What is your favourite Programming Language?
    //     0: JavaScript
    //     1: Python 
    //     2: Rust 
    //     3: C++
    //     (write option number)
    // 1.2. Based on the input Number, update the answers Array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)


    // 2. Call this method whenever the user clicks the "Answer Poll" button; 

    // 3. Create a method 'displayResults' which displays the pool results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string'. display a string like "Pool results are 13, 2, 4, 1".

    // 4. Run the 'displayResults' method at the end of each 'registerNewAnster' method call.
    // BONUS: Use the 'DisplayResutls' method to display the 2 array in the test data.
    const poll = {
        question: 'What is your favourite programming language?',
        options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],

        answers: new Array(4).fill(0),
        registerNewAnswer: function() {
            // Get answer
            const ans = Number(
                prompt(`${this.question}\n${this.options.join('\n')} \n (Write option number)`)
            );
            console.log(ans);
            
            // Register answer
            typeof ans === 'number' && ans < this.options.length && this.answers[ans]++;
            this.displayResult();
            this.displayResult('string');
        },
        displayResult: function(type = 'array') {
        //   const type =  prompt('type string or array');
          if (type === 'array'){
              console.log(this.answers);
          }
          else if (type === "string") {
              console.log(`Pool results are ${this.answers.join(', ')}`);
          }
        }
    };

    
    document.body.querySelector('.poll').addEventListener('click',function(){
       poll.registerNewAnswer();
        
    });
poll.displayResult.call({answers: [5, 2, 3]}, 'string');
    const newPoll = {
        answers: [1, 5, 7, 3, 0],
    }
    
     poll.displayResult.call(newPoll, 'string');


    console.log(newPoll);*/
    
    /*// 134.Immediately Invoked Function Expressions (IIEF)

    const runOnce = function() {
        console.log('This will never run again');
    }
    runOnce();

    //iife
    (function() {
        console.log('This will never run again 2nd');
    })();
    // arrow function
    (() => console.log('This will also never run again'))();

    {
        const isPrivate = 23;
        var notPrivate = 46;
    }
    //console.log(isPrivate); //not accessable
    console.log(notPrivate);*/

    /* / 135. Closures
    const secureBooking = function() {
        let passengerCount = 0;

        return function() {
            passengerCount++;
            console.log(`${passengerCount} passengers`);
        }
    }

    const booker = secureBooking();
    booker();
    booker();
    booker();

    console.dir(booker);*/

    /*// 36. More Closure example
// Example 1
    let f;

    const g = function() {
        const a = 23;
        f = function() {
            console.log(a*2);
        }
    }

    g();
    f();

    const h = function() {
        const b = 777;
        f = function() {
            console.log(b * 2);
        }
    }
// Re-assigning f function
    h();
    f();

// Example 2

const boardPassengers = function(n , wait) {
    let perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    },wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
}

//let perGroup = 1000;
boardPassengers(180, 3); */

// 137. coding challange #2

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue';
    });
})();