import React from "react";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { StateContext } from "../Context/StateProvider";
import ReactGA from "react-ga";

function Orgs() {
  const { organizations } = useContext(StateContext);
  const location = useLocation();

  //  google analytics code starts
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  //  google analytics code ends

  return (
    <div className="orgs bg-light" id="orgs">
      <div className="container">
        <div className="col-12 text-center">
          <h1 className="orgs__title fw-bold">{`Organizations you can trust`}</h1>
          <p className="orgs__subTitle">
            We got trusted people as reference too
          </p>
        </div>

        <div
          className={
            location.pathname === "/organizations"
              ? "row orgs__project-row project-first-col-hide"
              : "row orgs__project-row"
          }
        >
          {organizations.map((org) => (
            <div className="col-md-3 col-12 mb-5" key={org._ID}>
              <div className="card orgs__project-card h-100">
                <div className="card-body">
                  <h5 className="card-title orgs__project-heading">
                    {org.name}
                  </h5>
                  <p className="card-text orgs__project-org">
                    Org/Ref/Type: <b>{org.type} </b>
                  </p>

                  <Link to={`/org/${org.slug}`}>
                    <button className="btn btnCTA orgs__project-btn">
                      View profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orgs;
