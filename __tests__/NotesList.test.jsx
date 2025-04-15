import React from 'react'
import { render } from '@testing-library/react'
import NotesList from '../src/components/NotesList'
import { NotesProvider } from '../src/context/NotesContext'

test('renders NotesList empty state when no notes found', () => {
  const { getByText } = render(
    <NotesProvider>
      <NotesList />
    </NotesProvider>
  )

  expect(getByText('No notes found')).toBeInTheDocument()
})
