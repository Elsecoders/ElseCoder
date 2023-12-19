import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
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
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </Link>
            </div>
          </section>

          <section className="footer" style={{fontFamily:"Inter"}}>
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h5 className=" fw-bold mb-4">
                    <MDBIcon icon="gem" className="me-3" />
                    <span style={{ color: "black" }}>{`<`}</span>
                    <span style={{ color: "#2CA3CC" }}>{`E!se`}</span>
                    <span style={{ color: "#EA5A1B" }}>{`Coder`}</span>
                    <span style={{ color: "black" }}>{`/>`}</span>
                  </h5>
                  <p>
                    Get the best services from our experts, who have years of
                    experience when it comes to handling, writing, and deploying
                    top-notch websites.
                  </p>
                </MDBCol>

                {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <Link to="#!" className="text-reset">
                      Angular
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">
                      React
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">
                      Vue
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-reset">
                      Laravel
                    </Link>
                  </p>
                </MDBCol> */}

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <Link to="/aboutus" className="text-reset">
                      ABOUT US
                    </Link>
                  </p>
                  <p>
                    <Link to="/services" className="text-reset">
                      SERVICES
                    </Link>
                  </p>
                  <p>
                    <Link to="contactus" className="text-reset">
                      CONTACT US
                    </Link>
                  </p>
                 
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
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
