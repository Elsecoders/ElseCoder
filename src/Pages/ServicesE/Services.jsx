import React from "react";
import Navs from "../../../Components/Navbar/Navs";
import "./Services.css";
import { Link } from "react-router-dom";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CodeIcon from "@mui/icons-material/Code";
import NorthEastIcon from "@mui/icons-material/NorthEast";
//import Footer from "../../../Components/footer/Footer";

const Services = () => {
  return (
    <>
      <Navs />
    
      <div className="servicePage mt-4">
        <div className="Services">
          <div className="ServiceImg">
            <img src="/Images/SliderImg/slider.jpg" alt="Slider" />
          </div>
          <div className="Service-content">
            <h1 style={{ color: "black" }}>We Engineer Software Solutions</h1>
            <p>
              We help you envision technology that powers the future of your
              business
            </p>
          </div>
        </div>
        <div className="whatWedo">
          <h2 style={{ color: "black", textAlign: "center" }}>What We Do</h2>
          <div className="solution mt-5">
            <ul
              className="sol-link"
              style={{
                gap: "20px",
                display: "flex",
                justifyContent: "space-evenly",
                listStyleType: "none",
              }}
            >

              <Link
                className="link-with-line"
                style={{ textDecoration: "none", color: "#0081bc" }}
              >
                Solution Implementation<span className="line"></span>
              </Link>
              <Link
                className="link-with-line"
                style={{ textDecoration: "none", color: "#0081bc" }}
              >
                Software Development<span className="line"></span>
              </Link>
              <Link
                className="link-with-line"
                style={{ textDecoration: "none", color: "#0081bc" }}
              >
                Search Engine Optimization<span className="line"></span>
              </Link>
              <Link
                className="link-with-line"
                style={{ textDecoration: "none", color: "#0081bc" }}
              >
                Social Media Management<span className="line"></span>
              </Link>
            </ul>
          </div>
        </div>
        <div className="service-div mt-5">
          <div className="service-div-1" style={{ backgroundColor: "#fafafb" }}>
            <div className="service-div-content">
              <h1>
                <span>Solution</span>
                <br></br>
                <span style={{ color: "#2CA3CC" }}>Implementation</span>
              </h1>
              <p>
                As a trusted partner of world's leading CRM solutions, 
                we can help you customize and implement business solutions 3x
                faster and smarter.
              </p>
            </div>
            <div className="service-div-sol">
              <box className="box-1">
                <Link className="box-link" style={{ textDecoration: "none", color: "#000" }}>
                <IntegrationInstructionsIcon />
                Word Press
                <NorthEastIcon />
                </Link>
              </box>
              <br></br>
              <box className="box-1">
                <Link className="box-link" style={{ textDecoration: "none", color: "#000" }}>
                <CodeIcon />
                Custom React CMS
                <NorthEastIcon />
                </Link>
              </box>
              <box  className="box-1">
                <Link className="box-link" style={{ textDecoration: "none", color: "#000" }}>
                <ShoppingCartIcon />
                Shopify
                <NorthEastIcon />
                </Link>
              </box>
            </div>
          </div>
          <div className="service-div-1">
            <div className="service-div-content">
              <h1>
                <span>Software</span>
                <br></br>
                <span style={{ color: "#2CA3CC" }}>Development</span>
              </h1>
              <p>
              As a trusted partner of world's leading CRM solutions, we can help you customize and implement business solutions 3x faster and smarter.
              </p>
            </div>
            <div className="service-div-sol">
              <box className="box-1">
                <IntegrationInstructionsIcon />
                Word Press
                <NorthEastIcon />
              </box>
              <br></br>
              <box className="box-1">
                <CodeIcon />
                Custom React CMS
                <NorthEastIcon />
              </box>
              <box className="box-1">
                <ShoppingCartIcon />
                Shopify
                <NorthEastIcon />
              </box>
            </div>
          </div>
          <div className="service-div-1" style={{ backgroundColor: "#fafafb" }}>
            <div className="service-div-content">
              <h1>
                <span>Search Engine</span>
                <br></br>
                <span style={{ color: "#2CA3CC" }}>Optimization</span>
              </h1>
              <p>
              As a trusted partner of world's leading CRM solutions, we can help you customize and implement business solutions 3x faster and smarter.
              </p>
            </div>
            <div
              className="service-div-sol"
              style={{ justifyContent: "space-between" }}
            >
              <box className="box-1">
                <IntegrationInstructionsIcon />
                Word Press
                <NorthEastIcon />
              </box>
              <br></br>
              <box className="box-1">
                <CodeIcon />
                Custom React CMS
                <NorthEastIcon />
              </box>
              <box className="box-1">
                <ShoppingCartIcon />
                Shopify
                <NorthEastIcon />
              </box>
            </div>
          </div>
          <div className="service-div-1">
            <div className="service-div-content">
              <h1>
                <span>Social Media </span>
                <br></br>
                <span style={{ color: "#2CA3CC" }}>Management</span>
              </h1>
              <p>
              As a trusted partner of world's leading CRM solutions, we can help you customize and implement business solutions 3x faster and smarter.
              </p>
            </div>
            <div className="service-div-sol">
              <box className="box-1">
                <IntegrationInstructionsIcon />
                Word Press
                <NorthEastIcon />
              </box>
              <br></br>
              <box className="box-1">
                <CodeIcon />
                Custom React CMS
                <NorthEastIcon />
              </box>
              <box className="box-1">
                <ShoppingCartIcon />
                Shopify
                <NorthEastIcon />
              </box>
            </div>
          </div>

          
        </div>
      </div>
      
      
   

    </>
  );
};

export default Services;
