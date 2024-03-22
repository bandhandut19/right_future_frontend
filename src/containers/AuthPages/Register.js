import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import CustomLink from "../../components/Link";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import Footer from "../FrontPage/components/Footer";
import Header from "../FrontPage/components/Header";
import { Validate } from "../../components/Validation/vaildate";
// import SocialIconeforLogin from "../../components/SideBarSocialIcon/SocialIconeforLogin";
import SocialIconForCardHearder from "../../components/SideBarSocialIcon/SocialIconForCardHearder";
import Particle from "../FrontPage/components/Particle";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import PhoneNumberInput from "./phone-number-input";
import {
  useAddOtpMutation,
  useAddUserMutation,
  useGetValidateEmailQuery,
  useGetValidateMobileQuery,
  useGetValidateSponsorIdQuery,
} from "../../Services/userApi";
import { Notification } from "../../components/ToastNotification";
import AuthCardLayout from "./AuthCardLayout";
import { getLocalStorage } from "../../utils/function/localStorage";
const Register = () => {
  const [OTPup, setOTPup] = useState(false);
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const sponsorid = parsed.sponsorid;
  const navigate = useNavigate();
  const [sponsorName, setSponsorName] = useState("");
  const [mobile, setMobile] = useState();
  const [checked, setChecked] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    sponsor_id: sponsorid,
    sponsor_name: sponsorName,
    password: "",
    confirm_password: "",
    otpCode: "",
  });
  const [eerros, setEerror] = useState("");
  const [merror, setMerror] = useState("");
  const [sponError, setSponError] = useState("");
  const [formErrors, setFormErrors] = useState({}); // form error
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // sponosr id validate
  const { data: sponsoridData, error: sponsoridError } =
    useGetValidateSponsorIdQuery(user.sponsor_id?.toUpperCase());
  useEffect(() => {
    if (sponsoridData?.message) {
      setSponError(sponsoridData?.message);
      setSponsorName(sponsoridData?.sponsor_name);
    }
    if (sponsoridError?.data?.message) {
      setSponError(sponsoridError?.data?.message);
      setSponsorName("");
    }
  }, [
    sponsoridError?.data?.message,
    sponsoridData?.message,
    sponsoridData?.sponsor_name,
  ]);
  // // email validate
  // const { data: emailData, error: emailError } = useGetValidateEmailQuery(
  //   user.email
  // );
  // useEffect(() => {
  //   if (emailData?.message) {
  //     setEerror(emailData?.message);
  //   }
  //   if (emailError?.data?.message) {
  //     setEerror(emailError?.data?.message);
  //   }
  // }, [emailError?.data?.message, emailData?.message]);
  // // mobile validate
  // const { data: mobileData, error: mobileError } = useGetValidateMobileQuery(
  //   user.mobile || mobile
  // );
  // useEffect(() => {
  //   if (mobileData?.message) {
  //     // console.log(mobileData?.message);
  //     setMerror(mobileData?.message);
  //   }
  //   if (mobileError?.data?.message) {
  //     // console.log(mobileError?.data?.message);
  //     setMerror(mobileError?.data?.message);
  //   }
  // }, [mobileError, mobileData]);
  // add user
  const [addUser, { data, error, isLoading }] = useAddUserMutation();
  useEffect(() => {
    if (data?.message) {
      Notification(data?.message, "success");
      navigate("/login");
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, data, navigate]);

  // send otp code
  const [addOtp, { error: otpError, data: otpData }] = useAddOtpMutation();
  useEffect(() => {
    if (otpData?.message) {
      Notification(otpData?.message, "success");
      setOTPup(true);
    } else {
      Notification(otpError?.data?.message, "error");
      setOTPup(false);
    }
  }, [otpError, otpData]);

  // error
  useEffect(() => {
    setFormErrors(Validate(user));
  }, [mobile, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      Notification("All conditions and fields are required", "error");
    } else {
      if (checked === true) {
        Notification("Kindly checked agree our terms & conditions", "error");
      } else if (!user.otpCode) {
        const otp = {
          email: user.email,
          mobile: mobile,
        };
        await addOtp(otp);
      } else {
        const dataUser = {
          ...user,
          sponsor_name: sponsorName,
          sponsor_id: user.sponsor_id.toUpperCase(),
          mobile: mobile,
        };
        if (user.otpCode < 0) {
          Notification("Only Number Is Allowed On OTP" ,"error");
        } else {
          // console.log(dataUser);
          await addUser(dataUser);
        }
      }
    }
  };
  const OTP_resend = async () => {
    const otp = {
      email: user.email,
      mobile: mobile,
    };
    await addOtp(otp);
  };
  const [showPassword, setShowPassword] = useState(false);
  // redirect
  const token = getLocalStorage("rf_token");
  // const location = useLocation();
  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token, navigate]);
  return (
    <>
      <Particle />
      {/* <SocialIconeforLogin /> */}
      <Header />
      <div className="rf_dashboard_register_page_wrapper">
        <AuthCardLayout
          style={{ backgroundColor: "rgb(0 0 0 / 17%)" }}
          className="rf_dashboard_register_card"
        >
          <div className="rf_section_title">
            <h2>Register</h2>
          </div>
          <div className="hr_border"></div>
          <SocialIconForCardHearder />
          <div className="rf_dashboard_register_content">
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <div>
                  <Input
                    label="Sponsor ID"
                    type="text"
                    name="sponsor_id"
                    placeholder="Enter your sponsor id"
                    value={user.sponsor_id || sponsorid}
                    onChange={handleChange}
                    className="input_field"
                    inputGroupClass="left"
                    disabled={parsed.sponsorid ? true : false}
                    isRequired={true}
                  />
                  {!formErrors.sponsor_id?.includes("required") && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {formErrors.sponsor_id}
                    </p>
                  )}
                  {!formErrors.sponsor_id && !sponError.includes("Not Found") && (
                    <p
                      style={{
                        color: !sponError.includes("Invalid") ? "green" : "red",
                        fontSize: "13px",
                      }}
                    >
                      {sponError}
                    </p>
                  )}
                </div>
                <Input
                  label="Sponsor Name"
                  type="text"
                  name="sponsor_name"
                  placeholder="Enter your sponsor name"
                  onChange={handleChange}
                  className="input_field for_margin_top"
                  inputGroupClass="right"
                  // value={user.sponsor_name}
                  value={sponsorName}
                  disabled={true}
                />
              </div>
              <div className="form_group">
                <div>
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    className="name_input input_field"
                    inputGroupClass="left"
                    isRequired={true}
                    error={formErrors.name}
                  />
                </div>
                <div>
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    className="email_input input_field"
                    inputGroupClass="right"
                    isRequired={true}
                  />
                  {!formErrors.email?.includes("required") && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "13px",
                      }}
                    >
                      {formErrors.email}
                    </p>
                  )}
                  {!formErrors.email && !eerros.includes("Not Found") && (
                    <p
                      style={{
                        color: eerros.includes("Available") ? "green" : "red",
                        fontSize: "13px",
                      }}
                    >
                      {eerros}
                    </p>
                  )}
                </div>
              </div>

              <div
                className="form_group"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <label htmlFor="phone-input">
                  Mobile <span style={{ color: "red" }}>*</span>
                </label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  countryCallingCodeEditable={false}
                  placeholder="Enter your phone number"
                  value={mobile}
                  onChange={setMobile}
                  name="mobile"
                  error={
                    mobile
                      ? isValidPhoneNumber(mobile)
                        ? undefined
                        : "Invalid phone number"
                      : "Phone number required"
                  }
                  style={{
                    border: "1px solid #b1b7c1",
                    width: "100%",
                    padding: "6px 0",
                    borderRadius: "0 3px 3px 0",
                  }}
                />
                <p style={{ fontSize: "13px", width: "100%" }}>
                  {mobile ? (
                    isValidPhoneNumber(mobile) ? undefined : (
                      <span style={{ color: "red" }}>
                        {(formErrors.mobile = "Invalid phone number")}
                      </span>
                    )
                  ) : (
                    <span style={{ color: "red" }}>
                      {(formErrors.mobile = "Phone number is required")}
                    </span>
                  )}
                </p>
                {!formErrors.mobile && (
                  <p
                    style={{
                      color: merror.includes("available") ? "green" : "red",
                      fontSize: "13px",
                      width: "100%",
                    }}
                  >
                    {merror}
                  </p>
                )}
              </div>
              <div className="form_group">
                <div>
                  <Input
                    label="Password"
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    className="input_field"
                    inputGroupClass="left"
                    isRequired={true}
                    error={formErrors.password}
                  />
                </div>
                <div>
                  <Input
                    label="Confirm Password"
                    type={`${showPassword ? "text" : "password"}`}
                    name="confirm_password"
                    placeholder="Enter your confirm password"
                    onChange={handleChange}
                    className="input_field"
                    inputGroupClass="right"
                    isRequired={true}
                    error={formErrors.confirm_password}
                  />
                </div>
              </div>
              {OTPup && (
                <div className="form_group form_group_OTP">
                  <Input
                    label="OTP"
                    type="number"
                    name="otpCode"
                    placeholder="Enter OTP"
                    onChange={handleChange}
                    className="OTP_input_field input_field"
                    inputGroupClass="left"
                    isRequired={true}
                  />
                  <Button
                    type="button"
                    className="OTP_resend_btn"
                    onClick={() => OTP_resend()}
                  >
                    Resend OTP
                  </Button>
                </div>
              )}
              <div
                className="form-check form-check-label show_password form_group"
                style={{
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Input
                  type="checkbox"
                  className="form-check-input form-check-label"
                  value="showpassword"
                  id="showpassword"
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="showpassword" className="form-check-label">
                  &nbsp;Show Password
                </label>
              </div>
              <div
                className="form-check form-check-label show_password form_group"
                style={{
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Input
                  type="checkbox"
                  className="form-check-input form-check-label"
                  value="termscondition"
                  id="termscondition"
                  defaultChecked={checked}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                />
                <label htmlFor="termscondition" className="form-check-label">
                  &nbsp;I agree to{" "}
                  <CustomLink
                    to="/termsconditions"
                    style={{ color: "#4885ed" }}
                  >
                    Terms & Conditions
                  </CustomLink>
                </label>
              </div>

              <Button type="submit" className="submit_btn" disabled={isLoading}>
                {isLoading ? "Loading..." : "Register"}
              </Button>
              <div className="go_to_login">
                <p>
                  <CustomLink href="/" className="log_page_nav_link">
                    Home
                  </CustomLink>{" "}
                </p>
                <p className="login_nav_break_point"> | </p>
                <p>
                  <CustomLink href="/login" className="log_page_nav_link">
                    Login
                  </CustomLink>{" "}
                </p>
                <p className="login_nav_break_point"> | </p>
                <p>
                  <CustomLink
                    href="/forgotPassword"
                    className="log_page_nav_link"
                  >
                    Forget Password
                  </CustomLink>{" "}
                </p>
              </div>
            </form>
          </div>
        </AuthCardLayout>
      </div>
      <Footer />
    </>
  );
};

export default Register;
