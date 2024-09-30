import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

const Privacy = () => {
  //  google analytics code starts
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  //  google analytics code ends
  return (
    <div className="privacy" id="privacy">
      <div className="text-center">
        <h1 className="fw-bold">{`Privacy Policy`}</h1>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-12 mx-auto text-center">
            <div className="about__card">
              <div className="about__banglaDiv">
                <p className="mt-2 mb-4">
                  Assalamu ‘Alaikum Warohmatulloh, welcome to Sadaqah Made Easy
                  - SME! We appreciate your commitment to charitable causes. We
                  are committed to protecting your privacy and ensuring a secure
                  and transparent experience. This Privacy Policy outlines how
                  we collect, use, and safeguard your information when you use
                  our app or engage with our services.
                </p>
                <ul class="list-group text-start">
                  <li class="list-group-item">
                    1. Information We Collect:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • Name and Email: When you sign up for our app, we
                        collect your name and email to create your user account.
                      </li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    2. How We Use Your Information:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • User Account: Your name and email are used to create
                        and manage your user account, providing a seamless way
                        to get the app experience.
                      </li>
                      <li class="list-group-item">
                        • Communication: We may use your email to send updates
                        about projects, new features, and relevant information
                        related to our charitable initiatives. 2. How We Use
                        Your Information:
                      </li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    3. Information Security:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • We employ industry-standard security measures to
                        protect your information from unauthorize
                      </li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    4. Third-Party Sharing:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • We do not sell, trade, or otherwise transfer your
                        personally identifiable information to outside parties.
                      </li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    5. Donations:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • Our app does not process donations directly. Users are
                        redirected to the project details page for donation
                        information. We do not handle financial transactions
                        within the app.
                      </li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    6. Non-Profit Organization Enrollment:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • Information provided by non-profit charitable
                        organizations during enrollment is used for verification
                        purposes and to showcase legitimate projects on our
                        platform.
                      </li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    7. Charitable Project Enlisting:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • Information provided by non-profit charitable
                        organizations during project enlisting process is used
                        for verification purposes and to showcase legitimate
                        projects on our platform.
                      </li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    8. Children's Privacy:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • Our app and services are not directed toward
                        individuals under the age of 13. We do not knowingly
                        collect personal information from children.
                      </li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    9. Changes to Privacy Policy:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • Any updates to this Privacy Policy will be reflected
                        with a revised effective date. Users will be notified of
                        significant changes.
                      </li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    10. Contact Us:
                    <ul class="list-group text-start mt-2">
                      <li class="list-group-item">
                        • If you have any questions, concerns, or requests
                        regarding your privacy, please contact us at
                        sadaqahmadeeasy@gmail.com
                      </li>
                    </ul>
                  </li>
                </ul>

                <hr />
              </div>
              Last updated December 2023
            </div>

            <div className="about__about-disclaimer">
              <p className="about__about-disclaimer-header">
                <u>Disclaimer</u>
              </p>
              <p>
                We don't collect money (sadaqah) and we aren't connected with
                any organization/party/group.
              </p>
              <p>We just showcase authentic donation projects of any type.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
