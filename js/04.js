/* ========== 04. Object Manipulation ========== */

const product = {
  name: "Macbook Air M4",
  price: 999,
  available: true,
}

// 1. Add new property
product.brand = "Apple";
product["model"] = "M4";

// 2. Delete a property
delete product.available;

// 3. Update a property
product.price = 899;

// 4. Prevent object changes (freeze)
Object.freeze(product);
product.price = 799; // This will not work

// 5. Check if object is frozen
const isFrozen = Object.isFrozen(product);
console.log("Is product frozen?", isFrozen); // true

// 6. Prevent object changes (seal)
const user = {
  username: "abelbd",
  email: "abelbd@example.com",
}
Object.seal(user);
user.email = "abelbd@outlook.com"; // This will work
delete user.username; // This will not work