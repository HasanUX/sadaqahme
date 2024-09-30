import React from "react";
import CTO from "../img/cto.jpeg";
import Backend_1 from "../img/backend-1.jpeg";
import Backend_2 from "../img/backend-2.jpeg";

const Team = () => {
  return (
    <div className="team__section bg-light p-5">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="team__section-img">
              <img src={CTO} alt="" />
              <h5> CTO </h5>
            </div>

            <div className="team__section-img">
              <img src={Backend_1} alt="" />
              <h5> Backend Engineer </h5>
            </div>

            <div className="team__section-img">
              <img src={Backend_2} alt="" />
              <h5> Backend Engineer </h5>
            </div>
          </div>

          <div className="col-4">
            <h2>Meet The Team</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
