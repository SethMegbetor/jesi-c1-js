// key value pairs

const employee = {
  id: 8344334,
  role: "developer",
  ename: "ayiyi",
  age: 90,
  task: ["train", "code", "eat", "sleep"],
};

// access it with the dot notation
console.log(employee.age);
// access it with the bracket notation
console.log(employee["ename"]);

// access task in an array
console.log(employee.task[2]);

// update
employee.ename = "spider";
console.log(employee.ename);

// add
employee.salary = 1000;
console.log(employee.salary);

// delete
delete employee.age;

console.log(employee.age);

// adding functions to object

employee.intro = function () {
  console.log(`Yoooo everyone, my name is: ${this.ename}`);
};
employee.intro();

const employee2 = {
  id: 12323,
  "first name": "elorm",
};

console.log(employee2["id"]);

// create a student object and add the properties with values. Manipulate the values using some of the examples above

console.clear();

// create a car object
let car = {
  brand: "Honda",
  model: "CRV",
  speed: "220kmp/h",
  color: "gray",
  "engine capacity": "500cc",
  start: function () {
    console.log("Engine has started");
  },
};

// add properties
(car.torque = "smooth"), (car["weight"] = "300kg");

// accessing objects
console.log(car["engine capacity"]);
console.log(car.color);

// remove an object
delete car.torque;

// update a property
car.weight = "700kg";

// find the length of an object
let number_of_properties = Object.keys(car).length;

console.log(number_of_properties);

// add funtion property
car.stop = function () {
  console.log("Engine has stopped");
};
car.start();
car.stop();

// console.log(car.start());
// console.log(car.stop());

car.features = ["brakes", "suspension", "shocks"];

// console.log(car.features);

// delete car.features[1]
// console.log(car.features);

let my_car_features = car.features
console.log(my_car_features);

let index_to_remove = 0

my_car_features.splice(index_to_remove, 1)

console.log(my_car_features);

car.features = my_car_features

console.log(car.features);
