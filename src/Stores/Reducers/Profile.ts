import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      isLoggedIn: false,
      currentProfile: {
        authToken: '',
        profileId: '' ,
        jwtToken: ''
      }
    },
    reducers: {
      setIsUserLoggedIn: (state: any, action) => {
        state.isLoggedIn = true;
        state.profileId = action.payload.profileId;
        state.authToken = action.payload.authToken;
        state.jwtToken = action.payload.jwtToken;
      },
      setIsUserLoggedOut: (state: any, action) => {
        state.isLoggedIn = false;
        state.profileId = state.initialState.profileId;
        state.authToken = state.initialState.authToken;
        state.jwtToken = state.initialState.jwtToken;
      }
    },
  })
  export const { setIsUserLoggedIn, setIsUserLoggedOut } = profileSlice.actions
  export default profileSlice.reducer
  