import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { StateContext } from "../Context/StateProvider";

function Ngos() {
  const { ngoList } = useContext(StateContext);

  const location = useLocation();

  return (
    <div className="ramadan ngos bg-light">
      <div className="container">
        <div className="col-12 text-center">
          <h1 className="ramadan__title fw-bold">{`NGO's helping us`}</h1>
        </div>

        <div className="row ramadan__project-row">
          {ngoList.map((project) => (
            <div className="col-md-4 col-12 mb-5" key={project._ID}>
              <Link
                to={`/ngo/${project.slug}`}
                className="ramadan__project-link"
              >
                <div className="card ramadan__project-card h-100">
                  <img
                    src={project.img}
                    className="card-img-top ramadan__project-img"
                    alt="project-img"
                  />

                  <div className="card-body">
                    <h5 className="card-title ramadan__project-heading text-black">
                      {project.name}
                    </h5>
                    <p className="card-text ramadan__project-org text-black">
                      Org/Ref/Type: <b>{project.type} </b>
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
                        Tag: {project.tag}
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
  );
}

export default Ngos;
