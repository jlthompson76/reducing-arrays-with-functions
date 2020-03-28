// 1) Sum of an array
// Write a function that will take an array of numbers as a parameter and return the sum of those numbers. 
//
// Examples:
// sum([3, 4, 5]); // returns 12
// sum([10, 5, 9]); // returns 24
//
// Hint: Try using a loop! Declare the function, then call the function in the same JavaScript file, inside a console.log() statement. Open the Console to display your results.

console.log(`#1 Sum of an array`);
let numbers = [3, 4, 5];
console.log(sum());

function sum() {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    } return total;
}

// 2) Average of an array
// Write code that takes an array of numbers as a parameter and returns the average of those numbers.
//
// Examples:
// average([3, 4, 5]); // returns 4
// average([10, 5, 9]); // returns 8
//
// Hint: calculating the average requires only one more step after finding the sum.

console.log(`#2 Average of an array`);
numbers = [10, 5, 9];
console.log(average());

function average() {
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    } let average = total / numbers.length;
    return average;
}    

// Bonus 1: Refactor your code to re-use a function
// Now, rewrite your `average` function so it *calls your `sum` function* to add the numbers up. This is an example of using a function to reuse code.

console.log(`Bonus 1`);
console.log(averageBonus());

function averageBonus() {
    average = sum() / numbers.length;
    return average;
}

// Bonus 2:
// Write a function that takes an array of numbers and returns the largest number.
//
// Examples:
// max([7,10, 30, 1]); // returns 30

console.log(`Bonus 2`);
console.log(largestNumber());

function largestNumber() {

}

// Bonus 3:
// Write a function that takes two different arrays as parameters, finds the largest number in each array and returns the sum of those two numbers.
//
// Example:
// largestSum([3, 2, 8], [4, 9, 1]); // returns 17

console.log(`Bonus 3`);
console.log(largestNumberSum());

function largestNumberSum() {
    
}