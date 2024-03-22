import React from "react";
import Helmet from "react-helmet";
import { ToastContainer } from "react-toastify";
import Routers from "../routes";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// import { useEffect } from "react";
const App = () => {
  // useEffect(()=>{
  //   AOS.init();
  // },[])
  return (
    <>
      <Helmet>
        <title>Welcome To Right Future</title>
        {/* google font family */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ToastContainer
        autoClose={3000}
        pauseOnHover={false}
        position="top-center"
      />
      <Routers />
    </>
  );
};

export default App;
