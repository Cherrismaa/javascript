console.log("02" > 1); // true
console.log("2" > 1); // true

console.log();

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log();

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

console.log();

console.log("2" === 2); // false - strict equality operator does not perform type coercion