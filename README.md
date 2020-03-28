### Reducing arrays with functions

In the exercises below, you will build several skills:

* Learn two common ways to **reduce** the values in an array (i.e. transform many values into a single value, which is common in programming)
* Organize your code into functions, making it more reusable
* (as a Bonus) Use a function **inside** another function, making your applications shorter and cleaner

#### 1) Sum of an array
Write a function that will take an array of numbers as a parameter and return the sum of those numbers. 

Examples:

`sum([3, 4, 5]); // returns 12`
`sum([10, 5, 9]); // returns 24`

Hint: Try using a loop! Declare the function, then call the function in the same JavaScript file, inside a `console.log()` statement. Open the Console to display your results.


#### 2) Average of an array
Write code that takes an array of numbers as a parameter and returns the average of those numbers.

Examples:

`average([3, 4, 5]); // returns 4`
`average([10, 5, 9]); // returns 8`

Hint: calculating the average requires *only one more step* after finding the sum.


#### Bonus 1: Refactor your code to re-use a function
Now, rewrite your `average` function so it *calls your `sum` function* to add the numbers up. This is an example of using a function to reuse code.


#### Bonus 2:
Write a function that takes an array of numbers and returns the largest number.

Examples:

`max([7,10, 30, 1]); // returns 30`

#### Bonus 3:
Write a function that takes two different arrays as parameters, finds the largest number in each array and returns the sum of those two numbers.

Example:

`largestSum([3, 2, 8], [4, 9, 1]); // returns 17`
