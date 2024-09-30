/* eslint-disable no-unused-vars */

import React from "react";
import { getOrganizations } from "../data/OrgList";

class Header extends React.Component {
  state = {
    fishes: getOrganizations(),
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-start align-items-center">
            <h3 className="mr-4">Organizations: </h3>
            {this.categoryMap()}
          </div>
        </div>
      </div>
    );
  }

  //map() - categories
  categoryMap() {
    return (
      <div>
        {this.props.header.category.map((elem) => (
          <button
            key={Math.random()}
            className="btn btn-light border shadow mb-2 mr-4"
          >
            {elem.name}
          </button>
        ))}
      </div>
    );
  }
}

export default Header;
