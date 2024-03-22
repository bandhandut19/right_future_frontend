import React, { useEffect } from "react";
import avatar from "../../../assets/avatar.png";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import InputWithClipBoard from "../../../components/Input/InputWithClipBoard";
import Loading from "../../../components/Loading/Loading";
import { Notification } from "../../../components/ToastNotification";
import {
  useEditImageMutation,
  // useGetAutopoolOneStatusQuery,
  useGetLoginUserQuery,
} from "../../../Services/userApi";
import {
  // useAddEnterDefaultAutopoolMutation,
  // useGetAccessAutopoolQuery,
} from "../../../Services/walletApi";

const MyProfile = () => {
  const { data, isLoading: isLoadingUserinfo } = useGetLoginUserQuery();
  // const { data: AutopoolOneStatus } = useGetAutopoolOneStatusQuery();
  // const { data: AccessAutopool, isLoading: isLoadingAccessAutopool } =useGetAccessAutopoolQuery();
  // const [AddDefaultAutopool,{ error: DefaultAutopoolError, data: DefaultAutopoolData },] = useAddEnterDefaultAutopoolMutation();

  // edit profile
  const [uploadImage, { error, data: user, isLoading }] =
    useEditImageMutation();
  useEffect(() => {
    if (user?.message) {
      Notification(user?.message, "success");
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, user]);
  // useEffect(() => {
  //   if (DefaultAutopoolData?.message) {
  //     Notification(DefaultAutopoolData?.message, "success");
  //   } else {
  //     Notification(DefaultAutopoolError?.data?.message, "error");
  //   }
  // }, [DefaultAutopoolError, DefaultAutopoolData]);

  const handleChange = async (e) => {
    let formData = new FormData();
    formData.append("image", e.target.files[0]);
    await uploadImage(formData);
  };

  // const autopoolStart = async (e) => {
  //   e.preventDefault();
  //   console.log("i am clicked");
  //   AddDefaultAutopool();
  // };

  if (isLoadingUserinfo) {
    return <Loading />;
  }

  return (
    <div className="rf_my_profile_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_my_profile_card"
      >
        <div className="rf_section_title">
          <h2>profile</h2>
        </div>
        <div className="rf_profile_head">
          <div className="rf_photo_content">
            <div className="rf_cover_photo"></div>
          </div>
          <div className="rf_profile_short_info">
            <div className="rf_profile_photo">
              <img
                src={data?.data?.avatar ? data?.data?.avatar : avatar}
                width="100%"
                alt="img"
              />

              {isLoading && "Uploading..."}
              <form encType="multipart/form-data">
                <div className="form-check form-check-label">
                  <label htmlFor="img" className="form-check-label">
                    <Input
                      type="file"
                      name="image"
                      className="form-check-label"
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </form>
            </div>
            <div className="rf_profile_info">
              <div className="rf_profile_name">
                <h2>{data?.data?.name}</h2>
                <p>Role: {data?.data?.role}</p>
              </div>
              <div className="rf_profile_email">
                <h2>{data?.data?.email}</h2>
                <p>Email</p>
              </div>
            </div>
            {/* {AccessAutopool?.status ? (
              <button
                className="green"
                onClick={autopoolStart}
                disabled={AddEnterDefaultAutopoolLoading}
              >
                {AddEnterDefaultAutopoolLoading
                  ? "Loading..."
                  : "Autopool Enter"}
              </button>
            ) : null} */}
          </div>
        </div>
        <div className="rf_profile_bottom">
          <div className="rf_profile_title">
            <h2>Profile Info details</h2>
          </div>
          <div className="rf_profile_field">
            <div className="form_group">
              <Input
                label="User ID"
                type="text"
                value={data?.data?.user_id}
                disabled={true}
                inputGroupClass="left"
              />
              <Input
                label="Name"
                type="text"
                value={data?.data?.name}
                disabled={true}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <Input
                label="Sponsor ID"
                type="text"
                value={data?.data?.sponsor_id}
                disabled={true}
                inputGroupClass="left"
              />
              <Input
                label="Sponoser Name"
                type="text"
                value={data?.data?.sponsor_name}
                disabled={true}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <Input
                label="Email"
                type="text"
                value={data?.data?.email}
                disabled={true}
                inputGroupClass="left"
              />
              <Input
                label="Phone No."
                type="text"
                value={data?.data?.mobile}
                disabled={true}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <Input
                label="Join Date"
                type="text"
                value={new Date(+data?.data?.join_date)?.toDateString()}
                disabled={true}
                inputGroupClass="left"
              />
              <Input
                label="Activation Date"
                type="text"
                value={ data?.data?.topup_activation_date 
                  ? new Date(+data?.data?.topup_activation_date).toDateString()
                  : 
                  data?.data?.activation_date 
                  ? new Date(+data?.data?.activation_date).toDateString() 
                  : ""}
                disabled={true}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <Input
                label="Gender"
                type="text"
                value={data?.data?.gender}
                disabled={true}
                inputGroupClass="left"
              />
              <Input
                label="Country"
                type="text"
                value={data?.data?.country}
                disabled={true}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <InputWithClipBoard
                label="USDT Address"
                type="text"
                value={data?.data?.wallet_address}
                disabled={true}
                inputGroupClass="left"
                copyToClipboard={true}
                visibility="visible"
                style={{
                  userSelect: "none",
                }}
              />
              <InputWithClipBoard
                label="Your Referral Link"
                type="text"
                value={`${window.location.origin}/register?sponsorid=${data?.data?.user_id}`}
                disabled={true}
                inputGroupClass="right"
                copyToClipboard={true}
                visibility="visible"
                style={{
                  userSelect: "none",
                }}
              />
            </div>
          </div>
        </div>
      </CardLayout>
    </div>
  );
};

export default MyProfile;
