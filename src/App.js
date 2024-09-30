import React, { useEffect } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Projects from "./components/projects/uprunProjects/Projects";
import Showcase from "./components/Showcase";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import Common from "./components/Common";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/projects/uprunProjects/Details";
import StateProvider from "./Context/StateProvider";
//import Ramadan from "./components/Ramadan";
import Orgs from "./components/Orgs";
import OrgDetails from "./components/OrgDetails";
import FixedFooter from "./components/FixedFooter";
import TechBlessing from "./components/TechBlessing";
import TechBlessingDetails from "./components/TechBlessingDetails";
import GiftStore from "./components/GiftStore";
import Announcements from "./components/Announcements";
import Counter from "./components/Counter";
import Ngos from "./components/Ngos";
import NgoDetails from "./components/NgoDetails";
import AddProject from "./components/addProject/AddProject";
import ZakatProjects from "./components/projects/zakatProjects/ZakatProjects";
import ZakatProjectDetails from "./components/projects/zakatProjects/ZakatProjectDetails";
import LastTen from "./components/projects/lastTen/LastTen";
import LastTenDetails from "./components/projects/lastTen/LastTenDetails";
import Blog from "./components/blogs/Blog";
import BlogList from "./components/blogs/BlogList";
import MadrasaProjects from "./components/projects/madrasaProjects/MadrasaProjects";
import MadrasaDetails from "./components/projects/madrasaProjects/MadrasaDetails";
import PostFormat from "./components/PostFormat";
import MedList from "./components/MedList";
import CtgFireProjects from "./components/projects/ctgfire/CtgFireProjects";
import CtgFireDetails from "./components/projects/ctgfire/CtgFireDetails";
import SylhetFloodProjects from "./components/projects/sylhetFlood/SylhetFloodProjects";
import SylhetFloodDetails from "./components/projects/sylhetFlood/SylhetFloodDetails";
import DisHome from "./components/disability/DisHome";
import NorthFloodProjects from "./components/projects/northFlood/ListFloodProjects";
import NorthFloodDetails from "./components/projects/northFlood/ListFloodDetails";
import Ramadan from "./components/projects/ramadanProjects/RamadanProjects";
import RamadanProjectDetails from "./components/projects/ramadanProjects/RamadanProjectDetails";

import QurbanProjects from "./components/projects/qurbanProjects/QurbanProjects";
import QurbanProjectsDetails from "./components/projects/qurbanProjects/QurbanProjectsDetails";
import PromoteVdo from "./components/featureSection/PromoteVdo";
import ProjectPDF from "./components/addProject/ProjectPDF";
import AppLanding from "./components/app/AppLanding";

import { Helmet } from "react-helmet";

import ReactGA from "react-ga";
//import { clarity } from "react-microsoft-clarity";
import UmmahProjects from "./components/projects/ummahProjects/UmmahProjects";
import UmmahProjectDetails from "./components/projects/ummahProjects/UmmahProjectDetails";
import Privacy from "./components/Privacy";
import Timeline from "./components/timeline/timeline";

function App() {
  useEffect(() => {
    const TRACKING_ID = "UA-238472918-1";
    ReactGA.initialize(TRACKING_ID);
  }, []);

  //  useEffect(() => {
  //    clarity.init("e0xairp54y");
  //  }, []);

  return (
    <Router>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sadaqah Made Easy - SME</title>
          <meta
            name="description"
            content="Authentic charitable based fundraising projects, Altogether"
          />
          <meta
            name="keywords"
            content="Donation, Charity, Fundraise, Fundraising, Crowdsource, Crowdsourcing, Non-profit, Project, Sadaqah, Sadakah, Donate, Help, Gift, Blog, Emergency, Urgent"
          />
        </Helmet>
        <StateProvider>
          <Routes>
            <Route
              exact
              path="/login"
              element={
                <>
                  <Navbar />
                  <Login />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          {/*app*/}
          <Routes>
            <Route
              exact
              path="/app"
              element={
                <>
                  <Navbar />
                  <AppLanding />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          {/*app*/}
          {/*qurban projects */}
          <Routes>
            <Route
              exact
              path="/qurban"
              element={
                <>
                  <Navbar />

                  <QurbanProjects />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/qurban/:slug"
              element={
                <>
                  <Navbar />
                  <QurbanProjectsDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          {/*qurban projects */}

          {/*sylhet projects */}
          <Routes>
            <Route
              exact
              path="/flood-affected"
              element={
                <>
                  <Navbar />

                  <SylhetFloodProjects />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/flood-affected/:slug"
              element={
                <>
                  <Navbar />
                  <SylhetFloodDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          {/*sylhet projects */}

          {/*north projects */}

          {/*Previously /sub-domain was aid-north */}
          <Routes>
            <Route
              exact
              path="/flood"
              element={
                <>
                  <Navbar />

                  <NorthFloodProjects />
                  <FixedFooter />
                </>
              }
            />
          </Routes>

          {/*Previously /sub-domain/:slug was aid-north */}
          <Routes>
            <Route
              exact
              path="/flood/:slug"
              element={
                <>
                  <Navbar />
                  <NorthFloodDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          {/*north projects */}

          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar />
                  <Header />
                  {/*<Showcase />*/}
                  {/*<CtgFireProjects />*/}
                  {/*<QurbanProjects />*/}
                  {/*<LastTen />*/}
                  <SylhetFloodProjects />
                  {/*<Ramadan />*/}
                  {/*<NorthFloodProjects />*/}

                  <UmmahProjects />
                  <ZakatProjects />
                  <Projects />
                  <MadrasaProjects />

                  <PromoteVdo />
                  <Counter />
                  <TechBlessing />
                  <Ngos />
                  <Summary />
                  <Footer />
                </>
              }
            />
          </Routes>

          {/*Previously /sub-domain was aid-north */}
          <Routes>
            <Route
              exact
              path="/ummah"
              element={
                <>
                  <Navbar />

                  <UmmahProjects />
                  <FixedFooter />
                </>
              }
            />
          </Routes>

          {/*Previously /sub-domain/:slug was aid-north */}
          <Routes>
            <Route
              exact
              path="/ummah/:slug"
              element={
                <>
                  <Navbar />
                  <UmmahProjectDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          {/*north projects */}

          {/*Ramadan*/}
          <Routes>
            <Route
              exact
              path="/ramadan"
              element={
                <>
                  <Navbar />

                  <Ramadan />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/ramadan/:slug"
              element={
                <>
                  <Navbar />
                  <RamadanProjectDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          {/*Ramadan*/}

          {/*Show PDF*/}
          <Routes>
            <Route
              exact
              path="/contract-pdf"
              element={
                <>
                  <Navbar />
                  <ProjectPDF />
                  <FixedFooter />
                </>
              }
            />
          </Routes>

          {/*Show PDF*/}

          {/*sitakunda projects */}
          <Routes>
            <Route
              exact
              path="/medlist"
              element={
                <>
                  <Navbar />
                  <MedList />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/help-ctg"
              element={
                <>
                  <Navbar />
                  <CtgFireProjects />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/help-ctg/:slug"
              element={
                <>
                  <Navbar />
                  <CtgFireDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          {/*sitakunda projects */}
          <Routes>
            <Route
              exact
              path="/showcase"
              element={
                <>
                  <Showcase />
                  <Projects />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/projects"
              element={
                <>
                  <Navbar />

                  <Projects />
                  <Footer />
                </>
              }
            />
          </Routes>

          <Routes>
            <Route
              exact
              path="/details/:slug"
              element={
                <>
                  <Navbar />

                  <Details />
                  <FixedFooter />
                </>
              }
            />
          </Routes>

          <Routes>
            <Route
              exact
              path="/madrasa"
              element={
                <>
                  <Navbar />

                  <MadrasaProjects />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/madrasa/:slug"
              element={
                <>
                  <Navbar />
                  <MadrasaDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>

          <Routes>
            <Route
              exact
              path="/apps"
              element={
                <>
                  <Navbar />

                  <TechBlessing />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/apps/:slug"
              element={
                <>
                  <Navbar />
                  <TechBlessingDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/zakat"
              element={
                <>
                  <Navbar />

                  <ZakatProjects />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/zakat/:slug"
              element={
                <>
                  <Navbar />
                  <ZakatProjectDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/lastten"
              element={
                <>
                  <Navbar />

                  <LastTen />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/lastten/:slug"
              element={
                <>
                  <Navbar />
                  <LastTenDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/organizations"
              element={
                <>
                  <Navbar />
                  {/*<Header />*/}
                  <Orgs />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/org/:slug"
              element={
                <>
                  <Navbar />
                  <OrgDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/ngo/:slug"
              element={
                <>
                  <Navbar />
                  <NgoDetails />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/giftstore"
              element={
                <>
                  <Navbar />
                  {/*<Common />*/}
                  <GiftStore />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          {/*blog route */}
          <Routes>
            <Route
              exact
              path="/blogs"
              element={
                <>
                  <Navbar />

                  <BlogList />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/blogs/:slug"
              element={
                <>
                  <Navbar />
                  <Blog />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/about"
              element={
                <>
                  <Common />
                  <About />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/timeline"
              element={
                <>
                  <Navbar />
                  <Timeline />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/privacy-policy"
              element={
                <>
                  <Navbar />

                  <Privacy />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/announcements"
              element={
                <>
                  <Navbar />
                  <Announcements />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/format"
              element={
                <>
                  <Navbar />
                  <PostFormat />
                  <FixedFooter />
                </>
              }
            />
          </Routes>

          {/*disability scope*/}
          <Routes>
            <Route
              exact
              path="/disability"
              element={
                <>
                  <Navbar />
                  <DisHome />
                  <FixedFooter />
                </>
              }
            />
          </Routes>

          {/*disability scope*/}

          <Routes>
            <Route
              exact
              path="/addproject"
              element={
                <>
                  <Navbar />
                  <AddProject />
                  <FixedFooter />
                </>
              }
            />
          </Routes>
        </StateProvider>
      </div>
    </Router>
  );
}

export default App;
