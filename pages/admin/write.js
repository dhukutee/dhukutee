import WriteArticle from "../../components/WriteArticle";
import Page from "../layouts/main";
import { isLoggedIn, logOut } from "../../helpers/firebase";
import Router from "next/router";

export default () => {
  isLoggedIn(user => {
    if (!user) {
      Router.push("/admin/login");
    }
  });
  return (
    <Page>
      <WriteArticle />
      <input type="button" value="Logout" onClick={() => logOut()} />
    </Page>
  );
};
