import { useSelector } from "react-redux"
import AddPostForm from "./AddPostForm"

const PostList = () => {
  const posts = useSelector((state) => state.posts)
  return (
    <div className="bg-slate-200 h-screen w-screen overflow-x-hidden px-20 py-10 ">
      <AddPostForm />
      <h1 className="text-4xl font-semibold my-4">Praba's Post Blog</h1>
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => {
          return (
            <div
              className="col p-5 border border-zinc-400/50 rounded-lg"
              key={post.id}
            >
              <h1 className="text-2xl font-semibold uppercase mb-2">
                {post.title}
              </h1>
              <p className="text-sm tracking-wider">{post.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostList
