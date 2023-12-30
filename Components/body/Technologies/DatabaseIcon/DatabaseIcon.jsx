import React from "react";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedis } from "react-icons/si";
const DatabaseIcon = () => {
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
            <div className="Mongodb">
            <DiMongodb size={60} />
            <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>MongoDb</p>
            </div>
          
          <div className="Mysql">
          <SiMysql size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Mysql Server</p>
          </div>
         
          <div className="Msql">
          <DiMsqlServer size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>MsSql Server</p>
          </div>
          
          <div className="firebase">
          <IoLogoFirebase size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Firebase</p>
          </div>
          
          <div className="Redis">
          <SiRedis size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Redis</p>
          </div>
         
        </ul>
        <hr></hr>
      </div>
    </>
  );
};

export default DatabaseIcon;
