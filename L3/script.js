'use strict';
/*let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio' ;
// const private = 523;*/

// 33.Functions 
/*function logger() {
    console.log('My name is Mashru');
}

// calling / running / invoking function 
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    // console.log(apples , oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(3 , 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangJuice = fruitProcessor(2,4);
console.log(appleOrangJuice);*/

// 34. Function Declarations vs. Expressions 
/*
// Function Declaration
function calcAge1(birthYear) {
    return 2021 - birthYear ;
}

const age1 = calcAge1(1994);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear ;
}

const age2 = calcAge2(2001);
console.log(age1, age2);*/

// 35. Arrow Function 
const calcAge3 = birthYear => 2021 - birthYear ;
const age3 = calcAge3(1995);
console.log (age3);

// single parameter
const yearsUntilReturement = birthYear => {
    const age = 2021 - birthYear ;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilReturement(1995));

// multiple parameter 
const yearsUntilReturement2 = (birthYear , firstName) => {
    const age = 2021 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilReturement2(1995, 'Mashru'));*/

// 36.Function Calling other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));*/

// 37. Reviewing Funcitons 

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilReturement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        console.log( `${firstName} has already retired.`);
        return -1;
    }
}
console.log(yearsUntilReturement (1994, 'Mashru'));
console.log(yearsUntilReturement(1920, 'Ranman'));*/

/*// 38. Coding Challange #1 
const calcAverage = (score1 , score2, score3 ) => (score1 + score2 + score3)/3 ;
const checkWinner = function (dolphins, koalas) {
    if(dolphins >= koalas*2) {
        console.log(`Dolphins win (${dolphins} VS. ${koalas})`);
    } else if (koalas >= dolphins*2){
        console.log(`Koalas win (${koalas} VS. ${dolphins})`);
    }
    else {
        console.log(`Nobody wins!`);
    }
}
// Test Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);


// Test Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);*/

// 39.Introduction to Arrays 
/*const friend1 = 'Sazzad';
const friend2 = 'Mamun';
const friend3 = 'joy';

const friends = ['sazzad', 'Mamun', 'joy'];
console.log(friends);

const y = new Array (1990, 1995, 1996,2000, 2021);
console.log(friends[1]);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'sohag';
console.log(friends);
// friends = ['bob', 'alice'];
const firstName = 'Mashrur' ;
const mashru = [firstName, 'Rahman', 2021-1994, friends];
console.log(mashru);

// Exercise 
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}
const years = new Array (1990, 1995, 1996,2000, 2021);
console.log(calcAge(years[0]));*/

// 40.Array Operations (Methods)
/*const friends = ['Sazzad','Mamun', 'Joy'];
const newLength = friends.push('Sujon');
console.log(friends);
console.log(newLength);

friends.unshift('Ripon');
console.log(friends);

const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Mamun'));
console.log(friends.indexOf('bob'));

friends.push(23);
console.log(friends.includes('Mamun'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if(friends.includes('Sazzad')) {
    console.log(`You have a friend called Sazzad`);
}*/


// 41.Coding Challange #2 
/*//const calcTip = bill => bill>= 50 && bill <= 300 ? bill * .15 : bill * .2 ;
const calcTip = bill => {
    if(bill >= 50 && bill <=300 ) return bill * .15 ;
    else return bill * .2;
}
//console.log(calcTip(prompt('Eneter bill amount : ')));
const bills = [125 , 555, 44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

console.log(bills , tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]] ;
console.log(totals);*/

/*// 42.Introduction to Object
    const mashruArray = [
        "Mashrur",
        'Rahman',
        2021 - 1994, 
        'Student',
        ['Anik' , 'Mamun', 'Sazzad']
    ];

    const mashru = {
        firstName : 'Mashrur',
        lastName : 'Rahmen',
        age : 2021 - 1994,
        job : 'Student',
        friends: ['Anik' , 'Mamun', 'Sazzad'] 
     };*/

   /* //  43. Dot vs. Bracket Notation
    const mashru = {
        firstName : 'Mashrur',
        lastName : 'Rahmen',
        age : 2021 - 1994,
        job : 'Student',
        friends: ['Anik' , 'Mamun', 'Sazzad'] 
     };
     console.log(mashru);

     console.log(mashru.lastName);
     console.log(mashru['lastName']);
     const nameKey = 'Name';
     //console.log(mashru['first' + nameKey]);
     //console.log(mashru['last' + nameKey]);

     const interestedIn = prompt('What do you want to know about Mashru? Choose between firstName , LastName, age, job, and friends');
     //console.log(mashru.interestedIn);//undefined
     // console.log(mashru[interestedIn]);
     
     if(mashru[interestedIn]) {
         console.log(mashru[interestedIn])
     } else {
         console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
     }

    mashru.location = 'Bangladesh';
    mashru['facebook'] = 'mashru020';
    console.log(`${mashru['firstName']} has ${mashru['friends'].length} friends, and his best friend is called ${mashru['friends'][0]} `);*/

    /*// 44. Object Methods 
    const mashru = {
        firstName : 'Mashrur',
        lastName : 'Rahmen',
        birthYear: 1994,
        job : 'Student',
        friends: ['Anik' , 'Mamun', 'Sazzad'],
        hasDriversLicense: false,

        // calcAge: function(birthYear) {
        //     return 2021 - birthYear;
        // }
    //     calcAge : function () {
    //         console.log(this);
    //         return 2021 - this.birthYear;
    //     }

        calcAge:function() {
            this.age = 2021 - this.birthYear;
            return this.age;
        },
        // checkLicense: function () {
        //     // return this.hasDriversLicense ? "has a driver's license" : "has no driver's license";
        //     if(this.hasDriversLicense) {
        //         return "a driver's license";
        //     } else {
        //         return "has no driver's license";
        //     }  
        // },
        getSummery: function() {
            return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
        }
     };
    //  console.log(mashru.calcAge(1991));
    //  colosle.log(mashru['calcAge'](1991));

    //  console.log(mashru.calcAge(mashru.birthYear));
    //  console.log(mashru['calcAge'](mashru['birthYear']));

    //console.log(mashru.calcAge());
    
    // console.log(mashru.calcAge()); //not a good practice
    // console.log(mashru.calcAge());
    // console.log(mashru.calcAge());
    // console.log(mashru.age);
    // console.log(mashru.age);
    // console.log(mashru.age);

    // challange
    // "Mashru is a 25 yera old student , and he has no driver's llicense"
    
    // console.log(`${mashru['firstName'] } is a ${mashru['calcAge']()}-year old ${mashru.job}, and he ${mashru.checkLicense()} `);
    console.log(mashru.getSummery()); */

  /*  // 45. Coding Challange #3 
    const john = {
        fulName: "John Smith",
        height: 1.95,
        weight: 92,
        calcBMI : function() {
            this.bmi =  this.weight/(this.height * this.height);
            return this.bmi;
        } 
    };
    const mark = {
        fulName: "Makr Miller",
        height: 1.69,
        weight: 78,
        calcBMI : function() {
            this.bmi = this.weight/(this.height * this.height);
            return this.bmi;
        }   
    };
    mark.calcBMI();
    john.calcBMI();
    console.log(`${john.bmi > mark.bmi ? john.fulName : mark.fulName}'s BMI (${john.bmi > mark.bmi ? john.bmi : mark.bmi}) is heigher then ${john.bmi > mark.bmi ? mark.fulName : john.fulName}'s BMI (${john.bmi > mark.bmi ? mark.bmi : john.bmi})!`)*/

    /*//46.Iteration The for Loop

    for (let rep = 1 ; rep <= 10 ; rep++) {
        console.log(`Lifting weights repetition ${rep}`);
    }*/

    /*// 47.Looping Arrays, Breaking and Continuing
    const mashru = [
        'Mashrur',
        'Rahman',
        2021 - 1994,
        'Student',
        ['Mamun', 'Sazzad', 'Sujon']
    ];
    const types = [];
    for(let i = 0 ; i < mashru.length; i++) {
        // reading from mashru array
        console.log(mashru[i], typeof mashru[i]);

        // Filling types array
        // types[i] = typeof mashru[i];

        types.push(typeof mashru[i]);
    }
    console.log(types);

    const years = [1991, 2007, 1969, 2020];
    const ages = [];
    for(let i = 0; i < years.length ; i++ ) {
        ages.push(2021 - years[i]);
    }
    console.log(ages);

    // continue and break 
    console.log('-------- ONLY STRING -------');
    for(let i = 0; i< mashru.length; i++) {
        if(typeof mashru[i]!= 'string' ) continue;
        // continue skip current iteration 
        console.log(mashru[i] , typeof mashru[i]);
    }

    console.log("--- BREAK WITH NUMBER ---");
    for(let i = 0; i< mashru.length; i++) {
        if(typeof mashru[i] === 'number' ) break;
        // continue skip current iteration 
        console.log(mashru[i] , typeof mashru[i]);
    }*/

   /* // 48 . Looping Backwords and Loops in Loops 
    const mashru = [
        'Mashrur',
        'Rahman',
        2021 - 1994,
        'Student',
        ['Mamun', 'Sazzad', 'Sujon']
    ];

    for(let i = mashru.length-1 ; i >= 0 ; i--) {
        console.log(i , mashru[i]);
    }

    for(let exercise = 1 ; exercise <= 3 ; exercise++) {
        console.log(`-------- Starting exercise ${exercise}`);

        for( let rep = 1 ; rep <= 5 ; rep++ ) {
            console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`);
        }
    }*/

  /*  // 49. The While Loop 
    let rep = 1;
    while(rep <= 10 ){
       // console.log(`while: Lifting weights repetition ${rep}`);
        rep++;
    }

    let dice  = Math.trunc(Math.random() * 6 ) + 1;
    console.log(dice);

    while(dice !== 6 ) {
        console.log(`You rolled a ${dice}`);
        dice  = Math.trunc(Math.random() * 6 ) + 1;
        if(dice === 6 ) console.log('Loop is about to end...');
    }*/

    /*// 50. Coding Challange #4

    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    const tips = [];
    const total = [];
    const calcTip = bill =>{ 
        if (bill >= 50 && bill <=300) return bill * .15 ;
         else return bill * .2 ;
    }
    console.log(bills);
    for(let i = 0 ; i < 10 ; i++ ) {
        tips.push( calcTip(bills[i]));
    }
    console.log(tips);
    const calcAvg = arr => {
        let sum = 0;
        for(let i = 0 ; i < arr.length ; i++ )
        {
            sum = sum + arr[i];
        } 
        console.log(sum);
        return sum;
    }
    total.push(calcAvg(tips)/tips.length);
    console.log(total);*/