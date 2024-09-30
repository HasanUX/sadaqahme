import React from "react";
import { getProjects } from "../data/ProjectList";
import { getOrganizations } from "../data/OrgList";
import Projects from "./Projects";

class Project extends React.Component {
  state = {
    projects: getProjects(),
    organizations: getOrganizations(),
  };

  render() {
    const { projects } = this.state;
    return (
      <section>
        <div className="details bg-light">
          <div className="container">
            <div className="row details__row">
              <div className="col-md-12 col-12 mb-5" key={projects._ID}>
                <Projects />
                <img
                  src={projects.projectImg}
                  className="details__img w-100"
                  alt="project-img"
                />
                <h5 className="details__heading">
                  title:{projects.projectHeading}
                </h5>
                <p className="details__description">project description</p>
                <div className="details__card h-100">
                  <span className="badge bg-warning text-dark details__tag">
                    <i className="fa fa-tag"></i>
                    Tag: {projects.projectTag}
                  </span>
                  <div className="details__body">
                    <p className="details__org">
                      Organization: <b>{projects.projectOrg} </b>
                    </p>
                    <p className="details__created text-secondary">
                      Created: {projects.projectCreated}
                    </p>
                    <a
                      href={projects.projectLink}
                      target="_blank"
                      className="btn btnCTA details__btn"
                      rel="noreferrer"
                    >
                      Facebook post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
