// You are building a program to categorize temperatures into different ranges. Write a JavaScript program that takes a temperature as input and outputs a message based on the following criteria:
// If the temperature is less than 0 degrees Celsius, output: "Freezing!"
// If the temperature is between 0 and 10 degrees Celsius (inclusive), output: "Cold."
// If the temperature is between 11 and 20 degrees Celsius (inclusive), output: "Cool."
// If the temperature is between 21 and 30 degrees Celsius (inclusive), output: "Warm."
// If the temperature is greater than 30 degrees Celsius, output: "Hot!"
// Write the JavaScript code to accomplish this task, taking user input for the temperature.

function categorizeTemperature(temperature) {
  if (temperature > 0) {
    return "It is freezing"
  } else if (temperature >= 0 && temperature <= 10) {
    return "It is cold"
  }

// rest of the logic

  else {
    return "Hot"
  }
}

let usersTemperature = prompt("Enter your temperature in degree celcius: ")

let usersTemperatureValue = parseFloat(usersTemperature)
// temperature

if (!isNaN(usersTemperatureValue)) {
  let result = categorizeTemperature(usersTemperatureValue)
  console.log(result);
} else {
  console.log(`Invalid input. Please enter a number`);
}