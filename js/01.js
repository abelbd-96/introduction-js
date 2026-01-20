/* ========== 01. Variables in JavaScript ========== */

// There are three ways to declare variables in JavaScript: var, let, and const.

// 1. var: This is the oldest way to declare variables. Variables declared with var are function-scoped and can be re-declared and updated.
var age = 25;
console.log("Initial age (var):", age); // Output: 25
age = 30; // Updating the variable
console.log("Updated age (var):", age); // Output: 30
var age = 35; // Re-declaring the variable
console.log("Re-declared age (var):", age); // Output: 35

// 2. let: Introduced in ES6, let is block-scoped and can be updated but not re-declared within the same scope.
let height = 180;
console.log("Initial height (let):", height); // Output: 180
height = 185; // Updating the variable
console.log("Updated height (let):", height); // Output: 185
// let height = 190; // This would cause an error: SyntaxError: Identifier 'height' has already been declared

// 3. const: Also introduced in ES6, const is block-scoped and cannot be updated or re-declared. It must be initialized at the time of declaration.
const pi = 3.14;
console.log("Value of pi (const):", pi); // Output: 3.14
// pi = 3.14159; // This would cause an error: TypeError: Assignment to constant variable.
// const pi = 3.14159; // This would also cause an error: SyntaxError: Identifier 'pi' has already been declared

// Naming Conventions:
// - Variable names should start with a letter, underscore (_), or dollar sign ($).
// - They cannot start with a number.
// - They are case-sensitive (e.g., myVar and myvar are different).
// - Use camelCase for multi-word variable names (e.g., myVariableName).

// Example of valid variable names:
let myVariable = 10;
let _privateVariable = 20;
let $dollarVariable = 30;

// Example of invalid variable names (uncommenting these will cause errors):
// let 1stVariable = 40; // Invalid: starts with a number
// let my-variable = 50; // Invalid: contains a hyphen

// Best Practices:
// - Use let and const instead of var for better scoping.
// - Use const by default, and only use let when you need to reassign the variable.
// - Choose meaningful variable names that describe the data they hold.
