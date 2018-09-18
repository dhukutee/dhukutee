import Link from 'next/link'
import { getAllBlog } from '../helpers/firebase'

const Home = props => (
  <div>
    <h1>Blogs</h1>
    <ul>
      {props.blogs.map(blog => 
         <li><a href={`/blogs/${blog.url}`}>{blog.title}</a></li>
      )}
    </ul>
  </div>
)

Home.getInitialProps = async () => {
  // fetching the blog data from database before rendering the screen
  const blogs = await getAllBlog()
  return { blogs }
}

export default Home
