/**
 * 1. Declare Type and Value in a Single Statement
 */

let name: string = 'Amit';
const age: number = 25;

/**
 * 2. Declare Type Without Value
 */

let city: string;
console.log(city); // -> compilation error: Variable 'city' is used before being assigned.

/**
 * 3. Declare Value Without Type
 */

let country = 'India';
console.log(country); // India

/**
 * 4. Declare Type and Value Separately
 */

let isStudent: boolean;
isStudent = true;
console.log(isStudent); // true


