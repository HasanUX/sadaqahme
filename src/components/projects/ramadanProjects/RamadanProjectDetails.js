import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../../Context/StateProvider";

function RamadanProjectDetails() {
  const [details, setDetails] = useState([]);
  const { slug } = useParams();
  //  console.log("use param slug", slug);

  const { ramadanProjects } = useContext(StateContext);

  useEffect(() => {
    const singleProject = ramadanProjects.map((project) => {
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
      <p className="details__dua mt-4">আল্লাহ কবুল করুন আমীন।</p>
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

      <h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-translate"
          viewBox="0 0 16 16"
        >
          <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
          <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
        </svg>
        &nbsp; Requesting international donors to read the details using any
        translator.
      </h4>
      <div className="bg-light rounded shadow p-4 mt-4">
        <h5 className="mb-4 text-dark">
          <i className="fa fa-paper-plane" aria-hidden="true"></i> {""}
          সাদাকাহ পাঠানোর সময় রেফারেন্সের সাথে{" "}
          <span className="text-success">"sadaqahmadeeasy.com"</span> অথবা,
          <span className="text-success"> "via sme"</span> যুক্ত করার জন্য
          অনুরোধ করা হচ্ছে।
        </h5>
        <h5 className="text-dark">
          <i className="fa fa-paper-plane" aria-hidden="true"></i> {""}
          Jazakallahu khair for adding{" "}
          <span className="text-success">"sadaqahmadeeasy.com"</span> or,
          <span className="text-success"> "via sme"</span> as additional
          referenece when sending Zakat.
        </h5>
      </div>
    </div>
  );
}

export default RamadanProjectDetails;
