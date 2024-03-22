import React from "react";
import HeroSection from "../../containers/HeroSection";
// import Plan from "../../containers/Plan";
import Bannar from "../HeroSection/Bannar";
// import HomepageFeatures from "../HomePageFeatures";
import BusinessPlanCard from "./businessPlanCard";
import FAQ from "./faq";
const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <HomepageFeatures/> */}
      {/* <Plan /> */}
      <Bannar />
      <BusinessPlanCard />
      <FAQ />
    </>
  );
};

export default Home;
