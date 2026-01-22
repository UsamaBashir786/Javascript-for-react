// 📂 03-objects/destructuring.js
// 🧠 MINDSET

// React me props aur state ko direct variables me extract karne ke liye use hota hai

// Code clean aur short hota hai

const user = {name:"Usama", age:24, active:true}
const {name,age,active} = user;

console.log(name);
console.log(age);
console.table(active);

console.log(user);

// agar sirf value ho to array use hoti hai [] ye 
// age value k sath variable be add krrna ho to {} ye curly brackets use hoti : icke sath
const colors =["red", "green", "blue"];
const [FirstColor,SecondColor,ThirdColor] = colors;
console.log(FirstColor,SecondColor)