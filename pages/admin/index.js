import Router from "next/router";

import {
  getAllBlog,
  getDownloadUrl,
  deleteABlog
} from "../../helpers/firebase";
import MainLayout from "../../layouts/MainLayout";
import ArticleTile from "../../components/ArticleTile";

const AdminPage = props => (
  <MainLayout>
    <ul className="choices">
      {props.blogs.map(blog => (
        <div className="adminList" key={blog.url}>
          <ArticleTile blog={blog} />
          <button
            onClick={() => {
              Router.push(`/admin/write/${blog.url}`);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteABlog(blog.url).then(() => {
                Router.push(`/admin/`);
              });
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  </MainLayout>
);

AdminPage.getInitialProps = async () => {
  // fetching the blog data from database before rendering the screen
  const blogs = await getAllBlog();
  return { blogs };
};

export default AdminPage;
