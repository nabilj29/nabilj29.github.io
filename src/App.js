import "./App.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/about/About";
import EducationJourney from "./components/aboutme/journey/EducationJourney";
import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
import Experience from "./components/aboutme/experience/Experience";
import Clubs from "./components/aboutme/clubs/Clubs";
// import Zoom from 'react-reveal/Zoom';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<About />}></Route>
            <Route
              path="educationjourney"
              element={<EducationJourney />}
            ></Route>
            <Route path="clubs" element={<Clubs />}></Route>
            <Route path="experience" element={<Experience />}></Route>
            <Route path="socialmedia" element={<SocialMedia />}></Route>
          </Route>
          <Route path="/projectspage" element={<ProjectPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<ComingSoon />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
