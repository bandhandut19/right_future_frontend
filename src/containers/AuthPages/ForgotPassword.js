import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
// import CardLayout from "../../components/CardLayout";
import Input from "../../components/Input";
import CustomLink from "../../components/Link";
import Footer from "../FrontPage/components/Footer";
import Header from "../FrontPage/components/Header";
// import SocialIconeforLogin from "../../components/SideBarSocialIcon/SocialIconeforLogin";
import SocialIconForCardHearder from "../../components/SideBarSocialIcon/SocialIconForCardHearder";
import Particle from "../FrontPage/components/Particle";
import { forgotPasswordValidate } from "../../components/Validation/vaildate";
import { useAddForgotPassMutation } from "../../Services/userApi";
import { Notification } from "../../components/ToastNotification";
import AuthCardLayout from "./AuthCardLayout";
import { getLocalStorage } from "../../utils/function/localStorage";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [errors, setErrors] = useState({});
  const [values, setValue] = useState({
    user_id: "",
  });
  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  // error
  useEffect(() => {
    setErrors(forgotPasswordValidate(values));
  }, [values]);

  // add user
  const [addForgot, { error, data, isLoading }] = useAddForgotPassMutation();
  useEffect(() => {
    if (data?.message) {
      Notification(data?.message, "success");
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      Notification("All condition are required", "error");
    } else {
      await addForgot(values);
    }
  };
   // redirect
   const token = getLocalStorage("rf_token");
   const navigate = useNavigate()
  //  const location = useLocation();
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
      <div className="rf_dashboard_resetpassword_page_wrapper">
        <AuthCardLayout
          style={{ backgroundColor: "rgb(0 0 0 / 17%)" }}
          className="rf_dashboard_resetpassword_card"
        >
          <div className="rf_section_title">
            <h2>Forgot Password</h2>
          </div>
          <div className="hr_border"></div>
          <SocialIconForCardHearder />
          <div className="rf_dashboard_resetpassword_content">
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <Input
                  label="User ID"
                  type="text"
                  name="user_id"
                  placeholder="Enter your user id"
                  onChange={handleChange}
                  className="email_input input_field"
                  inputGroupClass="right"
                  error={errors.user_id}
                  isRequired={true}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="submit_btn">
                {isLoading ? "Loading..." : "Send Reset Link"}
              </Button>
              <div className="go_to_register">
                <p>
                  <CustomLink href="/" className="log_page_nav_link">
                    Home
                  </CustomLink>{" "}
                </p>
                <p className="login_nav_break_point"> | </p>
                <p>
                  <CustomLink href="/register" className="log_page_nav_link">
                    Register
                  </CustomLink>{" "}
                </p>
                <p className="login_nav_break_point"> | </p>
                <p>
                  <CustomLink href="/login" className="log_page_nav_link">
                    Login
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

export default ForgotPassword;
