import React from "react";
import tronImage  from "../../../../assets/tron_live.png"
const About = () => {
  return (
    <div className="rf_frontpage_wrapper" id="home">
    <div className="container">
      <div className="rf_front_hero_section">
        <div className="rf_front_hero_img">
          <img src={tronImage} width="1200px" height="800px" alt="heroimage" />
        </div>
        <div className="rf_front_hero_content">
          <h2 style={{fontSize:"100px"}}>Tron Live Club</h2>
        </div>
      </div>
    </div>
    {/* <div class="skew_divider"></div> */}
  </div>
  );
};

export default About;
