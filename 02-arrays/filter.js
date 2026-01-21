// 📂 02-arrays/filter.js
// 🧠 MINDSET
// React me kabhi:
// Sirf active users dikhane ho
// Ya sirf completed tasks
// Toh hum original array ko filter karke naya array banate hain
// Original array mutate nahi hoti → React-friendly ✅

const numbers = [1,2,3,4,5]

const evenNumbers = numbers.filter((num) => num%2===0)
console.log(evenNumbers)

const oddNumbers = numbers.filter((num)=> num%2!=0)
console.log(oddNumbers)

// ✔ jo filter hai ye original array ko change nahi karta uss array ko duplicate kar k new show kerwata ye safe hota hai react meh

// ✔ Key points:

// ✔ Filter hamesha new array return karta hai

// ✔ Original array safe → React state safe




// 🔥 React-Style Mindset
// const tasks = [
//   { id: 1, title: "Learn JS", completed: true },
//   { id: 2, title: "Learn React", completed: false },
//   { id: 3, title: "Build Project", completed: true },
// ];

// const completedTasks = tasks.filter(task => task.completed);

// React me usage
// {completedTasks.map(task => <li key={task.id}>{task.title}</li>)}
