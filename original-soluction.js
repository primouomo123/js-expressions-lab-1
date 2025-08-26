//! Start by creating the variables for the data recorded
let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
let day5TempF = 80;
let day6TempC = 15;
let day7TempF = 72;
let day8TempC = 28;
let day9TempF = 68;
let day10TempC = 20;
let day11TempF = 75;
let day12TempC = 23;
let day13TempF = 82;
let day14TempC = 30;
let day15TempF = 65;
let day16TempC = 22;
let day17TempF = 77;
let day18TempC = 26;
let day19TempF =78;
let day20TempC = 24;
let day21TempF = 73;
let day22TempC = 21;
let day23TempF = 79;
let day24TempC = 27;
let day25TempF = 71;
let day26TempC = 19;
let day27TempF = 74;
let day28TempC = 17;
let day29TempF = 76;
let day30TempC = 29;

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
function celsiusToFahrenheit(tempInCelsius) {
    return (tempInCelsius * 9/5) + 32;
}

day2TempC = celsiusToFahrenheit(day2TempC);
day4TempC = celsiusToFahrenheit(day4TempC);
day6TempC = celsiusToFahrenheit(day6TempC);
day8TempC = celsiusToFahrenheit(day8TempC);
day10TempC = celsiusToFahrenheit(day10TempC);
day12TempC = celsiusToFahrenheit(day12TempC);
day14TempC = celsiusToFahrenheit(day14TempC);
day16TempC = celsiusToFahrenheit(day16TempC);
day18TempC = celsiusToFahrenheit(day18TempC);
day20TempC = celsiusToFahrenheit(day20TempC);
day22TempC = celsiusToFahrenheit(day22TempC);
day24TempC = celsiusToFahrenheit(day24TempC);
day26TempC = celsiusToFahrenheit(day26TempC);
day28TempC = celsiusToFahrenheit(day28TempC);
day30TempC = celsiusToFahrenheit(day30TempC);

//! Start the calculation of the total temperatures
let tot_temperature_in_fahrenheit = day1TempF + day2TempC + day3TempF + day4TempC + day5TempF + day6TempC + day7TempF + day8TempC + day9TempF + day10TempC + day11TempF + day12TempC + day13TempF + day14TempC + day15TempF + day16TempC + day17TempF + day18TempC + day19TempF + day20TempC + day21TempF + day22TempC + day23TempF + day24TempC + day25TempF + day26TempC + day27TempF + day28TempC + day29TempF + day30TempC;

//* Then apply the conversion to calculate the total in the other unit of measurement
function fahrenheitToCelsius(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5/9;
}

day1TempF = fahrenheitToCelsius(day1TempF);
day2TempC = fahrenheitToCelsius(day2TempC);
day3TempF = fahrenheitToCelsius(day3TempF);
day4TempC = fahrenheitToCelsius(day4TempC);
day5TempF = fahrenheitToCelsius(day5TempF);
day6TempC = fahrenheitToCelsius(day6TempC);
day7TempF = fahrenheitToCelsius(day7TempF);
day8TempC = fahrenheitToCelsius(day8TempC);
day9TempF = fahrenheitToCelsius(day9TempF);
day10TempC = fahrenheitToCelsius(day10TempC);
day11TempF = fahrenheitToCelsius(day11TempF);
day12TempC = fahrenheitToCelsius(day12TempC);
day13TempF = fahrenheitToCelsius(day13TempF);
day14TempC = fahrenheitToCelsius(day14TempC);
day15TempF = fahrenheitToCelsius(day15TempF);
day16TempC = fahrenheitToCelsius(day16TempC);
day17TempF = fahrenheitToCelsius(day17TempF);
day18TempC = fahrenheitToCelsius(day18TempC);
day19TempF = fahrenheitToCelsius(day19TempF);
day20TempC = fahrenheitToCelsius(day20TempC);
day21TempF = fahrenheitToCelsius(day21TempF);
day22TempC = fahrenheitToCelsius(day22TempC);
day23TempF = fahrenheitToCelsius(day23TempF);
day24TempC = fahrenheitToCelsius(day24TempC);
day25TempF = fahrenheitToCelsius(day25TempF);
day26TempC = fahrenheitToCelsius(day26TempC);
day27TempF = fahrenheitToCelsius(day27TempF);
day28TempC = fahrenheitToCelsius(day28TempC);
day29TempF = fahrenheitToCelsius(day29TempF);
day30TempC = fahrenheitToCelsius(day30TempC);

let tot_temperature_in_celsius = day1TempF + day2TempC + day3TempF + day4TempC + day5TempF + day6TempC + day7TempF + day8TempC + day9TempF + day10TempC + day11TempF + day12TempC + day13TempF + day14TempC + day15TempF + day16TempC + day17TempF + day18TempC + day19TempF + day20TempC + day21TempF + day22TempC + day23TempF + day24TempC + day25TempF + day26TempC + day27TempF + day28TempC + day29TempF + day30TempC;

//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
console.log(tot_temperature_in_fahrenheit);
console.log(tot_temperature_in_celsius);

//! Start the calculation of the average temperatures
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
console.log(avg_temperature_in_fahrenheit);
console.log(avg_temperature_in_celsius);

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};