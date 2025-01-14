import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counterApp',
    initialState: { count: 0 },
    reducers: {
        increament: (state) => {
            state.count += 2
        },
        decreament: (state) => {
            state.count -= 2
        },
        reset: (state) => {
            state.count = 0
        },
        addValue: (state, action) => {
            state.count += action.payload
        },
    }
})

export const {increament, decreament, reset, addValue} = counterSlice.actions
export default counterSlice.reducer     // This is for store