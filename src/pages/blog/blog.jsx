import { Link } from "react-router-dom";
import {
  SearchBox,
  Filters,
  Article,
  Loader,
  useDevBlogs,
  TbMailbox,
} from "../../exporter";
import "./blog.scss";
const Blog = () => {
  const { devBlogs } = useDevBlogs();

  let blogs = devBlogs?.map(
    ({
      cover_image,
      id,
      title,
      comments_count,
      positive_reactions_count,
      reading_time_minutes,
      readable_publish_date,
      tag_list,
    }) => (
      <Article
        key={id}
        coverImage={cover_image}
        title={title}
        reactionsCount={positive_reactions_count}
        commentsCount={comments_count}
        readingTime={reading_time_minutes}
        publishDate={readable_publish_date}
        tagList={tag_list}
      />
    )
  );

  return (
    <div className="blog-page">
      <header>
        <h2>
          Blogs
          <Link to={"/newsletter"}>
            <TbMailbox />
          </Link>
        </h2>
        <SearchBox />
        <Filters
          filters={[
            "all",
            "js",
            "react",
            "redux",
            "react-route-dom",
            "scss",
            "css",
            "html",
            "git",
          ]}
        />
      </header>
      <div className="articles-container">
        {devBlogs.length ? blogs : <Loader />}
      </div>
    </div>
  );
};

export default Blog;
