/* ========== 2. Data Types in JavaScript ========== */

// In JavaScript, there are several data types. The most common ones include:

// 1. Number: Represents both integer and floating-point numbers.
const age = 25; // Integer
const price = 19.99; // Floating-point
const bigNumber = 9007199254740991n; // BigInt

// 2. String: Represents a sequence of characters.
const name = "John Doe";
const greeting = "Hello, World!";
// 3. Boolean: Represents a logical entity and can have two values: true or false.
const isStudent = true;
const hasGraduated = false;

// 4. Undefined: A variable that has been declared but not assigned a value.
let uninitializedVariable;

// 5. Null: Represents the intentional absence of any object value.
const emptyValue = null;

// 6. Object: A collection of properties, where each property is defined as a key-value pair.
const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
};

// 7. Array: A special type of object used to store ordered collections of values.
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];

// 8. Symbol: A unique and immutable primitive value used as the key of an object property (not shown here).

const mySymbol = Symbol("uniqueIdentifier");
const mySecondSymbol = Symbol("uniqueIdentifier"); // Different from mySymbol
// Note: Symbols are rarely used in basic programming but are important for advanced use cases.
console.log(mySymbol === mySecondSymbol); // false

// You can check the type of a variable using the `typeof` operator.
console.log(typeof age); // "number"
console.log(typeof bigNumber); // "bigint"
console.log(typeof name); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof uninitializedVariable); // "undefined"
console.log(typeof emptyValue); // "object" (this is a known quirk in JavaScript)
console.log(typeof person); // "object"
console.log(typeof numbers); // "object" (arrays are a type of object)
console.log(typeof mySymbol); // "symbol"

// Understanding these data types is fundamental to working with JavaScript effectively.
