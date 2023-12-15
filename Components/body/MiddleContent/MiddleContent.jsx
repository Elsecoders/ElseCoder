import React from "react";
import "./MiddleContent.css";
import DownloadDoneOutlinedIcon from '@mui/icons-material/DownloadDoneOutlined';
const MiddleContent = () => {
  return (
    <>
      <div className="MiddleContent mt-5 ">
        <div className="ContentHeading">
          <h2>
            {" "}
            Unleash the power of Shopify and leave your competitors in the dust
            with Pronetizens' professional development experts.
          </h2>
        </div>
        <div className="ContentWriting">
          <p>
            From budding startups to established businesses, we'll help you take
            advantage of the online eCommerce boom with the most intuitive
            platform available.
          </p>
          <div className="ContentAccordian">
            <p><DownloadDoneOutlinedIcon style={{color:"#2a43d4"}}/>One-click store setup and easy-to-understand configuration</p>
            <p className="breakLine">___________________________________________________</p>
            <p><DownloadDoneOutlinedIcon style={{color:"#2a43d4"}}/>One-click store setup and easy-to-understand configuration</p>
            <p className="breakLine">___________________________________________________</p>
            <p><DownloadDoneOutlinedIcon style={{color:"#2a43d4"}}/>One-click store setup and easy-to-understand configuration</p>
            <p className="breakLine">___________________________________________________</p>
            <p><DownloadDoneOutlinedIcon style={{color:"#2a43d4"}}/>One-click store setup and easy-to-understand configuration</p>
            <p className="breakLine">___________________________________________________</p>
            <p><DownloadDoneOutlinedIcon style={{color:"#2a43d4"}}/>One-click store setup and easy-to-understand configuration</p>
            
          
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleContent;
