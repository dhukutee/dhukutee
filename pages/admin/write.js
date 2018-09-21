import WriteArticle from "../../components/WriteArticle";
import MainLayout from "../../layouts/MainLayout";
import { isLoggedIn, logOut, getABlog } from "../../helpers/firebase";
import Router from "next/router";

const Write = ({ blog ,isNew}) => {
  isLoggedIn(user => {
    if (!user) {
      Router.push("/admin/login");
    }
  });
  console.log(!blog);
  return (
    <MainLayout>
      <WriteArticle blog={blog} new={isNew} />
      <input type="button" value="Logout" onClick={() => logOut()} />
    </MainLayout>
  );
};

Write.getInitialProps = async ({ query }) => {
  // fetching the blog data from database before rendering the screen
  var blog = {};
  var isNew = true;
  if (query != null) {
    isNew = false;
    blog = await getABlog(query.slug);
  }
  return { blog, isNew };
};

export default Write;
