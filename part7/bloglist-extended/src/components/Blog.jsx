import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { increaseLike, removeBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'


const Blog = ({ blog, username }) => {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)

  const infoHidden = { display: visible ? 'none' : '' }
  const infoShown = { display: visible ? '' : 'none' }
  const deleteButtonHidden = { display: (username === blog.user.username) ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const likeBlogpost = async () => {
    dispatch(increaseLike(blog))
    dispatch(
      setNotification({
        message: `The blog '${blog.title}' has been liked`,
        isError: false
      })
    )
  }

  const deleteBlog = async () => {
    if (window.confirm(
      `Do you want to delete the blog '${blog.title}' by '${blog.author}'`
    )) {
      dispatch(removeBlog(blog))
      dispatch(
        setNotification({
          message: `The blog '${blog.title}' has been deleted`,
          isError: false
        })
      )
    }
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 5,
    border: 'solid',
    borderWidth: 1,
    paddingBottom: 5,
    marginBottom: 5
  }

  return (
    <div>
      <div style={infoHidden}>
        <div style={blogStyle}>
          {blog.title} {blog.author} <button onClick={toggleVisibility}>view</button>
        </div>
      </div>
      <div style={infoShown} className='infoShown'>
        <div style={blogStyle}>
          <li style={{ listStyleType: 'none' }}>{blog.title} <button onClick={toggleVisibility}>hide</button></li>
          <li style={{ listStyleType: 'none' }}>{blog.url}</li>
          <li style={{ listStyleType: 'none' }}>{blog.likes} <button onClick={likeBlogpost}>like</button></li>
          <li style={{ listStyleType: 'none' }}>{blog.user.name}</li>
          <div style={deleteButtonHidden}>
            <button onClick={deleteBlog}>delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog