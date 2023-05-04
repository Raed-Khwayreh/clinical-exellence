import "./BlogStyle.css";
import BlogCard from "./BlogCard";
import Title from "../common/Title";
const Blog = () => {
  const blog = [
    "assets/images/blog1.png",
    "assets/images/blog2.png",
    "assets/images/blog3.png",
    "assets/images/blog2.png",
  ];
  return (
    <section className="blog">
      <div className="container">
        <div className="ms-md-5">
          <Title
            margin="112px"
            text=""
            title="Our Latest News"
            parag="
              Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
          />
        </div>
        <div className="container ">
          <div className="blogFlex">
            {blog.map((e, i) => (
              <BlogCard key={i} img={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
