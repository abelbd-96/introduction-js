/* ========== 5. Advanced Object Destructuring ========== */

const product = {
  name: "iPhone 17 Pro Max",
  price: 1499,
  available: false,
};

const client = {
  name: "John Connor",
  premium: true,
  address: {
    street: "123 Future St",
  },
};
// When you want to extract properties that have the same name from different objects, you can use destructuring with aliasing to avoid naming conflicts.
const { name: productName } = product; // Extracting 'name' from product and renaming it to 'productName'

// When you want to extract properties of a nested object, you can use destructuring to directly access those nested properties.
const {
  name: clientName,
  address: { street },
} = client; // Extracting 'street' from the nested 'address' object.
