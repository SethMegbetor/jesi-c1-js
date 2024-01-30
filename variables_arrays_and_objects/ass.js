/* Create a variable called favoriteFruits and assign it an array of your top three favorite fruits. Print each fruit on a new line
 */

let favoriteFruits = ["apple", "banana", "watermelon"];
console.log(favoriteFruits[0]);
console.log(favoriteFruits[1]);
console.log(favoriteFruits[2]);

/*
Declare a variable called isJavaScriptFun and assign it a boolean value representing whether you find JavaScript fun or not. Print a message to the console 
*/
let isJavaScriptFun = true
console.log( `do you find javascript as fun?. ${isJavaScriptFun}`)
console.log( "do you find javascript as fun?. " + isJavaScriptFun)
/*
Create three variables: num1, num2, and sum. Assign any numeric values to num1 and num2. Calculate the sum of num1 and num2 and store the result in the sum variable.
*/

let num1 = 1
let num2 = 2
let sum = num1 + num2
console.log(sum)

/*
Write a program that swaps the values of two variables without using a third variable. For example, if a = 5 and b = 10, after the swap, a should be 10 and b should be 5.
*/
let a = 10
let b = 5
console.log(a)
console.log(b)
// a = 5
// b = 10

[a,b] = [b,a]
console.log(a)
console.log(b)

/*
Create two variables, firstName and lastName, and assign your first and last name to them, respectively. Combine them into a new variable called fullName and print it.
*/

let firstName = "chris"
let lastName = "celorm"
let fullName = (firstName + " " +  lastName)
console.log(fullName)
/*
Declare a constant variable called PI and assign it the value of the mathematical constant π (pi). Create another variable called radius and assign it a numeric value. Calculate the area of a circle (A = π * r^2) using these variables. */
const PI = Math.PI
let radius = 10
// let area = PI * (radius * radius)
let area = PI * Math.pow(radius,2)
console.log(area) 