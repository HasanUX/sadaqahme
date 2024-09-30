import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../../Context/StateProvider";

function CtgFireDetails() {
  const [details, setDetails] = useState([]);
  const { slug } = useParams();
  //  console.log("use param slug", slug);

  const { ctgProjects } = useContext(StateContext);

  useEffect(() => {
    const singleProject = ctgProjects.map((project) => {
      //  console.log("slug", slug);
      if (project.slug === slug) return setDetails(project);
    });
  }, [slug]);

  //  console.log("project", details);

  return (
    <div className="details">
      <img
        src={details.projectImg}
        alt="project-img"
        className="details__img"
      />
      <h2 className="details__heading">{details.projectHeading}</h2>
      <p>Project created: {details.projectCreated}</p>
      <p>
        Organization / Type / Ref: <b>{details.projectOrgName}</b>
      </p>
      <span className="badge bg-warning text-dark details__project-tag">
        <i className="fa fa-tag"></i> {""}
        Tag: {details.projectTag}
      </span>

      <p className="details__description">{details.projectDetails}</p>
      <b className="details__contact">{details.projectContact}</b>

      <div className="details__facebookIDDiv">
        <a
          href={details.projectFbProfile}
          target="_blank"
          className="details__facebookID text-primary"
          rel="noreferrer"
        >
          Visit referrer facebook profile
        </a>
      </div>
      <p className="details__dua">আল্লাহ কবুল করুন আমীন।</p>
      <p className="details__social">
        find them in web:
        <a
          href={details.projectLink}
          className="details__projectLink"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
        </a>
      </p>
      <div className="bg-light rounded shadow p-4">
        <h5 className="mb-4 text-dark">
          <i className="fa fa-paper-plane" aria-hidden="true"></i> {""}
          সাহায্য পাঠানোর সময় রেফারেন্সের সাথে{" "}
          <span className="text-success">"sadaqahmadeeasy.com"</span> অথবা,
          <span className="text-success"> "via sadaqahmadeeasy.com"</span> যুক্ত
          করার জন্য অনুরোধ করা হচ্ছে।
        </h5>
        <h5 className="text-dark">
          <i className="fa fa-paper-plane" aria-hidden="true"></i> {""}
          Jazakallahu khair for adding{" "}
          <span className="text-success">"sadaqahmadeeasy.com"</span> or,
          <span className="text-success"> "via sadaqahmadeeasy.com"</span> as
          additional referenece when sending Help.
        </h5>
      </div>
    </div>
  );
}

export default CtgFireDetails;
