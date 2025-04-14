import { render, fireEvent } from '@testing-library/react'
import NoteForm from '../src/components/NoteForm'
import { NotesProvider } from '../src/context/NotesContext'

test('renders NoteForm inputs', () => {
  const { getByPlaceholderText } = render(
    <NotesProvider>
      <NoteForm />
    </NotesProvider>
  )

  expect(getByPlaceholderText('Add a title...')).toBeInTheDocument()
  expect(getByPlaceholderText('Write your note here...')).toBeInTheDocument()
})
