'use strict';


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
		owner: 'Md Mashrur Rahman',
		movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
		interestRate: 1.2, // %
		pin: 1111,
	
		movementsDates: [
			'2020-11-18T21:31:17.178Z',
			'2020-12-23T07:42:02.383Z',
			'2021-01-28T09:15:04.904Z',
			'2021-07-01T10:17:24.185Z',
			'2021-08-08T14:11:59.604Z',
			'2021-08-27T17:01:17.194Z',
			'2021-09-24T23:36:17.929Z',
			'2021-09-29T10:51:36.790Z',
		],
		currency: 'EUR',
		locale: 'pt-PT', // de-DE
	};
	
	const account2 = {
		owner: 'Tahmid Khan',
		movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
		interestRate: 1.5,
		pin: 2222,
	
		movementsDates: [
			'2020-11-01T13:15:33.035Z',
			'2020-11-30T09:48:16.867Z',
			'2020-12-25T06:04:23.907Z',
			'2021-01-25T14:18:46.235Z',
			'2021-02-05T16:33:06.386Z',
			'2021-04-10T14:43:26.374Z',
			'2021-06-25T18:49:59.371Z',
			'2021-09-26T12:01:20.894Z',
		],
		currency: 'USD',
		locale: 'en-US',
	};


	const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function(date, locale){
	const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

	const daysPassed = calcDaysPassed(date,new Date())
	
	if(daysPassed === 0)return 'Today';
	if(daysPassed === 1) return 'Yesterday';
	if(daysPassed <= 7) return `${daysPassed} days ago`;
	// else {
	// 	const day = `${date.getDate()}`.padStart(2, 0);
	// 	const month = `${date.getMonth() + 1}`.padStart(2, 0);
	// 	const year = date.getFullYear();
	// 	return `${day}/${month}/${year}`;
	// }	
	return new Intl.DateTimeFormat(locale).format(date);
}

// Internationalization Balance
const formatCur = function(value, locale, currency) {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency,
	}).format(value);
}

const displayMovements = function (acc, sort = false) {
	containerMovements.innerHTML = '';
	
	const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

	movs.forEach(function (mov, i) {

		const type = mov > 0 ? 'deposit' : 'withdrawal';
		const date = new Date(acc.movementsDates[i]);
		const displayDate = formatMovementDate(date, acc.locale);
		const html = `
			<div class="movements__row">
				<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
				<div class="movements__date">${displayDate}</div>
				<div class="movements__value">${formatCur(mov, acc.locale, acc.currency)}</div>
			</div>
		`;

		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};

const calcDisplayBalance = function (acc) {
		acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
		labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};
	
const calcDisplaySummary = function (acc) {
		const incomes = acc.movements
			.filter(mov => mov > 0)
			.reduce((acc, mov) => acc + mov, 0);
		labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
	
		const out = acc.movements
			.filter(mov => mov < 0)
			.reduce((acc, mov) => acc + mov, 0);
		labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);
	
		const interest = acc.movements
			.filter(mov => mov > 0)
			.map(deposit => (deposit * acc.interestRate) / 100)
			.filter((int, i, arr) => {
				// console.log(arr);
				return int >= 1;
			})
			.reduce((acc, int) => acc + int, 0);
		labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};
	
	const createUsernames = function (accs) {
		accs.forEach(function (acc) {
			acc.username = acc.owner
				.toLowerCase()
				.split(' ')
				.map(name => name[0])
				.join('');
		});
	};
	createUsernames(accounts);
	
	const updateUI = function (acc) {
		// Display movements
		displayMovements(acc);
	
		// Display balance
		calcDisplayBalance(acc);
	
		// Display summary
		calcDisplaySummary(acc);
	};
	
	const startLogOutTimer = function() {
		
		const tick = function() {
			const min = String(Math.trunc(time / 60)).padStart(2,0);
			const sec = String(time % 60).padStart(2,0);
			// In each call, print the remaining time to UI
			labelTimer.textContent = `${min}:${sec}`;
				
			// When 0 seconds, stop timer and Log out user
			if(time === 0 ) {
				clearInterval(timer);
				labelWelcome.textContent = `Log in to get started`;
				
				containerApp.style.opacity = 0;
			}
			// Decrese 1s
			time--;
		}

		// Set time to 5 minutes
		let time = 120;

		// call timer every second
		tick();
		const timer = setInterval (tick ,1000);
		return timer;
	};
	///////////////////////////////////////
	// Event handlers
	let currentAccount, timer;
	
	// FAKE ALWAYS LOGGED In 
	// currentAccount = account1;
	// updateUI(currentAccount);
	// containerApp.style.opacity = 100;

	/*// Experiment API
	const now = new Date();
	const options = {
		hour: 'numeric',
		minute: 'numeric',
		day: 'numeric',
		month:'long',
		// month: '2-digit',
		// month: 'numeric',
		year: 'numeric',
		weekday: 'short',

	}

	const local = navigator.language;
	console.log(local);


	labelDate.textContent = new Intl.DateTimeFormat(local, options).format(now);
	//labelDate.textContent = new Intl.DateTimeFormat('en-GB').format(now);
	//labelDate.textContent = new Intl.DateTimeFormat('ar-SY').format(now);
	//labelDate.textContent = new Intl.DateTimeFormat('pt-PT', options).format(now);*/

	btnLogin.addEventListener('click', function (e) {
		// Prevent form from submitting
		e.preventDefault();
	
		currentAccount = accounts.find(
			acc => acc.username === inputLoginUsername.value
		);
		console.log(currentAccount);
	
		if (currentAccount?.pin === +inputLoginPin.value) {
			// Display UI and message
			labelWelcome.textContent = `Welcome back, ${
				currentAccount.owner.split(' ')[0]
			}`;
			
			containerApp.style.opacity = 100;

			// create current date
			const now = new Date();
	
			// const day = `${now.getDate()}`.padStart(2, 0);
			// const month = `${now.getMonth() + 1}`.padStart(2, 0);
			// const year = now.getFullYear();
			// const hour = `${now.getHours()}`.padStart(2, 0);
			// const min =`${now.getMinutes()}`.padStart(2, 0);


			// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
			// day/month/year

			// Internationalization Date
			const options = {
				hour: 'numeric',
				minute: 'numeric',
				day: 'numeric',
				//month:'long',
				// month: '2-digit',
			 	month: 'numeric',
				year: 'numeric',
				// weekday: 'short',

			}
			// const locale = navigator.language;
			// console.log(locale);
			labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
	
			// Clear input fields
			inputLoginUsername.value = inputLoginPin.value = '';
			inputLoginPin.blur();

			if(timer) clearInterval(timer);
			timer = startLogOutTimer();
			
	
			// Update UI
			updateUI(currentAccount);
		}
	});
	
	btnTransfer.addEventListener('click', function (e) {
		e.preventDefault();
		const amount = +inputTransferAmount.value;
		const receiverAcc = accounts.find(
			acc => acc.username === inputTransferTo.value
		);
		inputTransferAmount.value = inputTransferTo.value = '';
	
		if (
			amount > 0 &&
			receiverAcc &&
			currentAccount.balance >= amount &&
			receiverAcc?.username !== currentAccount.username
		) {
			// Doing the transfer
			currentAccount.movements.push(-amount);
			receiverAcc.movements.push(amount);

			// Transfer Date
			currentAccount.movementsDates.push(new Date().toISOString());
			receiverAcc.movementsDates.push(new Date().toISOString());
	
			// Update UI
			updateUI(currentAccount);

			// Reset the timer
			clearInterval(timer);
			timer = startLogOutTimer();
		}
	});
	
	btnLoan.addEventListener('click', function (e) {
		e.preventDefault();
	
		const amount = Math.floor(inputLoanAmount.value);
	
		if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
			// setTimeout Function
			setTimeout( function() {

				// Add movement
				currentAccount.movements.push(amount);

				// Transfer Date
				currentAccount.movementsDates.push(new Date().toISOString());
		
				// Update UI
				updateUI(currentAccount);
				clearInterval(timer);
				timer = startLogOutTimer();
			},2500);
	}
		inputLoanAmount.value = '';
		
	});
	
	btnClose.addEventListener('click', function (e) {
		e.preventDefault();
	
		if (
			inputCloseUsername.value === currentAccount.username &&
			+inputClosePin.value === currentAccount.pin
		) {
			const index = accounts.findIndex(
				acc => acc.username === currentAccount.username
			);
			console.log(index);
			// .indexOf(23)
	
			// Delete account
			accounts.splice(index, 1);
	
			// Hide UI
			containerApp.style.opacity = 0;
		}
	
		inputCloseUsername.value = inputClosePin.value = '';
	});
	
	let sorted = false;
	btnSort.addEventListener('click', function (e) {
		e.preventDefault();
		displayMovements(currentAccount, !sorted);
		sorted = !sorted;
	});
	
	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
	// LECTURES


	/*// 166.Converting and Checking Numbers
	console.log(23 === 23.0);

	// Base 10 - 0 to 9
	// Base 2 - 0 1

	console.log(0.1 + 0.2);
	console.log( 0.1 + 0.2 === 0.3);

	// conversion
	console.log(Number('23'));
	console.log(+'23');

	// Parsing
	console.log(Number.parseInt('30px', 10));
	console.log(Number('e23', 10));

	console.log(Number.parseInt('2.5rem'));
	console.log(Number.parseFloat('2.5rem'));
	//console.log(parseFloat('2.5rem'));

	// not a number check
	console.log(Number.isNaN(20));
	console.log(Number.isNaN('20'));
	console.log(Number.isNaN('20X'));
	console.log(Number.isNaN(+'20X'));
	console.log(Number.isNaN(23 / 0));

	// checking if the value in number
	console.log(Number.isFinite(20));
	console.log(Number.isFinite('20'));
	console.log(Number.isFinite(+'20X'));
	console.log(Number.isFinite(20 / 0));

	console.log(Number.isInteger(20));
	console.log(Number.isInteger(20.0));
	console.log(Number.isInteger(23 / 0));*/


	/*// 167. Math and Rounding
	console.log(Math.sqrt(25));
	console.log(25 ** (1 / 2));
	console.log(8 ** (1 / 3));
	console.log(Math.max(5, 12, 36, 6 ));
	console.log(Math.max(2, 3, '23', 14));
	console.log(Math.max(2, 3, '23px', 14));

	console.log(Math.min(2, 3, 23, 1, 14));
	console.log(Math.PI * Number.parseFloat('10px') ** 2);

	console.log(Math.trunc(Math.random() * 6) + 1);


	const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1 ) + min;
	console.log(randomInt(10, 20));

	// Rounding Integers
	console.log(Math.trunc(23.3));

	console.log(Math.round(25.3));
	console.log(Math.round(25.8));

	console.log(Math.ceil(25.3));
	console.log(Math.ceil(25.8));

	console.log(Math.floor(25.3));
	console.log(Math.floor(25.8));

	console.log(Math.trunc(-23.3));
	console.log(Math.floor(-23.3));

	// Rounding Decimals
	console.log((2.7).toFixed(0));// always return a string
	console.log((2.7).toFixed(3));
	console.log((2.2345).toFixed(2));
	console.log(+(2.2345).toFixed(2));*/

	/*// 168. The Reminder Operator
	
	console.log(5 % 2);
	console.log(5 / 2);
	console.log(8 % 3);
	console.log( 8 / 3);

	const isEven = n => n % 2 === 0;
	console.log(isEven(2));
	console.log(isEven(7));
	labelBalance.addEventListener('click', function (){
		[...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
			if(i % 2 === 0 ) row.style.backgroundColor = 'orangered';
			if(i % 2 === 1) row.style.backgroundColor = 'blue';
		});
	});*/

	/*// 169. Working with BigInt
	console.log(2 ** 53 - 1);
	console.log(Number.MAX_SAFE_INTEGER)

	console.log(2 ** 53 + 1);
	console.log(2 ** 53 + 2);
	console.log(2 ** 53 + 3);
	console.log(2 ** 53 + 4);

	console.log(23940578193057840893457n); // n convert regular numver to big number
	console.log(BigInt(123456789));

	// operation
	console.log(10000n + 10000n);
	console.log(123456789n * 10000n);
	const huge = 123456789n;
	const num =23;
	console.log(huge * BigInt(num));

	console.log( 20n > 10);
	console.log(20n === 20);
	console.log(typeof 20n);
	console.log(20n == '20');

	console.log(huge + ' is really big!!!');

	console.log(10n / 3n);
	console.log(10/3);

	//console.log(Math.sqrt(16n));*/

	// 170. Creating Dates
	/*
	const now = new Date();
	console.log(now);

	console.log(new Date('Aug 02 2021 18:05:34'));
	console.log(new Date('2021 12 31'));

	console.log(new Date('11, 17, 2020'));
	console.log(new Date(account1.movementsDates[0]));

	console.log(new Date(2021, 10, 19, 15,23,5));

	console.log(new Date(0));
	console.log(new Date(3 * 24* 60 * 60 * 1000));
	
	// working with dates
	const future = new Date(2021, 10, 19, 15,23);
	console.log(future);

	console.log(future.getFullYear());
	console.log(future.getMonth());
	console.log(future.getDate());
	console.log(future.getDay());
	console.log(future.getHours());
	console.log(future.getMinutes());
	console.log(future.getSeconds());
	console.log(future.toISOString());
	console.log(future.getTime());

	console.log(new Date(1637313780000));
	console.log(Date.now());

	future.setFullYear(2040);
	console.log(future);*/

	// 171. Adding Dates to the Bankist App

	/*// 172. Operations With Dates

	const future = new Date(2021, 10, 19, 15,23);
	//console.log(Number(future));
	console.log(+future);

	const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
	const days1 = calcDaysPassed(
		new Date(2021, 3, 24), 
		new Date(2021, 3, 19)
	);
	console.log(days1);*/

	// 173. Internationalization Dates (Intl)
	/*// 174. Internationalization Numbers 
	const num = 2884764.23;

	const options1 = {
		style: "unit",
		unit: 'mile-per-hour',
		useGrouping: false,
	}
	const options2 = {
		style: "unit",
		unit: 'celsius',
	}
	const options3 = {
		style: 'percent',
	}
	const options4 = {
		style: "currency",
		currency: 'EUR',
	}
	console.log('==================== Unit-> mile-per-hour ========================')
	console.log('US      : ', new Intl.NumberFormat('en-US').format(num));
	console.log('Germany : ', new Intl.NumberFormat('de-DE', options1).format(num));
	console.log('Serya   : ', new Intl.NumberFormat('ar-SY', options1).format(num));
	console.log(navigator.language, 'Browser : ', new Intl.NumberFormat(navigator.language, options1).format(num));
	console.log('==================== Unit -> celsius ========================');
	console.log('Germany : ', new Intl.NumberFormat('de-DE', options2).format(num));
	console.log('Serya   : ', new Intl.NumberFormat('ar-SY', options2).format(num));
	console.log(navigator.language, 'Browser : ', new Intl.NumberFormat(navigator.language, options2).format(num));
	console.log('==================== currency ========================');
	console.log('Germany : ', new Intl.NumberFormat('de-DE', options4).format(num));
	console.log('Serya   : ', new Intl.NumberFormat('ar-SY', options4).format(num));
	console.log(navigator.language, 'Browser : ', new Intl.NumberFormat(navigator.language, options4).format(num));
	console.log('==================== percent ========================');
	console.log('Germany : ', new Intl.NumberFormat('de-DE', options3).format(num));
	console.log('Serya   : ', new Intl.NumberFormat('ar-SY', options3).format(num));
	console.log(navigator.language, 'Browser : ', new Intl.NumberFormat(navigator.language, options3).format(num));*/

	/*// 175. Timers -> setTimeout and setInterval
	
	// setTimeout
	//setTimeout((ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} ????`),3000, 'olives', 'spinach');
	const ingredients = ['olives', 'spinach'];
	const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} ????`),2000, ...ingredients);
	console.log('Waiting...');

	if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

	// setInterval
	setInterval(function() {
		const now = new Date();
		console.log(now);
	},1000);*/

	// 176. Implementing Countdown Timer

