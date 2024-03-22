import React, { useState } from "react";
import { useEffect } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import { Notification } from "../../../components/ToastNotification";
import {
  useAddYoutubeVideoMutation,
  useGetYoutubeQuery,
} from "../../../Services/Setting";

const VideoController = () => {
  const { data: youtubeData } = useGetYoutubeQuery();
  const [data, setData] = useState({
    video_link: "",
  });

  //   get image

  const [addYoutubeVideo, { data: response, error, isLoading }] =
    useAddYoutubeVideoMutation();

  useEffect(() => {
    if (response?.message) {
      Notification(response?.message, "success");
      setData({ video_link: "" });
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, response]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.video_link) {
      Notification("All field are required", "error");
    } else {
      const video1 = data?.video_link.split("=")[1]
      const video2 = video1.split("&")[0]
       const videoLink=  "https://www.youtube.com/embed/" + video2;
      // console.log(videoLink);
      const obj = {
        video_link: videoLink,
      };
      await addYoutubeVideo(obj);
    }
  };

  return (
    <div className="rf_videoController_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_videoControllert_form_card"
      >
        <div className="rf_section_title">
          <h2>Video Controller</h2>
          {/* <p>Whenever, </p> */}
        </div>
        <div className="rf_videoController_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <div className="purpose">
                <Input
                  label="video"
                  type="text"
                  name="video_link"
                  id="video_link"
                  placeholder="Enter your youtube video link"
                  onChange={(e) =>
                    setData({ ...data, video_link: e.target.value })
                  }
                  value={data?.video_link}
                  className="input_field"
                  inputGroupClass="left"
                />
              </div>
            </div>
            <div
              className="form_group video_container"
              style={{ display: "inherit" }}
            >
              <iframe
                width="100%"
                height="100%"
                src={youtubeData?.video_link}
                title="youtube video"
                allow="accelerometer"
              ></iframe>
            </div>
            <Button
              type="submit"
              className="submit_btn"
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Loading..." : "submit"}
            </Button>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default VideoController;
