import registerMutation from '../graphql/mutations/register.gql'
import loginMutation from '../graphql/mutations/login.gql'
import { gql } from '@apollo/client'

const userResult = {
  result: {
    data: {
      user: {
        id: '1',
        lastName: 'Jun',
        firstName: '',
        email: '',
      },
    },
  },
}

export const registerMock = {
  request: {
    query: gql`
      {
        registerMutation
      }
    `,
    variables: {
      lastName: 'Jun',
    },
  },
  userResult,
}

export const loginMock = {
  request: {
    query: gql`
      {
        loginMutation
      }
    `,
    variables: {
      email: 'jun@example.com',
      password: '1234',
    },
  },
  userResult,
}
