// 📂 03-objects/spread.js
// 🧠 MINDSET

// React me state ya props ko update karte waqt immutability maintain karni hoti hai

// ... spread operator = copy + update


const user = {name:"Usama", age:23, active:true};
const updateAge = { ...user,  age :24};
console.table(updateAge);
console.table(user)


const numbers = [1,2,3];
const NewNumbers = [ ...numbers, 4]
console.log(NewNumbers)
console.log(numbers)