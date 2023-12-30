import React from "react";
import { SiPhp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
const BackendIcon = () => {
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
            <div className="php"><SiPhp size={60} />
            <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>php</p>
            </div>
          
          <div className="Java"><FaJava size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Java</p>
          </div>
          
          <div className="nodeJs"><FaNode size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>nodeJs</p>
          </div>
          
          <div className="Python"><FaPython size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Python</p>
          </div>
          
          <div className="DotNet"><SiDotnet size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>DotNet</p>
          </div>
          
        </ul>
        <hr></hr>
      </div>
    </>
  );
};

export default BackendIcon;
