---

# 📝 Notes App Basic

A simple **React Notes App** to create, edit, and delete notes. This is a foundational project to build a fully-featured notes application.

---

## 🚀 Features

* Create, edit, and delete notes
* Each note stores:

  * **Title**
  * **Content**
  * **Created and updated timestamps**
  * **Pinned status (future use)**
* Simple and clean interface

**Next roadmap features:**

* Sort pinned notes above unpinned notes
* Implement search functionality (SearchBar ready but not yet active)
* Add dark mode toggle (Tailwind-ready)
* Persist notes in `localStorage` to retain data on refresh

---

## 🗂 File Structure

```
proj-02-notes-app-basic/
├─ App.jsx
├─ App.css
├─ components/
│  ├─ NoteInput.jsx
│  ├─ NoteList.jsx
│  ├─ NoteItem.jsx
│  └─ SearchBar.jsx
└─ package.json
```

---

## ⚡ How It Works

1. **`App.jsx`** – Main component managing app state (`notes`, `isEditing`, `editId`) and CRUD operations.
2. **`NoteInput.jsx`** – Form to add or edit notes.
3. **`NoteList.jsx`** – Lists all notes using `NoteItem` component.
4. **`NoteItem.jsx`** – Displays individual notes with Edit, Delete, and Pin buttons.
5. **`SearchBar.jsx`** – Input ready for search functionality.

---

## 🛠 Installation

1. Clone the repo:

```bash
git clone <https://github.com/kurk6455/react-assignment.git>
```

2. Navigate to project folder:

```bash
cd proj-02-notes-app-basic
```

3. Install dependencies:

```bash
npm install
```

4. Start the app:

```bash
npm start
```

---

## 💡 Future Improvements

* Implement **search filter**
* Implement **dark/light theme toggle**
* Sort **pinned notes first**
* Save notes in **localStorage**

---

## ⚙️ Tech Stack

* React (Hooks: `useState`, `useEffect`)
* JavaScript ES6+
* CSS / Tailwind-ready

---
