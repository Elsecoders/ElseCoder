import React from "react";
import Card from "react-bootstrap/Card";
import CardLink from "react-bootstrap/esm/CardLink";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "./ServicesWeOffer.css";
import { Link } from "@mui/material";

const ServicesWeOffer = () => {
  return (
    <>
      <div className="ServiceWeOffer">
        <div className="Serviceheading">
          {" "}
          <h2>Services We Offer</h2>
        </div>
        <div className="Services-Box mt-3">
          <Card style={{ width: "35rem", height: "18rem" }}>
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
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/wordpress"
                >
                  Wordpress
                </Link>
                <br></br>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/customreactcms"
                >
                  Custom React CMS
                </Link>
                <br></br>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/shopify"
                >
                  Shopify
                </Link>
              </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "35rem", height: "18rem" }}>
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
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/wordpress"
                  >
                    UI/UX Design
                  </Link>
                  <br></br>
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/customreactcms"
                  >
                    Custom Software Development
                  </Link>
                  <br></br>
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/shopify"
                  >
                    Mobile Application
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="Services-Box mt-4">
          <Card style={{ width: "35rem", height: "18rem" }}>
            <Card.Body>
              <EditNoteOutlinedIcon
                style={{
                  color: "#111",
                  marginRight: "220px",
                  height: "2.5rem",
                }}
              /><div className="serviceBox1">
                <div className="seo-div">
              <p className="service-div ">SEO</p>
              </div>
              <div className="platform-div">
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/wordpress"
                >
                  Keyword Research
                </Link>
                <br></br>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/customreactcms"
                >
                  Content Creation
                </Link>
                <br></br>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/shopify"
                >
                  Onsite Optimization
                </Link>
                <br></br>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/shopify"
                >
                  Backlink Building
                </Link>
              </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "35rem", height: "18rem" }}>
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
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/wordpress"
                >
                  Social Media Strategy
                </Link>
                <br></br>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/customreactcms"
                >
                  Social Media Content
                </Link>
                <br></br>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/shopify"
                >
                  Copywriting
                </Link>
                <br></br>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/shopify"
                >
                  Graphic Designing
                </Link>
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
