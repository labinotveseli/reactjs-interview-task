/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const initialState = {
  categories: [
    { id: '1', name: 'Category', count: 1 },
    { id: '5', name: 'Category', count: 5 },
    { id: '12', name: 'Category', count: 12 },
    { id: '0-1', name: 'Category', count: 0 },
    { id: '16', name: 'Category', count: 16 },
    { id: '3', name: 'Category', count: 3 },
    { id: '2-1', name: 'Category', count: 2 },
    { id: '2-2', name: 'Category', count: 2 },
    { id: '0-2', name: 'Category', count: 0 },
    { id: '0-3', name: 'Category', count: 0 },
    { id: '0-4', name: 'Category', count: 0 },
    { id: '0-5', name: 'Category', count: 0 },
    { id: '0-6', name: 'Category', count: 0 },
    { id: '0-7', name: 'Category', count: 0 },
    { id: '0-8', name: 'Category', count: 0 }
  ],
  notes: [
    {
      id: '1',
      categoryId: '1',
      title: 'Title',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    ...Array.from({ length: 11 }).map((_, i) => ({
      id: `3-${i + 1}`,
      categoryId: '3',
      title: 'Title',
      content: `Lorem ipsum note ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur mi ut felis dapibus, non porttitor nulla tempor.`
    }))
  ]
}

const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [categories, setCategories] = useLocalStorage(
    'notes-app-categories',
    initialState.categories
  )
  const [notes, setNotes] = useLocalStorage(
    'notes-app-notes',
    initialState.notes
  )
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [selectedNoteId, setSelectedNoteId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isCreatingNote, setIsCreatingNote] = useState(false)

  useEffect(() => {
    resetToCreateNote()
  }, [])

  const selectCategory = categoryId => {
    setSelectedCategoryId(categoryId)
    setSelectedNoteId(null)
    setIsCreatingNote(false)
  }

  const selectNote = noteId => {
    setSelectedNoteId(noteId)
    setIsCreatingNote(false)
  }

  const enterCreateNoteMode = () => {
    setIsCreatingNote(true)
    setSelectedNoteId(null)
  }

  const exitCreateNoteMode = () => {
    setIsCreatingNote(false)
  }

  const resetToCreateNote = () => {
    setIsCreatingNote(true)
    setSelectedCategoryId(null)
    setSelectedNoteId(null)
  }

  const addCategory = name => {
    const newCategory = {
      id: Date.now().toString(),
      name,
      count: 0
    }
    setCategories([...categories, newCategory])
  }

  const addNote = note => {
    const newNote = {
      id: Date.now().toString(),
      ...note
    }

    setNotes([...notes, newNote])

    setCategories(prev =>
      prev.map(cat =>
        cat.id === note.categoryId ? { ...cat, count: cat.count + 1 } : cat
      )
    )

    setSelectedNoteId(newNote.id)
    setIsCreatingNote(false)
  }

  const deleteNote = noteId => {
    const noteToDelete = notes.find(n => n.id === noteId)
    if (!noteToDelete) return

    setNotes(notes.filter(n => n.id !== noteId))

    setCategories(prev =>
      prev.map(cat =>
        cat.id === noteToDelete.categoryId
          ? { ...cat, count: Math.max(cat.count - 1, 0) }
          : cat
      )
    )

    setSelectedNoteId(null)
    setIsCreatingNote(true) // Optional UX: go back to creation mode after delete
  }

  const updateNote = updatedNote => {
    setNotes(prev => prev.map(n => (n.id === updatedNote.id ? updatedNote : n)))
  }

  const filteredNotes = selectedCategoryId
    ? notes.filter(
        note =>
          note.categoryId === selectedCategoryId &&
          (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.content.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : []

  const selectedNote = notes.find(n => n.id === selectedNoteId) || null

  return (
    <NotesContext.Provider
      value={{
        categories,
        notes,
        selectedCategoryId,
        selectedNoteId,
        selectedNote,
        isCreatingNote,
        searchTerm,
        filteredNotes,
        setSearchTerm,
        setSelectedNoteId,
        setSelectedCategoryId,
        addCategory,
        addNote,
        updateNote,
        deleteNote,
        selectCategory,
        selectNote,
        enterCreateNoteMode,
        exitCreateNoteMode,
        resetToCreateNote
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => useContext(NotesContext)
