import Blog from "./Blog"
import { useSelector } from "react-redux"

const BlogList = ({ increaseBlogLike, deleteBlog, user }) => {
  const blogs = useSelector((state) => state.blogs)
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)
  return (
    <div>
      {sortedBlogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          increaseBlogLike={increaseBlogLike}
          removeBlog={deleteBlog}
          username={user.username}
        />
      ))}
    </div>
  )
}

export default BlogList