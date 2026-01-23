/* ========== 05. Object Merge ========== */

const product = {
  name: "Iphone 17",
  price: 1299,
  color: "black",
};

const client = {
  name: "Abel",
  premium: true,
};

// Merging objects using the spread operator
const cart = {
  quantity: 3,
  ...product, // Spread operator to merge product properties
};

const newObject = {
  product: { ...product },
  client: { ...client },
};

// You can merge without cloning too by using shorthand property names
const newObject2 = {
  product,
  client,
};

// Merging all properties into a single object
const mergedObject = {
  ...product,
  ...client,
};

// Using Object.assign to merge objects
const mergedWithAssign = Object.assign({}, product, client);