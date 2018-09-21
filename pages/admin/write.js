import WriteArticle from "../../components/WriteArticle";
import MainLayout from "../../layouts/MainLayout";
import { isLoggedIn, logOut, getABlog } from "../../helpers/firebase";
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
      <input type="button" value="Logout" onClick={() => logOut()} />
    </MainLayout>
  );
};

Write.getInitialProps = async ({ query }) => {
  var blog = null;
  var isNew =false;

  if(query.slug == null){
    isNew = true
  } else {
    blog = await getABlog(query.slug)
  }
    
  return { blog, isNew };
};

export default Write;
