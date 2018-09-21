import Router from "next/router";

import WriteArticle from "../../components/WriteArticle";
import MainLayout from "../../layouts/MainLayout";
import { isLoggedIn, logOut } from "../../helpers/firebase";
import DataTree from "../../components/DataTree";

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
      <DataTree />
    </MainLayout>
  );
};
