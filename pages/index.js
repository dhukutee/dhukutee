import { getAllBlog } from "../helpers/firebase";
import MainLayout from "../layouts/MainLayout";
import ArticleTile from "../components/ArticleTile";

const Home = props => (
  <MainLayout>
    <div className="hero">
      <h2>Financial Information at your fingertips!</h2>
      <h4>
        Dhukutee brings you all the accurate information you need to make
        financial decisions.
      </h4>
    </div>
    <ul className="choices">
      {props.blogs.map(blog => (
        <ArticleTile blog={blog} key={blog.url} />
      ))}
    </ul>
  </MainLayout>
);

Home.getInitialProps = async () => {
  // fetching the blog data from database before rendering the screen
  const blogs = await getAllBlog();
  return { blogs };
};

export default Home;
