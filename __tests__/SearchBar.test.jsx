import { render, fireEvent } from '@testing-library/react'
import SearchBar from '../src/components/SearchBar'
import { NotesProvider } from '../src/context/NotesContext'

test('updates search input value', () => {
  const { getByPlaceholderText } = render(
    <NotesProvider>
      <SearchBar />
    </NotesProvider>
  )

  const input = getByPlaceholderText('Search...')
  fireEvent.change(input, { target: { value: 'hello' } })
  expect(input.value).toBe('hello')
})
