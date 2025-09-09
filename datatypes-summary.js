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