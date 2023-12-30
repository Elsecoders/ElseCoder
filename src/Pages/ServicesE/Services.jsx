import Navs from "../../../Components/Navbar/Navs";
import "./Services.css";
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link } from "react-router-dom";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CodeIcon from "@mui/icons-material/Code";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Footer from "../../../Components/footer/Footer";

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
            <h1 style={{ color: "black" }}>We <span style={{color: "rgb(234, 90, 27)"}}>Engineer</span> Software Solutions</h1>
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
              <ScrollLink
                className="link-with-line"
                to="solution-implementation" spy={true} smooth={true} duration={500}
                style={{ textDecoration: "none", color: "rgb(234, 90, 27)" }}
              >
                Solution Implementation<span className="line"></span>
              </ScrollLink>
              <ScrollLink
                className="link-with-line"
                to="software-development" spy={true} smooth={true} duration={500}
                style={{ textDecoration: "none", color: "rgb(234, 90, 27)" }}
              >
                Software Development<span className="line"></span>
              </ScrollLink>
              <ScrollLink
                className="link-with-line"
                to="search-engine-optimization" spy={true} smooth={true} duration={500}
                style={{ textDecoration: "none", color: "rgb(234, 90, 27)" }}
              >
                Search Engine Optimization<span className="line"></span>
              </ScrollLink>
              <ScrollLink
                className="link-with-line"
                to="social-media-management" spy={true} smooth={true} duration={500}
                style={{ textDecoration: "none", color: "rgb(234, 90, 27)" }}
              >
                Social Media Management<span className="line"></span>
              </ScrollLink>
            </ul>
          </div>
        </div>
      </div>
      <div className="service-div mt-5">
          <Element name="solution-implementation" className="service-div-1" id="solution-implementation" style={{ backgroundColor: "#fafafb" }}>
            <div className="service-div-content" >
              <h1 style={{}}>
                <span>Solution</span>
                <br></br>
                <span style={{ color: "rgb(234, 90, 27)" }}>Implementation</span>
              </h1>
              <p style={{fontSize:"20px"}}>
                As a trusted partner of world's leading CRM solutions, 
                we can help you customize and implement business solutions 3x
                faster and smarter.
              </p>
            </div>
            <div className="service-div-sol">
              <box className="box-1">
                <Link className="box-link" to="/wordpress" style={{ textDecoration: "none", color: "#000" }}>
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
          </Element>
          <Element className="service-div-1" id="software-development">
            <div className="service-div-content">
              <h1>
                <span>Software</span>
                <br></br>
                <span style={{ color: "rgb(234, 90, 27)" }}>Development</span>
              </h1>
              <p style={{fontSize:"20px"}}>
              As a trusted partner of world's leading CRM solutions, we can help you customize and implement business solutions 3x faster and smarter.
              </p>
            </div>
            <div className="service-div-sol">
              <box className="box-1">
                <IntegrationInstructionsIcon />
                UL/UX Design
                <NorthEastIcon />
              </box>
              <br></br>
              <box className="box-1">
                <CodeIcon />
                Custom Software Development
                <NorthEastIcon />
              </box>
              <box className="box-1">
                <ShoppingCartIcon />
                Mobile Development
                <NorthEastIcon />
              </box>
            </div>
          </Element>
          <Element className="service-div-1" id="search-engine-optimization" style={{ backgroundColor: "#fafafb" }}>
            <div className="service-div-content">
              <h1>
                <span>Search Engine</span>
                <br></br>
                <span style={{ color: "rgb(234, 90, 27)" }}>Optimization</span>
              </h1>
              <p style={{fontSize:"20px"}}>
              As a trusted partner of world's leading CRM solutions, we can help you customize and implement business solutions 3x faster and smarter.
              </p>
            </div>
            <div
              className="service-div-sol"
              style={{ justifyContent: "space-between" }}
            >
              <box className="box-1">
                <IntegrationInstructionsIcon />
                Keyword Research
                <NorthEastIcon />
              </box>
              <br></br>
              <box className="box-1">
                <CodeIcon />
                Content Creation 
                <NorthEastIcon />
              </box>
              <box className="box-1">
                <ShoppingCartIcon />
                Onsite Optimization
                <NorthEastIcon />
              </box>
              <box className="box-1">
                <ShoppingCartIcon />
                Backlink building
                <NorthEastIcon />
              </box>
            </div>
          </Element>
          <Element className="service-div-1" id="social-media-management">
            <div className="service-div-content">
              <h1>
                <span>Social Media </span>
                <br></br>
                <span style={{ color: "rgb(234, 90, 27)" }}>Management</span>
              </h1>
              <p style={{fontSize:"20px"}}>
              As a trusted partner of world's leading CRM solutions, we can help you customize and implement business solutions 3x faster and smarter.
              </p>
            </div>
            <div className="service-div-sol">
              <box className="box-1">
                <IntegrationInstructionsIcon />
                Social Media Strategy
                <NorthEastIcon />
              </box>
              <br></br>
              <box className="box-1">
                <CodeIcon />
                Socila Media Content
                <NorthEastIcon />
              </box>
              <box className="box-1">
                <ShoppingCartIcon />
                Copywriting
                <NorthEastIcon />
              </box>
              <box className="box-1">
                <ShoppingCartIcon />
                Graphic Designing
                <NorthEastIcon />
              </box>
            </div>
          </Element>

         
         
        </div>
      <Footer />
    </>
  );
};

export default Services;
