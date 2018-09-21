import WriteArticle from "../../components/WriteArticle";
import MainLayout from "../../layouts/MainLayout";
import { isLoggedIn, logOut, getABlog } from "../../helpers/firebase";
import Router from "next/router";

const Write = ({ blog }) => {
  isLoggedIn(user => {
    if (!user) {
      Router.push("/admin/login");
    }
  });
  return (
    <MainLayout>
      <WriteArticle blog={blog} />
      <input type="button" value="Logout" onClick={() => logOut()} />
    </MainLayout>
  );
};

Write.getInitialProps = async ({ query }) => {
  // fetching the blog data from database before rendering the screen
  const blog = await getABlog(query.slug);
  return { blog };
};

export default Write;
