import React from "react";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
const CMSIcon = () => {
  return (
    <>
      <div className="mobile-icons">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "80px",
            color:  "rgb(68, 67, 67)",
          }}
        >
            <div className="Wordpress">
            <FaWordpress size={60} />
            <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Wordpress</p>
            </div>
          
          <div className="Shopify">
          <FaShopify size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Shopify</p>
                </div>
         
          <div className="Magento">
          <FaMagento size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Magento</p>
                </div>
         
          <div className="Wix">
          <FaWix size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Wix</p>
                </div>
         
        </ul>
        <hr></hr>
      </div>
    </>
  );
};

export default CMSIcon;
