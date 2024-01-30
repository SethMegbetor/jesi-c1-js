let hour = 15;
let time_of_day;

switch (true) {
  case hour >= 5 && hour < 12:
    time_of_day = "morning";
    break;
  case hour >= 12 && hour < 18:
    time_of_day = "afternoon";
    break;
  case hour >= 18 && hour < 24:
    time_of_day = "evening";
    break;

  default:
    time_of_day = "Invalid time entered";
    break;
}

console.log(`The time of day is ${time_of_day}`);
