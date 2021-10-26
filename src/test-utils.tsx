import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import userReducer from './features/user/userSlice'
import { MockedProvider } from '@apollo/client/testing'
import { registerMock, loginMock } from './mocks'

const mocks = [registerMock, loginMock]

function render(
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: any) {
    return (
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>{children}</Provider>
      </MockedProvider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
