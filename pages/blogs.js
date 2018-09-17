import { getABlog } from '../helpers/firebase'
import ArticleFull from '../components/ArticleFull'
import { customReplace } from '../helpers/customReplace'

const Blog = props => {
  return (
    <div>
      <ArticleFull blog={props.blog} />
    </div>
  )
}

Blog.getInitialProps = async ({ query }) => {
  //fetching the blog data from database before  rendering the screen
  const blog = await getABlog(query.slug)
  
  //fillin the dynamic data
  blog.message = await customReplace(blog.message)
  return { blog }
}

export default Blog
