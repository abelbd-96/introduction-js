/* ========== 3. Objects in JavaScript ========== */

// An object is a collection of properties, where each property is defined as a key-value pair.

// Creating an object using object literal syntax
const person = {
  name: "Alice", // key: name, value: "Alice". key + value = property
  age: 30,
  isEmployed: true,
};
console.table(person);

// Accessing object properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Modifying object properties
person.age = 31;
person["isEmployed"] = false;
console.table(person);

// Adding new properties
person.city = "New York";
console.table(person);

// Deleting properties
delete person.isEmployed;
console.table(person);

// Using destructuring to extract properties
const { name, age } = person;
console.log(name);
console.log(age);

// Object literal enhancements
const hobby = "reading";

const enhancedPerson = {
  name: "Bob",
  age: 25,
  hobby, // shorthand property - Only works if the variable name matches the property name
};
console.table(enhancedPerson);
