import React from 'react'
import { render } from '@testing-library/react'
import NoteView from '../src/components/NoteView'
import { NotesProvider } from '../src/context/NotesContext'

test('renders NoteView empty state when no note selected', () => {
  const { getByText } = render(
    <NotesProvider>
      <NoteView />
    </NotesProvider>
  )

  expect(getByText('Select a note to view its contents')).toBeInTheDocument()
})
