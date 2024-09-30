import { Link } from "react-router-dom";
import { StateContext } from "../../Context/StateProvider";
import { useEffect, useState, useContext } from "react";
import ReactGA from "react-ga";

function BlogList() {
  const { blogs } = useContext(StateContext);

  // Set loading state to true initially
  const [loading, setLoading] = useState(true);

  //  google analytics code starts
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  //  google analytics code ends

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 1000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return (
      <div className="text-center p-5">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }

  // If page is not in loading state, display page.
  else {
    return (
      <div className="projects mt-5" id="projects">
        {/*<Helmet>
          <title>{"Blogs - SME"} </title>
          <meta
            name="description"
            content="Authentic Sadaqah Projects, Altogether"
          />
          <meta
            name="keywords"
            content="Non-profit, charity, donation, donate, sadaqah, projects, fundraise"
          />
        </Helmet>*/}
        <div className="container mt-5">
          <div className="col-12 text-center">
            <h1 className="projects__title fw-bold">{`Read in the name of Allah`}</h1>
          </div>

          <div className="row projects__project-row">
            {blogs.map((blog) => (
              <div className="col-md-4 col-12 mb-5" key={blog._ID}>
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="projects__project-link"
                >
                  <div className="card projects__project-card h-100">
                    <img
                      src={blog.img}
                      className="card-img-top projects__project-img"
                      alt="project-img"
                    />

                    <div className="card-body projects__project-cardBody">
                      <h5 className="card-title projects__project-heading">
                        {blog.name}
                      </h5>

                      <p className="card-text projects__project-created mt-3 mb-4 text-secondary">
                        Author: {blog.author}
                      </p>

                      <div className="projects__project-btntag text-start">
                        <button className="btn btnCTA projects__project-btn">
                          Read now
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogList;
