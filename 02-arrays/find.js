// 🧠 MINDSET
// React me find() use hota hai ek item search karne ke liye
// Map/Filter se alag:
// Filter → sab matches return karta hai array me
// Find → sirf first match return karta hai
// Original array safe → React-friendly ✅

const numbers = [5, 10, 15, 20, 25];
const firstBigNumber = numbers.find((num => num>12));
console.log(firstBigNumber)



// 🔥 React-Style Mindset
// const users = [
//   { id: 1, name: "Usama", active: true },
//   { id: 2, name: "Ali", active: false },
//   { id: 3, name: "Sara", active: true },
// ];

// Find first inactive user
// const inactiveUser = users.find(user => !user.active);

// console.log(inactiveUser);
// { id: 2, name: "Ali", active: false }

// React me usage
// setSelectedUser(users.find(u => u.id === selectedId));
