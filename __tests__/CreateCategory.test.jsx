import { render, fireEvent } from '@testing-library/react'
import CreateCategory from '../src/components/CreateCategory'
import { NotesProvider } from '../src/context/NotesContext'

test('toggles category input on button click', () => {
  const { getByTestId } = render(
    <NotesProvider>
      <CreateCategory />
    </NotesProvider>
  )

  fireEvent.click(getByTestId('create-category-button'))
  expect(getByTestId('category-input')).toBeInTheDocument()
})
