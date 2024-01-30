// let fruit = 'apple';
// let taste;

// switch (fruit) {
//   case 'apple':
//     taste = 'sweet';
//     break;
//   case 'lemon':
//   case 'lime':
//     taste = 'sour';
//     break;
//   case 'banana':
//     taste = 'creamy';
//     break;
//   default:
//     taste = 'unknown';
// }

// console.log(`The taste of ${fruit} is ${taste}`);


let hour = 15;
let timeOfDay;

switch (true) {
  case hour >= 5 && hour < 12:
    timeOfDay = 'Morning';
    break;
  case hour >= 12 && hour < 18:
    timeOfDay = 'Afternoon';
    break;
  case hour >= 18 && hour < 24:
  case hour >= 0 && hour < 5:
    timeOfDay = 'Night';
    break;
  default:
    timeOfDay = 'Invalid hour';
}

console.log(`The time of day is ${timeOfDay}`);
