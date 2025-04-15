import React from 'react'
import { render } from '@testing-library/react'
import CategoryList from '../src/components/CategoryList'
import { NotesProvider } from '../src/context/NotesContext'

test('renders without crashing', () => {
  render(
    <NotesProvider>
      <CategoryList />
    </NotesProvider>
  )
})
