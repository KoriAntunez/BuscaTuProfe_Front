import Button from "./Button";

import {render, screen, fireEvent} from '@testing-library/react'

const Button = ({onClick, children}) => (
  <Button onClick={onClick}>{children}</Button>
)

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
