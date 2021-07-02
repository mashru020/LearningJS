'use strict';
//93. Scoping in Practice
/*function calcAge(birthYear) {
  const age = 2021 - birthYear;
  //console.log(firstName);
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Rahman';
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //output = 'NEW OUTPUT'; //reassaigning value in the variable
      //const output = 'NEW OUTPUT'; //creating new variable
    }

    // can'c accessible cause const and let are block level variable
    //console.log(str);

    // variable declierd with var overlook the block and accessible from everywher
    console.log(millenial);

    // it should not work when we use strict mode
    //console.log(add(3, 6));

    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Mashru';
calcAge(1994);
// can't access to to child variable
// console.log(age);
//printAge();*/

/* // 95.Hoisting and TDZ in practice 

// Variables
//console.log(me);
//console.log(job);
//console.log(year);


var me ='Mashru';
let job = 'Student';
const year = 1995;


// Functions 
console.log(addDecl(1,2));
//console.log(addExpr(1,2));
//console.log(addArrow(1,2));


function addDecl(a,b) {
  return a+b;
}
const addExpr = function(a,b) {
  return a+b;
}
var addArrow = (a,b) => a+b ;

// Example 
if(!numProducts) deleteShoppingCart();

var numProducts = 10; //Don't use var to declear variable 

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);*/

//97. The this keywork in practice 
/*console.log(this);

const calcAge = function(birthYear) {
  console.log(2021 - birthYear );
  console.log(this);
}
calcAge(1995);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear );
  console.log(this);
}
calcAgeArrow(2000);*/

/*const mashru = {
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log( 2021 - this.year);
  }
};
mashru.calcAge();


const matilda = {
  year : 2016
};

matilda.calcAge = mashru.calcAge; //borrowed calcAge function mashru to matilda 
matilda.calcAge();

const f = mashru.calcAge;
console.log(f);

f();*/

/*// 98. Regular Function vs Arrow Function

//var firstName = 'Matilda';

// this is not a code block, so it dosen't create it's own global context
const mashru = {
  firstName : 'Mashru',
  year: 1994,
  calcAge: function() {
    console.log(this);
    console.log(2021 - this.year);

    // Soluton-1
    // const self = this; //self or that
    // const isMillenial = function() {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    
    
    // Solution-2 using arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },


  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
}
mashru.greet();
mashru.calcAge();
//console.log(this.firstName);//this is undefined
// best practice
// 1. Never use Arrow function as a method, use normal function expression. And not use VAR 


// argument keyword
const addExpr = function( a , b ) {
  console.log(arguments);
  return  a + b;
};
addExpr(2,5);
addExpr(2, 5, 8 , 12);

var addArrow = (a,b) => {
  // console.log(arguments); // arrow function dose not allow argument keyword 
  return a + b;
}
addArrow(9,6);*/

/*// 99.Primitives vs Objects (Primitive vs Reference type)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name : 'Mashru',
  age : 25,
}
const friend = me;
friend.age = 30;

console.log('Friend:', friend);
console.log('Me:', me);
// there is a problem in the upper code
// primitive type and object type. they are stored in the memory in the different way */


/*// 100. Primitive vs Objects in practice

let lastName = 'Rahman';
let oldLastName = lastName;
lastName = 'khan';
console.log(oldLastName, lastName);

const mashru = {
  firstName: 'Mashrur',
  lastName: 'Rahman',
  age:25,
};
const studentMashru = mashru ;
//studentMashru.lastName = 'khan';
//console.log('Normal Mashru: ', mashru);
//console.log('Student Mashru: ',studentMashru);

// studentMashru = {};//since it is const, it cannot chance the reference address 

// copying objects
const mashru2 = {
  firstName: 'Mashrur',
  lastName: 'Rahman',
  age:25,
  family: ['mother', 'father'],
};


const mashruCopy = Object.assign({},mashru2); //marge mashru2 with a empty object and create new object , and store into another variabel

mashruCopy.lastName = 'Khan';

mashruCopy.family.push('sister');
mashruCopy.family.push('brother');

console.log('Normal Mashru: ', mashru2);
console.log('Copy Mashru: ',mashruCopy);

//deep clone dose not work in Object.assign how to create deep clone ?*/