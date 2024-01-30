// Write a function called greet that takes a person's name as a parameter and returns a greeting message, such as "Hello, [name]!".
function greet(name) {
  console.log(`hello, ${name}!`);

  // console.log("hello, " + name + "!");
}

greet("GOAT");

// Create a function called sumArray that takes an array of numbers as a parameter and prints the sum of all the numbers in the array.

// function sumArray([a,b,c,d,e]) {
//   console.log(`The sum of the numbers in the array is: ${a+b+c}`);
// }
// sumArray([1, 2]);

// let myArray = [a, b, c]

// function sumArray(myArray) {
//   console.log(myArray[0]+myArray[1]+myArray[2]);
// }

// sumArray(2,3,4)

function sumArray(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0)
  console.log(`The sum of the array is: ${sum}`);
}

let my_array_number = [9, 8, 8, 5, 6, 1,5,5,3]

sumArray(my_array_number)

// Create a function named calculateRectangleArea that takes the length and width of a rectangle as parameters and prints the area of the rectangle.

function calculateRectangleArea(l,w) {
  console.log(l * w);
}

calculateRectangleArea(8,4)

// Create a function called calculatePower that takes a base and an exponent as parameters and prints the result of raising the base to the given exponent.

function calculatePower(a,b) {
  // console.log(a ** b);

  console.log(Math.pow(a,b));
}

calculatePower(4,2)