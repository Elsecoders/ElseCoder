import Navs from "../../../Components/Navbar/Navs";
import "./Services.css";
import { Link as ScrollLink, Element } from "react-scroll";
import { NavLink } from "react-router-dom";
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
            <h1 style={{ color: "black" }}>
              We <span style={{ color: "rgb(234, 90, 27)" }}>Engineer</span>{" "}
              Software Solutions
            </h1>
            <p>
              We help you envision technology that powers the future of your
              business
            </p>
          </div>
        </div>
        <div className="whatWedo">
          <h1 style={{ color: "black", textAlign: "center" }}>What We Do</h1>
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
              As a trusted partner of world's leading CRM solutions, we can help
              you customize and implement business solutions 3x faster and
              smarter.
            </p>
          </div>

          <div className="service-div-sol">
            <box className="box-1">
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

            <box className="box-1">
              <NavLink
                className="box-link"
                to="/customreactcms"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "12px",
                }}
              >
                <CodeIcon />
                Custom React CMS
                <NorthEastIcon />
              </NavLink>
            </box>
          </div>
          <div className="service-div-sol">
            <box className="box-1">
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
            </box>
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
              Named among top 1% global companies by Clutch, we have the trust
              of 500+ companies when it comes to bespoke software solutions.
            </p>
          </div>

          <div className="service-div-sol">
            <box className="box-1">
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
            </box>

            <box className="box-1">
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
            </box>
          </div>
          <div className="service-div-sol">
            <box className="box-1">
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
            </box>
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
              Our SEO solutions build a website's relevance and trust with
              search engines. Every task performed has a specific purpose that
              improves your website's ranking. Some of these tasks include:
            </p>
          </div>

          <div className="service-div-sol">
            <box className="box-1">
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
            </box>

            <box className="box-1">
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
            </box>
          </div>
          <div className="service-div-sol">
            <box className="box-1">
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
            </box>
            <box className="box-1">
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
            </box>
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
              From content creation to community management, we will help you
              establish a strong social media presence, build brand awareness,
              and drive more traffic to your website.
            </p>
          </div>

          <div className="service-div-sol">
            <box className="box-1">
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
            </box>

            <box className="box-1">
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
            </box>
          </div>
          <div className="service-div-sol">
            <box className="box-1">
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
            </box>
            <box className="box-1">
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
            </box>
          </div>
        </Element>
      </div>
      <Footer />
    </>
  );
};

export default Services;
