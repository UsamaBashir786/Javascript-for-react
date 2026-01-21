// 🧪 PRACTICE TASK
// Array numbers = [10, 22, 35, 47]
// Find first number > 30
// Console me print → 35


const numbers = [10, 22, 35, 47]
const firstBigNumber = numbers.find(num=>num>30);
console.log(firstBigNumber)


// | num | num > 30? | First match?                  |
// | --- | --------- | ----------------------------- |
// | 10  | false     | ❌                             |
// | 22  | false     | ❌                             |
// | 35  | true      | ✅ Found → stops here          |
// | 47  | true      | ❌ Not checked (already found) |

// Output: 35