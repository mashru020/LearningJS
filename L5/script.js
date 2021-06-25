'use strict';

/*//59. Fixing error using google,mdn and stack overflow
// Problem:
// we work for a company building a smart home thermometer. Our most recent task is theis: "Given an arroy of temperatures of one day, calculate the termerature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is the temperature ampletude? ans: difference between highest and lowest temperature.
//  - Hot to compute  max and min temperatures?
//  - What's a sensor error? and what do do?

// 2) breaking up into sub-problems
//  - How to ingonre errors?
//  - Find max value in temp array
//  - Find min value in temp array
//  - Subtruct min from max (Amplitude) and return it.

const caclTempAmplitide = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = caclTempAmplitide(temperatures);
console.log(amplitude);

// problem 2:
// Function should now receive 2 array of temps

//  1) Understanding the problems
//  - whit 2 arrays, should wi impliment functionalit twice? NO! just marge two arrays

//  2) Breaking up into sub-problems
//  - marge 2 arrays

const caclTempAmplitideNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = caclTempAmplitideNew([3, 5, 1], [2, 7, -1]);
console.log(amplitudeNew);*/

//61.Debugging with the conosole errron and breakpoint
/*const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C. FIX
    value: Number(prompt('Degrees censius:')),
  };

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  // console.log(measurement);

  //B. FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//A.  IDENTIFY
console.log(measureKelvin());*/
// 62. Coding Challange #1

/*const maxTemp = [17, 21, 23];

const printForecast = function (temps) {
  let text = '';
  if (temps.length > 0) {
    text = text + '... ';
    for (let i = 0; i < temps.length; i++) {
      // text += temps[i] + 'C in ' + Number(i + 1) + ' days ... ';
      text += `${temps[i] + ' C in '}` + `${i + 1 + ' days ... '}`;
    }
  }
  console.log(text);
};

printForecast(maxTemp);*/
