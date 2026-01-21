// 🧪 PRACTICE TASK

// Array points = [5, 10, 15]

// Reduce → sum of all points

// Print result → 30


const numbers = [5, 10, 15]

// const numbersList = numbers.reduce((accumulator,current)=>{
//     return accumulator + current;
// }, 0);


const numbersList = numbers.reduce((acc,cur)=> acc + cur,0);
console.log(numbersList)

// | Step | accumulator | current | accumulator + current |
// | ---- | ----------- | ------- | --------------------- |
// | 1    | 0           | 5       | 0 + 5 = 5             |
// | 2    | 5           | 10      | 5 + 10 = 15           |
// | 3    | 15          | 15      | 15 + 15 = 30          |
