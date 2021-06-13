// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// 10 Values and variables

/*console.log("Mashru");
console.log("23");


// variable name conventions
let firstName = "Mashru";
console.log(firstName);
let PI = 3.1416;

let myFirstJob = 'Coder';
let myCurrentJob = 'student';

let job1 = 'programer';
let job2 = 'student';

console.log(myFirstJob);*/

// 12. Data types
/*let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1971;
console.log(typeof year);

console.log(typeof null);*/

// 13. let, const and var

/*let age=30;
age = 31;

const birthYear = 1997;
//birthYear = 1998;//error

var job = 'programmer';
job = 'student';

lastName = 'khan';
console.log(lastName);*/

// 14. operators 
/*const now = 2021;
const ageMashru = now - 1997;
const ageTahmid = now - 2000;

console.log(ageMashru, ageTahmid);

console.log(ageMashru * 2, ageTahmid / 10 , 2 ** 3);
// 2**3 =  2*2*2

const firstName = 'Mashrur';
const lastName = 'Rahman';
console.log(firstName + ' ' + lastName);


//Assignment operators
let x = 10 + 5;
x += 10 // x = x + 10
x *= 4;
x++; //x = x + 1
x--;
console.log(x);

//Comparison operatior
console.log(ageMashru > ageTahmid);// > , < , >= , <=
console.log(ageTahmid >= 18);

const isFullAge = ageTahmid >= 18;

console.log( now -1997 > now - 2000);*/

//15. opetation precedence
/*let x,y;
x = y = 25 - 10 - 5;// x = y; y = 10 
console.log(x, y);

const now = 2021;
const ageMashru = now - 1997;
const ageTahmid = now - 2000;
let averageAge = ageMashru + ageTahmid / 2;
console.log(ageMashru, ageTahmid, averageAge);
averageAge = (ageMashru + ageTahmid) / 2 ;
console.log(ageMashru, ageTahmid, averageAge);*/

//16.Coading Challenge #1
/*let marksMass = 78;
let johnsMass = 92;
let marksHeight = 1.69;
let johnsHeight = 1.95;

let marksBims = marksMass / marksHeight ** 2;
let johnsBims = johnsMass / johnsHeight ** 2;

let markHigherBMI = marksBims > johnsBims;
console.log(marksBims, johnsBims, markHigherBMI);

marksMass = 95;
johnsMass = 85;
marksHeight = 1.88;
johnsHeight = 1.76;

marksBims = marksMass / marksHeight ** 2;
johnsBims = johnsMass / johnsHeight ** 2;

markHigherBMI = (marksBims > johnsBims);
console.log(markHigherBMI);*/

//17.String and Template Litrals 
/*const firstName = "Mashru";
const job = "Programmer";
const birthYear = 1997;
const year = 2021;

const mashru = "I'm " + firstName + ', a ' + ( year - birthYear ) + ' years old ' + job + '!';  
console.log(mashru);

// template litrals 
const mashruNew =  `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(mashruNew);

console.log('String \n\
multiple \n\
lines');
console.log(`string
multiple
lines`);*/

// 18. Taking Decisions if esle Statemants
//if else corol structure
/*const age = 15;
if (age >= 18 ){
    console.log('Sarah can start driving license!');
}else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
}


const birthYear = 1997;
let century;
if(birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);*/

//19.Coading Challenge #2
/*let marksMass = 78;
let johnsMass = 92;
let marksHeight = 1.69;
let johnsHeight = 1.95;

let marksBims = marksMass / marksHeight ** 2;
let johnsBims = johnsMass / johnsHeight ** 2;

console.log(marksBims,  johnsBims);
if(marksBims > johnsBims){
    console.log(`Mark's BIM ${marksBims} is higher then Jhon's ${johnsBims}`);
} else{
    console.log(`John's BIM ${johnsBims} is higher then Mark's ${marksBims}`);
}*/

// 20. type Conversion and Coercion
/*const inputYear = '1997';
console.log(Number(inputYear) , inputYear);

console.log(inputYear + 18 );
console.log(Number(inputYear) + 18);

console.log(Number('Mashru'));
console.log(typeof NaN);

console.log(String(24) , 24);


// type coercion
console.log('I am' + 23 + 'years old');
console.log('23' + '10' + 3);

console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('23' / 2);
console.log('23' >= '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');*/

// 21. Falsy value and truthy valur

// 5 falsy value : 0 , '', undiefined, Null, NaN 
/*console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('Mashru'));
console.log(Boolean({}));
console.log(Boolean(undefined));

const money = 100;
if(money) {
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job!');
}

const height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}*/

// 22. equelity operation === vs ==
/*const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

// (loose)
// const favourite =  prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof(favourite));

// if (favourite == 23) {
//     console.log('Cool! 23 is an amazing number!');
// }

// (strict)
const favourite = Number( prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof(favourite));

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if ( favourite === 7) {
    console.log('7 si also a cool numbre');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23 ) console.log('Why not 23?');*/


// 23. Boolean Logic AND / OR / NOT
// 24. Logical Operatiors
/*const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasGoodVision || hasDrivingLicense);
console.log(!hasDrivingLicense);

// const shouldDrive = hasDrivingLicense && hasGoodVision;
// if(shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDrivingLicense && hasGoodVision && isTired);

const shouldDrive = hasDrivingLicense && hasGoodVision;
if(hasDrivingLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}*/
// 25.Codign Challange #3
/*const avgScoreDolp = (97 + 112 + 101) / 3 ;
const avgScoreKoal = (109 + 95 + 106) / 3 ;
console.log('Dolphins = '+ avgScoreDolp);
console.log('Koalas = '+ avgScoreKoal);
if(avgScoreDolp > avgScoreKoal && avgScoreDolp >= 100){
    console.log("Dolphins is the Winner!");
} 
else if( avgScoreKoal > avgScoreDolp && avgScoreKoal >= 100){
    console.log("Koalas is the Winner!");
} 
else if(avgScoreDolp === avgScoreKoal && avgScoreDolp>=100 && avgScoreKoal >= 100) {
    console.log("Both of them have the same score and also greater then 100");
}
else{
    console.log('Their scores are bellow 100 :( ');
}*/

// 26.Switch Case Statement
/*const day = 'wednesday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theroy videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples'); 
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');   
}


if( day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if ( day === 'tuesday') {
    console.log('Prepare theroy videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples'); 
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}*/

// 27. statements and expressions
// 28.conditional operator
/*const age = 23;
age >= 18 ? console.log('like to drink wine!') : console.log('like to drink water.');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${ age >= 18 ? 'wine' : 'water'} !`);*/
// 29. Coading-challange #4
const bill = 40 ;
let tip = bill >= 50 && bill <= 300 ? .15 * bill : .2 * bill ;
console.log(`The bill was ${ bill } the tip was ${ tip }, and the total value ${ bill + tip }`);