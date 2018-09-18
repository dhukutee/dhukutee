import Link from 'next/link';
import Page from './layouts/main';
import { getAllBlog } from '../helpers/firebase'

const Home = props => (
  <Page>
    <div class="hero">
      <h2>Financial Information at your fingertips!</h2>
      <h4>
        Dhukutee brings you all the accurate information you need to make
        financial decisions.
      </h4>
    </div>
   <div>
    <h1>Blogs</h1>
    <ul>
      {props.blogs.map(blog => 
         <li><a href={`/blogs/${blog.url}`}>{blog.title}</a></li>
      )}
    </ul>
  </div>
  </Page>
);


Home.getInitialProps = async () => {
  // fetching the blog data from database before rendering the screen
  const blogs = await getAllBlog()
  return { blogs }
}

export default Home
