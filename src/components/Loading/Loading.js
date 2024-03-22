import React from "react";
import './_loading.scss'
const Loading = () => {
  return (
    <div className="loading">
      <div className="container_loading">
        <div className="square one"></div>
        <div className="square two"></div>
        <div className="square three"></div>
        <div className="square two"></div>
        <div className="square three"></div>
        <div className="square four"></div>
        <div className="square three"></div>
        <div className="square four"></div>
        <div className="square five"></div>
      </div>
    </div>
  );
};

export default Loading;
