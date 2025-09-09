let score = "33asdx";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); // string got converted to number 
console.log(typeof valueInNumber);

console.log(valueInNumber); 

/* NaN -> Not a Number 
33asdx -> NaN when we put both number and alphabets together It gives a NAN, that means it is not a number It gets converted into a number, but it is actually not a number. It gets verified when we console.log the value in number */

/* null to number ( 0 )
When an null is given, it converts it into zero because we converted that type into number, so the null value gets converted into zero. */

/* 
undefined -> NaN 
Boolean -> true = 1, false = 0

string -> if it is a valid number in string format, it gets converted into that number otherwise it becomes NaN */

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn); 
console.log(booleanIsLoggedIn);

/* 
1 -> true
0 -> false
any other number/string -> true
"" -> false */

let someNumber = true;
let stringNumber = String(someNumber);

console.log(typeof stringNumber);


//****************** OPERATIONS ************************

