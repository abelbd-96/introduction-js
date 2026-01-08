/* ========== 1. Variables in JavaScript ========== */

// In JavaScript, there are three ways to declare variables: var, let, and const.
// The variables names must start with a letter, underscore (_), or dollar sign ($), and can contain letters, digits, underscores, or dollar signs.
// You don't need to specify the data type when declaring a variable, as JavaScript is a dynamically typed language.

// 1. var: Function-scoped or globally-scoped variable. Can be re-declared and updated. Not recommended for use in modern JavaScript due to its scoping issues.
var name = "Alice";
console.log(name); // Output: Alice
name = "Bob";
console.log(name); // Output: Bob

// 2. let: Block-scoped variable. Can be updated but not re-declared within the same scope.
let age = 25;
console.log(age); // Output: 25
age = 26;
console.log(age); // Output: 26
// You can update the value of a let variable with another data type.
age = "Twenty-six";
console.log(age); // Output: Twenty-six
// Even you can declare a let variable without initializing it and assign a value later.
let city;
console.log(city); // Output: undefined | The variable is declared but not initialized.
city = "New York";
console.log(city); // Output: New York

// 3. const: Block-scoped variable. Cannot be updated or re-declared. Must be initialized at the time of declaration.
const country = "USA";
console.log(country); // Output: USA
// country = "Canada"; // This will throw an error
