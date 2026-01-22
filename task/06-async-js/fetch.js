// 🧪 PRACTICE TASK

// Fetch karo: https://jsonplaceholder.typicode.com/users

// Console me sab users print karo

fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>response.json())
.then(data =>console.table(data))
.catch(error => console.error("Error: ", error))