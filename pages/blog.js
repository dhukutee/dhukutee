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
  const blog = await getABlog(query.slug)
  blog.message = await customReplace(blog.message)
  return { blog }
}

export default Blog
