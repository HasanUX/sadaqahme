import React from "react";
import playstore from "../../img/playstore.png";

const AppLanding = () => {
  return (
    <div className="container AppLanding">
      <div className="row AppLanding__row">
        <div className="col-md-7">
          <h2>
            <b>App is live!</b>
          </h2>
          <p>
            Sadaqah Made Easy - SME app aims to bring charitable fundraisers &
            non-profit organisations in one place.
          </p>
          <b>
            Discover Impact:{" "}
            <span className="text-success">
              {" "}
              Your Gateway to Charitable Projects!
            </span>
          </b>
          <a
            href="https://play.google.com/store/apps/details?id=com.sadaqahmadeeasy.app"
            target="__blank"
          >
            <img
              src={playstore}
              alt="about-logo"
              className="AppLanding__playstoreicon mt-4 mb-5"
            />
          </a>
        </div>

        <div className="col-md-5">
          <iframe
            width="560"
            height="314"
            style={{
              border: "none",
              overflow: "hidden",
              borderRadius: "20px",
            }}
            className="shadow-lg promoteVdo__iframe"
            src="https://www.youtube.com/embed/wVMbjl3-OG8"
            title="Android App Launches: Sadaqah Made Easy Takes the Stage"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AppLanding;
