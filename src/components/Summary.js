import React from "react";
import summaryImg from "../img/about-img.jpg";

const Summary = () => {
  return (
    <div className="summary" id="summary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 text-center">
            <div className="summary__card">
              <h3 className="summary__title fw-bold">
                You can find Sadaqah projects here
              </h3>
              <h4 className="summary__sub-title">
                Just click <span> "View details" </span> to redirect to the
                project you want to donate.
              </h4>
            </div>
          </div>

          <div className="col-md-6 col-12 text-center">
            <div className="summary__summary-img">
              <img src={summaryImg} alt="summary-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
