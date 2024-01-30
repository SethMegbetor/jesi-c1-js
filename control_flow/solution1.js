// Function to categorize temperature
function categorizeTemperature(temperature) {
    if (temperature < 0) {
        return "Freezing!";
    } else if (temperature >= 0 && temperature <= 10) {
        return "Cold.";
    } else if (temperature >= 11 && temperature <= 20) {
        return "Cool.";
    } else if (temperature >= 21 && temperature <= 30) {
        return "Warm.";
    } else {
        return "Hot!";
    }
}

// Get user input for temperature
var userTemperature = prompt("Enter the temperature in degrees Celsius:");

// Parse the input as a number
var temperatureValue = parseFloat(userTemperature);

// Check if the input is a valid number
if (!isNaN(temperatureValue)) {
    // Call the function and display the result
    var result = categorizeTemperature(temperatureValue);
    console.log(result);
} else {
    console.log("Invalid input. Please enter a valid number for the temperature.");
}
