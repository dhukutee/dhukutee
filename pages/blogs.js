import { getABlog } from '../helpers/firebase';
import ArticleFull from '../components/ArticleFull';
import { customReplace } from '../helpers/customReplace';

import Page from './layouts/main';

const Blog = props => {
  return (
    <Page>
      <ArticleFull blog={props.blog} />
    </Page>
  );
};

Blog.getInitialProps = async ({ query }) => {
  //fetching the blog data from database before  rendering the screen
  const blog = await getABlog(query.slug);

  //fillin the dynamic data
  blog.message = await customReplace(blog.message);
  return { blog };
};

export default Blog;
