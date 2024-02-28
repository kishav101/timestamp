import { createSlice } from '@reduxjs/toolkit'

export const DrawerSlice = createSlice({
    name: 'drawer',
    initialState: {
      isDrawerOpen: false
    },
    reducers: {
        setIsDrawerOpen: (state: any, action) => {
            state.isDrawerOpen = action.payload;
          },
        setIsDrawerClosed: (state: any, action) => {
        state.isDrawerOpen = action.payload;
        },
    },
  })
  export const { setIsDrawerOpen, setIsDrawerClosed } = DrawerSlice.actions
  export default DrawerSlice.reducer
  