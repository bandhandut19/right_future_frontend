// import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import Loading from "../../../components/Loading/Loading";
import Select from "../../../components/Select";
import { Notification } from "../../../components/ToastNotification";
import {
  useEditUserMutation,
  useGetLoginUserQuery,
} from "../../../Services/userApi";

const UpdateProfile = () => {
  const { data: userData, isLoading:isLoadingUserData } = useGetLoginUserQuery();
  const [data, setData] = useState({
    sponsor_id: userData?.data?.sponsor_id,
    sponsor_name: userData?.data?.sponsor_name,
    user_id: userData?.data?.user_id,
    name: userData?.data?.name,
    mobile: userData?.data?.mobile,
    gender: userData?.data?.gender,
    country: userData?.data?.country,
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // edit profile
  const [editProfile, { error, data: userProfile, isLoading }] =
    useEditUserMutation();
  useEffect(() => {
    if (userProfile?.message) {
      Notification(userProfile?.message, "success");
    } else {
      Notification(error?.userProfile?.message, "error");
    }
  }, [error, userProfile]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editProfile(data);
  };

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => {
        setCountries(json.map((c) => c.name));
      });
  }, []);

  if (isLoadingUserData) {
    return <Loading />;
  }
  // console.log(userProfile);
  return (
    <div className="rf_userUpdate_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_userupdate_card"
      >
        <div className="rf_userupdate_title">
          <h2>update profile</h2>
        </div>
        <div className="rf_userupdate_field">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="Sponsor ID"
                type="text"
                value={data.sponsor_id}
                name="sponsor_id"
                onChange={handleChange}
                inputGroupClass="left"
                disabled={true}
              />
              <Input
                label="Sponsor Name"
                type="text"
                value={data.sponsor_name}
                name="sponsor_name"
                onChange={handleChange}
                inputGroupClass="right"
                disabled={true}
              />
            </div>
            <div className="form_group">
              <Input
                label="Username"
                type="text"
                value={data.user_id}
                name="user_id"
                onChange={handleChange}
                inputGroupClass="left"
                disabled={true}
              />
              <Input
                label="Mobile"
                type="text"
                value={data.mobile}
                name="mobile"
                onChange={handleChange}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <Input
                label="Name"
                type="text"
                value={data.name}
                name="name"
                onChange={handleChange}
                inputGroupClass="left"
              />
              <div className="form_group_special_container">
                <Select
                  className="special_input"
                  label="Country"
                  value={data.country}
                  name="country"
                  onChange={handleChange}
                  options={countries}
                  inputGroupClass="left"
                />
              </div>
            </div>
            <div className="form_group">
              <div className="gender_select ">
                <Select
                  className="special_input"
                  label="Gender"
                  name="gender"
                  value={data.gender}
                  onChange={handleChange}
                  options={["Male", "Female", "Others"]}
                />
              </div>
            </div>
            <div className="submit_button">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Update"}
              </Button>
            </div>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default UpdateProfile;
