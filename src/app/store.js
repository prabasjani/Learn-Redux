import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/CounterSlice"
import postReducer from "../features/PostSlice"

export const store = configureStore({
    reducer: {
        // counter: counterReducer
        posts: postReducer
    }
})