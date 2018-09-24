import WriteArticle from "../../components/WriteArticle";
import MainLayout from "../../layouts/MainLayout";
import { isLoggedIn, getABlog } from "../../helpers/firebase";
import Router from "next/router";

const Write = ({ blog, isNew }) => {
  isLoggedIn(user => {
    if (!user) {
      Router.push("/admin/login");
    }
  });
  return (
    <MainLayout>
      <WriteArticle blog={blog} isNew={isNew} />
    </MainLayout>
  );
};

Write.getInitialProps = async ({ query, req, res }) => {
  var blog = null;
  var isNew = false;

  if (query.slug == null) {
    isNew = true;
  } else {
    blog = await getABlog(query.slug);
    if (blog == null) {
      res.writeHead(303, { Location: "/admin" });
      res.end();
    }
  }

  return { blog, isNew };
};

export default Write;
