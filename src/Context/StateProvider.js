import React, { Component, createContext } from "react";
import { getProjects } from "../data/ProjectList";
import { getOrganizations } from "../data/OrgList";
import { getRamadanProjects } from "../data/RamadanProjects";
import { getTechBlessingProjects } from "../data/TechBlessingProjects";
import { getNgos } from "../data/NgoList";
import { getZakatProjectList } from "../data/ZakatProjectList";
import { getLastTen } from "../data/LastTen";
import { getBlogs } from "../data/AllBlogs";
import { getMadrasaList } from "../data/MadrasaList";
import { getSylhetProjects } from "../data/SylhetProjects";
import { getCtgProjects } from "../data/CtgProjects";
import { getUmmahProjects } from "../data/UmmahProjects";
import { getQurbanProjectList } from "../data/QurbanProjectList";

//Prepare the data layer
export const StateContext = createContext();

class StateProvider extends Component {
  state = {
    projects: getProjects(),
    ramadanProjects: getRamadanProjects(),
    madrasaProjects: getMadrasaList(),
    organizations: getOrganizations(),
    techBlessingProjects: getTechBlessingProjects(),
    zakatProjects: getZakatProjectList(),
    qurbanProjects: getQurbanProjectList(),
    sylhetProjects: getSylhetProjects(),
    ummahProjects: getUmmahProjects(),
    ctgProjects: getCtgProjects(),
    lastTen: getLastTen(),
    ngoList: getNgos(),
    blogs: getBlogs(),
    searchProjects: "",
    currentPage: 1,
    pageSize: 6,
  };

  componentDidMount() {
    const organizations = [
      { _ID: "", name: "All orgs" },
      ...getOrganizations(),
    ];
    this.setState({ projects: getProjects(), organizations });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleTypeSelect = (type) => {
    this.setState({ selectedType: type, currentPage: 1 });
    //here currentPage:1 means it will reset to page 1 whenever we navigate to any type/project
  };

  // add to pending func - toggle checkbox
  //  handleSave = (todo) => {
  //    const liveProjects = [...this.state.projects];
  //    const index = liveProjects.indexOf(todo);
  //    liveProjects[index] = { ...liveProjects[index] };
  //    liveProjects[index].save = !liveProjects[index].save;
  //    this.setState({ liveProjects: [...liveProjects] });
  //  };

  handleSearch = () => {
    let sortedProjects = this.state.projects;
    if (this.state.searchProjects) {
      sortedProjects = sortedProjects.filter((prod) =>
        prod.name.toLowerCase().includes(this.state.searchProjects)
      );
    }
    return sortedProjects;
  };

  render() {
    return (
      <StateContext.Provider
        value={{
          ...this.state,
          handlePageChange: this.handlePageChange,
          handleTypeSelect: this.handleTypeSelect,
          handleSave: this.handleSave,
          handleSearch: this.handleSearch,
        }}
      >
        {this.props.children}
      </StateContext.Provider>
    );
  }
}

export default StateProvider;
