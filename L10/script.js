'use strict';

const bookings = [];
const createBooking = function(
    flightNum,
    numPassengers = 1, 
    price = 199 * numPassengers//ES6
) {

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;


    // inhenced object literal
    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH124',2,800);
createBooking('Lh123',2);
createBooking('Lh123', undefined ,500);