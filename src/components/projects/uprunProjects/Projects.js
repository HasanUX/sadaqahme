import React from "react";
import TypeGroup from "../../common/TypeGroup";
import Pagination from "../../common/pagination";
import paginate from "../../utils/paginate";
import { Link } from "react-router-dom";
import { StateContext } from "../../../Context/StateProvider";

class Projects extends React.Component {
  state = {
    //projects: getProject(),
    //  organizations: [],
    //  currentPage: 1,
    //  pageSize: 6,
  };

  // ContexAPI declaration
  static contextType = StateContext;

  //  const { projects, organizations, currentPage, handlePageChange, handleTypeSelect, pageSize} = useContext(StateContext);

  getPageData = (totalCount, data) => {
    const {
      pageSize,
      currentPage,
      projects: allProjects,
      selectedType,
    } = this.context;

    //order here
    //1st > filter data
    //2nd > sort data
    //3rd > paginate data

    const filtered =
      selectedType && selectedType._ID
        ? allProjects.filter((f) => f.projectOrg._ID === selectedType._ID)
        : allProjects;

    //paginate data
    const projects = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: projects };
  };

  render() {
    const { length: count } = this.context.projects;

    const {
      pageSize,
      currentPage,
      organizations,
      selectedType,
      handlePageChange,
      handleTypeSelect,
    } = this.context;
    //	const {
    //    projects,
    //    organizations,
    //    currentPage,
    //    handlePageChange,
    //    handleTypeSelect,
    //    pageSize,
    //  } = this.context;

    const handleSave = (project) => {
      const liveProjects = [...this.context.projects];
      const index = liveProjects.indexOf(project);
      liveProjects[index] = { ...liveProjects[index] };
      liveProjects[index].save = !liveProjects[index].save;
      this.setState(liveProjects);
      //  return { liveProjects: project };
      console.log(liveProjects[index].save);
    };

    if (count === 0)
      return (
        <h4 className="text-center mt-5">
          We don't have any projects available.
        </h4>
      );

    const { totalCount, data: projects } = this.getPageData();

    return (
      <section>
        <TypeGroup
          types={organizations}
          selectedType={selectedType}
          onTypeSelect={handleTypeSelect}
          totalCount={totalCount}
        />

        <div className="projects bg-light" id="projects">
          <div className="container">
            <div className="col-12 text-center">
              <h1 className="projects__title home__first fw-bold">{`Up & running projects`}</h1>
            </div>

            <div className="row projects__project-row">
              {projects.map((project) => (
                <div className="col-md-4 col-6 mb-5" key={project._ID}>
                  {/*<span>
                    <SaveProject
                      onClick={() => handleSave(project)}
                      save={project.save}
                      className="projects__saveProject"
                    />
                  </span>*/}
                  <Link
                    to={`/details/${project.slug}`}
                    className="projects__project-link"
                  >
                    <div className="card projects__project-card h-100">
                      <img
                        src={project.projectImg}
                        className="card-img-top projects__project-img"
                        alt="project-img"
                      />

                      <div className="card-body projects__project-cardBody">
                        <h5 className="card-title projects__project-heading">
                          {project.projectHeading}
                        </h5>

                        <p className="card-text projects__project-org text-black">
                          Org/Ref/Type:{" "}
                          <b className="projects__project-orgBold">
                            {project.projectOrgName}
                          </b>
                        </p>
                        <p className="card-text projects__project-created text-secondary">
                          Created: {project.projectCreated}
                        </p>
                        {project.projectFund && (
                          <div className="progress" style={{ height: "12%" }}>
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-info projects__progress-bar"
                              role="progressbar"
                              style={{
                                width: project.projectFundWidth,
                                paddingLeft: "5px",
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {project.projectFund} ৳ raised
                            </div>
                          </div>
                        )}

                        <div className="projects__project-btntag">
                          <button className="btn btnCTA projects__project-btn">
                            View details
                          </button>

                          <span className="badge bg-warning text-dark projects__project-tag">
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

          <div className="d-flex justify-content-center pb-5">
            <Pagination
              itemsCount={totalCount}
              onPageChange={handlePageChange}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
