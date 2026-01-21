// 📂 02-arrays/map.js
// 🧠 MINDSET
// React me JSX ke andar lists show karne ke liye map use hota hai.
// map = transform array items into components / elements


const cars = ["Toyota", "Cultus","Fortuner","Land Cruiser"]
const carsList = cars.map((cars) => {
    return cars.toUpperCase();
});
// map khud se array ko leta hai aur jo be value hai map k andar sabko value assign kar deta jo array me ho map ki waja seh 


console.log(carsList)