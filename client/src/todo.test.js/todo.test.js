import { render, screen, cleanup } from '@testing-library/react'
import App from '../App'

test('should render', () => {
  render(<App />)
  const todoElement = screen.getAllByTestId('app-1')
  expect(todoElement).toBeInTheDocument()
})
