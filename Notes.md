# JavaScript for React ⚡

A practical guide to the JavaScript concepts you need before learning React. No fluff, just the essentials.

## What's Inside

This repo covers the JS fundamentals that React uses constantly:

- **Variables** – `const`, `let`, `var`  
- **Functions & Arrow Functions** – reusable logic, concise syntax, auto return  
- **Arrays** – basic operations, immutability  
- **Array Methods** – `map`, `filter`, `reduce`, `find`  
- **React Mindset** – how JS concepts apply to React  

---

## JS Mindset Notes (Short & Structured)

### 1. Variables
- `const` → Mostly in React, don’t overwrite  
- `let` → When value changes  
- Avoid `var`  

### 2. Functions
- React components = functions  
- Reusable logic, must be strong  

### 3. Arrow Functions
- Short, concise syntax  
- Single parameter → parentheses optional  
- Single expression → auto return  

### 4. Arrays
- `.push()` → Add element  
- `.pop()` → Remove last element  
- Keep original array immutable  

### 5. map()
- Transform each element → returns new array  
- Callback parameter = current element  
- React use → rendering lists  

### 6. filter()
- Select elements based on a condition → returns new array  
- Original array unchanged  
- React use → conditional rendering  

### 7. reduce()
- Combine all elements → single value  
- Accumulator = running total  
- React use → totals, aggregate calculations  

### 8. find()
- Returns **first element** matching a condition  
- Stops after first match → more efficient than filter for single item  
- Original array unchanged → React-friendly  
- React use → select a single item (e.g., selected user or product)  

### 9. Overall Mindset
- Strong JS basics = easier React learning  
- Functional programming mindset → map, filter, reduce, find  
- Use `const` & arrow functions for React-friendly code  

---
