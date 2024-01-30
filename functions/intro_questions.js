// Write a function called greet that takes a person's name as a parameter and returns a greeting message, such as "Hello, [name]!".
function greet(name) {
  return "Hello, " + name + "!";
}

// Example usage:
const greeting = greet("John");
console.log(greeting); // Output: Hello, John!

// Create a function called sumArray that takes an array of numbers as a parameter and prints the sum of all the numbers in the array.

// function sumArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log("Sum of the array:", sum);
// }

// // Example usage:
// const numbersArray = [1, 2, 3, 4, 5];
// sumArray(numbersArray); // Output: Sum of the array: 15


function sumArray(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log("Sum of the array:", sum);
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];

sumArray(numbersArray); // Output: Sum of the array: 15
// The reduce method is applied to the numbers array.
// The arrow function (acc, num) => acc + num takes two parameters (acc for accumulator and num for the current element) and returns the sum of the accumulator and the current element.
// The initial value of the accumulator is set to 0.
// The result is the sum of all elements in the array.
// This approach leverages the concise syntax of arrow functions and the power of the reduce method for handling array summation.

// Create a function named calculateRectangleArea that takes the length and width of a rectangle as parameters and prints the area of the rectangle.

function calculateRectangleArea(length, width) {
    const area = length * width;
    console.log("Area of the rectangle:", area);
}

// Example usage:
const length = 4;
const width = 6;
calculateRectangleArea(length, width); // Output: Area of the rectangle: 24


// Create a function called calculatePower that takes a base and an exponent as parameters and prints the result of raising the base to the given exponent.

function calculatePower(base, exponent) {
    const result = Math.pow(base, exponent);
    console.log("Result of raising", base, "to the power of", exponent, ":", result);
}

// Example usage:
const baseNumber = 2;
const exponentNumber = 3;
calculatePower(baseNumber, exponentNumber); // Output: Result of raising 2 to the power of 3: 8
