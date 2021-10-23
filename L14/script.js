'use strict'

// 203. Constructor Functions and the new Operator

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

console.log(mashru instanceof Person);
console.log(jack instanceof Person);

// 204. Prototypes
// every function in js automatically have prototype property including constructor function.
console.log(Person.prototype);

Person.prototype.clacAge = function() {
    console.log(2021 - this.birthYear);
};

mashru.clacAge();
adib.clacAge();
// jack.clacAge(); // error

console.log(mashru.__proto__); // prototype of mashru object 
console.log(mashru.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(mashru));


Person.prototype.species = 'Homo Sapiens'; // inherited property

console.log(mashru.species, adib.species);

console.log(mashru.hasOwnProperty('firstName'));
console.log(mashru.hasOwnProperty('species'));


