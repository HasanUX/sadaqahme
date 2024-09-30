import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../Context/StateProvider";
import ReactGA from "react-ga";

function NgoDetails() {
  const [details, setDetails] = useState([]);
  const { slug } = useParams();
  //  console.log("use param _ID", _ID);
  //  google analytics code starts
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  //  google analytics code ends
  const { ngoList } = useContext(StateContext);

  useEffect(() => {
    const singleProject = ngoList.map((org) => {
      //  console.log("_ID", _ID);
      if (org.slug === slug) return setDetails(org);
    });
  }, [slug]);

  //  console.log("org", details);

  return (
    <div className="details">
      <img src={details.img} alt="project-img" className="details__img" />
      <h2 className="details__heading">{details.name}</h2>
      <p>Founded: {details.founded}</p>
      <p>
        Organization / Type / Ref: <b>{details.type}</b>
      </p>
      <p>{details.details}</p>
      <p>Contact: {details.contact}</p>
      <span>
        Website:{" "}
        <a href={details.orgWeb} target="_blank" rel="noreferrer">
          {details.orgWeb}
        </a>
      </span>

      <p className="details__social mt-3">
        find them in web:
        <a
          href={details.orgSocial}
          className="details__projectLink"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default NgoDetails;
