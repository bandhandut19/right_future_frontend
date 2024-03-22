import React from "react";
import BannerImage from "../../../../assets/banner-img.png";
// import CustomLink from "../../../../components/Link";
const Bannar = () => {
  return (
    <div className="rf_frontpage_wrapper" id="home">
      <div className="landingPage_container container">
        <div className="rf_front_hero_banner_section">
          {/* <div className="rf_front_hero_banner_content">
            <h2>welcome to Right Future</h2>
            <p>
              A community of like-minded traders and investors working together
              to earn cryptocurrency and build financial freedom.
            </p>
            <CustomLink href="/register" className="join_now">
              join now
            </CustomLink>
          </div> */}
          <div className="rf_front_hero_banner_img">
            <img src={BannerImage} width="100%" alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
