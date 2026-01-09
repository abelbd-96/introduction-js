/* ========== 6. Merging Objects ========== */

const product = {
  name: "iPhone 17 Pro Max",
  price: 1499,
  available: false,
};

const client = {
  name: "John Connor",
  premium: true,
};

// Merging objects using spread operator
const cart = {
  quantity: 1,
  ...product, // Spread operator to merge product properties
}
console.table(cart);

// Different ways to clone and merge objects
const newObject = {
  product: { ...product }, // Cloning product object
  client: { ...client },   // Cloning client object
};
console.table(newObject);

// Using shorthand property names
const newObject2 = {
  product, // Shorthand property names
  client,
};
console.table(newObject2);

// Merging objects into a single object
const mergedObject = {
  ...product,
  ...client,
};
console.table(mergedObject);
// Using Object.assign to merge objects
const mergedObject2 = Object.assign(product, client);
console.table(mergedObject2);
