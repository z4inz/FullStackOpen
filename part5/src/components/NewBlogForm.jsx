import { useState } from 'react'

const NewBlogForm = ({ createNewBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addNewBlog = (event) => {
    event.preventDefault()
    createNewBlog({
      title: title,
      author: author,
      url: url
    })

    setTitle(''), setAuthor(''), setUrl('')
  }

  return (
    <form onSubmit={addNewBlog}>
      <h2>Create new blog post</h2>
      <div>
        title:
        <input
          data-testid='title'
          type="text"
          value={title}
          name="title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author:
        <input
          data-testid='author'
          type="text"
          value={author}
          name="author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url:
        <input
          data-testid='url'
          type="text"
          value={url}
          name="url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default NewBlogForm