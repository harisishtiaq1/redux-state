import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  books: "",
  message: "",
};

export const getBooks = createAsyncThunk("album/getbooks", async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
    console.log("res.data", res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

const albumSlice = createSlice({
  name: "album",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      console.log({ action });
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.message = "rejected";
    });
  },
});

export default albumSlice.reducer;
export const albumSliceActions = albumSlice.actions;
