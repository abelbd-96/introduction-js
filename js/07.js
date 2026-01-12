/* ========== 7. Concatenation and Template Literals ========== */

// Concatenation using the + operator
const product = "Macbook Air M4";
const price = 999;
const brand = "Apple";

console.log("The product is: " + product);
console.log(product + " $ " + price + " USD - Brand: " + brand);

// Using template literals for concatenation
console.log(`The product is: ${product}`);
console.log(`${product} $ ${price} USD - Brand: ${brand}`);