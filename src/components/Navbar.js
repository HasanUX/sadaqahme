/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavLogoDark from "../img/nav-logo-dark.png";
import NavLogoLight from "../img/nav-logo-light.png";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 1 ? setState(true) : setState(false);
  };

  const navbarClass =
    "navbar navbar-expand-lg navbar-light fixed-top bg-transp";

  const handleAuth = () => {
    if (auth) {
      auth.signOut();
      navigate("/login");
    }
  };

  return (
    <nav className={`${navbarClass} ${state ? "navbar-shadow" : ""}`}>
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">
            <img
              src={`${state ? NavLogoLight : NavLogoDark}`}
              alt="nav-logo"
              className="nav-logo"
            />
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {/*<Link to="/">
              <li className="nav-item">
                <span className={`nav-link ${state ? "nav-link-black" : ""}`}>
                  Home
                </span>
              </li>
            </Link>*/}

            <Link to="/app">
              <li className="nav-item">
                <span className={`nav-link ${state ? "nav-link-black" : ""}`}>
                  App
                </span>
              </li>
            </Link>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  state ? "nav-link-black" : ""
                }`}
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul
                className="dropdown-menu navbar-dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/*<Link to="/aid-sylhet">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Aid Sylhet
                    </span>
                  </li>
                </Link>*/}

                <Link to="/projects">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Running Projects
                    </span>
                  </li>
                </Link>

                <Link to="/flood-affected">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Flood Affected
                    </span>
                  </li>
                </Link>

                <Link to="/ummah">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Gaza Appeal
                    </span>
                  </li>
                </Link>
                {/*
                <Link to="/flood">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Flood
                    </span>
                  </li>
                </Link>*/}
                <Link to="/zakat">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Zakat
                    </span>
                  </li>
                </Link>

                <Link to="/madrasa">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Madrasa
                    </span>
                  </li>
                </Link>

                <Link to="/apps">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Beneficial Tech
                    </span>
                  </li>
                </Link>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  state ? "nav-link-black" : ""
                }`}
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About us
              </a>
              <ul
                className="dropdown-menu navbar-dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/disability">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      SME Disability & Inclusive Program
                    </span>
                  </li>
                </Link>

                <Link to="/about">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Our story
                    </span>
                  </li>
                </Link>

                <Link to="/timeline">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Timeline
                    </span>
                  </li>
                </Link>

                <Link to="/privacy-policy">
                  <li className="nav-item">
                    <span
                      className={`nav-link nav-dropdown-link ${
                        state ? "nav-link-black" : ""
                      }`}
                    >
                      Privacy policy
                    </span>
                  </li>
                </Link>
              </ul>
            </li>

            <Link to="/organizations">
              <li className="nav-item ">
                <span className={`nav-link ${state ? "nav-link-black" : ""}`}>
                  Orgs
                </span>
              </li>
            </Link>
            <Link to="/giftstore">
              <li className="nav-item">
                <span className={`nav-link ${state ? "nav-link" : ""}`}>
                  Gift store {""}
                  <span className="badge rounded-pill bg-warning text-dark">
                    2
                  </span>
                </span>
              </li>
            </Link>

            <Link to="/blogs">
              <li className="nav-item ">
                <span className={`nav-link ${state ? "nav-link-black" : ""}`}>
                  Blogs {""}
                  <span className="badge rounded-pill bg-warning text-dark">
                    New
                  </span>
                </span>
              </li>
            </Link>

            {/* <Link to="/login">
              <li className="nav-item" onClick={handleAuth}>
                <span
                  className={`nav-link btn btn-primary ${
                    state ? "nav-link-black" : ""
                  }`}
                >
                  {auth.currentUser ? "Log out" : "Log in"}
                </span>
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
