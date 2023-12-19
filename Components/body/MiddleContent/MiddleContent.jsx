import React from "react";
import "./MiddleContent.css";
import DownloadDoneOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
const MiddleContent = () => {
  return (
    <>
      <div className="MiddleContent mt-5 ">
        <div className="ContentHeading">
          <h2>
            {" "}
            Harness the power of Shopify and make a name for your brand in the
            hyper-competitive eCommerce market.
          </h2>
        </div>
        <div className="ContentWriting">
          <p>
            Whether you have been in the eCommerce arena for quite some time or
            just getting started in this space for quite some time, we have you
            covered!
          </p>
          <div className="ContentAccordian">
            <p>
              <DownloadDoneOutlinedIcon style={{ color: "#2a43d4" }} />
              Stand out from the competitors with an fascinating website.
            </p>
            <p className="breakLine">
              ___________________________________________________
            </p>
            <p>
              <DownloadDoneOutlinedIcon style={{ color: "#2a43d4" }} />
              Leverage the power of Shopify or any other eCommerce platform.
            </p>
            <p className="breakLine">
              ___________________________________________________
            </p>
            <p>
              <DownloadDoneOutlinedIcon style={{ color: "#2a43d4" }} />
              Provide your customers with the best possible experience.
            </p>
            <p className="breakLine">
              ___________________________________________________
            </p>
            <p>
              <DownloadDoneOutlinedIcon style={{ color: "#2a43d4" }} />
              Ease out and focus on other aspects while we handle website development for you.

            </p>
            <p className="breakLine">
              ___________________________________________________
            </p>
            <p>
              <DownloadDoneOutlinedIcon style={{ color: "#2a43d4" }} />
              Enjoy the thriving eCommerce market by building an impressive brand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleContent;
