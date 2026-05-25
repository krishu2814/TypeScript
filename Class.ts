// ==========================================
// TypeScript Classes Notes for Placements
// ==========================================

// A class is a blueprint for creating objects.
// It contains:
// 1. Properties (variables)
// 2. Methods (functions)
// 3. Constructor (initialization)

// ==========================================
// BASIC CLASS
// ==========================================

class Person {
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    introduce(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating Object
const person1 = new Person("Alice", 25);

console.log(person1.introduce());

// ==========================================
// IMPORTANT POINTS
// ==========================================

/*

1. class keyword is used to create class.

2. constructor() is automatically called
   when object is created.

3. this keyword refers to current object.

4. new keyword creates object.

5. Methods define behavior of object.

*/

// ==========================================
// SHORTCUT PROPERTY DECLARATION
// ==========================================

class Student {

    // Automatically creates and initializes properties
    constructor(
        public name: string,
        public age: number,
        public course: string
    ) {}

    display(): void {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`
        );
    }
}

const s1 = new Student("Rahul", 22, "CSE");

s1.display();

// ==========================================
// ACCESS MODIFIERS
// ==========================================

// 1. public
// Accessible everywhere

// 2. private
// Accessible only inside same class

// 3. protected
// Accessible inside class and child class

class Employee {

    public empName: string;

    private salary: number;

    protected department: string;

    constructor(
        empName: string,
        salary: number,
        department: string
    ) {
        this.empName = empName;
        this.salary = salary;
        this.department = department;
    }

    showDetails(): void {
        console.log(
            `Name: ${this.empName}, Salary: ${this.salary}, Department: ${this.department}`
        );
    }
}

const emp1 = new Employee("Krish", 50000, "IT");

console.log(emp1.empName);

// console.log(emp1.salary);
// ERROR -> private member

// console.log(emp1.department);
// ERROR -> protected member

emp1.showDetails();

// ==========================================
// READONLY PROPERTY
// ==========================================

class Car {

    readonly brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    showBrand(): void {
        console.log(`Car Brand: ${this.brand}`);
    }
}

const car1 = new Car("BMW");

car1.showBrand();

// car1.brand = "Audi";
// ERROR -> Cannot modify readonly property

// ==========================================
// OPTIONAL PROPERTIES
// ==========================================

class User {

    name: string;
    age?: number;

    constructor(name: string, age?: number) {
        this.name = name;
        // this.age = age; // Optional property, can be left undefined
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const u1 = new User("Aman");

u1.display();

// ==========================================
// GETTERS AND SETTERS
// ==========================================

class BankAccount {

    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    // Getter
    get getBalance(): number {
        return this.balance;
    }

    // Setter
    set setBalance(amount: number) {
        this.balance = amount;
    }
}

const account = new BankAccount(1000);

console.log(account.getBalance);

account.setBalance = 2000;

console.log(account.getBalance);

// ==========================================
// INHERITANCE
// ==========================================

// One class acquires properties and methods
// of another class using extends keyword.

class Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {

    breed: string;

    constructor(name: string, breed: string) {

        // Calls parent constructor
        super(name);

        this.breed = breed;
    }

    bark(): void {
        console.log(`${this.name} is barking`);
    }
}

const dog1 = new Dog("Tommy", "Labrador");

dog1.sound();

dog1.bark();

// ==========================================
// METHOD OVERRIDING
// ==========================================

class Shape {

    area(): void {
        console.log("Calculating area...");
    }
}

class Rectangle extends Shape {

    area(): void {
        console.log("Area = Length × Breadth");
    }
}

const rect = new Rectangle();

rect.area();

// ==========================================
// STATIC MEMBERS
// ==========================================

// Static properties/methods belong to class
// not object.

class MathUtils {

    static PI: number = 3.14;

    static square(num: number): number {
        return num * num;
    }
}

console.log(MathUtils.PI);

console.log(MathUtils.square(5));

// ==========================================
// ABSTRACT CLASS
// ==========================================

// Abstract class cannot create object directly.
// Used as blueprint for child classes.

abstract class Vehicle {

    abstract start(): void;

    stop(): void {
        console.log("Vehicle stopped");
    }
}

class Bike extends Vehicle {

    start(): void {
        console.log("Bike started");
    }
}

const bike1 = new Bike();

bike1.start();

bike1.stop();

// ==========================================
// INTERFACE WITH CLASS
// ==========================================

interface Laptop {

    brand: string;

    price: number;

    displayDetails(): void;
}

class HP implements Laptop {

    brand: string;
    price: number;

    constructor(brand: string, price: number) {
        this.brand = brand;
        this.price = price;
    }

    displayDetails(): void {
        console.log(
            `Brand: ${this.brand}, Price: ${this.price}`
        );
    }
}

const laptop1 = new HP("HP Victus", 70000);

laptop1.displayDetails();

// ==========================================
// OBJECTS IN TYPESCRIPT
// ==========================================

// Object = Instance of class

let obj = {
    name: "Krish",
    age: 21
};

// Accessing object properties
console.log(obj.name);

console.log(obj["age"]);

// ==========================================
// REAL-WORLD EXAMPLE
// ==========================================

class Bank {

    accountHolder: string;
    balance: number;

    constructor(
        accountHolder: string,
        balance: number
    ) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {

        if (amount > this.balance) {
            console.log("Insufficient Balance");
            return;
        }

        this.balance -= amount;
    }

    checkBalance(): void {
        console.log(
            `${this.accountHolder} Balance: ${this.balance}`
        );
    }
}

const acc1 = new Bank("Rahul", 5000);

acc1.deposit(2000);

acc1.withdraw(1000);

acc1.checkBalance();

// ==========================================
// RECTANGLE EXAMPLE
// ==========================================

class RectangleClass {

    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const rectangle = new RectangleClass(10, 5);

console.log(
    "Area of Rectangle:",
    rectangle.calculateArea()
);

// ==========================================
// IMPORTANT INTERVIEW QUESTIONS
// ==========================================

/*

Q1. What is a class?
--------------------
A class is a blueprint for creating objects.

--------------------------------------------

Q2. What is constructor?
------------------------
Special method automatically called when
object is created.

--------------------------------------------

Q3. Difference between class and object?
----------------------------------------
Class -> Blueprint
Object -> Instance of class

--------------------------------------------

Q4. What is inheritance?
------------------------
One class acquiring properties and methods
from another class.

--------------------------------------------

Q5. Difference between public, private,
and protected?
----------------------------------------

public:
Accessible everywhere

private:
Accessible only inside same class

protected:
Accessible inside class and child class

--------------------------------------------

Q6. What is method overriding?
------------------------------
Child class provides its own implementation
of parent class method.

--------------------------------------------

Q7. What is abstract class?
---------------------------
A class that cannot create object directly.

--------------------------------------------

Q8. What is static keyword?
---------------------------
Static members belong to class itself,
not object.

--------------------------------------------

Q9. What is readonly property?
------------------------------
Property whose value cannot be changed.

--------------------------------------------

Q10. What is super keyword?
---------------------------
Used to call parent class constructor.

*/

// ==========================================
// QUICK REVISION
// ==========================================

/*

class -> Blueprint

object -> Instance

constructor -> Initializes object

this -> Current object

new -> Creates object

extends -> Inheritance

super -> Parent constructor

static -> Belongs to class

abstract -> Cannot instantiate

readonly -> Cannot modify

public -> Everywhere access

private -> Only inside class

protected -> Class + child class

*/

// ==========================================
// END OF NOTES
// ==========================================