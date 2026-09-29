# 🗂️ Kanban Task Board

A modern Trello-style **Kanban Task Management Board** built with **React.js and Vite**.

The application allows users to create, manage, update, delete, search, and organize tasks across three workflow columns:

- 📝 To Do
- 🔄 In Progress
- ✅ Done

The project demonstrates modern React concepts such as state management with `useState`, component architecture, props, conditional rendering, and browser persistence with `localStorage`.

---

## 🚀 Features

### Phase 1 – Core Functionality

- ✅ Three-column Kanban board
- ✅ Add new tasks
- ✅ Delete tasks
- ✅ Move tasks between columns
- ✅ React state management using `useState`
- ✅ Reusable React components
- ✅ Responsive user interface

### Phase 2 – UI/UX & Persistence

- ✏️ Inline task editing
- ⭐ Task priority system
- 🔴 High priority
- 🟡 Medium priority
- 🟢 Low priority
- 💾 Persistent tasks using browser `localStorage`
- 🔄 Tasks remain available after refreshing the page

### Phase 3 – Advanced Interactions

- 🖱️ Drag-and-drop task movement
- 🔎 Global task search/filtering
- ⚡ Real-time filtering
- 📦 Component-based architecture

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI |
| Vite | Development/build tool |
| JavaScript | Application logic |
| HTML5 | Structure |
| CSS3 | Styling |
| LocalStorage | Data persistence |
| Git & GitHub | Version control |
| dnd-kit | Drag-and-drop functionality |

---

## 📁 Project Structure

```text
sprint5-kanban/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Column.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── .gitignore
├── .oxlintrc.json
├── package.json
├── package-lock.json
├── PROMPT.md
└── README.md
