// const todo = {};

const todo = new Object();
todo.id = 2;
todo.myTitle = "pay for hair";
todo.completed = false;

const todo2 = new Object();

// nesting objects

const person = {
  address: {
    coords: {
      lat: 88.43,
      lon: -76.9,
    },
  },
};

// console.log(person.address.coords.lat);
console.log(`Longitude: ${person.address.coords.lon}`);
console.log(`Latitude: ${person.address.coords.lat}`);

// console.log("hi");

// using spread operator
const monday = {
  morning: "breakfast in bed",
  // afternoon: "fast",
  // evening: "mirage",
  late_night: "netflix and chill"
};
const tuesday = {
  dawn: "church to pray",
  late_afternoon: "work",
  night: "see my in-laws",
};

const for_the_week = {...monday, ...tuesday}

console.log(for_the_week);

// create an array of objects
const for_the_week_new = [monday, tuesday]
console.log(for_the_week_new);

Object.entries(for_the_week)

console.log(for_the_week_new[1].morning);
