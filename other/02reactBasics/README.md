# React Rendering Demo

This project shows different ways to render in React:

---

## ✅ Valid Approaches

### 1. JSX (Recommended)
```jsx
createRoot(document.getElementById('root')).render(<App />)
````

Standard, clean, and the React way.

### 2. React.createElement

```jsx
const google = React.createElement("a", { href: "https://google.com", target: "_blank" }, "visit google.com")
createRoot(document.getElementById('root')).render(google)
```

Works fine, but less readable than JSX.

### 3. Calling the Component Function

```jsx
createRoot(document.getElementById('root')).render(App())
```

⚠️ Works (since `App` is just a function returning JSX) but **not recommended**.
Bypasses React’s normal handling and can break hooks/lifecycle.

---

## ❌ Invalid Approach

### Plain Object

```js
const googleElement = { type: "a", props: { href: "https://google.com", target: "_blank" }, children: "Visit google.com" }
createRoot(document.getElementById('root')).render(googleElement)
```

Fails — ReactDOM only understands JSX/`createElement`, not raw objects.

---

## 📝 Summary

* ✅ Use **JSX**
* ✅ `createElement` also works
* ⚠️ `App()` works but avoid it
* ❌ Plain objects won’t render