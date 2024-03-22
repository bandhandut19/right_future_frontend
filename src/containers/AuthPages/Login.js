import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineRefresh } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
// import CardLayout from "../../components/CardLayout";
import Input from "../../components/Input";
import CustomLink from "../../components/Link";
// import SocialIconeforLogin from "../../components/SideBarSocialIcon/SocialIconeforLogin";
import SocialIconForCardHearder from "../../components/SideBarSocialIcon/SocialIconForCardHearder";
import { Notification } from "../../components/ToastNotification";
import { loginValidate } from "../../components/Validation/vaildate";
import { useAddLoginMutation, useAddOtpMutation } from "../../Services/userApi";
import {
  getLocalStorage,
  removeLocalStorage,
  savedLocalStorage,
} from "../../utils/function/localStorage";
import Footer from "../FrontPage/components/Footer";
import Header from "../FrontPage/components/Header";
import Particle from "../FrontPage/components/Particle";
import AuthCardLayout from "./AuthCardLayout";
export let popupShow = false;
const Login = () => {
  const [errors, setErrors] = useState({}); // error catch
  const navigate = useNavigate();
  const [value, setValue] = useState({
    user_id: "",
    password: "",
    captchaConfirm: "",
  });
  const [captcha, setCaptcha] = useState({ x: 0, y: 0 });
  const [captchaRefresh, setCaptchaRefresh] = useState(false);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  // auth check
  useEffect(() => {
    if (getLocalStorage("rf_token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  // error
  useEffect(() => {
    setErrors(loginValidate(value));
  }, [value]);

  // add user
  const [addLogin, { error, data, isLoading }] = useAddLoginMutation();
  useEffect(() => {
    if (data?.message) {
      Notification(data?.message, "success");
      navigate("/dashboard");
      popupShow = true;
      savedLocalStorage("rf_token", data?.token);
      removeLocalStorage("otp_timer");
      setTimeout(() => {
        popupShow = false;
      }, 3000);
    } else {
      Notification(error?.data?.message, "error");
      refresh();
    }
  }, [error, data, navigate]);

  if (JSON.parse(getLocalStorage("otp_timer"))) {
    setTimeout(() => {},
    parseInt(JSON.parse(getLocalStorage("otp_timer"))) * 1000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      Notification(errors?.user_id || errors?.password, "error");
    } else {
      savedLocalStorage("otp_timer", 5000);
      console.log(captcha?.x, captcha?.y, parseInt(value?.captchaConfirm));
      if (captcha?.x + captcha?.y !== parseInt(value?.captchaConfirm)) {
        Notification("Wrong Answer", "error");
        refresh();
        setValue({ ...value, [value?.captchaConfirm]: "" });
      } else {
        // console.log(captcha?.x, captcha?.y, parseInt(value?.captchaConfirm));
        const logData = {
          ...value,
          user_id: value.user_id.toUpperCase(),
        };
        // console.log(logData);
        await addLogin(logData);
      }
    }
  };
  useEffect(() => {
    setCaptcha({
      ...captcha,
      x: Math.floor(Math.random() * 10 + 1),
      y: Math.floor(Math.random() * 10 + 1),
    });
  }, [captchaRefresh]);

  const refresh = async () => {
    setCaptchaRefresh(!captchaRefresh);
  };
  const [showPassword, setShowPassword] = useState(false);
  const token = getLocalStorage("rf_token");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <>
      <Particle />
      {/* <SocialIconeforLogin /> */}
      <Header />
      <div className="rf_dashboard_login_page_wrapper">
        <AuthCardLayout
          style={{ backgroundColor: "rgb(0 0 0 / 17%)" }}
          className="rf_dashboard_login_card rf_all_card"
        >
          <div className="rf_section_title">
            <h2>Login</h2>
          </div>
          <div className="hr_border"></div>
          <SocialIconForCardHearder />
          <div className="rf_dashboard_login_content">
            <form onSubmit={handleSubmit}>
              <div className="form_group" style={{ display: "inherit" }}>
                <Input
                  label="User ID"
                  type="text"
                  name="user_id"
                  placeholder="Enter your user ID"
                  onChange={handleChange}
                  value={value.user_id}
                  className="userid_input input_field"
                  inputGroupClass="right"
                />
              </div>
              <div className="form_group" style={{ display: "inherit" }}>
                <Input
                  label="Password"
                  type={`${showPassword ? "text" : "password"}`}
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={value.password}
                  className="password_input input_field"
                  inputGroupClass="right"
                />
                <span
                  style={{ marginTop: "0px" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              </div>
              {true && (
                <>
                  <div className="captchaContainer">
                    <p>{captcha?.x}</p>
                    <p>+</p>
                    <p>{captcha?.y}</p>
                    <p>=</p>
                    <input
                      name="captchaConfirm"
                      onChange={handleChange}
                      value={value.captchaConfirm}
                    />
                    <span onClick={() => refresh()} tooltip="refresh">
                      <HiOutlineRefresh />
                    </span>
                  </div>
                </>
              )}
              <Button
                type="submit"
                className="submit_btn"
                // disabled={OTPup}
              >
                {isLoading ? "Loading..." : "Login"}
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

export default Login;
