// 📂 02-arrays/reduce.js
// 🧠 MINDSET
// reduce() = array ko ek single value me convert karna
// React me commonly: total price, total points, combined string
// Original array mutate nahi hoti → React-friendly ✅

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((accumulator,current)=>{
    return accumulator + current;
}, 0);

console.log(sum)


const prodcut = numbers.reduce((accumulator,current)=>{
    return accumulator*current;
});

console.log(prodcut)



// 🔥 React-Style Mindset
// const cart = [
//   { id: 1, name: "Apple", price: 50 },
//   { id: 2, name: "Banana", price: 30 },
//   { id: 3, name: "Mango", price: 40 },
// ];

// Total price
// const totalPrice = cart.reduce((total, item) => total + item.price, 0);

// console.log(totalPrice); 
// 120

// React me usage
// const [cartTotal, setCartTotal] = useState(cart.reduce((t,i)=>t+i.price,0));


// Key points:

// accumulator = total value till now

// current = current array item

// Second argument = initial value (important for empty arrays)ss