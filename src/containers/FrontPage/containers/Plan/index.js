import React from "react";
import CustomLink from "../../../../components/Link";
const Plan = () => {
  return (
    <div className="rf_front_plan_wrapper">
      <div className="landingPage_container container">
        <div className="rf_front_plan_content">
          <div className="title">
            <h2 id="packages">INCOMES</h2>
          </div>
          <div className="table_sale_card">
            <Card
              buttonText="START"
              buttonStyle="#e8c743"
              discountText="Income 1"
              packageAmount="Direct Income"
              mining="Package Profit"
              className="dark_blue"
              fontSize="20px"
              headingSize="45px"
            />
            <Card
              className="dark_blue"
              discountText="Income 2"
              packageAmount="Indirect Income"
              mining="Package Profit"
              buttonText="START"
              buttonStyle="#e8c743"
              fontSize="20px"
              headingSize="45px"
            />
            <Card
              className="dark_blue"
              discountText="Income 3"
              packageAmount="Auto Pool Income"
              mining="Package Profit"
              buttonText="START"
              buttonStyle="#e8c743"
              fontSize="20px"
              headingSize="45px"
            />
            <Card
              discountText="Income 4"
              packageAmount="Bonanza Income"
              mining="Package Profit"
              className="dark_blue"
              buttonText="START"
              buttonStyle="#e8c743"
              fontSize="20px"
              headingSize="45px"
            />
              <Card
              discountText="Income 5"
              packageAmount="Income Level Update"
              mining="Package Profit"
              className="dark_blue"
              buttonText="START"
              buttonStyle="#e8c743"
              fontSize="20px"
              headingSize="45px"
            />
              <Card
              discountText="Income 6"
              packageAmount="Direct Withdraw Income"
              mining="Package Profit"
              className="dark_blue"
              buttonText="START"
              buttonStyle="#e8c743"
              fontSize="20px"
              headingSize="45px"
            />
              <Card
              discountText="Income 7"
              packageAmount="Booster Income"
              mining="Package Profit"
              className="dark_blue"
              buttonText="START"
              buttonStyle="#e8c743"
              fontSize="20px"
              headingSize="45px"
            />
              <Card
              discountText="Income 8"
              packageAmount="Gift Income"
              mining="Package Profit"
              className="dark_blue"
              buttonText="START"
              buttonStyle="#e8c743"
              fontSize="20px"
              headingSize="45px"
            />
              <Card
              discountText="Income 9"
              packageAmount="Royalty Income"
              mining="Package Profit"
              className="dark_blue"
              buttonText="START"
              buttonStyle="#e8c743"
              fontSize="20px"
              headingSize="45px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;

const Card = ({
  className,
  discountStyle,
  discountText,
  h4Style,
  headingSize,
  fontSize,
  fontWeight,
  margin,
  buttonText,
  textGray,
  buttonStyle,
  buttonColor,
  discountTextClass,
  packageAmount,
  miningAmount,
}) => {
  return (
    <div className={`table_sale ${className}`}>
      <p className="center_element">
        <span
          style={{
            background: `${discountStyle}`,
            // fontSize: `${fontSize}`,
            fontWeight: `${fontWeight}`,
          }}
          className={discountTextClass}
        >
          {discountText}
        </span>
      </p>
      <div className="horizontal" style={{ margin: `${margin}` }}></div>
      <h4
        className={`center_element text_white ${textGray}`}
        style={{ color: `${h4Style}`, fontSize: `${headingSize}` }}
      >
        {packageAmount}
      </h4>
      {/* <p className={`center_element text_white ${textGray}`}>0.5 US dollars</p> */}
      <div className="horizontal"></div>
      {/* <p
        className={`center_element text_white ${textGray}`}
        style={{ fontSize: `${fontSize}` }}
      >
        <br />
        {miningAmount}
      </p> */}
      <div className="button">
        <CustomLink
           to ="/login"
          className="card_btn"
          style={{ backgroundColor: `${buttonStyle}` }}
        >
          <span
            className="buy_button"
            style={{
              color: `${buttonColor} !important`,
            }}
          >
            {buttonText}
          </span>
        </CustomLink>
      </div>
    </div>
  );
};
