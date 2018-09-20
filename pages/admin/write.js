import WriteArticle from "../../components/WriteArticle";
import MainLayout from "../../layouts/MainLayout";
import { isLoggedIn, logOut } from "../../helpers/firebase";
import Router from "next/router";

export default () => {
  isLoggedIn(user => {
    if (!user) {
      Router.push("/admin/login");
    }
  });
  return (
    <MainLayout>
      <WriteArticle />
      <input type="button" value="Logout" onClick={() => logOut()} />
    </MainLayout>
  );
};
