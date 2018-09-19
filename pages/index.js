import { getAllBlog } from '../helpers/firebase'
import Page from './layouts/main'
import ArticleTile from '../components/ArticleTile'

const Home = props => (
  <Page>
    <div className='hero'>
      <h2>Financial Information at your fingertips!</h2>
      <h4>
        Dhukutee brings you all the accurate information you need to make
        financial decisions.
      </h4>
    </div>
    <ul className='choices'>
      {props.blogs.map(blog => <ArticleTile blog={blog} key={blog.url} />)}
    </ul>
  </Page>
)

Home.getInitialProps = async () => {
  // fetching the blog data from database before rendering the screen
  const blogs = await getAllBlog()
  return { blogs }
}

export default Home
