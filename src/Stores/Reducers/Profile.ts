import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      isLoggedIn: false,
      currentProfile: {
        profileId: '' ,
        jwtToken: ''
      }
    },
    reducers: {
      setIsUserLoggedIn: (state: any, action) => {
        state.isLoggedIn = true;
        state.currentProfile.profileId = action.payload.profileId;
        state.currentProfile.jwtToken = action.payload.jwtToken;
      },
      setIsUserLoggedOut: (state: any, action) => {
        state.isLoggedIn = false;
        state.currentProfile.profileId = state.initialState.profileId;
        state.currentProfile.jwtToken = state.initialState.jwtToken;
      }
    },
  })
  export const { setIsUserLoggedIn, setIsUserLoggedOut } = profileSlice.actions
  export default profileSlice.reducer
  