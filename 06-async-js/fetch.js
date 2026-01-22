// 📂 06-async-js/fetch.js
// 🧠 MINDSET
// React me data mostly server/API se aata hai
// fetch() = browser ka built-in function to request data
// Ye promise return karta hai → .then() ya async/await se handle hota hai

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error: ", error));