/* ========== 9. Array Manipulation ========== */

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
console.table(technologies);

// 1. Update an element
technologies[4] = "Nest.js"; // Update "Node.js" to "Nest.js"
console.table(technologies);

// If you try to update an index that doesn't exist, it will create a new element at that index
technologies[5] = "TypeScript"; // Add "TypeScript" at index 10
console.table(technologies);

// Alternatively, you can use the map method to create a new array with the updated element, which is a non-mutating approach.
const updatedArray = technologies.map(function (tech) {
  if (tech === "React") {
    return "Next.js"; // Update "React" to "Next.js"
  } else {
    return tech; // Keep other elements unchanged
  }
});
console.table(updatedArray);

// 2. Add elements
// You can use push to add elements at the end of the array. This is an array method.
// This method mutates the original array, so use it with caution specifically when working with state in frameworks like React.
technologies.push("GraphQL"); // Add "GraphQL" at the end
console.table(technologies);

// Alternatively, you can use the spread operator to create a new array with the added element, which is a non-mutating approach.
const newArray = [...technologies, "Docker"];
console.table(newArray);

// 3. Remove elements
// You can use shift to remove the first element of the array. This method mutates the original array.
technologies.shift(); // Remove "HTML"
console.table(technologies);

// You can use pop to remove the last element of the array. This method also mutates the original array.
technologies.pop(); // Remove "GraphQL"
console.table(technologies);

// Alternatively, you can use the filter method to create a new array without the removed element, which is a non-mutating approach.
const filteredArray = technologies.filter(function (tech) {
  if (tech !== "CSS") {
    return tech;
  }
});
console.table(filteredArray);
