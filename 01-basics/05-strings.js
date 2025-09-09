const myName = "John";
const myAge = 30;

// console.log("My name is " + myName + " and I am " + myAge + " years old."); // Using Concatenation 

console.log(`My name is ${myName} and I am ${myAge} years old.`); // back ticks - string interpolation

const newName = new String("Cherrismaa-09");

console.log(newName[6]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toLocaleUpperCase());
console.log(newName.charAt(9));

console.log(newName.substring(0,6));

const anotherName = newName.slice(8,1)
console.log(anotherName);

const otherName = "         hoibyecheeyaa ahs      ";
console.log(otherName.trim()); // removes all the white spaces from both ends

console.log(newName.replace("-", ".")); //Cherrismaa.09

console.log(newName.includes("09")); //true
console.log(newName.split("-")); // [ 'Cherrismaa', '09' ]
