import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      isLoggedIn: false,
      currentProfile: {
        authToken: '',
        profileId: '' 
      }
    },
    reducers: {
      setIsUserLoggedIn: (state: any, action) => {
        state.isLoggedIn = true;
        state.profileId = action.payload.profileId;
        state.authToken = action.payload.authToken;
      },
      setIsUserLoggedOut: (state: any, action) => {
        state.isLoggedIn = false;
        state.profileId = state.currentProfile.profileId;
        state.authToken = state.currentProfile.authToken;
      }
    },
  })
  export const { setIsUserLoggedIn, setIsUserLoggedOut } = profileSlice.actions
  export default profileSlice.reducer
  