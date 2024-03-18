import { configureStore } from '@reduxjs/toolkit'

import { logInReducer } from "./reducer";


export const store = configureStore({
    reducer: {
      login: logInReducer,
    },
  });