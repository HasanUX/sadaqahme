/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation, useNavigate } from "react-router-dom";
import weeklyusers from "../img/weeklyusers.png";
import monthydonate from "../img/monthydonate.png";
import monthlyshares from "../img/monthlyshares.png";
import playstore from "../img/playstore.png";

import Showcase from "./Showcase";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  //  google analytics code
  const reqPromotion = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "test category",
      action: "test action",
      label: "test label",
      value: "test value",
    });

    navigate("/addproject");
  };

  //  const { searchProjects, handleSearch } = this.context;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="headerBg">
      <div className="header container-fluid">
        <div className="header__flexOne">
          <div className="header__content">
            <h1 className="header__content-h1">Donate to Create Impact</h1>
            <p className="header__content-links">
              You are a fundraiser? Promote through us!
            </p>
            <div className="header__content-buttons">
              <button
                //  href="/addproject"
                onClick={reqPromotion}
                className="btn btn-success header__headerCTA mt-3"
              >
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                Request for Promotion
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.sadaqahmadeeasy.app"
                target="__blank"
              >
                <img src={playstore} alt="playstore" />
              </a>
            </div>
            <div className="header__analytics">
              <div className="header__stat">
                <img src={weeklyusers} alt="wau" />
                <div>
                  <p>Weekly Active Users</p>
                  <p className="fw-bold">370+</p>
                </div>
              </div>
              <div className="header__stat">
                <img src={monthydonate} alt="md" />
                <div>
                  <p>Last Month Donation</p>
                  <p className="fw-bold">150+</p>
                </div>
              </div>
              <div className="header__stat">
                <img src={monthlyshares} alt="ms" />
                <div>
                  <p>Last Month Shares</p>
                  <p className="fw-bold">705+</p>
                </div>
              </div>
            </div>
            {/*<span className="header__content-span">
              {" "}
              <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
            </span>{" "}
            <a href="#" className="header__content-links f-i">
              Altogether
            </a>*/}
            <h3 className="mt-5">
              {location.pathname === "/blogs" ? "Read Our Blogs" : ""}
            </h3>

            {/*<h5 className="scroll-down">View Projects</h5>*/}
          </div>
        </div>
        <div className="header__flexTwo">
          <Showcase />
          <div className="header__gradientBg">
            <div className="header__gradCircle header__gradientBg__circle1"></div>
            <div className="header__gradCircle header__gradientBg__circle2"></div>
            <div className="header__gradCircle header__gradientBg__circle3"></div>
            <div className="header__gradCircle header__gradientBg__circle4"></div>
            <div className="header__gradCircle header__gradientBg__circle5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
