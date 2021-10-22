'use strict'

// 203. Constructor Functions and the new Operator

// Constructor function always start with capital letter, dont work the arrow function
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

// Never Do This
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