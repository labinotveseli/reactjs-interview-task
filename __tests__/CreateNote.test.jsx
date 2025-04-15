import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CreateNote from '../src/components/CreateNote'
import { NotesProvider } from '../src/context/NotesContext'

test('renders CreateNote button', () => {
  const { getByText } = render(
    <NotesProvider>
      <CreateNote />
    </NotesProvider>
  )

  expect(getByText('Create Note')).toBeInTheDocument()
})
