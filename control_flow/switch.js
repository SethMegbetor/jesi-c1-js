// let userDay = parseInt(prompt("Enter the day of the week as a number: "));?
let userDay = parseInt(prompt("Enter the day of the week as a number: "));
let dayName;

switch (userDay) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;

  default:
    dayName: "You entered and invalid number as a day";
}

console.log(`The day is ${dayName}`);
