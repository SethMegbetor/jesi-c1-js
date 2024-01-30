function greetings() {
  console.log("give your heart to me and not the black stars");
}

greetings();

function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(10, 70);

// use a string as my parameter
function rizz(bf, sugarDaddy) {
  console.log(`give your heart to ${sugarDaddy} and not to  ${bf}`);
}

rizz("Spider", "Leo");

function sub(a, b) {
  return a - b;
}

console.log(sub(6, 1));
console.clear();

// function check_register(user) {
//   return user + " has registered";
// }

// console.log(check_register());
function check_register(user) {
  if (!user) {
    user = "Bot";
  }
  return user + " has registered";
}

console.log(check_register());

function enter_a_number(number) {
  if (!number) {
    number = 0;
  }

  return number + " is the number entered by the user";
}
console.log(enter_a_number());

console.clear();

const car1 = {
  color: "red",
  engine: "V12",
};
function my_cars(which_car) {
  return `My car's color is ${which_car.color} and it has a ${which_car.engine} engine`;
}

console.log(my_cars(car1));

console.clear();

const myName = {
  fullname: "John H",
  age: 30
}

function my_name(myName) {
  return `my name is: ${myName.fullname} and I am ${myName.age} old`
}

console.log(my_name(myName));