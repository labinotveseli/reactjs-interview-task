import React from 'react'
import { Layout } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { NotesProvider, useNotes } from './context/NotesContext'
import CategoryList from './components/CategoryList'
import NotesList from './components/NotesList'
import NoteView from './components/NoteView'
import SearchBar from './components/SearchBar'
import CreateCategory from './components/CreateCategory'
import CreateNote from './components/CreateNote'
import NoteForm from './components/NoteForm'
import 'antd/dist/reset.css'
import './App.css'

const { Sider, Content } = Layout

const MainContent = () => {
  const { selectedCategoryId, selectedNoteId, isCreatingNote } = useNotes()

  if (!selectedCategoryId) {
    return (
      <div className='main-right-panel'>
        <NoteForm />
      </div>
    )
  }

  if (selectedCategoryId && !selectedNoteId && !isCreatingNote) {
    return (
      <div className='notes-layout one-column'>
        <div className='notes-panel full-width'>
          <div className='notes-toolbar'>
            <CreateNote />
            <SearchBar />
          </div>
          <div className='notes-list-sider'>
            <NotesList />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='notes-layout two-column'>
      <div className='notes-panel narrow'>
        <div className='notes-toolbar'>
          <CreateNote />
          <SearchBar />
        </div>
        <div className='notes-list-sider'>
          <NotesList />
        </div>
      </div>

      <div className='note-view-content expanded'>
        <NoteView />
      </div>
    </div>
  )
}

function App() {
  return (
    <NotesProvider>
      <div className='app-wrapper'>
        <header className='app-header'>
          <div className='custom-header-content'>
            <p className='custom-header-title'>Your Notes</p>
            <button
              className='custom-close-button'
              onClick={() => window.location.reload()}
            >
              <CloseOutlined />
            </button>
          </div>
        </header>

        <div className='main-wrapper'>
          <div className='sidebar-panel'>
            <CreateCategory />
            <div className='category-scroll'>
              <CategoryList />
            </div>
          </div>
          <MainContent />
        </div>
      </div>
    </NotesProvider>
  )
}

export default App
