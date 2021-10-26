import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ApolloProvider } from '@apollo/client'
import apolloClient from './apollo'
import { Provider } from 'react-redux'
import { store } from './app/store'

test('renders learn react link', () => {
  render(
    // <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <App />
    </Provider>
    // </ApolloProvider>
  )
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
