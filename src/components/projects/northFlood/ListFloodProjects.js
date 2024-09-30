import { useContext } from "react";
//import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
//import { StateContext } from "../../Context/StateProvider";
import { StateContext } from "../../../Context/StateProvider";

function ListFloodProjects() {
  const { floodProjects } = useContext(StateContext);

  return (
    <>
      <div className="zakat" id=" zakat">
        <div className="container">
          <div className="col-12 text-center">
            <h1
              className="
                ramadan__title fw-bold"
            >{`Help Flood Affected`}</h1>
          </div>

          <div className="row ramadan__project-row">
            {floodProjects.map((project) => (
              <div className="col-md-4 col-12 mb-5" key={project._ID}>
                <Link
                  to={`/flood/${project.slug}`}
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

export default ListFloodProjects;
