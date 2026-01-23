/* ========== 03. Object Destructuring ========== */

// Object destructuring allows you to extract properties from objects and bind them to variables in a concise way.

// Example 1: Basic Object Destructuring
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

const { name, age, city } = person;
console.log(name); // Output: Alice
console.log(age);  // Output: 30
console.log(city); // Output: New York

// Example 2: Destructuring with Default Values
const settings = {
    theme: 'dark',
    fontSize: 14
};

const { theme, fontSize, language = 'en' } = settings;
console.log(theme);     // Output: dark
console.log(fontSize);  // Output: 14
console.log(language);  // Output: en

// Example 3: Renaming Variables during Destructuring
const user = {
    username: 'john_doe',
    email: 'john@example.com'
};

const { username: userUsername, email: userEmail } = user;
console.log(userUsername); // Output: john_doe
console.log(userEmail);    // Output: john@example.com

// Example 4: Nested Object Destructuring
const employee = {
    id: 101,
    personalInfo: {
        firstName: 'Bob',
        lastName: 'Smith'
    },
    jobDetails: {
        position: 'Developer',
        department: 'Engineering'
    }
};

const {
    personalInfo: { firstName, lastName },
    jobDetails: { position }
} = employee;

console.log(firstName); // Output: Bob
console.log(lastName);  // Output: Smith
console.log(position);  // Output: Developer

// Example 5: Destructuring in Function Parameters
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const userInfo = {
    name: 'Charlie',
    age: 25,
    city: 'Los Angeles'
};

displayUser(userInfo); // Output: Name: Charlie, Age: 25

// Object destructuring is a powerful feature in JavaScript that enhances code readability and reduces redundancy when working with objects.