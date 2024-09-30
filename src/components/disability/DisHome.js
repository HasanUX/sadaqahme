import { useEffect } from "react";
import giftOneDelivered from "../../img/giftOneDelivered.jpeg";
import ovijatrik1 from "../../img/ovijatrik1.jpeg";
import ovijatrik2 from "../../img/ovijatrik2.jpeg";
import ovijatrik3 from "../../img/ovijatrik3.jpeg";
import ReactGA from "react-ga";

function DisHome() {
  //  google analytics code starts
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  //  google analytics code ends

  return (
    <div>
      {/*<Helmet>
        <title>{"Works on Disability"} </title>
        <meta
          name="description"
          content="Authentic Sadaqah Projects, Altogether"
        />
        <meta
          name="keywords"
          content="Non-profit, charity, donation, donate, sadaqah, projects, fundraise"
        />
      </Helmet>*/}
      <div className="container disHome">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h3 className="disHome__title">
              Our works on helping people with disabilities
            </h3>{" "}
            <img
              src={giftOneDelivered}
              className="disHome__enlistedImg shadow-lg mb-4"
              alt="giftStore-img"
            />
            <a
              className="btn btn-success"
              href="https://www.facebook.com/sadaqahmadeeasy/posts/137087188829807"
              target="_blank"
              rel="noreferrer"
            >
              See Details
            </a>
          </div>

          <div className="row justify-content-center disHome__enlistedWork">
            <h3 className="disHome__title">
              Our enlisted charity organizations work on helping people with
              <b> disabilities</b>
            </h3>{" "}
            <div className="col-md-4 col-12 text-center">
              <img
                src={ovijatrik1}
                className="disHome__enlistedImg shadow-lg mb-3 h-50"
                alt="enlisted-img"
              />
              <a
                className="btn btn-success"
                href="https://www.facebook.com/ovijatrik.dinajpur/photos/a.135447484990381/165297938672002/"
                target="_blank"
                rel="noreferrer"
              >
                See Detailsß
              </a>
            </div>
            <div className="col-md-4 col-12 text-center">
              <img
                src={ovijatrik2}
                className="disHome__enlistedImg shadow-lg mb-3 h-50"
                alt="enlisted-img"
              />
              <a
                className="btn btn-success"
                href="https://www.facebook.com/md.arifulhuq/posts/pfbid02AYZEVjsTMGdpn256cNom26NjhacNH8gfMCBSA6gzuxvEhJgkgPkZxtBwrhtymJLwl"
                target="_blank"
                rel="noreferrer"
              >
                See Details
              </a>
            </div>
            <div className="col-md-4 col-12 text-center">
              <img
                src={ovijatrik3}
                className="disHome__enlistedImg shadow-lg mb-3 h-50"
                alt="enlisted-img"
              />
              <a
                className="btn btn-success"
                href="https://www.facebook.com/ovijatrik.dinajpur/photos/a.135447484990381/380551883813272/"
                target="_blank"
                rel="noreferrer"
              >
                See Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisHome;
