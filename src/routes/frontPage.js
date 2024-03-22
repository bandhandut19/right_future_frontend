import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../containers/FrontPage/Pages/About";
import Contact from "../containers/FrontPage/Pages/Contact";
import Home from "../containers/FrontPage/Pages/Home";
// import Services from "../containers/FrontPage/Pages/Services";
import PlanPDF from "../containers/FrontPage/containers/PlanPDF/index";
// import SideBarSocialIcon from "../components/SideBarSocialIcon/SideBarSocialIcon";
import Particle from "../containers/FrontPage/components/Particle";
// import Packages from "../containers/FrontPage/Pages/Packages";
const FrontPage = () => {
  return (
    <>
    <Particle/>
      {/* <SideBarSocialIcon/> */}
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/planPDF" element={<PlanPDF />} />
        {/* <Route path="/packages" element={<Packages />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default FrontPage;
