// 📂 03-objects/objects.js
// 🧠 MINDSET

// React me props aur state mostly objects hote hain

// Object samajh ke hi aap dynamic components aur updates kar sakte ho


const user = {
    name: "Usama",
    age: "24",
    active:true
}

console.log(user)
console.table(user)
console.log("Users Age: " + user.age)

// again user ki age ki value change ki object k andar
user.age = 23;
console.log(user.age)

// user k object me aik aur row add ke emai k name seh aur icki value be
user.email = ("test@test.com")
console.log(user.email)
console.table(user)

