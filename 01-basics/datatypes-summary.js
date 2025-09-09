/* Datatypes

1. Primitive datatypes:
    - string
    - number
    - boolean    
    - null
    - undefined
    - symbol (ES6)
    - bigint (ES2020)

2. Non-primitive datatypes:
    - object
    - array
    - function

Javascript is a dynamically typed language. 
It means that we don't have to specify the datatype of a variable when we declare it. The datatype will be determined automatically during the execution of the code based on the value assigned to the variable. */

//1. Primitive datatypes:
const myName = "John"; 
const score = 100; 
const scoreValue = "100";
const percentage = 99.9;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // undefined

const id = Symbol("123"); // unique identifier - symbols are immutable and unique
const anotherId = Symbol("123");

console.log(id === anotherId); // false

const bigNumber = 12345678901234567890123n; // n at the end to denote bigint

// 2. Non-primitive datatypes:

const heros = ["spiderman", "ironman", "thor"]; // array

let myObj = {
    name: "John",
    age: 69,
    isLoggedIn: false
} // object - key-value pairs, keys are always strings - values can be of any datatype (primitive or non-primitive)

const myfunction = function() {
    console.log("hello world");
}

console.log(typeof myName); // string

/* 
undefined - undefined
null - object (this is a bug in JS)
symbol - symbol
bigint - bigint
boolean - boolean
number - number
string - string 

function - function object
(for non Primitive datatypes it gives the typeof as object) */

console.log(typeof bigNumber); 


// --- STACK AND HEAP MEMORY ---

// Primitive types - Stack
// Non-primitive types - Heap

/* Stack - stores primitive values (fixed size) - faster to access - stored in contiguous memory locations
and only maintains the reference to the actual value
if any changes are made to the primitive value, a new copy is created in the stack memory */

/* Heap - stores non-primitive values (dynamic size) - slower to access - stored in random memory locations
if any changes are made to the non-primitive value, the reference remains same but the actual value is changed in the heap memory */

let num1 = 6; // stored in stack
let num2 = num1; // copy of num1 is created

num1 = 9;

console.log(num1); // 9
console.log(num2); // 6

let array1 = ["item1", "item2"];
let array2 = array1; // reference of array1 is copied to array2

array2.push("item3");
console.log(array1); // ["item1", "item2", "item3"]
console.log(array2); // ["item1", "item2", "item3"]