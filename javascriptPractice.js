/* This was my warmup before the assignment
let coolVariable = "coolVariable";
const theAnswer = "12";
let aNumber = 11;
let anotherNumber = 10;
let string = "This string has a \nnewline character.";
let stringWithTab="This string has a newline and a tab \n\t tab character.";
const duke = "JohnWayne";
const cry = `I cry in ${duke} movies.`;

console.log(coolVariable + theAnswer );
console.log(aNumber * anotherNumber);
console.log(aNumber < anotherNumber);
console.log(string);
console.log(stringWithTab);
console.log(cry);
*/

//The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Check one: add up to 50
//This is a fairly simple operation using
//arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

//Check two: at least two odd numbers
//Here, we use modulus to check if something is odd.
//Since % 2 is 0 if even and 1 if odd, we can use
//arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

//Check three: no number larger than 25
//This time, we use the OR operator to check
//if ANY of the humbers is larger than 25.
const isNoMoreThan25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

//Check four: all unique number
//This is long, and there are more efficient
//ways of handling it with other data structures
//that we will review later.
//const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
const isUnique = n1 + n2 <= 50 && n1 + n3 <= 50 && n1 + n4 <= 50 && n2 + n3 <= 50 && n2 + n4 <= 50 && n3 + n4 <= 50;

//Here, we put the results into a single variable
//for convenience. Note how we negate isOver25 using
//the ! operator. We could also have tested for
//"isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isNoMoreThan25 && isUnique;

//Here, we check if all numbers are divisible by five.
const isDivisibleByFive = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;

//Here, we cache the result in a variable.
const divisibleByFive = isDivisibleByFive;

//Subtract the first number from the second number.
let result1 = n2 - n1;

//Multiply the result by the third number;
result1 *= n3;

//Find the remainder of dividing the result by the fourth number
let result2 = result1 % n4;


//Finally, log the results.
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`);
console.log(`The numbers are divisible by five according to the provided criteria: ${divisibleByFive}.`);
console.log(divisibleByFive);
console.log(`The result is: ${result2}.`);

//Practical math problem
const totalDistance = 1500;
let efficiencyAt55 = 30;
let efficiencyAt60 = 28;
let efficiencyAt75 = 23;
const fuelBudget = 175;
const averageCostofFuel = 3;

//How many gallons of fuel will I need for the entire trip?
console.log(`If I drive at 75 miles per hour I will need at least ${1500 / efficiencyAt75} gallons of fuel.`);
console.log(`If I drive at 60 miles per hour I will need at least ${1500 / efficiencyAt60} gallons of fuel.`);
console.log(`If I drive at 55 miles per hour I will need at least ${1500 / efficiencyAt55} gallons of fuel.`);
console.log(`Will my budget cover the fuel expense if I drive at 75 miles per hour? ${fuelBudget >= averageCostofFuel * (1500 / efficiencyAt75)}.`);
console.log(`Will my budget cover the fuel expense if I drive at 60 miles per hour? ${fuelBudget >= averageCostofFuel * (1500 / efficiencyAt60)}.`);
console.log(`Will my budget cover the fuel expense if I drive at 55 miles per hour? ${fuelBudget >= averageCostofFuel * (1500 / efficiencyAt55)}.`);

console.log(`How long will the trip take if I drive at 75 miles per hour, in hours? It will take at least ${1500 / 75} hours.`);
console.log(`How long will the trip take if I drive at 60 miles per hour, in hours? It will take at least ${1500 / 60} hours.`);
console.log(`How long will the trip take if I drive at 55 miles per hour, in hours? It will take at least ${1500 / 55} hours.`);