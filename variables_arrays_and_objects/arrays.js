let myNumberArray = [9, 7, 200, 45]
let myStringArray = ["Spider", "The Goat", "Sheep", "Ghost"]
let myMixedArray = [4, "String", false, null, [3,6,7], undefined]
console.log(myNumberArray.length);
console.log(`The array at index zero is: ${myNumberArray[0]}`);
// add to an array
myNumberArray.push(10)
console.log(myNumberArray.length);
console.log(myNumberArray);
// add to string array
myStringArray.push("Cow")
console.log(myStringArray);

// to remove an element of an array
myNumberArray.pop()
myNumberArray.pop()
myNumberArray.pop()
console.log(myNumberArray);


// remove at a particular index

myStringArray.splice(3, 2)
console.log(myStringArray);