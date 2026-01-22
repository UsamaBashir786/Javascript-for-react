// 📂 06-async-js/async-await.js
// 🧠 MINDSET
// async/await = modern, cleaner syntax for promises
// React me mostly ye use hota hai

const fetchTodo = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.table(data);
    } catch (error) {
        console.error(error);
    }
}
fetchTodo();

// 💡 Reality check:

// React me fetch / async-await = must-know

// Promise chain samajh na aaye → React API call nightmare

// Try/catch = error handling mandatory