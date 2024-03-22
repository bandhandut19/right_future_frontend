import React from "react";
const HomeCard = ({ cardName, cardValue, link, linkText, icon, bgColor, cardBgColor }) => {
  return (
    <div className="rf_dash_card_wrapper" style={{backgroundColor: cardBgColor}}>
      <div className="rf_content">
        <div className="rf_widget_icon" style={{backgroundColor:bgColor}}>
          <img src={icon} style={{width:"35px", padding:'10px'}} alt="" />
        </div>
        <div className="rf_widget_info">
          <p>{cardName}</p>
          <h2>{cardValue}</h2>
        </div>
      </div>
    </div>
  );
};
export default HomeCard;
