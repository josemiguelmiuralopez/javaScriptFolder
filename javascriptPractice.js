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
//This time, we user the OR operator to check
//if ANY of the humbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

//Check four: all unique number
//This is long, and there are more efficient
//ways of handling it with other data structures
//that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

//Here, we put the results into a single variable
//for convenience. Note how we negate isOver25 using
//the ! operator. We could also have tested for
//"isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

//Finally, log the results.
console.log(isValid);

