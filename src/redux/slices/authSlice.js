import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk('loginUser', async (credentials) => {
  // make an API call to log in the user
    const response = await fetch('https://api-dev.smartrecruitonline.com/auth/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
    return error;
  }

  const data = await response.json();
  //console.log(data);
  return data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    /*reducers: {
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
      },*/
      extraReducers: (builder) => {
      builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
        localStorage.setItem('authorized', JSON.stringify(action.payload.token));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;