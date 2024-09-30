import React from "react";
import Orgs from "./Orgs";

const Footer = () => {
  const [orgs] = React.useState([
    {
      id: 2,
      orgName: "Al Manahil Foundation",
      link: "https://sadaqahmadeeasy.com/org/al-manahil-foundation",
    },
    {
      id: 3,
      orgName: "Munir Foundation",
      link: "https://sadaqahmadeeasy.com/org/munir-foundation",
    },
    {
      id: 4,
      orgName: "Sab'a Sanabil Foundation",
      link: "https://sadaqahmadeeasy.com/org/saba-sanabil-foundation",
    },
    {
      id: 1,
      orgName: "অভিযাত্রিক সমাজ কল্যাণ সংস্থা",
      link: "https://sadaqahmadeeasy.com/org/ovijatrik",
    },
    {
      id: 5,
      orgName: "JCI Dhaka West",
      link: "https://sadaqahmadeeasy.com/org/jci-dhaka-west",
    },
    //{
    //  id: 6,
    //  orgName: "Sidaaq foundation",
    //  link: "https://www.facebook.com/Sidaaq-Foundation-104358131780746",
    //},
  ]);

  return (
    <footer className="footer">
      <div className="footer__footer-header">
        <div className="footer__footer-contact">
          <span>
            <i className="fa fa-envelope"></i> sadaqahmadeeasy@gmail.com
          </span>
          <p className="mt-2 mb-4">
            We are updating continuously.
            <span> More important features </span>
            will be added soon.
          </p>
        </div>

        <div className="footer__footer-disclaimer">
          <p className="footer__footer-disclaimer-header">
            <u>Disclaimer</u>
          </p>
          <p>
            We don't collect money (sadaqah) and we aren't connected with any
            organization/party/group.
          </p>
          <p>We just showcase authentic donation projects of any type.</p>
          <br />
          <p>
            Important: If we find any suspicious activity in any of the enlisted
            projects, we will remove the project without notifying and <br /> we
            may send report to the distinguished authority to investigate that
            certain project/org.
          </p>
          <h4>Help us building a better Bangladesh</h4>
          {/*<hr />*/}
        </div>
        {/*<div className="mt-5">
          <h6 className="text-success">
            Our another platform based on inspiring stories.{" "}
          </h6>
          <p>
            <a
              href="https://revertmadeeasy.com/"
              target="_blank"
              rel="noreferrer"
              className="text-light"
            >
              <u>Revert Made Easy</u> (Collecting blogs)
            </a>
          </p>
        </div>*/}
      </div>
      <span className="border-shape"></span>
      <div className="bottom_content">
        <section>
          <a
            href="https://www.facebook.com/sadaqahmadeeasy/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
          </a>

          <a
            href="https://twitter.com/sadaqahme"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.linkedin.com/company/sadaqah-made-easy"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a>
        </section>
        <h6 className="text-center mt-3">Organizations we trust</h6>
        <section>
          {orgs.map((name) => (
            <a key={name.id} href={name.link} target="_blank" rel="noreferrer">
              {name.orgName}
            </a>
          ))}
        </section>

        <a href={`/organizations`}>
          <p className="text-center text-secondary">And more...</p>
        </a>
      </div>
      <div className="copyright">
        Copyright © 2024 SadaqahMadeEasy - All rights reserved - Donation
        doesn't decrease wealth
      </div>
    </footer>
  );
};

export default Footer;
