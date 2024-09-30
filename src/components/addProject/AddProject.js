import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
import axios from "axios";
import { organizations } from "../../data/OrgList";

function AddProject() {
  //  google analytics code starts
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  //  google analytics code ends
  const [projectData, setProjectData] = useState({
    yourName: "",
    profession: "",
    project_category: "",
    fbID: "",
    lID: "",
    email: "",
    address: "",
    projectName: "",
    phone: "",
    projectDate: "",
    projectTag: "",
    projectDetails: "",
    projectSocial: "",
    projectRef: "",
    projectContact: "",
    projectImg: "",
    dontReceiveMoney: "",
    victimIsInformed: "",
  });

  const postProjectData = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(projectData, "projectData====");

    const {
      yourName,
      profession,
      phone,
      project_category,
      fbID,
      lID,
      email,
      address,
      projectName,
      projectDate,
      projectTag,
      projectDetails,
      projectSocial,
      projectRef,
      projectContact,
      projectImg,
    } = projectData;

    if (
      yourName &&
      fbID &&
      project_category &&
      email &&
      address &&
      projectName &&
      projectDate &&
      projectTag &&
      projectDetails &&
      projectRef &&
      projectContact &&
      projectImg
    ) {
      let response;

      try {
        response = await axios.post(
          `https://api.sadaqahmadeeasy.com/api/project/add`,
          {
            name: yourName,
            profession: profession,
            project_category: project_category,
            facebook: fbID,
            phone: phone,
            linkedin: lID,
            email: email,
            address: address,
            project_name: projectName,
            publish_date: projectDate,
            project_tag: projectTag,
            description: projectDetails,
            social_link: projectSocial,
            referrer_id: projectRef,
            contact_details: projectContact,
            img_link: projectImg,
          }
        );
      } catch (err) {
        console.log(err);
      }

      if (response) {
        setProjectData({
          yourName: "",
          profession: "",
          fbID: "",
          lID: "",
          email: "",
          address: "",
          phone: "",
          project_category: "",
          projectName: "",
          projectDate: "",
          projectTag: "",
          projectDetails: "",
          projectSocial: "",
          projectRef: "",
          projectContact: "",
          projectImg: "",
          phone: "",
        });

        toast.success(
          "Your form has been submitted. If everything seems perfect, your project will get promoted within 3 days (max)"
        );

        //"Your form has been submitted. If everything seems perfect, your project will get promoted within 3 days (max)"
      }
    } else {
      //  alert("Please fill all the required form");
      toast("Please fill all the required form");
    }
  };

  return (
    <>
      <div className="container-fluid bg-light addProject">
        <div className="col-12 text-center addProject__titleDiv">
          <h1>Project/Organization enlisting form</h1>
          <p className="text-secondary addProject__subTitle">
            We Focus on quality & authenticity per se,
            <br />
            bringing all charities is not our goal.
          </p>
        </div>

        <div className="row g-5 mt-2">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">
                Type of projects/orgs we love to promote:
              </span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">
                    Help building Masjid / Madrasa / House
                  </h6>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Help for Muslim or, Non-muslim</h6>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Help managing treatment cost</h6>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Help building necessities</h6>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Non-profit organizations 🚀</h6>
                </div>
              </li>
            </ul>

            <div className="shadow-lg p-3 bg-secondary text-white text-center rounded">
              Help us building a community for cause{" "}
              <span style={{ fontSize: "20px" }}>🤝</span>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Project information</h4>
            <form className="addProject__form" onSubmit={submitData}>
              <div className="row g-3">
                <div className="col-sm-12">
                  <label htmlFor="yourName" className="form-label">
                    Org / Your name (Give your name if you're fundraising
                    personally)*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    value={projectData.yourName}
                    onChange={postProjectData}
                    name="yourName"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="profession" className="form-label">
                    Profession (of the submitter)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    value={projectData.profession}
                    name="profession"
                    onChange={postProjectData}
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="fbID" className="form-label">
                    Facebook ID/Page (link) *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    name="fbID"
                    placeholder="facebook.com/username"
                    value={projectData.fbID}
                    onChange={postProjectData}
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lID" className="form-label">
                    Linkedin ID/Page (link)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="linkedin.com/in/username"
                    name="lID"
                    value={projectData.lID}
                    onChange={postProjectData}
                  />
                </div>

                <div className="col-sm-6 col-12">
                  <label htmlFor="email" className="form-label">
                    Personal/Organization Email *
                  </label>
                  <input
                    type="Email"
                    className="form-control"
                    id=""
                    placeholder="you@example.com"
                    name="email"
                    value={projectData.email}
                    onChange={postProjectData}
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address * (Keep blank with a dot (.) if you have no address)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="1234, Banani, Dhaka"
                    name="address"
                    value={projectData.address}
                    onChange={postProjectData}
                    required
                  />
                </div>

                <div className="col-sm-12 col-md-6">
                  <label htmlFor="" className="form-label">
                    Phone number (May need for further query)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    value={projectData.phone}
                    onChange={postProjectData}
                    name="phone"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="" className="form-label">
                    Project/Organization category *
                  </label>
                  <select
                    className="form-control form-select"
                    value={projectData.project_category}
                    name="project_category"
                    onChange={postProjectData}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Regular">Regular</option>
                    <option value="Ramadan">Ramadan</option>
                    <option value="Madrasa">Madrasa/Mosque</option>
                    <option value="Treatment">Treatment</option>
                    <option value="Natural disaster">Natural disaster</option>
                    <option value="Tech">Tech</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="projectName" className="form-label">
                    Project/Organization name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectName"
                    placeholder="যেমন, পরিবারের একমাত্র কর্তা ক্যান্সারে আক্রান্ত"
                    name="projectName"
                    value={projectData.projectName}
                    onChange={postProjectData}
                    required
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="projectDate" className="form-label">
                    Date when you want to publish *
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="projectDate"
                    name="projectDate"
                    value={projectData.projectDate}
                    onChange={postProjectData}
                    required
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="projectTag" className="form-label">
                    Project/Organization tag *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectTag"
                    placeholder="Add max two tags separetad by comma (Emergency, যাকাত)"
                    name="projectTag"
                    value={projectData.projectTag}
                    onChange={postProjectData}
                    required
                  />
                </div>

                <div className="col-12">
                  <div className="">
                    <label htmlFor="floatingTextarea1" className="form-label">
                      Project/Organization details *
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Please provide a TRUE story"
                      id="floatingTextarea1"
                      name="projectDetails"
                      value={projectData.projectDetails}
                      onChange={postProjectData}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-6">
                  <label htmlFor="projectSocial" className="form-label">
                    Project/Organization social link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectSocial"
                    placeholder="Add facebook post link (if any)"
                    name="projectSocial"
                    value={projectData.projectSocial}
                    onChange={postProjectData}
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="projectRef" className="form-label">
                    Referrer ID link * (We search for a referrer only)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectRef"
                    placeholder="Facebook/Linkedin/Any ID link of the referrer"
                    name="projectRef"
                    value={projectData.projectRef}
                    onChange={postProjectData}
                    required
                  />
                </div>

                <div className="col-12">
                  <div className="">
                    <label htmlFor="floatingTextarea2" className="form-label">
                      Contact and send money details * (Keep blank with a dot
                      (.) if you have no payment details)
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Follow one of our project details page"
                      id="floatingTextarea2"
                      name="projectContact"
                      value={projectData.projectContact}
                      onChange={postProjectData}
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="projectImg" className="form-label">
                    Project image / Organization logo *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectImg"
                    placeholder="Place google drive link or any public link of the image"
                    name="projectImg"
                    value={projectData.projectImg}
                    onChange={postProjectData}
                    required
                  />
                </div>
              </div>
              <div className="form-check mt-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="money-aware"
                  required="required"
                  name="dontReceiveMoney"
                />
                <label className="form-check-label" htmlFor="money-aware">
                  Are you aware that we don't receive any money as donation?
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="data-share"
                  required="required"
                  name="victimIsInformed"
                />
                <label className="form-check-label" htmlFor="data-share">
                  Are you sure that victim/organizations' owner is informed
                  about these data?
                </label>
              </div>
              <button
                type="submit"
                className="w-100 btn btn-success btn-lg"
                //  onSubmit={submitData}
              >
                Confirm submit
              </button>
              <ToastContainer
                position="bottom-center"
                autoClose={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProject;
