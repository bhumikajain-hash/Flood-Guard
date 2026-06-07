import {configureStore} from '@reduxjs/toolkit'
import floodguardSlice from './reducer/floodguardSlice'

export const store = configureStore({
    reducer: {
        floodguard: floodguardSlice
    },
})