'use strict'

/*// 203. Constructor Functions and the new Operator

// Constructor function always start with capital letter, dont work the arrow function
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

// Never Do This "if we create 100 person object -> all object will carry this function"
// solution -> Prototypal Inheritance
    // this.calcAge = function() {
    //     console.log(2021 - birthYear);
    // };
}

const mashru = new Person('Mashru', 1994);
console.log(mashru);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatictly return {}

const tahmid = new Person ('Tahmid', 2000);
const adib = new Person('Adib', 2013);
console.log(tahmid, adib);

const jack = 'Jack';

// console.log(mashru instanceof Person);
// console.log(jack instanceof Person);

// 204. Prototypes
// every function in js automatically have prototype property including constructor function.
// console.log(Person.prototype);

Person.prototype.clacAge = function() {
    console.log(2021 - this.birthYear);
};

mashru.clacAge();
adib.clacAge();
// jack.clacAge(); // error

// console.log(mashru.__proto__); // prototype of mashru object 
// console.log(mashru.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(mashru));


Person.prototype.species = 'Homo Sapiens'; // inherited property

// console.log(mashru.species, adib.species);

// console.log(mashru.hasOwnProperty('firstName'));
// console.log(mashru.hasOwnProperty('species'));


// 206. Prototypal inheritance and Builtin Objects

console.log(mashru.__proto__);
// Object.prototype (top of the prototype chain)
console.log(mashru.__proto__.__proto__);
console.log(mashru.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 3, 3, 6, 4, 6]; //new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');*/

/*// 207. Coding challenge #1
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10 ;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
};
Car.prototype.break = function() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
};


const bmw = new Car('BMW' , 120 );
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
mercedes.break();
bmw.break();
mercedes.accelerate();
bmw.break();*/


// 208. ES6 Classes

// class expression
// const PersonCl = class{}

// class declaration

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be aded to .prototype property
    calcAge() {
        console.log(2021 - this.birthYear )
    }
    greet() {
        console.log(`Hey ${this.firstName}!`);
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}!`);
// }

jessica.greet();

// 1. Classes are NOT hoisted (we can not use classes before declaration)
// 2. Classes are first-class citizen
// 3. Classes are executed in strict mode