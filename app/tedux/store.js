import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './slices/teastSlice'
export const store = configureStore({
    reducer: {
        messageData: messageReducer
    },
})