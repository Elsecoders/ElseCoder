import Navs from "../../../Components/Navbar/Navs";
import "./Services.css";
import { Link as ScrollLink, Element } from "react-scroll";
import { NavLink } from "react-router-dom";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CodeIcon from "@mui/icons-material/Code";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Footer from "../../../Components/footer/Footer";
import { useEffect } from "react";
import Box from '@mui/material/Box';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
      <Navs />

      <div className="servicePage mt-4">
        <div className="Services">
          <div className="ServiceImg">
            <img src="public/Images/Services/Handshake.jpg" alt="Slider" />
          </div>
          <div className="Service-content">
            <h1 style={{ color: "black" }}>
              Crafting{" "}
              <span style={{ color: "rgb(234, 90, 27)" }}>Cutting-Edge</span>{" "}
              Software Solutions
            </h1>
            <p>Envisioning the Future of Your Business Through Technology</p>
          </div>
        </div>
        <div className="whatWedo">
          <h1 style={{ color: "black", textAlign: "center" }}>Our Expertise</h1>
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
                to="solution-implementation-1"
                spy={true}
                smooth={true}
                duration={500}
                style={{
                  textDecoration: "none",
                  color: "rgb(234, 90, 27)",
                  fontSize: "x-large",
                }}
              >
                Solution Implementation<span className="line"></span>
              </ScrollLink>
              <ScrollLink
                className="link-with-line"
                to="software-development-1"
                spy={true}
                smooth={true}
                duration={500}
                style={{
                  textDecoration: "none",
                  color: "rgb(234, 90, 27)",
                  fontSize: "x-large",
                }}
              >
                Software Development<span className="line"></span>
              </ScrollLink>
              <ScrollLink
                className="link-with-line"
                to="search-engine-optimization-1"
                spy={true}
                smooth={true}
                duration={500}
                style={{
                  textDecoration: "none",
                  color: "rgb(234, 90, 27)",
                  fontSize: "x-large",
                }}
              >
                Search Engine Optimization<span className="line"></span>
              </ScrollLink>
              <ScrollLink
                className="link-with-line"
                to="social-media-management-1"
                spy={true}
                smooth={true}
                duration={500}
                style={{
                  textDecoration: "none",
                  color: "rgb(234, 90, 27)",
                  fontSize: "x-large",
                }}
              >
                Social Media Management<span className="line"></span>
              </ScrollLink>
            </ul>
          </div>
        </div>
      </div>
      <div className="service-div mt-5" >
          <Element name="solution-implementation" className="service-div-1" id="solution-implementation" style={{ backgroundColor: "#fafafb" }}>
            <div className="service-div-content" >
              <h1 className="service-box-heading" style={{fontSize:"60px"}}>
                <span>Solution</span>
                <br></br>

                <span style={{ color: "rgb(234, 90, 27)" }}>Implementation</span>

                <span className="service-box-span-heading" style={{ color: "#2CA3CC" }}>Implementation</span>

              </h1>
              <p style={{fontSize:"20px"}}>
                As a trusted partner of world's leading CRM solutions, 
                we can help you customize and implement business solutions 3x
                faster and smarter.
              </p>
            </div>
            
             <div className="service-div-sol">
              <box className="box-1">

                <NavLink className="box-link" to="/wordpress" style={{ textDecoration: "none", color: "#000", fontSize: "12px" }}
      <div className="service-div mt-5">
        <Element
          name="solution-implementation"
          className="service-div-1"
          id="solution-implementation-1"
          style={{ backgroundColor: "#fafafb" }}
        >
          <div className="service-div-content">
            <h1 className="service-box-heading" style={{ fontSize: "60px" }}>
              <span>Solution</span>
              <br></br>

              <span
                className="service-box-span-heading"
                style={{ color: "rgb(234, 90, 27)" }}
              >
                Implementation
              </span>
            </h1>
            <p style={{ fontSize: "20px" }}>
              Seamlessly bring your business vision to life with our solution
              implementation services. As trusted partners with the world's
              leading CRM solutions, we excel in customizing and implementing
              business solutions three times faster and smarter.
            </p>
          </div>

          <div className="service-div-sol">
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/wordpress"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <IntegrationInstructionsIcon />
                Word Press
                <NorthEastIcon />
                </NavLink>
              </box>
              
              <box className="box-1" >
                <NavLink className="box-link" to="" style={{ textDecoration: "none", color: "#000" , fontSize: "12px"}} />
            </Box>

            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/customreactcms"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
                <CodeIcon />
                Custom React CMS
                <NorthEastIcon />
              </NavLink>
            </Box>
          </div>
          <div className="service-div-sol">
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/shopify"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <ShoppingCartIcon />
                Shopify
                <NorthEastIcon />
              </NavLink>
            </Box>
            {/* <box className="box-1">
                <Link className="box-link" style={{ textDecoration: "none", color: "#000" , fontSize: "12px"}}>
                <CodeIcon />
                Custom React CMS
                <NorthEastIcon />
                </Link>
              </box> */}
          </div>
        </Element>

        <Element
          name="software-development"
          className="service-div-1"
          id="software-development-1"
        >
          <div className="service-div-content">
            <h1 className="service-box-heading" style={{ fontSize: "60px" }}>
              <span>Software</span>
              <br></br>

              <span
                className="service-box-span-heading"
                style={{ color: "rgb(234, 90, 27)" }}
              >
                Development
              </span>
            </h1>
            <p style={{ fontSize: "20px" }}>
              Recognized among the top 1% of global companies by Clutch, we
              proudly hold the trust of over 500 companies for delivering
              bespoke software solutions. Our expertise spans UI/UX design,
              custom software development, and mobile development.
            </p>
          </div>

          <div className="service-div-sol">
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/uiuxdesign"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <IntegrationInstructionsIcon />
                UI/UX Design
                <NorthEastIcon />
              </NavLink>
            </Box>

            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/customsoftwaredevelopment"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <CodeIcon />
                Custom Software Development
                <NorthEastIcon />
              </NavLink>
            </Box>
          </div>
          <div className="service-div-sol">
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/mobileapplication"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <ShoppingCartIcon />
                Mobile Development
                <NorthEastIcon />
              </NavLink>
            </Box>
            {/* <box className="box-1">
                <Link className="box-link" style={{ textDecoration: "none", color: "#000" , fontSize: "12px"}}>
                <CodeIcon />
                Custom React CMS
                <NorthEastIcon />
                </Link>
              </box> */}
          </div>
        </Element>

        <Element
          name="search-engine-optimization"
          className="service-div-1"
          id="search-engine-optimization-1"
          style={{ backgroundColor: "#fafafb" }}
        >
          <div className="service-div-content">
            <h1 className="service-box-heading" style={{ fontSize: "60px" }}>
              <span>Search Engine</span>
              <br></br>

              <span
                className="service-box-span-heading"
                style={{ color: "rgb(234, 90, 27)" }}
              >
                Optimization
              </span>
            </h1>
            <p style={{ fontSize: "20px" }}>
              Elevate your online presence with our SEO solutions designed to
              enhance your website's relevance and trust with search engines.
              Our strategic approach includes tasks such as keyword research,
              content creation, onsite optimization, and backlink building, all
              aimed at improving your website's ranking.
            </p>
          </div>

          <div className="service-div-sol">
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/keywordresearch"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <IntegrationInstructionsIcon />
                Keyword Research
                <NorthEastIcon />
              </NavLink>
            </Box>

            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/contentcreation"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <CodeIcon />
                Content Creation
                <NorthEastIcon />
              </NavLink>
            </Box>
          </div>
          <div className="service-div-sol">
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/onsiteoptimization"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <ShoppingCartIcon />
                Onsite Optimization
                <NorthEastIcon />
              </NavLink>
            </Box>
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/backlinkbuilding"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <CodeIcon />
                Backlink Building
                <NorthEastIcon />
              </NavLink>
            </Box>
          </div>
        </Element>

        <Element
          name="social-media-management"
          className="service-div-1"
          id="social-media-management-1"
        >
          <div className="service-div-content">
            <h1 className="service-box-heading" style={{ fontSize: "60px" }}>
              <span>Social</span>
              <br></br>

              <span
                className="service-box-span-heading"
                style={{ color: "rgb(234, 90, 27)" }}
              >
                Media Management
              </span>
            </h1>
            <p style={{ fontSize: "20px" }}>
              From content creation to community management, our social media
              management services are designed to establish a robust online
              presence, enhance brand awareness, and drive increased traffic to
              your website. We are your partners in building a strong social
              media foundation for your business. Empower your business with our
              comprehensive range of services, ensuring that your technology
              landscape not only meets current needs but also paves the way for
              future growth.
            </p>
          </div>

          <div className="service-div-sol">
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/socialMediacontent"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <IntegrationInstructionsIcon />
                Social Media Content
                <NorthEastIcon />
              </NavLink>
            </Box>

            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/socialmediastrategies"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <CodeIcon />
                Social Media Strategy
                <NorthEastIcon />
              </NavLink>
            </Box>
          </div>
          <div className="service-div-sol">
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/copywriting"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <ShoppingCartIcon />
                Copywriting
                <NorthEastIcon />
              </NavLink>
            </Box>
            <Box className="box-1">
              <NavLink
                className="box-link"
                to="/graphicdesigning"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <CodeIcon />
                Graphic Designing
                <NorthEastIcon />
              </NavLink>
            </Box>
          </div>
        </Element>
      </div>
      <Footer />
    </>
  );
};

export default Services;
