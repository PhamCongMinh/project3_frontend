import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  jwt?: string
  userId?: string
  email?: string
  username?: string
  role?: string
  numberPhone?: string
}

const initialState: AuthState = {}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.jwt = action.payload.jwt
      state.userId = action.payload.userId
      state.email = action.payload.email
      state.role = action.payload.role
      state.numberPhone = action.payload.numberPhone
      state.username = action.payload.username
    },
    logOut: state => {
      state.jwt = undefined
      state.userId = undefined
      state.email = undefined
      state.role = undefined
      state.numberPhone = undefined
      state.username = undefined
    },
    extraReducers: (builder: any) => {}
  }
})

export const authSliceActions = {
  ...AuthSlice.actions
}

export default AuthSlice.reducer
