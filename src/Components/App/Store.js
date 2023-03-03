import { configureStore } from "@reduxjs/toolkit";
import AlbumSliceReducer from "../Slice/AlbumSlice";
const store=configureStore({
    reducer:{
        book:AlbumSliceReducer
    }
});

export default store;