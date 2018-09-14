import { addABlog } from '../helpers/firebase'

export default () => (
  <div>
    URL:
    <br />
    https://dhukutee.com/blogs/<input type='text' id='url' />
    <br />
    <br />
    Title:
    <br />
    <input type='text' id='title' />
    <br />
    <br />
    Details:
    <textarea
      id='detail'
      style={{
        width: '100%',
        height: '300px'
      }}
    />
    <br />
    <br />
    Featured Image:
    <br />
    <input type='file' id='image' />
    <br />
    <br />
    <input type='submit' onClick={pushBlog} />

  </div>
)

const pushBlog = () => {
  const blog = {
    url: document.getElementById('url').value,
    title: document.getElementById('title').value,
    message: document.getElementById('detail').value,
    imageUrl: document.getElementById('image').value
  }
  addABlog(blog)
}
