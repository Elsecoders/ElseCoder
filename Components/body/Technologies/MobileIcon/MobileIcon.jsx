import React from "react";
import { IoLogoIonic, IoLogoReact } from "react-icons/io5";
import { AiOutlineAndroid } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { FaSwift } from "react-icons/fa";
const MobileIcon = () => {
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
            color: "rgb(68, 67, 67)",
          }}
        >
            <div className="ios">
            <FaApple size={60} />
            <p style={{ textAlign:"center", fontSize:"18px", marginTop:"20px"}}>ios</p>
            </div>
         
          <div className="Android">
          <AiOutlineAndroid size={60} />
          <p style={{ textAlign:"center", fontSize:"18px", marginTop:"20px"}}>Android</p>
          </div>
          
          <div className="Ionic"> <IoLogoIonic size={60} />
          <p style={{ textAlign:"center", fontSize:"18px", marginTop:"20px"}}>Ionic</p>
          </div>
          
          <div className="Reactnative">
          <IoLogoReact size={60} />
          <p style={{ textAlign:"center", fontSize:"18px", marginTop:"20px"}}>React Native</p>
          </div>
         
         <div className="Flutter">
         <SiFlutter size={60} />
         <p style={{ textAlign:"center", fontSize:"18px", marginTop:"20px"}}>Flutter</p>
         </div>
         <div className="Kotlin">
         <SiKotlin size={60} />
         <p style={{ textAlign:"center", fontSize:"18px", marginTop:"20px"}}>Kotlin</p>
         </div>
         
          <div className="Swift">
          <FaSwift size={60} />
          <p style={{ textAlign:"center", fontSize:"18px", marginTop:"20px"}}>Swift</p>
          </div>
          
        </ul>
      <hr></hr>
      </div>
    </>
  );
};

export default MobileIcon;
