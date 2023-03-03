import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
const initialState={
    todoBooks:'',
    message:''
}

export const getBooks=createAsyncThunk("todos/getbooks",
async()=>{
    try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos`
        );
        console.log('res.data',res.data);
        return res.data;
      } catch (error) {
        throw error;
      }
})

const todoSlice=createSlice({
    name:'todo',
    initialState,
    extraReducers:(builder)=>{
    builder.addCase(getBooks.fulfilled,(state,action)=>{
        console.log({action})
        state.todoBooks=action.payload;
    })
    
    builder.addCase(getBooks.rejected,(state,action)=>{
        state.message='rejected'
    })
}
})

export default todoSlice.reducer;
export const todoSliceActions=todoSlice.actions;