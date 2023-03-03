import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
const initialState={
    commentBooks:'',
    message:''
}

export const getBooks=createAsyncThunk("comments/getbooks",
async()=>{
    try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/comments`
        );
        console.log('res.data',res.data);
        return res.data;
      } catch (error) {
        throw error;
      }
})

const commentsSlice=createSlice({
    name:'comments',
    initialState,
    extraReducers:(builder)=>{
    builder.addCase(getBooks.fulfilled,(state,action)=>{
        console.log({action})
        state.commentBooks=action.payload;
    })
    
    builder.addCase(getBooks.rejected,(state,action)=>{
        state.message='rejected'
    })
}
})

export default commentsSlice.reducer;
export const commentsSliceactions=commentsSlice.actions;