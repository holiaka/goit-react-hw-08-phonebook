import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; 

export const registrationOperation = createAsyncThunk(
    "auth/registration",
    async () => {
        try {
            const response = await axios.post('/users/signup')
            return response.data;
        } catch {
            
        }
    }
)