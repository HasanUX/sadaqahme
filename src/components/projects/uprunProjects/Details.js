import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../../Context/StateProvider";
import ReactGA from "react-ga";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { Helmet } from "react-helmet";

function Details() {
  const [details, setDetails] = useState([]);
  const { slug } = useParams();
  const { _ID } = useParams();
  const hashTags = ["donate", "charity", "sadaqah", "fundraise"];
  //  console.log("use param _ID", _ID);

  const { projects, ramadanProjects } = useContext(StateContext);

  useEffect(() => {
    const singleProject = projects.map((project) => {
      //  console.log("_ID", _ID);
      if (project.slug === slug) return setDetails(project);
    });
  }, [slug]);

  useEffect(() => {
    const singleProject = ramadanProjects.map((project) => {
      //  console.log("_ID", _ID);
      if (project._ID === _ID) return setDetails(project);
    });
  }, [_ID]);

  //  console.log("project", details);

  //  google analytics code starts
  const [userinfo, setUserInfo] = useState({
    response: [],
  });

  const handleResponse = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { response } = userinfo;

    ReactGA.event({
      category: value,
      action: "Responded with " + value,
      label: "uprun/" + slug,
      value: value,
    });

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        response: [...response, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        response: response.filter((e) => e !== value),
      });
    }
  };

  const handleSubmit = (action) => {
    //e.preventDefault();
    ReactGA.event({
      action: "response",
    });
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  //  google analytics code ends

  return (
    <div className="details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{details.projectHeading}</title>
        <meta
          name="description"
          content="Up and running projects of Sadaqah Made Easy - SME"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={details.projectHeading} />
        <meta property="og:description" content={details.projectDetails} />
        <meta property="og:url" content={details.getURL} />
        <meta
          property="og:image"
          content="https://sadaqahmadeeasy.com/static/media/tahsincancer.cebf8dbd5f62be9934c3.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Sadaqah Made Easy - SME" />
        <meta name="twitter:title" content={details.projectHeading} />
        <meta name="twitter:description" content={details.projectDetails} />
        <meta
          property="twitter:image"
          content="https://sadaqahmadeeasy.com/static/media/tahsincancer.cebf8dbd5f62be9934c3.jpeg"
        />
      </Helmet>
      {projects ? (
        <>
          <img
            src={details.projectImg}
            alt="project-img"
            className="details__img shadow-sm border rounded"
          />

          <div className="details__titleRadioFlex">
            <h2 className="details__heading">{details.projectHeading}</h2>
            {/*<div className="details__donatedbtn">
              <div className="wrapper">
            
                <input
                  className="form-check-input"
                  type="radio"
                  name="response"
                  value="donated"
                  id="donatedid1"
                  onChange={handleResponse}
                />
               
                <input
                  className="form-check-input"
                  type="radio"
                  name="response"
                  value="shared"
                  id="sharedid1"
                  onChange={handleResponse}
                />
                <label htmlFor="donatedid1" className="option option-1">
                  <div className="dot"></div>
                  <span>I donated</span>
                </label>
                <label htmlFor="sharedid1" className="option option-2">
                  <div className="dot"></div>
                  <span>I shared</span>
                </label>
              </div>
            </div>*/}
          </div>

          <p>Project created: {details.projectCreated}</p>
          <p>
            Organization / Type / Ref: <b>{details.projectOrgName}</b>
          </p>
          <div className="details__tag_socialFlex">
            <span className="badge bg-warning text-dark details__project-tag">
              <i className="fa fa-tag"></i> {""}
              Tag: {details.projectTag}
            </span>
          </div>
          <p className="details__description">{details.projectDetails}</p>
          <b className="details__contact">{details.projectContact}</b>

          <div className="details__facebookIDDiv">
            {details.projectFbProfile && (
              <>
                {" "}
                <a
                  href={details.projectFbProfile}
                  target="_blank"
                  className="details__facebookID text-primary"
                  rel="noreferrer"
                >
                  Visit referrer facebook profile
                </a>
              </>
            )}
          </div>
          {details.projectFbProfile1 && (
            <div>
              <a
                href={details.projectFbProfile1}
                target="_blank"
                className="details__facebookID text-primary"
                rel="noreferrer"
              >
                Visit referrer facebook profile
              </a>
              <br />
              <br />
              <a
                href={details.projectFbProfile2}
                target="_blank"
                className="details__facebookID text-primary"
                rel="noreferrer"
              >
                Visit referrer facebook profile
              </a>
            </div>
          )}

          <p className="details__social">
            <a
              href={details.projectLink}
              className="details__projectLink"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-users" aria-hidden="true"></i> Find them in
              web
            </a>
          </p>
          <div className="details__tag_socialFlex">
            <div className="details__socialResponsive">
              <p className="details__socialTitle">
                Share this project and gain rewards{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-share me-3"
                  viewBox="0 0 16 16"
                  style={{ color: "#4267B2" }}
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </p>
              <div className="details__socialShareBtn">
                <FacebookShareButton
                  url={details.getURL}
                  quote={details.projectHeading}
                >
                  <a type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                      style={{ color: "#4267B2" }}
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>

                    {/*<span>Tweet</span>*/}
                  </a>
                </FacebookShareButton>
                <TwitterShareButton
                  url={details.getURL}
                  title={details.projectHeading}
                  hashtags={hashTags}
                >
                  <a type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                      style={{ color: "#1DA1F2" }}
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>

                    {/*<span>Tweet</span>*/}
                  </a>
                </TwitterShareButton>
                <LinkedinShareButton
                  url={details.getURL}
                  title={details.projectHeading}
                  source={details.getURL}
                >
                  <a type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      style={{ color: "#0e76a8" }}
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>

                    {/*<span>Tweet</span>*/}
                  </a>
                </LinkedinShareButton>
              </div>
            </div>
          </div>
          <p className="details__dua">আল্লাহ কবুল করুন আমীন।</p>
          <div className="bg-light rounded shadow p-4">
            <h5 className="mb-4 text-dark">
              <i className="fa fa-paper-plane" aria-hidden="true"></i> {""}
              সাদাকাহ পাঠানোর সময় রেফারেন্সের সাথে{" "}
              <span className="text-success">"sadaqahmadeeasy.com"</span> অথবা,
              <span className="text-success">
                {" "}
                "via sadaqahmadeeasy.com"
              </span>{" "}
              যুক্ত করার জন্য অনুরোধ করা হচ্ছে।
            </h5>
            <h5 className="text-dark">
              <i className="fa fa-paper-plane" aria-hidden="true"></i> {""}
              Jazakallahu khair for adding{" "}
              <span className="text-success">"sadaqahmadeeasy.com"</span> or,
              <span className="text-success">
                {" "}
                "via sadaqahmadeeasy.com"
              </span>{" "}
              as additional referenece when sending sadaqah.
            </h5>
          </div>
        </>
      ) : (
        <>
          <img
            src={details.projectImg}
            alt="project-img"
            className="details__img shadow-sm border rounded"
          />

          <h2 className="details__heading">{details.projectHeading}</h2>
          <p>Project created: {details.projectCreated}</p>
          <p>
            Organization / Type / Ref: <b>{details.projectOrgName}</b>
          </p>
          <div className="details__tag_socialFlex">
            <span className="badge bg-warning text-dark details__project-tag">
              <i className="fa fa-tag"></i> {""}
              Tag: {details.projectTag}
            </span>
          </div>
          <p className="details__description">{details.projectDetails}</p>
          <b className="details__contact">{details.projectContact}</b>
          <a
            href={details.projectFbProfile}
            target="_blank"
            className="details__facebookID"
            rel="noreferrer"
          >
            Visit referrer facebook profile
          </a>
          <p className="details__social">
            <a
              href={details.projectLink}
              className="details__projectLink"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-users" aria-hidden="true"></i> Find them in
              web
            </a>
          </p>
          <div className="details__tag_socialFlex">
            <div className="details__socialResponsive">
              <p className="details__socialTitle">
                Share this project and gain rewards{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-share me-3"
                  viewBox="0 0 16 16"
                  style={{ color: "#4267B2" }}
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </p>
              <div className="details__socialShareBtn">
                <FacebookShareButton url={details.getURL}>
                  <a type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                      style={{ color: "#4267B2" }}
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>

                    {/*<span>Tweet</span>*/}
                  </a>
                </FacebookShareButton>
                <TwitterShareButton url={details.getURL}>
                  <a type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                      style={{ color: "#1DA1F2" }}
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>

                    {/*<span>Tweet</span>*/}
                  </a>
                </TwitterShareButton>
                <LinkedinShareButton url={details.getURL}>
                  <a type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      style={{ color: "#0e76a8" }}
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>

                    {/*<span>Tweet</span>*/}
                  </a>
                </LinkedinShareButton>
              </div>
            </div>
          </div>
          <p className="details__dua">আল্লাহ কবুল করুন আমীন।</p>

          <div className="bg-light rounded shadow p-4">
            <h5 className="mb-4 text-dark">
              <i className="fa fa-paper-plane" aria-hidden="true"></i> {""}
              সাদাকাহ পাঠানোর সময় রেফারেন্সের সাথে{" "}
              <span className="text-success">"sadaqahmadeeasy.com"</span> অথবা,
              <span className="text-success">
                {" "}
                "via sadaqahmadeeasy.com"
              </span>{" "}
              যুক্ত করার জন্য অনুরোধ করা হচ্ছে।
            </h5>
            <h5 className="text-dark">
              <i className="fa fa-paper-plane" aria-hidden="true"></i> {""}
              Jazakallahu khair for adding{" "}
              <span className="text-success">"sadaqahmadeeasy.com"</span> or,
              <span className="text-success">
                {" "}
                "via sadaqahmadeeasy.com"
              </span>{" "}
              as additional referenece when sending sadaqah.
            </h5>
          </div>
        </>
      )}

      {/*google analytics code starts*/}

      <form onSubmit={handleSubmit} method="GET">
        <div className="row mt-5">
          <h4>Please help us grow by providing your valuable response</h4>
          <h5>
            আপনার মূল্যবান প্রতিক্রিয়া প্রদান করে আমাদের বৃদ্ধি সাহায্য করুন
          </h5>
          <p className="text-primary">
            Select only one response (শুধুমাত্র একটি প্রতিক্রিয়া নির্বাচন করুন)
          </p>
          <div className="col-md-6 col-12 mt-3">
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="response"
                value="donated"
                id="donatedid"
                onChange={handleResponse}
              />
              <label className="form-check-label" htmlFor="donatedid">
                Viewed and donated (Alhamdulillah)
                <br />
                প্রজেক্ট দেখেছি এবং সাদাকাহ করেছি (আলহামদুলিল্লাহ)
              </label>
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="response"
                value="shared"
                id="sharedid"
                onChange={handleResponse}
              />
              <label className="form-check-label" htmlFor="sharedid">
                Donated and shared the project link (JazakAllahu khair)
                <br />
                সাদাকাহ করেছি এবং প্রজেক্ট লিঙ্ক শেয়ার করেছি (জাযাকাল্লাহ খাইর)
              </label>
            </div>
            <div className="form-check mb-5">
              <input
                className="form-check-input"
                type="radio"
                name="response"
                value="viewed"
                id="viewedid"
                onChange={handleResponse}
              />
              <label className="form-check-label" htmlFor="viewedid">
                Viewed and shared the project link (InshaAllah next time)
                <br />
                প্রজেক্ট দেখেছি এবং লিঙ্ক শেয়ার করেছি (পরের বার ইনশাআল্লাহ)
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-success border rounded shadow"
            >
              Submit (জমা দিন)
            </button>
          </div>
        </div>
      </form>
      {/*google analytics code ends*/}
    </div>
  );
}

export default Details;
