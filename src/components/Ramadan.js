import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { StateContext } from "../Context/StateProvider";

function Ramadan() {
  const { ramadanProjects } = useContext(StateContext);

  const location = useLocation();

  return (
    <>
      <div
        className={
          location.pathname === "/ramadan" ? "ramadan-page" : "ramadan bg-light"
        }
        id="ramadan"
      >
        <div className="container">
          <div className="col-12 text-center">
            <h1
              className={
                location.pathname === "/ramadan"
                  ? "ramadan-page__title fw-bold"
                  : "ramadan__title fw-bold"
              }
            >{`Ramadan projects`}</h1>
          </div>

          <div className="row ramadan__project-row">
            {ramadanProjects.map((project) => (
              <div className="col-md-4 col-12 mb-5" key={project._ID}>
                <Link
                  to={`/details/${project._ID}`}
                  className="ramadan__project-link"
                >
                  <div className="card ramadan__project-card h-100">
                    <img
                      src={project.projectImg}
                      className="card-img-top ramadan__project-img"
                      alt="project-img"
                    />

                    <div className="card-body">
                      <h5 className="card-title ramadan__project-heading text-black">
                        {project.projectHeading}
                      </h5>
                      <p className="card-text ramadan__project-org text-black">
                        Org/Ref/Type: <b>{project.projectOrg.name} </b>
                      </p>
                      <p className="card-text ramadan__project-created text-secondary">
                        Created: {project.projectCreated}
                      </p>
                      {project.projectFund && (
                        <div
                          className="progress mb-4"
                          style={{ height: "12%" }}
                        >
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-info projects__progress-bar"
                            role="progressbar"
                            style={{
                              width: project.projectFundWidth,
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {project.projectFund}
                          </div>
                        </div>
                      )}
                      {/*<a
                        href={project.projectLink}
                        target="_blank"
                        className="btn btnCTA projects__project-btn"
                        rel="noreferrer"
                      >
                        View details
                      </a>*/}
                      <div className="ramadan__project-btntag">
                        <button className="btn btnCTA ramadan__project-btn">
                          View details
                        </button>

                        <span className="badge bg-warning text-dark ramadan__project-tag">
                          <i className="fa fa-tag"></i>
                          Tag: {project.projectTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*TrustBox widget - Micro Review Count */}
      <div className="bg-success review-section">
        <div
          className="trustpilot-widget p-4"
          data-locale="en-US"
          data-template-id="5419b6a8b0d04a076446a9ad"
          data-businessunit-id="623b6f4c88982b0e57979a37"
          data-style-height="24px"
          data-style-width="100%"
          data-theme="dark"
          data-min-review-count="10"
        >
          <a
            href="https://www.trustpilot.com/review/sadaqahmadeeasy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trustpilot
          </a>
        </div>
        <a
          href="https://www.trustpilot.com/review/sadaqahmadeeasy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light btn-review"
        >
          Submit review
        </a>
        {/*End TrustBox widget*/}
      </div>
    </>
  );
}

export default Ramadan;
