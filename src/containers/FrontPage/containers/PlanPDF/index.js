import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import DocViewer, { PDFRenderer } from "react-doc-viewer";
import Particle from "../../components/Particle";
import YoutubeSection from "../YoutubeSection/YoutubeSection";
import { useGetPdfLinkQuery } from "../../../../Services/Setting";

const PlanPDF = () => {
  // const docs = [
  //   // { uri: "https://docdro.id/ceb4mbU" },  // web host URL
  //   { uri: require("../../../../assets/right.futrue.pdf") }, // Local File
  // ];

    const { data: pdfLink } = useGetPdfLinkQuery();
    console.log('pdfLink', pdfLink)
  return (
    <>
      <Particle />
      <Header />
      <div className="rf_front_planPDF_hero_wrapper">
        <div className="container pdfContainer">
          <div className="rf_front_planPDF_hero_container">
            <div className="pdf_container">
            <iframe
                  title="Hello"
                  src={pdfLink?.pdf_link}
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  // allowfullscreen="true"
                />
              {/* <DocViewer
                // className="classDocViewer"
                pluginRenderers={[PDFRenderer]}
                documents={docs}
                config={{
                  header: {
                    disableHeader: true,
                    disableFileName: true,
                    retainURLParams: false,
                  },
                }}
                style={{ width: "100%", height: "100%", margin: "0px auto" }}
                theme={{
                  primary: "#5296d8",
                  secondary: "#1e0b56",
                  tertiary: "#1e0b56",
                  text_primary: "#ffffff",
                  text_secondary: "#1e0b56",
                  text_tertiary: "#00000099",
                  disableThemeScrollbar: false,
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <YoutubeSection />
      <Footer />
    </>
  );
};

export default PlanPDF;

/* 
style={{ width: "0%", height: "100%", margin: "0px auto" }}
                config={{
                  header: {
                    disableHeader: true,
                    disableFileName: true,
                    retainURLParams: false,
                  },
                }}
                theme={{
                  primary: "#5296d8",
                  secondary: "#ffffff",
                  tertiary: "#1e0b56",
                  text_primary: "#ffffff",
                  text_secondary: "#1e0b56",
                  text_tertiary: "#00000099",
                  disableThemeScrollbar: false,
                }}
*/
