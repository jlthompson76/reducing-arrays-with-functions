// 1) Sum of an array
// Write a function that will take an array of numbers as a parameter and return the sum of those numbers. 
//
// Examples:
// sum([3, 4, 5]); // returns 12
// sum([10, 5, 9]); // returns 24
//
// Hint: Try using a loop! Declare the function, then call the function in the same JavaScript file, inside a console.log() statement. Open the Console to display your results.

console.log(`#1 Sum of an array`);
console.log(sum([3, 4, 5]));
console.log(sum([10, 5, 9]));

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } return sum;
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
console.log(average([3, 4, 5]));
console.log(average([10, 5, 9]));

function average(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } let average = sum / numbers.length;
    return average;
}    

// Bonus 1: Refactor your code to re-use a function
// Now, rewrite your `average` function so it *calls your `sum` function* to add the numbers up. This is an example of using a function to reuse code.

console.log(`Bonus 1`);
console.log(averageBonus([3, 4, 5]));
console.log(averageBonus([10, 5, 9]));

function averageBonus(numbers) {
    average = sum(numbers) / numbers.length;
    return average;
}

// Bonus 2:
// Write a function that takes an array of numbers and returns the largest number.
//
// Examples:
// max([7,10, 30, 1]); // returns 30

console.log(`Bonus 2`);
console.log(max([7, 10, 30, 1]));

function max(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        } else {
            max = max;
        }
    } return max;
}

// Bonus 3:
// Write a function that takes two different arrays as parameters, finds the largest number in each array and returns the sum of those two numbers.
//
// Example:
// largestSum([3, 2, 8], [4, 9, 1]); // returns 17

console.log(`Bonus 3`);
console.log(largestSum([3, 2, 8], [4, 9, 1]));

function largestSum(numbers1, numbers2) {
    
    let max1 = max(numbers1);
    let max2 = max(numbers2);
    console.log(max1, max2);
    let largestSum = max1 + max2;
    return largestSum;

    function max(numbers) {
        let max = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (max < numbers[i]) {
                max = numbers[i];
            } else {
                max = max;
            }
        } return max;
    }

    function sum(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        } return sum;
    }
}
