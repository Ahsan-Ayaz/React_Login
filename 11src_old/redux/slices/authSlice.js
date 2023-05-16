import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        login: (state, action) => {
          state.user = action.payload;
          state.isLoading = false;
          state.error = null;
        },
        logout: (state) => {
          state.user = null;
          state.isLoading = false;
          state.error = null;
        },
      }
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;