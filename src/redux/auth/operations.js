import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3001/api/users";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credential, thunkApi) => {
    try {
      const res = await axios.post("/register", credential);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credential, thunkApi) => {
    try {
      const res = await axios.post("/login", credential);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const res = await axios.post("/logout");
    clearAuthHeader();
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (credential, thunkApi) => {
    const { accessToken } = thunkApi.getState().auth;
    if (!accessToken) {
      return thunkApi.rejectWithValue("No valid token");
    }

    setAuthHeader(accessToken);
    try {
      const res = await axios.get("/current", credential);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
