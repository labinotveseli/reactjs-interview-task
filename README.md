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
__mocks__/                          # Manual mocks
__tests__/                          # All Jest tests per component
public/                             # Public assets (favicon, etc.)
screenshots/                        # Screenshots (optional for docs/preview)
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
├── components/                   # Functional UI components
│   ├── CategoryList.jsx
│   ├── CreateCategory.jsx
│   ├── CreateNote.jsx
│   ├── NoteForm.jsx
│   ├── NotesList.jsx
│   ├── NoteView.jsx
│   └── SearchBar.jsx
│
├── context/                     # Global Context (React Context API)
│   └── NotesContext.jsx
│
├── hooks/                       # Custom reusable hooks
│   └── useLocalStorage.js
│
├── App.jsx                      # Root App component
├── App.css                      # Main app styles
├── index.css                    # Global resets
├── main.jsx                     # App entry (ReactDOM rendering)
│
index.html                       # Vite HTML entry template
jest.config.js                   # Jest unit testing config
jest.setup.js                    # Jest testing environment setup
vite.config.js                   # Vite config (port 1000 + LAN access)
.babelrc                         # Babel transpilation config
.eslintrc / eslint.config.mjs    # ESLint rules
.prettierrc                      # Prettier formatting rules
package.json                     # Scripts, dependencies, etc.

```

## 🚀 Getting Started

### 1. Clone the repository

- `https://github.com/labinotveseli/reactjs-interview-task/tree/labinot-veseli`
- `cd reactjs-interview-task`

### 2. Install dependencies

`npm install`

### 3. Start the development server

`npm run start`

#### By default, the app will launch at **http://localhost:1000** and be accessible on your local network (e.g. 192.168.x.x:1000), thanks to vite.config.js:

```
server: {
  port: 1000,
  host: true,
  open: true,
}
```

### 4. Run Tests

#### `npm run test` - Runs all test suites once using Jest and React Testing Library.

#### `npm run test:watch` - For test-driven development (TDD) or live feedback

## 5. How It Works

### Global State: NotesContext

##### All note and category actions are handled in NotesContext.jsx, including:

- `addCategory,`
- `addNote,`
- `updateNote,`
- `deleteNote,`
- `selectCategory,`
- `selectNote,`
- `enterCreateNoteMode,`
- `resetToCreateNote`

### Architecture Notes

#### NotesContext (Global State) through ContextAPI

- `Handles the entire logic and state`
- `Adding / selecting / deleting notes and categories Switching between note views and edit modes`
- `Persists to localStorage via useLocalStorage.js, useLocalStorage Hook`
- `Encapsulates saving and retrieving notes/categories using localStorage API.`

### Available Scripts

- `Start:` `npm run start` : Launches development server on port _1000_
- `Dev:` `npm run dev` : Same as start (includes ESLint)
- `Build:` `npm run build` : Builds the app for production
- `Preview:` `npm run preview` : Previews the built version
- `Format:` `npm run format` : Runs Prettier + ESLint auto-fix
- `Lint:` `npm run lint` : Lints code using ESLint
- `Test:` `npm run test` : Runs unit tests
- `Watch Tests:` `npm run test:watch` : Re-runs tests on file changes

### Tech Stack

- `React 19`

- `Ant Design`

- `Vite`

- `Jest + @testing-library/react`

- `ESLint + Prettier`

### ⚖️ License

`This project is licensed under the MIT License.`
