// | **Concept**                        | **Usage in Code**                                                                                    | **React Mindset / Note**                                     |
// | ---------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
// | `const`                            | `dashboardTitle`, `users` array                                                                      | Value change nahi hoti, React me mostly use hota hai         |
// | `let`                              | `totalUsers` (final code me `const` bhi use hua)                                                     | Jab value change ho sakti ho                                 |
// | Arrays                             | `users` array                                                                                        | Multiple objects store karne ke liye                         |
// | Array of objects                   | `{id, name, age, active}` jaise objects                                                              | React me lists ke liye common                                |
// | `console.log`                      | Variables aur results print karne ke liye                                                            | Debugging ke liye                                            |
// | `console.table`                    | `users` aur `activeUsers` table format me print                                                      | Readable output ke liye                                      |
// | `.map()`                           | `userNames = users.map(user => user.name)`                                                           | Array transform karne ke liye, React me lists render ke liye |
// | `.filter()`                        | `activeUsers = users.filter(user => user.active)`                                                    | Conditional rendering, original array safe                   |
// | `.find()`                          | `firstInactiveUser = users.find(user => !user.active)` <br> `greetFirstActiveUser = users.find(...)` | Pehla match return karta hai, single item select ke liye     |
// | `.reduce()`                        | `totalAge = users.reduce((acc, cur) => acc + cur.age, 0)`                                            | Aggregate / total values calculate karne ke liye             |
// | Arrow Functions                    | `user => user.name`, `user => user.active`                                                           | Short & concise syntax, auto return                          |
// | Function                           | `greetUser` logic (arrow + find)                                                                     | React components = functions, reusable logic                 |
// | Immutability / Original Array Safe | `.map()`, `.filter()`, `.find()`, `.reduce()` original `users` array ko change nahi karte            | React state safe ke liye important                           |
// | String Concatenation               | `console.log("Hi! there ", greetFirstActiveUser.name)`                                               | Dynamic output ke liye                                       |


// Dashboard title (constant, does not change)
const dashboardTitle = "User Dashboard";

// Array of user objects
const users = [
  { id: 1, name: "Usama", age: 23, active: true },
  { id: 2, name: "Sami", age: 20, active: false },
  { id: 3, name: "Awais", age: 20, active: true },
  { id: 4, name: "Abdullah", age: 23, active: false }
];

// Total number of users
const totalUsers = users.length;

// Print dashboard info
console.log("Dashboard Title:", dashboardTitle);
console.log("Total Users:", totalUsers);

// Show all users in table format for readability
console.table(users);

// Extract user names into a new array (map iterates over each element, original array unchanged)
const userNames = users.map(user => user.name);
console.log("User Names:", userNames);

// Select only active users into a new array (filter iterates and returns items matching the condition)
const activeUsers = users.filter(user => user.active);
console.table(activeUsers);

// Find first inactive user (find returns the first match only)
const firstInactiveUser = users.find(user => !user.active);
console.log("First Inactive User:", firstInactiveUser);

// Calculate total age of all users (reduce accumulates values)
const totalAge = users.reduce((acc, cur) => acc + cur.age, 0);
console.log("Total Age of Users:", totalAge);


// Find return whole object and we prints its name,age etc

const greetFirstActiveUser = users.find(greet => greet.active);
console.log("Hi! there ", greetFirstActiveUser.name)



