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
                src="/Images/aboutUs/Vision-Mission.webp"
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
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
