// Data types in TypeScript

// PRIMITIVE TYPES

/**
 * 1. Number
 */

let age: number = 25;
/**
 *  2. String
 */
let name: string = 'Amit';

/**
 * 3. Boolean
 */
let isStudent: boolean = true;

/**
 * 4. Null and Undefined
 */
let nullValue: null = null;
let undefinedValue: undefined = undefined;

/**
 * 5. Symbol
 */
let mySymbol: symbol = Symbol('key');


/**
 * 6. BigInt
 */
let bigIntValue: bigint = 9007199254740991n;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OBJECT TYPES

/**
 * 1. Object
 */
let person: { name: string; age: number } = {
  name: 'Amit',
  age: 25
};

/**
 * 2. Array
 */
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Amit', 'Diksha', 'Rahul'];
let arr: any[] = [1, 'Hello', true, true, null]; // Array of any type

/**
 * 3. Tuple
 */
let tuple: [string, number] = ['Amit', 25];

/** 
 * Enum
 */
enum Color {
  Red,
  Green,
  Blue
}
let favoriteColor: Color = Color.Green;

/**
 * 5. Function
 */

function greet(name: string): string {
  return `Hello, ${name}!`;
}   

/**
 * 6. Class
 */

let Car : { make: string; model: string; year: number } = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}

/**
 * 7. Interface
 */

interface Person {
  name: string;
  age: number;
}

let person1: Person = {
  name: 'Amit',
  age: 25
}
console.log(person1);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ADVANCED TYPES

/**
 * Union 
 * Union types allow you to define a variable that can hold multiple types. You can use the pipe (|) operator to specify the different types that a variable can accept. This is useful when you want to allow for more flexibility in your code while still maintaining type safety.
 */

let unionType: string | number;
unionType = 'Hello'; // valid
unionType = 42;      // valid
// unionType = true;    // invalid, causes a type error -> we need to define types as boolean first and then can assign the value

let unionTypes : string | number | boolean;
unionTypes = 'Hello'; // valid
unionTypes = 42;      // valid
unionTypes = true;    // valid

/**
 * Intersection
 * Intersection types allow you to combine multiple types into one. You can use the ampersand (&) operator to create an intersection type that includes all the properties of the combined types. This is useful when you want to create a new type that has the properties of multiple existing types.
 */

interface A {
  a: string;
}

interface B {
  b: number;
}

type IntersectionType = A & B;

let intersectionValue: IntersectionType = {
  a: 'Hello',
  b: 42
};  

/**
 * Literal Types
 * Literal types allow you to specify that a variable can only hold a specific value or set of values. You can use string literals, numeric literals, or boolean literals to create literal types. This is useful when you want to restrict the possible values of a variable to a specific set of options.
 */

let literalType: 'Hello' | 'World';
literalType = 'Hello'; // valid
literalType = 'World'; // valid
// literalType = 'Hi';    // invalid, causes a type error

/**
 * Type Aliases
 */

type StringOrNumber = string | number;

let aliasType: StringOrNumber;
aliasType = 'Hello'; // valid
aliasType = 42;      // valid
// aliasType = true;    // invalid, causes a type error 

/**
 * Mapped
 */

interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>; 

let readonlyPerson: ReadonlyPerson = {
  name: 'Amit',
  age: 25
};

// readonlyPerson.name = 'Diksha'; // Error: Cannot assign to 'name' because it is a read-only property.

// OTHER TYPES

/**
 * 1. Any✅
 * The any type allows you to assign any value to a variable without type checking. It can be useful when you want to opt-out of type checking for a specific variable, but it should be used with caution as it can lead to runtime errors if not used properly.
 */

let anyValue: any = 'Hello';
anyValue = 42; // valid
anyValue = true; // valid

/**
 * 2. Unknown
 * The unknown type is similar to any, but it is safer because it requires you to perform type checks before using the value. It is useful when you want to accept any value but want to ensure that you handle it correctly.
 */

let unknownValue: unknown = 'Hello';
unknownValue = 42;
unknownValue = true;

if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase()); // valid
} else if (typeof unknownValue === 'number') {
  console.log(unknownValue.toFixed(2)); // valid
} else if (typeof unknownValue === 'boolean') {
  console.log(unknownValue); // valid
}

/**
 * 3. Void
 * The void type is used to indicate that a function does not return a value. It is often used for functions that perform side effects, such as logging or modifying global state.
 */

function logMessage(message: string): void {
  console.log(message);
}

/**
 * 4. Never
 * The never type represents values that never occur. It is typically used for functions that always throw an error or have an infinite loop, indicating that they will never return a value.
 */

function throwError(message: string): never {
    throw new Error(message);
}   // This function never returns a value, as it always throws an error.
