/* ========== 4. Object.freeze vs Object.seal ========== */

// Object.freeze() prevents any changes to an object
const frozenPerson = Object.freeze({
  name: "Alice",
  age: 30,
});

// Attempting to modify a frozen object will not work
frozenPerson.age = 31;
console.log(frozenPerson.age); // Still 30

// Attempting to add a new property to a frozen object will not work
frozenPerson.city = "New York";
console.log(frozenPerson.city); // undefined

// Attempting to delete a property from a frozen object will not work
delete frozenPerson.name;
console.log(frozenPerson.name); // Still "Alice"

// Object.seal() prevents adding or deleting properties, but allows modification
const sealedPerson = Object.seal({
  name: "Bob",
  age: 25,
});

sealedPerson.age = 26;
console.log(sealedPerson.age); // Now 26

// Attempting to add a new property to a sealed object will not work
sealedPerson.city = "New York";
console.log(sealedPerson.city); // undefined

// Attempting to delete a property from a sealed object will not work
delete sealedPerson.name;
console.log(sealedPerson.name); // Still "Bob"
