import { useContext } from "react";
import { Link } from "react-router-dom";
//import { StateContext } from "../../Context/StateProvider";
import { StateContext } from "../../../Context/StateProvider";

function ZakatProjects() {
  const { zakatProjects } = useContext(StateContext);

  return (
    <>
      <div className="zakat" id=" zakat">
        <div className="container">
          <div className="col-12 text-center">
            <h1
              className="
                ramadan__title fw-bold"
            >{`Establish Zakat`}</h1>
          </div>

          <div className="row ramadan__project-row">
            {zakatProjects.map((project) => (
              <div className="col-md-4 col-12 mb-5" key={project._ID}>
                <Link
                  to={`/zakat/${project.slug}`}
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
                        Org/Ref/Type: <b>{project.projectOrgName} </b>
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
    </>
  );
}

export default ZakatProjects;
