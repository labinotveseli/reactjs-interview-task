import React from 'react'
import { render, screen } from '@testing-library/react'
import CategoryList from '../src/components/CategoryList'

test('renders without crashing', () => {
  render(<CategoryList />)
  expect(screen.getByText(/Category/i)).toBeInTheDocument()
})
