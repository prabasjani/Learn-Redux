import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../features/PostSlice"

const AddPostForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const handleAddPost = (e) => {
    e.preventDefault()
    if (title && desc) {
      dispatch(addPost(title, desc))
    }
    setTitle("")
    setDesc("")
  }
  return (
    <div className="bg-white p-10 rounded-lg">
      <h1 className="text-4xl font-bold mb-5">Add New Post</h1>
      <form
        className="flex flex-col justify-center gap-5"
        onSubmit={handleAddPost}
      >
        <input
          type="text"
          placeholder="Enter your Post Title"
          className="px-4 py-2 border border-zinc-400/50 rounded-md focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter your Post Message"
          className="px-4 py-2 resize-none h-20 border border-zinc-400/50 rounded-md focus:outline-none"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <button
          className="px-5 py-2 rounded-md font-semibold text-white bg-blue-500"
          type="submit"
        >
          Add New Post
        </button>
      </form>
    </div>
  )
}

export default AddPostForm
