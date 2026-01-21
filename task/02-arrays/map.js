// 🧪 PRACTICE TASK
// Array numbers = [1,2,3,4,5]
// Map karo → square sab numbers ka
// Print result → [1,4,9,16,25]


const numbers = [1,2,3,4,5]

// icme jo humne num use kea ye iteration chalyega aur jo be value hai array me wo usko same value assign karlega khud seh

// map khud se array ko leta hai aur jo be value hai map k andar sabko value assign kar deta jo array me ho map ki waja seh 
const numberList = numbers.map(num => num*num);
console.log(numberList)