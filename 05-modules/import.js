// 📂 05-modules/import.js
// 🧠 MINDSET
// Import ka style export ke type pe depend karta hai.

import greet from "./export.js";
console.log(greet("usama"));


// ✍️ WRITE (Import Named)
import { add,sub } from "./export.js";
console.log(add(5,2));
console.log(sub(5,2));

// ⚠️ COMMON MISTAKES (Avoid)

// ❌ Default export ko {} me import karna
// ❌ Named export bina {} import karna
// ❌ File path galat likhna