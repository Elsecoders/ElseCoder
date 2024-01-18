import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="footer mt-5">
        <MDBFooter
          bgColor="#111"
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <ul className="wrapper">
                <NavLink
                  to="https://www.facebook.com/profile.php?id=61554510617368"
                  style={{ color: "#1877F2" }}
                >
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>

                    <span>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                  </li>
                </NavLink>

                <NavLink style={{ color: "#E4405F" }}>
                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <span>
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                  </li>
                </NavLink>
                <NavLink style={{ color: "#1DA1F2" }}>
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  to="https://github.com/elsecoder1"
                  style={{ color: "#333333" }}
                >
                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <span>
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  to="https://www.linkedin.com/company/else-coder"
                  style={{ color: "#1877F2" }}
                >
                  <li className="icon linkedin">
                    <span className="tooltip">LinkedIn</span>

                    <span>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </li>
                </NavLink>
              </ul>
            </div>
          </section>

          <section className="footer" style={{ fontFamily: "Inter" }}>
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h5 className=" fw-bold " style={{fontWeight:"800", fontSize:"28px"}}>
                    <MDBIcon icon="gem" className="me-3" />
                    <span style={{ color: "black" }}>{`<`}</span>
                    <span style={{ color: "#2CA3CC" }}>{`E!se`}</span>
                    <span style={{ color: "#EA5A1B" }}>{`Coder`}</span>
                    <span style={{ color: "black" }}>{`/>`}</span>
                  </h5>
                  <p style={{fontSize:"18px"}}>
                    Get the best services from our experts, who have years of
                    experience when it comes to handling, writing, and deploying
                    top-notch websites.
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto">
                  <h6 className="text-uppercase fw-bold " style={{fontWeight:"800", color:"black", fontSize:"18px"}}>Useful links</h6>
                  <p >
                    <Link to="/aboutus" className="text-reset" style={{textDecoration:"none" , fontSize:"16px"}}>
                      ABOUT US
                    </Link>
                  </p>
                  <p>
                    <Link to="/services" className="text-reset" style={{textDecoration:"none" , fontSize:"16px"}}>
                      SERVICES
                    </Link>
                  </p>
                  <p>
                    <Link to="contactus" className="text-reset" style={{textDecoration:"none" , fontSize:"16px"}}>
                      CONTACT US
                    </Link>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase " style={{fontWeight:"800", color:"black" , fontSize:"16px"}}>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2"  />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2018 Copyright:
            <Link className="text-reset fw-bold" to="https://elsecoder.com/">
              ElseCoder.com
            </Link>
          </div>
        </MDBFooter>
      </div>
    </>
  );
};

export default Footer;
