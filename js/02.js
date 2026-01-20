/* ========== 02. Data Types in JavaScript ========== */

// In JavaScript, there are several data types, including:

// 1. Primitive Data Types:
// - Number: Represents both integer and floating-point numbers.
let age = 25; // Integer
let price = 19.99; // Floating-point

// - String: Represents a sequence of characters.
let name = "John Doe";

// - Boolean: Represents a logical entity that can be either true or false.
let isStudent = true;

// - Undefined: A variable that has been declared but not assigned a value.
let address;

// - Null: Represents the intentional absence of any object value.
let phoneNumber = null;

// - Symbol: A unique and immutable primitive value used as the key of an object property.
let sym = Symbol("uniqueIdentifier");

// BigInt: Represents integers with arbitrary precision.
let bigIntNumber = 9007199254741991n;

// 2. Non-Primitive Data Types:
// - Object: A collection of properties, where each property is a key-value pair.
let person = {
  name: "Alice",
  age: 30,
};

// - Array: An ordered collection of values.
let colors = ["red", "green", "blue"];

// Understanding these data types is fundamental to working with JavaScript effectively.
