let fruit = prompt("What is your favourite fruit: ");

let taste;

switch (fruit) {
  case "apple":
    taste = "it reminds me of eve";
    break;
  case "banana":
    taste = "full of sugar";
    break;
  case "mango":
    taste = "well those bees scare me";
    break;
  case "pawpaw":
    taste = "where is aki";
    break;

  default:
    break;
}

console.log(`The taste of the ${fruit} is ${taste}`);
