---

# 🛒 Shopping Cart & Wishlist App

A **React-based e-commerce demo app** that simulates an Amazon-like shopping experience.
Users can **browse wishlist items, add them to cart, adjust quantities, view totals, and complete purchases** — all with persistent state management.

---

## 🚀 Features

### 🎁 Wishlist

* Browse predefined items (keyboard, headphones, phone, laptop, smartwatch, etc.)
* Filter wishlist by **categories** (default, sale, festival)
* Add items from wishlist → cart
* Persist wishlist in **localStorage**

### 🛍 Shopping Cart

* View all added cart items
* Increase / decrease item **quantity**
* Remove items from cart (goes back to wishlist)
* Cart auto-syncs with wishlist

### 💵 Order Summary

* Auto-calculates **total quantity & price**
* Real-time updates when quantities change
* Place an order → **purchase confirmation popup**

### 🖥 UI & Routing

* **React Router** for navigation (`/` → wishlist, `/cart` → shopping cart)
* **Header** with cart icon + total item count
* Simple confirmation modal after purchase

### 💾 Persistence

* Wishlist stored in **LocalStorage** → data remains after refresh

---

## ⚙️ Tech Stack

* ⚛️ React (Hooks + Context API)
* 🟨 JavaScript (ES6+)
* 🧭 React Router DOM (routing)
* 🎨 Basic CSS (can be extended with Tailwind/Material UI)

---

## 🛠 Setup

```bash
git clone https://github.com/kurk6455/react-assignment.git
cd proj-notes-app-advanced
npm install
npm start
```

---

## 💡 Future Enhancements

* 🖼 Product details page
* ❤️ Favorite/like items
* 💳 Payment gateway integration
* 📦 Backend API for dynamic product fetching

---