import { configureStore } from "@reduxjs/toolkit";
import AlbumSliceReducer from "../Slice/AlbumSlice";
import PostSliceReducer from "../Slice/PostSlice";
import CommentsSliceReducer from "../Slice/CommentsSlice";
import TodosSliceReducer from "../Slice/TodosSlice";
import UsersSliceReducer from "../Slice/UsersSlice";
const store=configureStore({
    reducer:{
        albumReducer:AlbumSliceReducer,
        postReducer:PostSliceReducer,
        commentReducer:CommentsSliceReducer,
        todoReducer:TodosSliceReducer,
        userReducer:UsersSliceReducer
    }
});

export default store;