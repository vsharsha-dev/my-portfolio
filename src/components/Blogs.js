import { Helmet } from "react-helmet";
import "./styles/Blogs.css";
import data from "../db/db.json"

const Blogs = () => {

  const blogs = data["blogs"]

  return (
    <>
      <Helmet>
        <title>{"Blogs"}</title>
      </Helmet>

      <div className="blogs">
        <h1 className="blogs-heading">Blogs</h1>
        <div className="blogs-container">
          {blogs.length ? (
            blogs.map((blog) => (
              <div className="blog">
                <h2 className="blog-title">{blog["title"]}</h2>
                <p className="blog-description">{blog["description"]}</p>
              </div>
            ))
          ) : (
            <h4>No Blogs currently</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
