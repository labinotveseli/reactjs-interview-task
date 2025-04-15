# 📝 ReactJS Notes App – Interview Task

#### A lightweight and user-friendly note-taking application built with `React19`, `Ant Design`, `ContextAPI`, and `Vite`. It allows users to create categories, manage notes, and save their data locally for a persistent experience.

## 🔧 Features

- ✅ **Create and manage categories**
- ✍️ **Add, edit, and delete notes**
- 🔍 **Search through notes**
- 💾 **Data is saved to localStorage**
- ⚡️ **Fast load times using Vite**
- 🎨 **Clean UI with Ant Design**

## 📂 Project Structure

<!-- prettier-ignore -->
```
src/
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
```

## 🚀 Getting Started

### 1. Clone the repository

- **https://github.com/labinotveseli/reactjs-interview-task/tree/labinot-veseli**
- **cd reactjs-notes-app**

### 2. Install dependencies

**npm install**

### 3. Start the development server

**npm run start**

#### By default, the app will launch at **http://localhost:1000** and be accessible on your local network (e.g. 192.168.x.x:1000), thanks to vite.config.js:

```
server: {
  port: 1000,
  host: true,
  open: true,
}
```

### 4. Run Tests

**npm run test**

- Testing is set up using Jest and React Testing Library.

## 5. How It Works

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

### Architecture Notes

**NotesContext (Global State) through ContextAPI**

- Handles the entire logic and state
- Adding / selecting / deleting notes and categories Switching between note
  views and edit modes
- Persists to localStorage via useLocalStorage.js **useLocalStorage Hook**
- Encapsulates saving and retrieving notes/categories using localStorage API.

### Available Scripts

- _Start:_ npm run start Launches development server on port _1000_
- _Dev:_ Alias npm run dev Same as start (includes ESLint)
- _Build:_ npm run build Builds the app for production
- _Preview:_ npm run preview Previews the built version
- _Format:_ npm run format Runs Prettier + ESLint auto-fix
- _Lint:_ npm run lint Lints code using ESLint
- _Test:_ npm run test Runs unit tests
- _Watch Tests:_ npm run test:watch Re-runs tests on file changes

### Tech Stack

- React 19

- Ant Design

- Vite

- Jest + @testing-library/react

- ESLint + Prettier

### ⚖️ License

This project is licensed under the MIT License.
