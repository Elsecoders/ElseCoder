import React from "react";
import Navs from "../../../Components/Navbar/Navs";
import Footer from "../../../Components/footer/Footer";
import "./Aboutus.css";
const Aboutus = () => {
  return (
    <>
      <Navs />
      <div className="about-container">
        <div className="aboutus-page mt-2">
          <div className="about-img">
            <img src="/Images/aboutUs/aboutUs-page.jpg" alt="Slider" />
          </div>
          <div className="about-content">
            <h1 className="about-content-head">
              <span style={{ color: "black" }}>{`About `}</span>
              <span style={{ color: "black" }}>{`<`}</span>
              <span style={{ color: "#2CA3CC" }}>{`E!se`}</span>
              <span style={{ color: "#EA5A1B" }}>{`Coder`}</span>
              <span style={{ color: "black" }}>{`/>`}</span>
            </h1>
            <p className="about-content-para">
              Design, Develop, Deploy - We Make It Happen
            </p>
          </div>
        </div>
        <div className="about-tag">
          <h3 className="about-head">
            We Are PRO..
            <br />
            ProNetizens.
          </h3>
          <p className="about-para">
            Here at Pro Netizens, we strive for perfection in everything we do.
            <br /> <br />
            We help you to create a cutting-edge web to propel your organization
            towards its immediate and long-term objectives. As a company, we
            specialize
            <br /> in developing fully-fledged, highly reliable, and extensible
            applications. Our ultimate objective is to provide you with a
            high-quality web <br />
            application that efficiently uses your resources while remaining
            affordable.
            <br /> <br />
            No matter what you need, we can provide a scalable, user-friendly
            solution to help your organization run more smoothly and effectively
            now and in
            <br /> the future. With our years of relevant experience, we can
            help you dethrone your competitors and increase your revenue.
          </p>
        </div>
        <div className="about-mission">
          <div>
            <h3 className="mission-head">
              <b>Mission And Vision </b>
            </h3>
          </div>
          <div className="mission-container">
            <div className="container-img">
              <img
                src="/public/Images/aboutUs/Vision-Mission.png"
                alt="Mission Image"
              />
            </div>
            <div className="moto-vision">
              <h4>
                <b>Our Vision</b>
              </h4>
              <p>
                Our goal is to enable businesses of all sizes to flourish in the
                digital era by providing innovative and effective software
                solutions and marketing strategies. We aim to become the
                preferred agency for our clients by helping them achieve their
                objectives and surpass their expectations.
              </p>
              <h4>
                <b>Our Moto</b>
              </h4>
              <p>Design, Develop, Deploy - We Make It Happen</p>
            </div>
          </div>
        </div>
        <div className="ourvalue-head">
          <h3>
            <b>Our Values</b>
          </h3>
        </div>
        <div className="ourvalue-container">
          <div className="ourvalue-subcontainer">
            <img
              className="value-container-img"
              src="/public/Images/aboutUs/passion.png"
              alt="Passion"
            />
            <h6 className="value-container-head">
              <b>Passion</b>
            </h6>
            <p className="value-container-para">
              We are fueled by our passion and committed to infusing purpose
              into every aspect of our endeavors.
            </p>
          </div>
          <div className="ourvalue-subcontainer">
            <img
              className="value-container-img1"
              src="/public/Images/aboutUs/innovation.png"
              alt="Innovation"
            />
            <h6 className="value-container-head1">
              <b>Impactful Innovation</b>
            </h6>
            <p className="value-container-para1">
              We constantly strive to challenge the current norms and envision
              the future demands of the market in order to create significant
              value.
            </p>
          </div>
          <div className="ourvalue-subcontainer">
            <img
              className="value-container-img2"
              src="/public/Images/aboutUs/trust.png"
              alt="Trust"
            />
            <h6 className="value-container-head2">
              <b>Trust & Diversity</b>
            </h6>
            <p className="value-container-para2">
              We honor and embrace a variety of viewpoints, while cultivating a
              culture of mutual reliance and responsibility
            </p>
          </div>
        </div>
        {/* <div className="application-services">
          <h3>
            <b>End-to-end application services</b>
          </h3>
        </div>
        <div className="ecommerce">
        <div className="countainer1">
            <img className="service-image"
              src="/public/Images/aboutUs/online-shopping.png"
              alt="development"
            />
            <h5 className="service-head">Application Development</h5>
            <p className="service-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              neque.
            </p>
            <span className="service-more">Learn More
            <i> &#8594;</i></span>
          </div>
          <div className="countainer1">
          <div className="notification-overlay">
            <img className="service-image"
              src="/public/Images/aboutUs/online-shopping.png"
              alt="development"
            />
            </div>
            <h5 className="service-head">Application Development</h5>
            <p className="service-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              neque.
            </p>
            <span className="service-more">Learn More
            <i> &#8594;</i></span>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
