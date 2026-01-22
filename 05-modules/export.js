// 📂 05-modules/export.js
// 🧠 MINDSET
// React me:
// Har component alag file hota hai
// Us file ko export karna hota hai
// Phir kahin aur import karke use karte ho

const greet = (name) => {
    return `Hello ${name}`;
}
export default greet

// 👉 Rule:

// File me sirf ek default export

// React components usually default export hote hain


export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
// 👉 Named exports tab use hote hain jab multiple cheezen export karni hon.