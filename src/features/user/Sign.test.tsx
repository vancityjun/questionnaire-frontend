import ShallowRenderer from 'react-test-renderer/shallow'
import { render, fireEvent, screen } from '../../test-utils'
import Sign from './Sign'

test('renders login register form', () => {
  render(<Sign />)

  const lastNameInput = screen.getByLabelText('lastName')
  const emailInput = screen.getByLabelText('email')
  const passwordInput = screen.getByLabelText('password')
  const submitButton = screen.getByRole('button', { name: /submit/i })

  fireEvent.change(lastNameInput, { target: { value: 'Jun' } })
  expect(lastNameInput.value).toBe('Jun')
  fireEvent.click(submitButton)
})
