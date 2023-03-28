import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const registration = createAsyncThunk(
  'auth/registration',
  async (credantials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credantials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credantials, thunkAPI) => {
    try {
      const response = await axios.post('users/login', credantials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/login', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
