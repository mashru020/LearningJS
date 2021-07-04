'use strict';

/*// 103. Distructuring Array
 const restaurent = {
     name: 'Classico Italiano',
     location: 'Via Anelo Tavanti 23 , Firenze, Italy',
     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
     starterMenu: ['Focaccia', 'Bruschetta','Garlic Bread', 'Caprese Salad'],
     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

     order: function(starterIndex, mainIndex) {
         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
     }
 };

//  without distructure
 const arr = [2,3,4];
 const a = arr[0];
 const b = arr[1];
 const c = arr[2];

//  with distructure
const [x,y,z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurent.categories;
// console.log(first, second);

let [main, secondery] = restaurent.categories;
console.log(main, secondery);

// switching variables
// const temp = main;
// main = secondery;
// secondery = temp;
// console.log(main, secondery);

[main , secondery] = [secondery, main];
console.log(main, secondery);

const [starter, mainCourse] = restaurent.order(2,0);
console.log(starter, mainCourse);


// nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i,j);

const [i, , [j, k]] = nested;
console.log(i,j,k);

// default values
const [p = 1 , q = 1 , r = 1 ] = [8,9];
console.log(p,q,r);*/


/*// 104. Distructuring Object
const restaurent = {
    name: 'Classico Italiano',
    location: 'Via Anelo Tavanti 23 , Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close:24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0 , time = '20:00' , address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

restaurent.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurent.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});


const { name, openingHours, categories} = restaurent;
console.log( name , openingHours, categories);

//change object name
const {name: restaurentName, openingHours: hours, categories: tags} = restaurent;
console.log(restaurentName, hours, tags);


// default values
const {menu = [], starterMenu: starters = [] } = restaurent;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};

// {a,b} = obj; //it gives a token error
({a,b} = obj);
console.log(a,b);

// nested object
const {fri : { open: o, close: c} } = openingHours;
console.log(o, c);*/


 /*// 105. The Spread Operator(...) 
const arr =  [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// const newArr = [1,2,arr] //without ...
// console.log(newArr);

const newArr = [1,2, ...arr] //... for expand array
console.log(newArr);

 console.log(...newArr);
 console.log(1, 2, 7, 8, 9);


//============================================================================

 const restaurent = {
    name: 'Classico Italiano',
    location: 'Via Anelo Tavanti 23 , Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close:24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0 , time = '20:00' , address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    }
};

//add new menu to the main menu , creating new array , not update main array
const newMenu = [...restaurent.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array 
const mainMenuCopy = [...restaurent.mainMenu];

// Join 2 arrays
const menu = [...restaurent.mainMenu, ...restaurent.starterMenu];
console.log(menu);

// spread operator(...) works on iterable : arrays, strings, maps, sets, NOT objects
const str = 'Mashru';
const letters = [...str,' ', 'R.'];
console.log(letters);
console.log(...str);


// console.log(`${...str} Rahman`); //error


// real world example
const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
console.log(ingredients);

restaurent.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurent.orderPasta(...ingredients);

// Objects
const newRestaurent = {foundedIn: 1998, ...restaurent, founder: 'Guiseppe'};
console.log(newRestaurent);

const restaurentCopy = {...restaurent};
restaurentCopy.name = "Ristorante Roma";
console.log(restaurent);
console.log(restaurentCopy);*/


/*// 106. REST Pattern and Parameters 

const restaurent = {
    name: 'Classico Italiano',
    location: 'Via Anelo Tavanti 23 , Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close:24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0 , time = '20:00' , address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

restaurent.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurent.orderPizza('mashroom');


// 1) Dsstranturing 

// SPREAD, because on RIGHT side of = 
const arr = [1,2, ...[3, 4]];

// RESTm beause on LEFT side of =
const [a, b, ...others] = [2, 3, 4, 5];
console.log(a, b, others);


const [pizza, , risotto, ...otherFood] = [...restaurent.mainMenu, ...restaurent.starterMenu];//REST pattern must be the last element 
console.log(pizza, risotto, otherFood);


// Objects

const {sat:weekEnd, ...weekDays } = restaurent.openingHours;
console.log(weekDays);

//  2) Functions 
const add = function(...numbers) {
    console.log(numbers);
    let sum = 0;

    for(let i=0; i<numbers.length; i++) sum += numbers[i];
    console.log(`sum = ${sum}`);
}
add(2, 3);
add(3, 5, 6, 2);
add(8, 6, 9, 4, 3, 2, 1 );

const x = [23, 5, 7];
add(...x);*/

/* // 107. Short Circuting (&& and) 

console.log('---------- OR ----------');
// Use any data type, return any data type , short-circuiting
console.log( 3 || 'Mashru'); //result of a or operator dose not have to be always boolean 
// short-circuting : if the first valu is truthy value, it will imeditely  return the first value

console.log('' || 'Mashru');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const restaurent = {
    name: 'Classico Italiano',
    location: 'Via Anelo Tavanti 23 , Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close:24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0 , time = '20:00' , address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// restaurent.numGuests = 23 ;
// const guests1 = restaurent.numGuests ? restaurent.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurent.numGuests || 10;
// console.log(guests2);

console.log('---------- AND ----------');

console.log( 0 && 'Mashru'); //return first falsy value;
console.log( 7 && 'Mashru'); 

console.log('hello' && 23 && null && 'Mashru');

if(restaurent.orderPizza) {
    restaurent.orderPizza('mashrooms', 'spinach');
}

restaurent.orderPizza && restaurent.orderPizza('mushrooms', 'spinach');

// 108. The Nullish Coalescing Operator 

restaurent.numGuests = 0;
const guests = restaurent.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurent.numGuests ?? 10;
console.log(guestCorrect); */

/*// 109. Coding challange #1 
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    printGoals : function( ...players ) {
        for(let i = 0 ; i < players.length ; i++ ) {
            let goals = 0;
            for(let j = 0 ; j < this.scored.length ; j++ ){
                if(players[i] == this.scored[j]) goals++;
            }
            console.log(`${players[i]} : ${goals}`);
        }
    },
    
};
// 1.
//const [players1, players2] = [game.players[0] , game.players[1]]; //my solution
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
//const[gk, ...fieldPlayers] = [...players1];//my solution
const[gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
//const allPlayers = [...game.players[0], ...game.players[1]];//my solution
const allPlayers = [...players1, ...players2];
console.log(allPlayers);


// 4.
//const [...playersFinal] = [...players1, 'Thiago' , 'Coutinho', 'Perisic']; //my solution
const playersFinal = [...players1, 'Thiago' , 'Coutinho', 'Perisic'];
console.log(playersFinal);

// 5.
//const {team1, x:draw, team2 } = game.odds;//my solution
const {odds: {team1, x:draw, team2}} = game;
console.log(team1, draw, team2);


// 6.
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');//my solution
game.printGoals(...game.scored);
const printGoalNew = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}

printGoalNew ('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoalNew(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win!');
team1 > team2 && console.log('Team 2 is more likely to win!'); */

/*// 110. Looping Arrays The for-of Loop
const restaurent = {
    name: 'Classico Italiano',
    location: 'Via Anelo Tavanti 23 , Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close:24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0 , time = '20:00' , address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

const menu = [...restaurent.starterMenu, ...restaurent.mainMenu];

for(const item of menu) console.log(item);

for(const item of menu.entries()) {
    console.log(`${item[0] + 1 } : ${item[1]} `);

}
for(const [i, el] of menu.entries()) {
    console.log(`${i + 1 } : ${el} `);
    
}
console.log([...menu.entries()]); */

// 111. Enhanced Object Literals

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    // thu: {
    //     open:12,
    //     close:22,
    // },
    [weekDays[3]]: {
        open:12,
        close:22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    // [`day-${2 + 4}`]: {
    //     open: 0,
    //     close:24,
    // },
    [weekDays[5]]: {
        open: 0,
        close:24,
    },
};
const restaurent = {
    name: 'Classico Italiano',
    location: 'Via Anelo Tavanti 23 , Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //openingHours : openingHours, //before ES6

    // ES6 enhanced object literals
    openingHours,

    // order: function(starterIndex, mainIndex) {
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // },
    order (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    

    orderDelivery ({starterIndex = 1, mainIndex = 0 , time = '20:00' , address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
}; 

/*// 112. Optional Chaining (._) 

if(restaurent.openingHours && restaurent.openingHours.mon) console.log(restaurent.openingHours.mon.open);

//console.log(restaurent.openingHours.mon.open);//errror
// with optional chaining
console.log(restaurent.openingHours.mon?.open); //undefined
console.log(restaurent.openingHours?.mon?.open);

//example 
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
    console.log(day);
    //const open = restaurent.openingHours[day]?.open; //gives undefinde value 
     //console.log(`on ${day}, we open at ${open}`);

    // With Or operator
    // const open = restaurent.openingHours[day]?.open || 'closed'; //here 0 is a falsy value and thet gives undefined, Solution Nullish Coaleseing operator
    //  console.log(`on ${day}, we open at ${open}`);
    // With Nullis coaleseing
    const open = restaurent.openingHours[day]?.open ?? 'closed';
     console.log(`on ${day}, we open at ${open}`);
}

// Methods 
// if a method exists ?
 console.log(restaurent.order?.(0, 1) ?? 'Method dose not exist');
 console.log(restaurent.orderRisotto?.(0, 1) ?? 'Method dose not exist');

//  Arrays
// const users = [
//     {name: 'mashru', email: 'hello@mashru.io'}
// ];
const users = [];

console.log(users[0]?.name ?? 'User array empty');

if(users.length > 0 ) console.log(users[0].name); else console.log('user array empty');*/

/*// 113. Looping Objects object keys value and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

//console.log(`we are open on ${properties.length} days`);
let openStr = `we are open on ${properties.length} days:`;

for(const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entries Objects
const entries = Object.entries(openingHours);
console.log(entries);

// for(const x of entries) {
//     console.log(x);
// }
// [key, value]
for(const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

/*// 114. Coding Challenge #2

// from challange #1
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    printGoals : function( ...players ) {
        for(let i = 0 ; i < players.length ; i++ ) {
            let goals = 0;
            for(let j = 0 ; j < this.scored.length ; j++ ){
                if(players[i] == this.scored[j]) goals++;
            }
            console.log(`${players[i]} : ${goals}`);
        }
    },
    
};

// 1.
for(const [i, el] of game.scored.entries()) {
    console.log(`Goal ${i+1}: ${el}`);
}

// 2. 
// const oddsNew = game.odds;
// console.log(oddsNew);
// let sum = 0;
// let oddsLength = 0;
// for(const x of Object.values(oddsNew)) {
//    sum += x;
//    oddsLength++;
// }
// console.log(sum/oddsLength);


// 2.
const entries = Object.entries(game.odds);
console.log(entries);
let newSum = 0;
for(const [team, odd] of entries) {
    newSum += odd;
}
const avg = newSum / entries.length;
console.log(avg);

// 3. 
//const entries = Object.entries(game.odds);
for(const [team, odd] of entries) {
    const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamString}: ${odd}`);
}*/

/*// 115. Sets
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Mashru'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Brade'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Risotto');
console.log(ordersSet);
console.log(ordersSet[2]); //undefined, there is no indexs

for(const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
const newStaffUnique = [...new Set(staff)];//sprade operator to create array;
console.log(newStaffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set("Mahsrur").size);*/

/*// 116. Maps Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
    .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open',11)
    .set('close', 23)
    .set(true,'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest);

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
console.log(rest);
console.log(rest.size);

// rest.set([1,2], 'Test')
// console.log(rest);

// console.log(rest.get([1,2]));//undefinde
const arr = [1,2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);

console.log(rest.get(arr));//work*/

/*// 117. Maps Iteration 
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2,'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true,'Correct 🎉'],
    [false, 'Try again! ❌'],
]);
console.log(question);

// Converting object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// iteration
// Quiz App 
console.log(question.get('question'));
for(const [key, value] of question) {
    if(typeof(key) === 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt('Your answer'));
//const answer = 3;
console.log(answer);

console.log(question.get(answer === question.get('correct')));

// conver map to array 
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);*/


// 119. Coding Challenge #3 
const gameEvents = new Map ([
    [17,'⚽ GOAL'],
    [36, '🔁Substitution'],
    [47,'⚽ GOAL'],
    [61, '🔁Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🟥 red card'],
    [70, '🔁Substitution'],
    [72, '🔁Substitution'],
    [76,'⚽ GOAL'],
    [80,'⚽ GOAL'],
    [92, '🟨 Yellow card'],
]);

// Q1. Create an array "events" of the different game events that happend (no Duplicates)

const eventsSet = new Set();
for(const [key, value] of gameEvents) {
    eventsSet.add(value);
}
const events = [...eventsSet];


// const events = [...new Set(gameEvents.values())];

console.log(gameEvents);
console.log(events);


// Q2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// Q3. Print the following string to the console: "An event happend. on average, every 9 minutes." (keep in mine that a game has 90 minuters)
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happend. on average, ever ${time/gameEvents.size} minutes.`);

// Q4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17:  ⚽ GOAL

for(const [key, value] of gameEvents) {
    const str = key<= 45? "FIRST" : "SECOND";
    console.log(`[${str} HALF] ${key} : ${value}`);
}