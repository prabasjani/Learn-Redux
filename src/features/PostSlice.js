import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "posts",
    initialState: [
        {id: 1, title: "First Post", desc: "This is the first post for the testing purpose!"},
        {id: 2, title: "Second Post", desc: "This is the Second post for the testing purpose!"}
    ],
    reducers: {
        addPost: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, desc) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        desc
                    }
                }
            }
        }
    }
})

export const {addPost} = postSlice.actions
export default postSlice.reducer