import React from "react";
import heroimg from "../../../../assets/logo.png";
import CustomLink from "../../../../components/Link";
const HeroSection = () => {
  return (
    <div className="rf_frontpage_wrapper" id="home">
      <div className="landingPage_container container hero_section" >
        <div className="rf_front_hero_section">
          <div className="rf_front_hero_content">
            <h2>welcome to Right Future</h2>
            <p>
              A community of like-minded traders and investors working together
              to earn cryptocurrency and build financial freedom.
            </p>
            <CustomLink href="/register" className="join_now">
              join now
            </CustomLink>
          </div>
          <div className="rf_front_hero_img">
            <img src={heroimg} width="100%" alt="heroimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
