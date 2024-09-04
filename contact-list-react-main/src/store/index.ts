import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactReducer from './reducers/contact'

const persistConfig = {
  key: 'contactList',
  storage
}

const persistedReducer = persistReducer(persistConfig, contactReducer)

const store = configureStore({
  reducer: {
    contacts: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
})

const persistor = persistStore(store)

export type RootReducer = ReturnType<typeof store.getState>

export { store, persistor }
