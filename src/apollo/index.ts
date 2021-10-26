import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'same-origin',
})

// const getToken = async () => {
//   let token: string | null
//   if (!token) {
//     return ''
//   }
//   token = token.split('=')[1]
//   return `Bearer ${token}`
// }

// export const setToken = async (token: string) => {
//   await
// }

const authLink = setContext(async (_, { headers }) => {
  // const token = await getToken()
  return {
    headers: {
      ...headers,
      // authorization: token,
    },
  }
})

const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
})

export default apolloClient
