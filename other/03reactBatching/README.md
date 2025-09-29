# React State Batching Demo

This project demonstrates how **React batches multiple state updates** and why using the **callback form of `setState`** matters.

---

## 📂 Code Overview

```jsx
import { useState } from "react"

function App() {
  const [count, setCount] = useState(15);

  const increaseFn = () => {
    // Uses the same "stale" value of count (15)
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  const decreaseFn = () => {
    // Uses the callback form → always gets the latest state
    setCount(prev => prev - 1);
    setCount(prev => prev - 1);
    setCount(prev => prev - 1);
    setCount(prev => prev - 1);
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increaseFn}>increase {count}</button>
      <button onClick={decreaseFn}>decrease {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
````

---

## 🚀 What This Demonstrates

### 1. Normal Updates (without callback)

```js
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

* React batches these updates.
* Each `setCount(count + 1)` uses the **same initial value** (`count = 15`).
* Final result = **16** (not 19).

---

### 2. Functional Updates (with callback)

```js
setCount(prev => prev - 1);
setCount(prev => prev - 1);
setCount(prev => prev - 1);
setCount(prev => prev - 1);
```

* Each update gets the **latest state value** (`prev`).
* Final result = **11** (15 → 14 → 13 → 12 → 11).

---

## 📝 Key Takeaways

* React batches multiple state updates that happen in the same event.
* When updates depend on the previous state, **always use the callback form** of `setState`.
* Callback ensures you don’t work with stale values.

---

## 🛠️ How to Run

1. Clone this repo
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start dev server:

   ```bash
   npm run dev
   ```

---

## ✅ Summary

* **Without callback** → updates can be stale, only the last one wins.
* **With callback** → every update is applied in sequence, correctly reflecting all changes.

