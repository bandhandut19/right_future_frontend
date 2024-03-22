import React, { useEffect } from "react";
import {
  useAddEnterDefaultAutopoolMutation,
  useGetAccessAutopoolQuery,
} from "../../../Services/walletApi";
import { useNavigate } from "react-router-dom";
import { Notification } from "../../../components/ToastNotification";
import Loading from "../../../components/Loading/Loading";

const AutopoolStart = () => {
  const navigate = useNavigate();
  const { data: AccessAutopool, isLoading: isLoadingAccessAutopool } =
    useGetAccessAutopoolQuery();
  const [
    AddDefaultAutopool,
    {
      error: DefaultAutopoolError,
      data: DefaultAutopoolData,
      isLoading: AddEnterDefaultAutopoolLoading,
    },
  ] = useAddEnterDefaultAutopoolMutation();

  useEffect(() => {
    if (DefaultAutopoolData?.message) {
      Notification(DefaultAutopoolData?.message, "success");
      navigate("/dashboard");
    } else {
      Notification(DefaultAutopoolError?.data?.message, "error");
    }
  }, [DefaultAutopoolError, DefaultAutopoolData, navigate]);

  const autopoolStart = async (e) => {
    e.preventDefault();
    console.log("i am clicked");
    AddDefaultAutopool();
  };
  if (isLoadingAccessAutopool) {
    return <Loading />;
  }
  return (
    <div style={{ margin: "auto" }}>
      {AccessAutopool?.status ? (
        <button
          className="autoppool-start-button"
          onClick={autopoolStart}
          disabled={AddEnterDefaultAutopoolLoading}
        >
          {AddEnterDefaultAutopoolLoading ? "Loading..." : "Autopool Enter"}
        </button>
      ) : null}
    </div>
  );
};

export default AutopoolStart;
