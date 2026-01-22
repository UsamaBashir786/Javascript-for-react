// 🧪 PRACTICE TASK
// Async function banao → fetch todos list
// Console me first 3 todos print karo
const fetchTodo = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");
        const data = await response.json();
        const dataList = data.slice(0,3);
        console.table(dataList);
    } catch (error) {
        console.error("Error: ", error);
    }
};
fetchTodo();