/* eslint-disable jsx-a11y/anchor-has-content */
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../Context/StateProvider";
import { Link } from "react-router-dom";

function OrgDetails() {
  const [details, setDetails] = useState([]);
  const { slug } = useParams();
  //  console.log("use param _ID", _ID);

  const { organizations } = useContext(StateContext);

  useEffect(() => {
    const singleProject = organizations.map((org) => {
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
      <span>Contact: {details.contact}</span>
      <p className="mt-3">
        <a href={details.orgWeb} target="_blank" rel="noreferrer">
          <i className="fa fa-globe me-2" aria-hidden="true"></i>
          Visit website
        </a>
      </p>

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

export default OrgDetails;
