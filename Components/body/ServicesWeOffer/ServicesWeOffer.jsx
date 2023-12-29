import Card from "react-bootstrap/Card";
//import CardNavLink from "react-bootstrap/esm/CardNavLink";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "./ServicesWeOffer.css";
import { NavLink } from "react-router-dom";

const ServicesWeOffer = () => {
  return (
    <>
      <div className="ServiceWeOffer">
        <div className="Serviceheading">
          {" "}
          <h2>Services We Offer</h2>
        </div>
        <div className="Services-Box mt-3">
          <Card className="cardbox"style={{ width: "35rem", height: "18rem" }}>
            <Card.Body>
              <ViewInArOutlinedIcon
                style={{
                  color: "#111",
                  marginRight: "220px",
                  height: "2.5rem",
                }}
              />

              <div className="serviceBox1">
                <p className="service-div">
                  Solution <br></br> Implementation
                </p>
                <div className="platform-div">
                  <NavLink 
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/wordpress"
                  >
                    Wordpress
                  </NavLink>
                  <br></br>
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/customreactcms"
                  >
                    Custom React CMS
                  </NavLink>
                  <br></br>
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/shopify"
                  >
                    Shopify
                  </NavLink>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="cardbox" style={{ width: "35rem", height: "18rem" }}>
            <Card.Body>
              <WebhookOutlinedIcon
                style={{
                  color: "#111",
                  marginRight: "220px",
                  height: "2.5rem",
                }}
              />
              <div className="serviceBox1">
                <p className="service-div">
                  Software <br></br> Development
                </p>
                <div className="platform-div">
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/uiuxdesign"
                  >
                    UI/UX Design
                  </NavLink>
                  <br></br>
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/customsoftwaredevelopment"
                  >
                    Custom Software Development
                  </NavLink>
                  <br></br>
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/mobileapplication"
                  >
                    Mobile Application
                  </NavLink>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="Services-Box mt-4">
          <Card className="cardbox" style={{ width: "35rem", height: "18rem" }}>
            <Card.Body>
              <EditNoteOutlinedIcon
                style={{
                  color: "#111",
                  marginRight: "220px",
                  height: "2.5rem",
                }}
              />
              <div className="serviceBox1">
                <div className="seo-div">
                  <p className="service-div ">SEO</p>
                </div>
                <div className="platform-div">
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/keywordresearch"
                  >
                    Keyword Research
                  </NavLink>
                  <br></br>
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/contentcreation"
                  >
                    Content Creation
                  </NavLink>
                  <br></br>
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/onsiteoptimization"
                  >
                    Onsite Optimization
                  </NavLink>
                  <br></br>
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/backlinkbuilding"
                  >
                    BackNavLink Building
                  </NavLink>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="cardbox" style={{ width: "35rem", height: "18rem" }}>
            <Card.Body>
              <ShareOutlinedIcon
                style={{
                  color: "#111",
                  marginRight: "220px",
                  height: "2.5rem",
                }}
              />
              <div className="serviceBox1">
                <p className="service-div">
                  Social Media <br></br> Management{" "}
                </p>
                <div className="platform-div">
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/socialmediastrategy"
                  >
                    Social Media Strategy
                  </NavLink>
                  <br></br>
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/socialMediacontent"
                  >
                    Social Media Content
                  </NavLink>
                  <br></br>

                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/graphicdesigning"
                  >
                    Graphic Designing
                  </NavLink>
                  <br></br>
                  <NavLink
                  className="underline"
                    style={{ color: "black", textDecoration: "none" }}
                    to="/copywriting"
                  >
                    Copywriting
                  </NavLink>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ServicesWeOffer;
