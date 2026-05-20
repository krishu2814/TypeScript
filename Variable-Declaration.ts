/**
 * 1. Declare Type and Value in a Single Statement
 */

let name: string = 'Amit';
const age: number = 25;

/**
 * 2. Declare Type Without Value
 */

let city: string;
// console.log(city); // -> compilation error: Variable 'city' is used before being assigned.

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


/**
 * 4.Type Annotations in Typescript
 * userName: string specifies that the userName variable must hold a string value.
 * age: number specifies that the age variable must hold a number value.
 * isActive: boolean specifies that isActive must be a boolean.
 * The function greetUser(name: string, age: number) uses type annotations for both parameters and the return type to ensure type safety.
 */

let userName: string = "Diksha";  
let noOfStudent: number = 3;            
let isActive: boolean = true;    

function greetUser(name: string, noOfStudent: number): string {
  return `Hello, ${name}! You have ${noOfStudent} students.`;
}

let greeting = greetUser(userName, noOfStudent);
console.log(greeting);


/**
 * Identifiers
 */

// valid identifiers
let _name: string = "Amit";
let $age: number = 25;
let firstName: string = "Diksha";

// invalid identifiers
// let 1name: string = "Amit"; // Error: Identifier cannot start with a number
// let @age: number = 25; // Error: Identifier cannot contain special characters except $ and _
// let first-name: string = "Diksha"; // Error: Identifier cannot contain hyphens

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Keywords and Reserved Words
 */

// let let: string = "Amit"; // Error: 'let' is a reserved keyword
// let class: string = "Diksha"; // Error: 'class' is a reserved keyword
// let function: string = "Hello"; // Error: 'function' is a reserved keyword
// break	as	any	switch	case	if  else	in	return
// throw	else	var	number	string	get
// module	type	instanceof	typeof	public	private

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

