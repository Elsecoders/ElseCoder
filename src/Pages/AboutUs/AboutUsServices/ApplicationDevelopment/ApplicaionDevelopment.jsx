import Navs from "../../../../../Components/Navbar/Navs";
import { useState } from "react";
import Footer from "../../../../../Components/footer/Footer";
import "./ApplicationDevelopment.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaJava, FaSwift } from "react-icons/fa";
import { TbBrandKotlin, TbBrandJavascript } from "react-icons/tb";
import { TfiApple } from "react-icons/tfi";
const ApplicaionDevelopment = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("mobile");

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
  };
  return (
    <>
      <Navs />
      <div className="app-container">
        <div className="first-container col-lg-12 col-md-12 col-xs-8">
          <div className="first-img-container">
            <img
              src="../../../../../public/Images/aboutUs/food-seoooo1.jpg"
              alt=""
            />
          </div>
          <div className="first-container-text">
            <div>
              <h2>
                <b>Your Trusted Mobile Application Development Company</b>
              </h2>
              <p>
                Delivering result-driven software application development
                services to our diverse clientele spanning all major industries.
              </p>
            </div>
            <div className="cms-list">
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px",
                  // justifyContent: "center",
                  fontSize: "19px",
                }}
              >
                <li onClick={() => handleTechnologyClick("food")}>Food</li>
                <li onClick={() => handleTechnologyClick("ecommerce")}>
                  Ecommerce
                </li>
                <li onClick={() => handleTechnologyClick("marketplace")}>
                  Marketplaces
                </li>
                <li onClick={() => handleTechnologyClick("social")}>Social</li>
                <li onClick={() => handleTechnologyClick("education")}>
                  Education
                </li>
              </ul>
            </div>
            <h3>Food</h3>
            <p>
              We build innovative on-demand food apps with intuitive features,
              including order tracking, multiple payment options, vendor
              management, and delivery tracking.
            </p>
          </div>
        </div>
        <div className="secound-container">
          <div className="secound-header">
            <div className="heading">
              <h2>App Development Process</h2>
            </div>
            <div>
              <p className="para">
                Being a quality-focused Mobile App Development Company, Cubix
                guarantees intuitive mobile apps that are performance-oriented
                and a valuable addition to users' lives.
              </p>
            </div>
          </div>
          <div className="row d-flex div-centers">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="box-bullits">
                <h2 className="font-size-90 text-black mt-0 mb-0">01</h2>
                <h3 className="font-size-23 text-black mt-0 mb-0">Plan</h3>
                <hr className="hrsetseo" />
                <ul>
                  <li>Business analysis</li>
                  <li>Documenting specifications</li>
                  <li>Documenting specifications</li>
                  <li>Documenting specifications</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="box-bullits">
                <h2 className="font-size-90 text-black mt-0 mb-0">02</h2>
                <h3 className="font-size-23 text-black mt-0 mb-0">Design</h3>
                <hr className="hrsetseo" />
                <ul>
                  <li>UI/UX design</li>
                  <li>Wireframing</li>
                  <li>Prototype creation</li>
                  <li>Feedback gathering</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="box-bullits">
                <h2 className="font-size-90 text-black mt-0 mb-0">03</h2>
                <h3 className="font-size-23 text-black mt-0 mb-0">Develop</h3>
                <hr className="hrsetseo" />
                <ul>
                  <li>Front-end development</li>
                  <li>Back-end development</li>
                  <li>Testing</li>
                  <li>Code review</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="third-container">
          <div className="mb-5">
            <h2 className="mt--0 mb-3">
              Mobile App Development - Technology Stack
            </h2>
            <p className="mb-3">
              We create mobile apps with scalable and tested technology stack to
              deliver apps par excellence.
            </p>
          </div>
          <div className="row tabs tabs-nav-left tabs-nav-lg m0_auto">
            <div className="col-md-5">
              <div className="mb-3 mb-sm-4 mb-xs-5">
                <h3 className="mt-0 font-size-24 mb-sm-4 mt-sm-4">Language</h3>
                <div className="nav tabs-nav" role="tablelist">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "center",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("mobile")}>
                      <FaJava size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("frontend")}>
                      <TbBrandKotlin size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("database")}>
                      <TbBrandJavascript size={40} />
                    </li>
                  </ul>
                </div>
                <div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "left",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("backend")}>
                      <FaSwift size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("cms")}>
                      <TfiApple size={40} />
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mt-0 font-size-24 mb-sm-4 mt-sm-4">
                    Database
                  </h3>
                </div>
                <div className="nav tabs-nav" role="tablelist">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "center",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("mobile")}>
                      <FaJava size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("frontend")}>
                      <TbBrandKotlin size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("database")}>
                      <TbBrandJavascript size={40} />
                    </li>
                  </ul>
                </div>
                <div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "left",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("backend")}>
                      <FaSwift size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("cms")}>
                      <TfiApple size={40} />
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mt-0 font-size-24 mb-sm-4 mt-sm-4">
                    Framework
                  </h3>
                </div>
                <div className="nav tabs-nav" role="tablelist">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "center",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("mobile")}>
                      <FaJava size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("frontend")}>
                      <TbBrandKotlin size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("database")}>
                      <TbBrandJavascript size={40} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
                    <div className="tabs-content mt-sm7">
                      <div className="backgroundwhite-tabsd bgafters bgbefores p-50">

                      </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
      {selectedTechnology === "mobile" && <food />}
      <Footer />
    </>
  );
};

export default ApplicaionDevelopment;
