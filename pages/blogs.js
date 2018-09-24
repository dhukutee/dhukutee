import { getABlog, deleteABlog } from "../helpers/firebase";
import ArticleFull from "../components/ArticleFull";
import { customReplace } from "../helpers/customReplace";
import Router from "next/router";

import MainLayout from "../layouts/MainLayout";

const Blog = ({ blog }) => {
  return (
    <MainLayout>
      <ArticleFull blog={blog} />
    </MainLayout>
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
