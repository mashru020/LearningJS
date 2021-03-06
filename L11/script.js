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
    pin:3333,
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
const labelBalance = document.querySelector('.balance__value');
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

const displayMovements = function(movements , sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;
    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html =`
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__value">${mov}???</div>
            </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

// displayMovements(account1.movements);

// ----------------------    update UI  ---------------------------
const updateUI = function(acc){
    // dispaly movements 
    displayMovements(acc.movements);
    // display balance
    calcPrintBalance(acc);
    // dispaly summery
    calcDisplaySummery(acc);
}
// ------------------- calculate and print balance -----------------------
// const calcPrintBalance = function(accs) {
//     accs.forEach(function(acc){
//         acc.balance = acc.movements.reduce((accu, mov) => accu + mov),0;
//     });
// }

const calcPrintBalance = function(acc) {
   
    acc.balance = acc.movements.reduce((accu, mov) => accu + mov, 0);
    labelBalance.textContent = `${acc.balance}???`;
}

// calcPrintBalance(account1.movements);

// ------------------------ Display summery ----------------------------------

const calcDisplaySummery = function(acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((accu, mov) => accu + mov, 0);
    labelSumIn.textContent = `${incomes}???`

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((accu, mov) => accu + mov , 0);
    labelSumOut.textContent = `${Math.abs(out)}???`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * acc.interestRate / 100)
        .filter(int => int > 1)
        .reduce((accu, int) => accu + int);
    labelSumInterest.textContent = `${interest}???`;
}
// calcDisplaySummery(account1.movements);
// ---------------------------  Create Username --------------------------
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

// ------------------------- Event Handler  ------------------------------
let currentAccount;

btnLogin.addEventListener('click', function(e){
    //Prevent form from submitting
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    if(currentAccount?.pin === Number(inputLoginPin.value)){
        // Display UI and massage
        labelWelcome.textContent = `welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // clear input field
        inputLoginUsername.value =  inputLoginPin.value = '';
        inputLoginPin.blur();

        // // dispaly movements 
        // displayMovements(currentAccount.movements);
        // // display balance
        // calcPrintBalance(currentAccount);
        // // dispaly summery
        // calcDisplaySummery(currentAccount);

        updateUI(currentAccount);
    }
})


btnTransfer.addEventListener('click',function(e){
    e.preventDefault();
    
    const amount = Number(inputTransferAmount.value);
    const reciverAccount = accounts.find(acc => acc.username === inputTransferTo.value);inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
    if (
        amount > 0 && 
        // reciverAccount &&
        reciverAccount?.username !== currentAccount.username &&
        currentAccount.balance > amount     
    ) {
        currentAccount.movements.push(-amount);
        reciverAccount.movements.push(amount);        
    }
    updateUI(currentAccount);

});

btnLoan.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (
        amount > 0 && 
        currentAccount.movements.some( mov => mov >= amount * .1 )){

            // add movement
            currentAccount.movements.push(amount);

            // update UI
            updateUI(currentAccount);
        }
        inputLoanAmount.value = '';
        inputLoanAmount.blur();
});

btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    

    if(
        inputCloseUsername.value === currentAccount.username && 
        currentAccount.pin === Number(inputClosePin.value)  
    )  {

        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        console.log(index);


        // Delete account
        accounts.splice(index, 1);

        // hide UI
        containerApp.style.opacity = 0;
    }
    inputClosePin.value = inputCloseUsername.value = '';
    inputClosePin.blur();
});

// ------------------------  Sorting --------------------------
let sorted = false;
btnSort.addEventListener('click', function(e){
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
}); 

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
            console.log(`Dog number ${i + 1} is still a puppy ????`);
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

/*// 149. The filter Method
const deposits = movements.filter(function(mov){
   return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositFor = [];
for(const mov of movements ) if(mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);*/

/*// 150. The reduce method

console.log(movements);
// accumulator -> SNOWBALL 
//  ------------  using normal function ------------------
// const balance = movements.reduce(function(accum, cur , i , arr){
//     console.log(`Iteration ${i}: ${accum}`);
//     return accum + cur;
// },0);
// console.log(balance);


// -------------------- using arrow function ------------------
const balance = movements.reduce((accum, cur) => accum + cur,0);
console.log(balance);

let balance2 = 0;
for(const mov of movements) balance2+= mov;
console.log(balance2);

// Maximum value
const maxVal = movements.reduce((accu, cur) => cur > accu ? cur : accu , movements[0]);
console.log(maxVal);*/

/*// 151. Coding challange #2 
const calcAverageHumanAge = function(dogs) {
    const humanAge = dogs.map(dogAge => dogAge<=2 ? 2 * dogAge : 16 + (4 * dogAge));
    const adultDog = humanAge.filter(age => age >= 18 );
    const avgHumanAge = adultDog.reduce((accu, age, i , arr) =>accu + age / arr.length,0);
    
    console.log(humanAge);
    console.log(adultDog);
    console.log(avgHumanAge);
}
calcAverageHumanAge([5,2,4,1,15,8,3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);*/


/*//  152. The magic of chining method
const eurToUsd = 1.1; 

// PIPELINE
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    // .map((mov, i, arr) => {
    //     console.log(arr);
    //     return mov * eurToUsd;
    // })
    .reduce((accu, mov) => accu + mov , 0);

console.log(totalDepositsUSD);*/

/*// 153. Coding challange #3
const calcAverageHumanAge = function(dogs) {
    const avgHumanAge = dogs.map(dogAge => dogAge<=2 ? 2 * dogAge : 16 + (4 * dogAge)).filter(age => age >= 18 ).reduce((accu, age, i , arr) =>accu + age / arr.length,0);
    
}
const avg1 = calcAverageHumanAge([5,2,4,1,15,8,3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);*/

/*// 154. The find method  -- only return the first element in the array that satisfies the condition
const firstWithdrawal = movements.find(mov => mov < 0 );
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

// with find method
const account = accounts.find(acc => acc.owner === 'Tahmid Khan');
console.log(account);


// with for Of loop
const findAcc = function(accounts) {
    for(const acc of accounts){
        if(acc.owner === 'Mahir Faisal') return acc;
    }
}
console.log(findAcc(accounts));*/

/*// 158. Some and Every Method
console.log(movements);

// check equality
console.log(movements.includes(-130)); //return true

//SOME: check condition

console.log(movements.some(mov => mov > 1500));
const anyDeposit = movements.some(mov => mov > 2000)
console.log(anyDeposit);

// EVERY: if every pass the condition then only return the true

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));*/

/*// 159. Falt and flatMap 

const arr = [[1,2,3],[4,5,6],7,8];
console.log(arr.flat()); //remove nested array and make flat array

const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
// console.log(arrDeep.flat());
// console.log(arrDeep);
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((accu, mov) => accu + mov, 0);
console.log(overalBalance);

const overalBalanceNew = accounts.map(acc => acc.movements).flat().reduce((accu, mov) => accu+ mov , 0);
console.log(overalBalanceNew);


// flatMap
const overalBalanceFlatMap = accounts.flatMap(acc => acc.movements).reduce((accu, mov) => accu+ mov , 0);
console.log(overalBalanceFlatMap);*/

/*// 160. Sorting Arrays

const owners = ['Mashru', 'Tahmid', 'Adib', 'Mahir'];
console.log(owners.sort()); //it mutate the array
console.log(owners);

console.log(movements);
//console.log(movements.sort()); // the sort method dose sort the array based on string, Convert itself to string and then convert 

// return < 0 , A, B (keep order)
// return > 0 , B, A (switch order)

// Ascending
// movements.sort((a,b) => {
//     if(a > b) return 1;
//     if(a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a,b) => {
//     if(a > b) return -1;
//     if(a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);*/

/*// 161. More way to creating and filling Array
const arr = [1, 2, 3, 4, 5, 6];
console.log(new Array(1, 2, 3, 4, 5, 6));


// emply arr + fill method
const x = new Array(7);
console.log(x);
//console.log(x.map(() => 5));

//x.fill(1);
//x.fill(1, 3); // 2nd parameter is the starting position
x.fill(1, 3,5);// 3rd parameter is the end parameter
console.log(x);

arr.fill(23, 2, 5);
console.log(arr);

// Array.form
const Y = Array.from({length: 7}, () => 1);
console.log(Y);

const z = Array.from({length: 7 }, ( _ , i) => i +1);
console.log(z);

const arrDiceRolls = Array.from({length: 100}, (_, i)=> Math.floor((Math.random() * 6) + 1));
console.log(arrDiceRolls);



labelBalance.addEventListener('click', function() {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
     el => Number(el.textContent.replace('???', ''))
    );

    console.log(movementsUI);

    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
    console.log(movementsUI2);
});*/

// 163. Coding Challenge #4

const dogs = [
    {
        weight:22,
        curFood: 250,
        owners: ['Alice', 'Bob']
    },
    {
        weight:8,
        curFood: 200,
        owners: ['Matilda']
    },
    {
        weight:13,
        curFood: 275,
        owners: ['Sarah', 'John']
    },
    {
        weight:32,
        curFood: 340,
        owners: ['Michael']
    }
]

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc( dog.weight ** 0.75 * 28)
));
console.log(dogs);

// 2. 
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(dogSarah);
console.log(`Sarah's dos is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little' }!`);


// 3. 
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners)
    //.flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood)
    .map(dog => dog.owners).flat();
    console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ') }'s dogs eat too much!'`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog => dog.curFood > (dog.recFood* 0.9) && dog.curFood < (dog.recFood * 1.1); 
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood);
console.log(dogsSorted);