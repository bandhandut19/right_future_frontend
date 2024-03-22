import React, { useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import TextArea from "../../../../components/TextArea";
import email from "../../../../assets/social_icon/email.png";
import facebook from "../../../../assets/social_icon/facebook.png";
import instagram from "../../../../assets/social_icon/instagram.png";
// import linkedin from "../../../../assets/social_icon/linkedin.png";
import telegram from "../../../../assets/social_icon/telegram.png";
import youtube from "../../../../assets/social_icon/youtube.png";
import { useEffect } from "react";
import { Notification } from "../../../../components/ToastNotification";
import { ContactValidate } from "../../../../components/Validation/vaildate";
import { useContactMessageMutation } from "../../../../Services/contactUsMessage";
const Contact = () => {
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [contactMessage, { data: response, error, isLoading }] =
    useContactMessageMutation();
  const [data, setData] = useState({
    name: "",
    user_id: "",
    email: "",
    message: "",
    subject: "",
    mobile: "",
  });
  
  useEffect(() => {
    setFormErrors(ContactValidate(data));
  }, [data]);

  useEffect(() => {
    // console.log(response);
    if (response?.message) {
      Notification(response?.message, "success");
      setData({
        name: "",
        user_id: "",
        email: "",
        message: "",
        subject: "",
        mobile: "",
      });
      document.getElementById("message").value = ""
      document.getElementById("subject").value = ""
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, response]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    if (Object.keys(formErrors).length > 0) {
      Notification("All field are required 2", "error");
    } else {
      // console.log(data);
      await contactMessage(data);
    }
  };
  return (
    <>
      <div className="rf_front_contact_wrapper" id="contact">
        <div className="landingPage_container container">
          <div className="rf_front_contact_container">
            <div className="title">
              <h2>Contact Us</h2>
            </div>
            <div className="rf_front_contact_form">
              <div className="rf_front_contact_address">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="address_list"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="" />
                </a>
                <a
                  href="mailto:help@rightfuture.in"
                  target="_blank"
                  className="address_list"
                  rel="noreferrer"
                >
                  <img src={email} alt="" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="address_list"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="" />
                </a>
                {/* <a
                  href=""
                  target="_blank"
                  className="address_list"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="" />
                </a> */}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="address_list"
                  rel="noreferrer"
                >
                  <img src={telegram} alt="" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="address_list"
                  rel="noreferrer"
                >
                  <img src={youtube} alt="" />
                </a>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form_group">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="input_field"
                    inputGroupClass="left"
                  />
                  <Input
                    type="text"
                    name="user_id"
                    placeholder="Enter your User ID"
                    value={data.user_id}
                    onChange={(e) =>
                      setData({ ...data, user_id: e.target.value })
                    }
                    className="input_field"
                    inputGroupClass="left"
                  />
                </div>
                <div className="form_group">
                  <Input
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className="input_field"
                    inputGroupClass="left"
                  />
                  <Input
                    type="number"
                    name="mobile"
                    placeholder="Enter your phone"
                    value={data.mobile}
                    onChange={(e) =>
                      setData({ ...data, mobile: e.target.value })
                    }
                    className="input_field"
                    inputGroupClass="left"
                  />
                </div>
                <div
                  className="form_group text_area left text_area_subject"
                  style={{ display: "inherit" }}
                >
                  <TextArea
                    id="subject"
                    name="subject"
                    cols="30"
                    rows="10"
                    onChange={(e) =>
                      setData({ ...data, subject: e.target.value })
                    }
                    value={data.subject}
                    className="message_field"
                    placeholder="Your Subject"
                  />
                </div>
                <div
                  className="form_group text_area left"
                  style={{ display: "inherit" }}
                >
                  <TextArea
                    id="message"
                    name="message"
                    cols="30"
                    rows="10"
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                    value={data.message}
                    className="message_field"
                    placeholder="your message"
                  />
                </div>
                <div className="msg_button">
                  <Button type="submit" className="submit_btn">
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
