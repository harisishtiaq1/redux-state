import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userBooks: "",
  message: "",
};

export const getBooks = createAsyncThunk("users/getbooks", async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log("res.data", res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      console.log({ action });
      state.userBooks = action.payload;
    });

    builder.addCase(getBooks.rejected, (state, action) => {
      state.message = "rejected";
    });
  },
});

export default userSlice.reducer;
export const userSliceActions = userSlice.actions;
