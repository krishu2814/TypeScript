// ==========================================
// TypeScript Numbers Notes for Placements
// ==========================================

// In TypeScript, all numeric values are of type 'number'.
// It supports:
// 1. Integer values
// 2. Floating point values
// 3. Hexadecimal
// 4. Binary
// 5. Octal

// ------------------------------------------
// BASIC NUMBER DECLARATION
// ------------------------------------------

let age: number = 21;
let price: number = 99.99;

console.log(age);
console.log(price);
console.log(typeof age); // Number
console.log(typeof price); // Number

// ------------------------------------------
// NUMBER OBJECT
// ------------------------------------------

// Wrapper Object for numbers

let numObj: Number = new Number(100);

console.log(numObj);

// ------------------------------------------
// IMPORTANT NUMBER PROPERTIES for OBJECTS
// ------------------------------------------

console.log("===== NUMBER PROPERTIES =====");

console.log("MAX_VALUE:", Number.MAX_VALUE);
// Largest possible number in JavaScript

console.log("MIN_VALUE:", Number.MIN_VALUE);
// Smallest positive value

console.log("NaN:", Number.NaN);
// Represents Not a Number

console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
// Smaller than minimum possible number

console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
// Greater than maximum possible number

// ------------------------------------------
// NaN EXAMPLE
// ------------------------------------------

let day: number = 0;

if (day <= 0 || day > 7) {
    day = Number.NaN; // not a number
    console.log("Invalid Day:", day);
} else {
    console.log("Valid Day");
}

// ------------------------------------------
// toExponential()
// Converts number into exponential notation
// ------------------------------------------

let expNum: number = 2525.30;

console.log("===== toExponential() =====");

console.log(expNum.toExponential());
// Output: 2.5253e+3

console.log(expNum.toExponential(2));
// Output: 2.53e+3

// ------------------------------------------
// toFixed()
// Fixes number of digits after decimal
// ------------------------------------------

let fixedNum: number = 237.13456;

console.log("===== toFixed() =====");

console.log(fixedNum.toFixed());
// Output: 237

console.log(fixedNum.toFixed(2));
// Output: 237.13

console.log(fixedNum.toFixed(4));
// Output: 237.1346

// ------------------------------------------
// toLocaleString()
// Converts number into local format
// ------------------------------------------

let localNum: Number = new Number(1234567.89);

console.log("===== toLocaleString() =====");

console.log(localNum.toLocaleString());

// Indian format
console.log(localNum.toLocaleString('en-IN'));

// US format
console.log(localNum.toLocaleString('en-US'));

// ------------------------------------------
// toPrecision()
// Total number of digits
// ------------------------------------------

let precisionNum: Number = new Number(5.7645326);

console.log("===== toPrecision() =====");

console.log(precisionNum.toPrecision());
// Output: 5.7645326

console.log(precisionNum.toPrecision(1));
// Output: 6

console.log(precisionNum.toPrecision(2));
// Output: 5.8

console.log(precisionNum.toPrecision(4));
// Output: 5.765

// ------------------------------------------
// toString()
// Converts number to string
// Can also convert into different bases
// ------------------------------------------

let stringNum: Number = new Number(10);

console.log("===== toString() =====");

console.log(stringNum.toString());
// Decimal => 10

console.log(stringNum.toString(2));
// Binary => 1010

console.log(stringNum.toString(8));
// Octal => 12

console.log(stringNum.toString(16));
// Hexadecimal => a

// ------------------------------------------
// valueOf()
// Returns primitive value
// ------------------------------------------

let valueNum: Number = new Number(20);

console.log("===== valueOf() =====");

console.log(valueNum.valueOf());

// ------------------------------------------
// IMPORTANT TYPE CONVERSIONS
// ------------------------------------------

console.log("===== TYPE CONVERSIONS =====");

// String to Number
let str: string = "100";

let convertedNumber: number = Number(str);

console.log(convertedNumber);
console.log(typeof convertedNumber);

// Number to String
let numToStr: string = age.toString();

console.log(numToStr);
console.log(typeof numToStr);

// ------------------------------------------
// PARSE FUNCTIONS
// ------------------------------------------

console.log("===== PARSE FUNCTIONS =====");

// parseInt()
console.log(parseInt("123"));
// Output: 123

// parseFloat()
console.log(parseFloat("123.45"));
// Output: 123.45

// ------------------------------------------
// CHECKING NaN
// ------------------------------------------

console.log("===== isNaN() =====");

let result = Number("ABC");

console.log(result); // NaN

console.log(isNaN(result));
// true

// ------------------------------------------
// MATHEMATICAL OPERATIONS
// ------------------------------------------

let a: number = 10;
let b: number = 3;

console.log("===== MATHEMATICAL OPERATIONS =====");

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

// ------------------------------------------
// Math OBJECT IMPORTANT METHODS
// ------------------------------------------
/**
 * ceil and round are similar but differ in how they handle decimal values
 */
console.log("===== MATH METHODS =====");

console.log("Math.round(4.6):", Math.round(4.6)); // Output: 5
console.log("Math.floor(4.9):", Math.floor(4.9)); // Output: 4
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // Output: 5
console.log("Math.sqrt(25):", Math.sqrt(25)); // Output: 5
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // Output: 8
console.log("Math.abs(-10):", Math.abs(-10)); // Output: 10
console.log("Math.max(10, 20, 30):", Math.max(10, 20, 30)); // Output: 30
console.log("Math.min(10, 20, 30):", Math.min(10, 20, 30)); // Output: 10
console.log("Random Number:", Math.random()); // anything

/**
 * null vs undefined
 */
let str1: string;

// Prints undefined
console.log(str);

// Assigning 'null' to variable
// let str2: string;   
// str2 = null;
// console.log(str2);


// ------------------------------------------
// IMPORTANT PLACEMENT POINTS
// ------------------------------------------

/*

1. TypeScript uses only ONE numeric type:
   => number

2. number stores:
   - integers
   - floating point values

3. NaN means:
   => Not a Number

4. Infinity values:
   - Number.POSITIVE_INFINITY
   - Number.NEGATIVE_INFINITY

5. Difference:
   - toFixed() => digits after decimal
   - toPrecision() => total digits

6. toString(base):
   - 2 => binary
   - 8 => octal
   - 16 => hexadecimal

7. Number() converts value into number.

8. parseInt() removes decimal part.
   parseFloat() keeps decimal part.

9. valueOf() returns primitive number.

10. Important Math methods:
   round()
   floor()
   ceil()
   sqrt()
   pow()
   random()

*/

// ==========================================
// INTERVIEW QUESTIONS
// ==========================================

/*

Q1. Difference between number and Number?
-----------------------------------------
number -> primitive type
Number -> wrapper object

Example:
let a: number = 10;
let b: Number = new Number(10);

-----------------------------------------

Q2. Difference between toFixed() and toPrecision()?
---------------------------------------------------
toFixed():
- controls decimal places

toPrecision():
- controls total digits

-----------------------------------------

Q3. What is NaN?
----------------
NaN means "Not a Number"

Example:
Number("ABC")

-----------------------------------------

Q4. How to convert number into binary?
--------------------------------------
num.toString(2)

-----------------------------------------

Q5. Largest value in JavaScript?
--------------------------------
Number.MAX_VALUE

*/

// ==========================================
// END OF NOTES
// ==========================================
