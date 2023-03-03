import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  postBooks: "",
  message: "",
};

export const getBooks = createAsyncThunk("posts/getbooks", async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    console.log("res.data", res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

const PostSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      console.log({ action });
      state.postBooks = action.payload;
    });

    builder.addCase(getBooks.rejected, (state, action) => {
      state.message = "rejected";
    });
  },
});

export default PostSlice.reducer;
export const PostSliceActions = PostSlice.actions;
