import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apolloClient from '../../apollo'
import { loader } from 'graphql.macro'

const loginMutation = loader('../../graphql/mutations/login.gql')
const registerMutation = loader('../../graphql/mutations/register.gql')

interface userType {
  id: string
  fullName: string
  email: string
  firstName: string
  lastName: string
}

const userState: userType | null = null

interface fetchUserArguments {
  isRegister: boolean
  variables: any
}
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async ({ isRegister, variables }: fetchUserArguments) => {
    const response = await apolloClient.mutate({
      mutation: isRegister ? registerMutation : loginMutation,
      variables: { input: variables },
      fetchPolicy: 'no-cache',
    })
    return response.data.login || response.data.register
  }
)

// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async (variables) => {
//     const response = await apolloClient.mutate({
//       mutation: UpdateUser,
//       variables: { input: variables },
//     })
//     return response.data.updateUser.user
//   }
// )

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      return payload
    })
    // .addCase(updateUser.fulfilled, (state, { payload }) => {
    //   return payload
    // })
  },
})

export default userSlice.reducer
