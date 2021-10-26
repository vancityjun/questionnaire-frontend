import { useReducer, useState } from 'react'
import { InputField, Button } from '../../shared'
import { formReducer } from '../../modules'
import { useAppDispatch } from '../../app/hooks'
import { fetchUser } from './userSlice'

function Sign() {
  const [isRegister, toggleIsRegister] = useReducer(
    (previous) => !previous,
    false
  )
  const [userState, dispatch] = useReducer(formReducer, {})

  const appDispatch = useAppDispatch()

  const submit = () => {
    appDispatch(
      fetchUser({
        isRegister,
        variables: userState,
      })
    )
  }

  return (
    <div>
      <InputField
        title="last name"
        name="lastName"
        required
        onChange={(value: string) => dispatch({ target: { lastName: value } })}
      />
      <InputField
        title="email"
        name="email"
        onChange={(value: string) => dispatch({ target: { email: value } })}
      />
      <InputField
        title="password"
        name="password"
        onChange={(value: string) => dispatch({ target: { password: value } })}
      />
      <Button
        title={isRegister ? 'sign in' : 'register'}
        name={isRegister ? 'sign in' : 'register'}
        onClick={toggleIsRegister}
      />
      <Button title="submit" name="submit" onClick={() => submit()} />
    </div>
  )
}

export default Sign
