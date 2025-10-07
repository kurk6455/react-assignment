---

# 🛍️ Shopping Cart & Wishlist App (Recoil Edition)

A **React + Recoil** based mini e-commerce app that simulates an Amazon-style shopping experience — featuring **wishlist filtering**, **cart operations**, **real-time totals**, and a **purchase confirmation modal**, all built with **modern state management** and **clean Tailwind UI**.

---

## 🚀 Features

### 🎁 Wishlist Management

* Preloaded sample products (keyboard, headphones, smartwatch, etc.)
* Filter wishlist by **type**: `default`, `BBDsale`, `FestivalSale`
* Add items directly to **cart** with one click
* Smart UI update — switches “Add to Cart” → “Proceed to Cart”
* Auto-syncs changes across wishlist and cart views

### 🛒 Shopping Cart Operations

* View all added products in the **cart page**
* **Increase / decrease quantity** with live total updates
* **Delete items** (restores back to wishlist automatically)
* Empty cart view with clean empty state

### 💵 Order Summary & Checkout

* Auto-calculated **total quantity** and **total price**
* One-click **“Proceed to Buy”** button triggers confirmation modal
* “Purchase Successful” modal resets wishlist & cart states after checkout

### 🧭 Navigation & Layout

* `/` → Wishlist with category filters
* `/cart` → Shopping Cart + Order Summary
* Global **Header** with live cart count and user greeting

### ⚛️ Recoil-Powered State Management

* **Atoms** for wish list, selected type, and purchase modal
* **Selectors** for filtered wishlist, cart items, and order totals
* Pure, reactive state — no context boilerplate

---

## 🧱 State Architecture (Recoil)

| State / Selector        | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| `wishListState`         | Stores all product details and cart flags       |
| `wishListBtnState`      | Generates unique category buttons               |
| `selectedTypeState`     | Tracks currently active filter type             |
| `filteredWishListState` | Returns wishlist items of selected type         |
| `shoppingCartState`     | Returns items marked as `isCart: true`          |
| `orderTotalState`       | Computes total quantity & price dynamically     |
| `purchaseState`         | Controls purchase confirmation modal visibility |

---

## ⚙️ Tech Stack

* ⚛️ **React 18** + **Recoil**
* 🧭 **React Router DOM**
* 💨 **Tailwind CSS**
* 🧮 **UUID** for unique IDs

---

## 🛠️ Setup

```bash
git clone https://github.com/kurk6455/proj-05-shopping-cart-recoil.git
cd proj-05-shopping-cart-recoil
npm install
npm run dev
```

Then visit ➡️ `http://localhost:5173/`

---

## 💡 Future Enhancements

* 🏷️ Add product search and sorting
* 💾 LocalStorage persistence
* 🔔 Toast notifications
* ☁️ Cloud sync (Firebase/Supabase)
* 💳 Payment integration

---