import { configureStore } from '@reduxjs/toolkit'
import { profileSlice } from './Reducers/Profile';
import { DrawerSlice } from './Reducers/Drawer';


export const store = configureStore({
    reducer:{
         profile: profileSlice.reducer,
         drawer: DrawerSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDisptch = typeof store.dispatch