//import { getProjects } from "../data/ProjectList";
//import { getOrganizations } from "../data/OrgList";

export const initialState = {
  projects: [],
  organizations: [],
};

const Reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "PROJECT_DETAILS":
      return {
        ...state,
        projects: [...state.projects, action.item],
      };

    default:
      return state;
  }
};

export const projectReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default Reducer;
