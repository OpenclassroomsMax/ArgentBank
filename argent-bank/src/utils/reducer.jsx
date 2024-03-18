import { createSlice } from '@reduxjs/toolkit';

export const logInSlice = createSlice({
  name: 'login',
  initialState: {
    token: "",
    userLogIn: "",
    errorLogIn: null,     
},
  reducers: {
    setToken: (state, action) => {
    
      state.token = action.payload;
    },
    setUserLogIn: (state, action) => {
        state.userLogIn = action.payload;
    },
    setErrorLogin: (state, action) => {
      state.errorLogIn += action.payload;
    }
  }
})

export const { setToken, setUserLogIn, setErrorLogin } = logInSlice.actions;

export const logInReducer = logInSlice.reducer;

