import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../Context/StateProvider";

function Blog() {
  const [details, setDetails] = useState([]);
  const { slug } = useParams();
  //  console.log("use param _ID", _ID);

  const { blogs } = useContext(StateContext);

  useEffect(() => {
    const singleProject = blogs.map((org) => {
      //  console.log("_ID", _ID);
      if (org.slug === slug) return setDetails(org);
    });
  }, [slug]);

  return (
    <>
      <div className="container-fluid blog__cover">
        <img
          src={details.img}
          alt="cover-img"
          className="blog__img shadow-sm border rounded"
        />
      </div>
      <div className="blog">
        <h1 className="fw-bold mb-4">{details.name}</h1>
        <h4 className="mb-4">লিখেছেনঃ {details.author}</h4>
        <div>{details.details}</div>
      </div>
    </>
  );
}

export default Blog;
