# 📝 ReactJS Notes App – Interview Task

A lightweight and user-friendly **note-taking application** built with **React
19**, **Ant Design**, and **Vite**.  
It allows users to create categories, manage notes, and save their data locally
for a persistent experience.

---

## 🔧 Features

- ✅ **Create and manage categories**
- ✍️ **Add, edit, and delete notes**
- 🔍 **Search through notes**
- 💾 **Data is saved to localStorage**
- ⚡️ **Fast load times using Vite**
- 🎨 **Clean UI with Ant Design**

## 📂 Project Structure

<!-- prettier-ignore -->
- src/
├── assets/
│   └── images/
│       └── icons/              # All SVG icons used throughout the UI
│           ├── cross-icon.svg
│           ├── delete-icon.svg
│           ├── down-arrow.svg
│           ├── line-icon.svg
│           ├── plus-icon.svg
│           ├── right-arrow.svg
│           └── tick-icon.svg
│
├── components/                 # React components grouped by functionality
│   ├── CategoryList.jsx
│   ├── CreateCategory.jsx
│   ├── CreateNote.jsx
│   ├── NoteForm.jsx
│   ├── NotesList.jsx
│   ├── NoteView.jsx
│   └── SearchBar.jsx
│
├── context/
│   └── NotesContext.jsx        # Global state and logic (categories, notes, etc.)
│
├── hooks/
│   └── useLocalStorage.js      # Custom hook for localStorage persistence
│
├── pages/
│   ├── App.jsx                 # Root application component
│   ├── App.css                 # Global styling for App
│   ├── index.css               # Base styling (reset or overrides)
│   └── main.jsx                # Vite entry point
│
├── index.html                  # Main HTML template
├── package.json                # Project dependencies and scripts
└── vite.config.js              # Vite configuration

## 🚀 Getting Started

### 1. Clone the repository

- **https://github.com/labinotveseli/reactjs-interview-task/tree/labinot-veseli**
- **cd reactjs-notes-app**

### 2. Install dependencies

**npm install**

### 3. Start the development server

**npm run start** **Visit http://localhost:5173 in your browser.**

### 4. Run Tests

**npm run test**

- Testing is set up using Jest and React Testing Library.

### 5. How It Works

### Global State: NotesContext

**All note and category actions are handled in NotesContext.jsx, including:**

- addCategory,
- addNote,
- updateNote,
- deleteNote,
- selectCategory,
- selectNote,
- enterCreateNoteMode,
- resetToCreateNote

### Local Storage: useLocalStorage.js

📸 UI Screenshots Create Category & Note Note View & Edit

### Scripts

- Script Command Description
- Start npm run start Start development server
- Build npm run build Build app for production
- Format Code npm run format Format with Prettier + ESLint
- Lint npm run lint Run ESLint
- Test npm run test Run tests

### Tech Stack

- React 19

- Ant Design

- Vite

- Jest

- ESLint + Prettier

### ⚖️ License

This project is licensed under the MIT License.
