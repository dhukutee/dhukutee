import { getABlog, deleteABlog } from "../helpers/firebase";
import ArticleFull from "../components/ArticleFull";
import { customReplace } from "../helpers/customReplace";
import Router from "next/router";

import Page from "./layouts/main";

const Blog = ({ blog }) => {
  return (
    <Page>
      <ArticleFull blog={blog} />
      <button
        onClick={() => {
          deleteABlog(blog.url)
            .then(res => {
              Router.push(`/`);
            })
            .catch(err => {
              console.log(err);
            });
        }}
      >
        Delete Blog
      </button>
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
