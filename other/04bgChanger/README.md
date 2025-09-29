# 🎨 React Background Color Changer

A small React project that changes the background color using **state** and **Tailwind CSS classes**.  

---

## 📂 Core Logic
Instead of directly applying `style={{ backgroundColor: "red" }}`,  
we dynamically set **Tailwind utility classes** through React state:

```jsx
const [color, setColor] = useState("white");

const changeBg = (newColor) => {
  // React state update with callback pattern
  setColor(() => newColor);
};

return (
  <div className={`w-full h-screen flex justify-center items-end ${color}`} >
    <button 
      onClick={() => changeBg("bg-violet-300")} 
      className="bg-violet-500 text-white m-2 p-1 rounded-xl">
      Violet
    </button>
    <button 
      onClick={() => changeBg("bg-blue-300")} 
      className="bg-blue-500 text-white m-2 p-1 rounded-xl">
      Blue
    </button>
    {/* ...other buttons */}
  </div>
);
````

---

## ✨ Key Points

* ✅ Uses **Tailwind classes** (`bg-red-300`, `bg-blue-300`, etc.)
* ✅ No inline `style={{ backgroundColor }}` used
* ✅ State updated with **callback in `setState`** → ensures correctness & clarity

---

## 🚀 Usage

1. Clone the repo
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run locally:

   ```bash
   npm start
   ```
4. Click any button → background color updates instantly 🎉

---

## 📸 Example

* Click **Violet** → background class becomes `bg-violet-300`
* Click **Blue** → background class becomes `bg-blue-300`
* Click **Red** → background class becomes `bg-red-300`

---
