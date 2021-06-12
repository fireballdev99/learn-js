const { number } = require("prop-types");

let numbers = [20, 30, 40, 50];
let result = numbers
    .map((number) => number * 2)
    .reduce((sum, number) => sum + number)

console.log(result);