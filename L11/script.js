'use strict';


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// BANKIST APP  

// Data
const account1 = {
    owner:"Md. Mashrur Rahman",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin:1111.
};

const account2 = {
    owner:"Tahmid Khan",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin:2222,
};

const account3 = {
    owner:"Adib Mahmud",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin:333,
};
const account4 = {
    owner:"Mahir Faisal",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin:4444,
};

const accounts = [account1,account2, account3, account4];

//Elements
const labelWelcome = document.querySelector('.welcome');
const labelData = document.querySelector('.data');
const labelBalance = document.querySelector('.balance__balue');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// 144. Creating Dom Element

const displayMovements = function(movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html =`
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__value">${mov}</div>
            </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

displayMovements(account1.movements);

// 148. Computing Usernames
const createUserName = function(accs){
    accs.forEach(function(acc){
        acc.username =  acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
}
createUserName(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// //////////////////////////////////////////////////////////////////////////////////
// // 140. Simple Array Methods

// let arr = ['a','b', 'c', 'd', 'e'];

// // SLICE method - we can extract a part of any array without changing the original array
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE - same as slice but it change the array , splice mutate the original array
// //console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1,2));
// console.log(arr);


// // REVERSE - dose mutate the array
// arr = ['a','b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT - dose not mutate the original array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr, ...arr2);
// console.log(letters.join('-'));


/////////////////////////////////////////////////////////////////////////////////////////
/*// 141. Looping Arrays forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('--------------- FOR OF  -------------');
 for(const movement of movements) {
    if(movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else{
        console.log(`You withdraw ${Math.abs(movement)}`);
    }
}
console.log('--------------- FOR EACH  -------------');
movements.forEach(function(movement) {
    if(movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else{
        console.log(`You withdraw ${Math.abs(movement)}`);
    }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

console.log('--------------- FOR OF with ENTRIES  -------------');
    for(const [i, movement] of movements.entries()){  // this is how we access the counter variabel in for of loop
        if(movement > 0) {
            console.log(`Movement ${i +1} : You deposited ${movement}`);
        }
        else{
            console.log(`Movement ${i +1} : You withdraw ${Math.abs(movement)}`);
        }
    }

console.log('--------------- FOR EACH with INDEX  -------------');
    movements.forEach(function(movement,index, array) {
        if(movement > 0) {
            console.log(`Movement ${index} : You deposited ${movement}`);
        }
        else{
            console.log(`Movement ${index} : You withdraw ${Math.abs(movement)}`);
        }
    });*/



///////////////////////////////////////////////////////////////////////////////
/*// 142. ForEach with Maps and Sets
// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['BDT', 'Taka'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key} : ${value}`);
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'BDT', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _ , map){
    console.log(`${_} : ${value}`);
});*/


/*// 145. Coding Challenge #1 
const checkDog = function(dogsJulia, dogsKate) {
    const dogsJuliaNew = dogsJulia.slice();
    dogsJuliaNew.splice(0,-1);
    dogsJuliaNew.splice(-2);
    console.log(dogsJuliaNew);

    const dogs = dogsJuliaNew.concat(dogsKate);
    console.log(dogs);

    dogs.forEach(function(dog, i){
        if(dog > 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        }
        else{
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    });
}
checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);*/


/*// 147. The Map Method
// map returns new array with new elements
const eurToUsd = 1.1;

// --------------  using callback function  -----------------
// const movementsUsd = movements.map(function(mov) {
//     return Math.floor(mov * eurToUsd);
// })

// ----------------  using arrow function  ------------------
const movementsUsd = movements.map(mov => Math.floor(mov * eurToUsd));
console.log(movements);
console.log(movementsUsd);

const movementsUsdFor = [];
for(const mov of movements) {
    movementsUsdFor.push(Math.floor(mov * eurToUsd));
}
console.log(movementsUsdFor);

// const movementsDescriptions = movements.map((mov, i , arr) => {
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`; 
//     if(mov > 0){
//         return `Movement ${i + 1}: You deposited ${mov}`; 
//     }
//     else {
//         return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`; 
//     }
// });

const movementsDescriptions = movements.map((mov, i , arr) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`);

console.log(movementsDescriptions);*/