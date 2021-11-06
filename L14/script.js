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
Person.hey = function() {
    console.log('Hey there 👋');
}
Person.hey();
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


/*// 208. ES6 Classes

// class expression
// const PersonCl = class{}

// class declaration

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method
    // Methods will be aded to .prototype property
    calcAge() {
        console.log(2021 - this.birthYear )
    }
    greet() {
        console.log(`Hey ${this.firstName}!`);
    }
    get age() {
        return 2021 - this.birthYear;
    }
    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica)
jessica.calcAge();
// using gatters
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}!`);
// }

jessica.greet();



// 1. Classes are NOT hoisted (we can not use classes before declaration)
// 2. Classes are first-class citizen
// 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter', 1989);
const walter = new PersonCl('Walter White', 1989);

PersonCl.hey();*/


/*// 209. Setters and Getters

const account = {
    owner: 'Mashru',
    movements : [200, 234, 120, 400],

    get latest() {
        //console.log(this.movements.slice(-1));
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov)
    }
}

console.log(account.latest);

account.latest = 50;
console.log(account.movements);*/

// 210. Static Methods
// ----------- in the top --------------


/*// 211. Object.create
const PersonProto = {
    ccalcAge() {
        console.log(2021 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }, 
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name =  'Steven';
steven.birthYear = 2002;
steven.ccalcAge();

console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.ccalcAge();*/


/*// 212. Coding Challenge #2

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }
    break() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
        
    }
    get speedUS() {
        return this.speed/1.6;
    }
    set speedUS(speed) {
        this.speed = speed *1.6;
    }
}

const ford = new Car('FORD' , 120 );
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);*/

/*// 213. Inheritance between Classes : Constructor Functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear);
};

// const Student = function(firstName, birthYear, course) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.course = course;
// }// 

// error
const Student = function(firstName, birthYear, course) {
    //Person(firstName, birthYear); // dose not work because,call person constructor function as a regular function, not using new operator - give undefined
    Person.call(this, firstName, birthYear); // 'this' poit to new studetn object
    this.course = course;
}

// Student.prototype = Person.prototype //this will not work, we want to inherit , not the same prototype -> so we have to use Object.create

// linking prototype
Student.prototype = Object.create(Person.prototype); //return empty object and if we write this after other method, this will override everything.

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2000, 'CSE');

console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);*/

/*// 214. Coding Challenge #3
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
    
}
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
}
Car.prototype.break = function() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
    
}
const EV = function( make, speed, charge ) {
    Car.call(this, make, speed);
    this.charge = charge;
}



EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}
EV.prototype.accelerate = function() {
    this.speed += 20 ;
    this.charge --;
    console.log(`${this.make} going at at ${this.speed} km/h, with a charge of ${this.charge}%`);
};
const tesla =new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.break();*/

// 215. Inheritance between classes and ES6 classes

class PersionCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;

    }

    //Instance Method
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2021 - this.birthYear;
    }

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name ;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // statuc method 
    static hey() {
        console.log('Hey there 👋');
    }
}

class StudentCl extends PersionCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge() {
        console.log(`I'm ${2021 - this.birthYear} years old,  but as a student I feel more like ${2021 - this.birthYear + 10}`);
    }
}

const martha = new StudentCl ('Marth Jones', 1992, 'CSE');
martha.introduce();
martha.calcAge();