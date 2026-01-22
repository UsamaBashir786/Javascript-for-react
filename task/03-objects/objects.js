// 🧪 PRACTICE TASK

// Object car banao → {brand: "Toyota", year: 2020}

// Brand print karo

// Year update karo → 2022

// New property color add karo → "Red"

// Console me print karo


const cars = [
    {brand:"Toyota", year:2020}
]
console.table(cars)

cars[0].year = 2026;
console.table(cars)

cars[0].color = "red"
console.table(cars)



// 💡 Tip:
// React me state kabhi directly mutate nahi karte, hamesha spread + new object/array banate hain. Ye basic React pattern hai.