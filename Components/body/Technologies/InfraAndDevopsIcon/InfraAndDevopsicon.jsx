import React from "react";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { FaJenkins } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { SiGradle } from "react-icons/si";
import { FaLinode } from "react-icons/fa";
import { DiRackspace } from "react-icons/di";
const InfraAndDevopsicon = () => {
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
            <div className="Docker">
            <FaDocker size={60} />
            <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Docker</p>
            </div>
       
          <div className="AWS">
          <FaAws size={60} /> 
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>AWS</p>
                </div>
         
          <div className="Azure">
          <TbBrandAzure size={60} />  
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Azure</p> 
                </div>
         
          <div className="Jenskins">
          <FaJenkins size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Jenkins</p>
                </div>
          
          <div className="DigitalOcean">
          <FaDigitalOcean size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Digital Ocean</p>
                </div>
          
          <div className="Gradle">
          <SiGradle size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>gradle</p>
                </div>
          
          <div className="Linode">
          <FaLinode size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>linode</p>
                </div>
          
          <div className="Rackspace">
          <DiRackspace size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Rackspace</p>
                </div>
          
        </ul>
        <hr></hr>
      </div>
    </>
  );
};

export default InfraAndDevopsicon;
