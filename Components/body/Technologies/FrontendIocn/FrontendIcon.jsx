import React from "react";
import { IoLogoAngular } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
const FrontendIcon = () => {
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
          <div className="Angular">
            <IoLogoAngular size={60} />
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}
            >
              AngularJs
            </p>
          </div>
          <div className="React">
            <FaReact size={60} />
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}
            >
              ReactJs
            </p>
          </div>
          <div className="Typescript">
            <SiTypescript size={60} />
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}
            >
              Typescript
            </p>
          </div>
          <div className="">
            <IoLogoVue size={60} />
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}
            >
              VueJs
            </p>
          </div>
                <div className="html5">
                <FaHtml5 size={60} />
                <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}
            >
              Html5
            </p>
                </div>
          <div className="tailwind">
          <SiTailwindcss size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>Tailwind CSS</p>
          </div>
          <div>
          <SiVite size={60} />
          <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>ViteJs</p>
          </div>
         <div className="Javascript">
         <TbBrandJavascript size={60} />
         <p style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
              }}>JavaScript</p>
         </div>
         
        </ul>
        <hr></hr>
      </div>
    </>
  );
};

export default FrontendIcon;
