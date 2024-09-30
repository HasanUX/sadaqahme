import React from "react";
import { Link } from "react-router-dom";
import NavLogoLight from "../img/nav-logo-light.png";

const Announcements = () => {
  return (
    <div className="about mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-12 mx-auto mt-5 text-center">
            <div className="about__card">
              <h1>We are hiring volunteers</h1>
              <p>
                Let's make this platform a common contribution hub of different
                skills.
              </p>
              <ul class="list-group text-start mt-5 mb-5">
                <li class="list-group-item">Project manager</li>
                <li class="list-group-item">Field manager</li>
                <li class="list-group-item">SEO expert</li>
                <li class="list-group-item">Graphics designer</li>
                <li class="list-group-item">Video editor</li>
                <li class="list-group-item">Content writer</li>
                <li class="list-group-item">Social media manager</li>
              </ul>
              <p className="text-success fw-bold">
                We have industry experts from different professions to guide
                you.
              </p>
              <p>
                <small>
                  All positions are non-paid but you are going to be paid in
                  Akhirah inshaAllah
                </small>
              </p>

              <p>
                <a
                  href="https://forms.gle/TVQGEVEnzYF1Cqws6"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-warning d-block"
                >
                  Join Slack
                </a>
              </p>
              <span>
                <i className="fa fa-envelope"></i> Mail for team:
                <b> madeeasy.connect@gmail.com</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
