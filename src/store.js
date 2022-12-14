import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { getDefaultNormalizer } from '@testing-library/react'
import authReducer from './pages/Auth/Auth.slice'

const rootReducer = {
  auth: authReducer,
}
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
})
export default store
