# ⚛️ customReact

A tiny experiment showing how **React rendering** works under the hood using plain JavaScript.

---

## 🔑 Features

* Define elements as objects (`type`, `props`, `children`)
* Render elements into the DOM (like `ReactDOM.render`)
* Apply attributes and text content

---

## ⚡ Example

```js
const reactElement = {
  type: "a",
  props: { href: "https://google.com", target: "_blank" },
  children: "Visit google.com"
};

customRenderer(reactElement, document.getElementById("root"));
```

👉 Renders:

```html
<a href="https://google.com" target="_blank">Visit google.com</a>
```

---

## 📌 Future Ideas

* Nested children (`<div><p>...</p></div>`)
* Event listeners (`onClick`)
* Simple diffing for updates

---

## 🚀 Usage

```bash
git clone https://github.com/<your-username>/customReact.git
```

Open `index.html` in a browser.
