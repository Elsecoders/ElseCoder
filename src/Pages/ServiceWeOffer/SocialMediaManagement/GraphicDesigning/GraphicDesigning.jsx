import React from "react";
import "./GraphicDesigning.css";
import Navs from "../../../../../Components/Navbar/Navs";
import Footer from "../../../../../Components/footer/Footer";
import GetInTouch from "../../../../../Components/body/GetInTouch/GetInTouch"
const GraphicDesigning = () => {
  return (
    <>
      <Navs />
      <div className="graphic-main-container">
        <div className="graphic-page mt-2">
          <div className="graphic-img">
            <img
              src="/public/Images/serviceweoffer/graphicDesigner-banner.png"
              alt="Slider"
            />
          </div>
          <div className="graphic-content">
            <h1 className="graphic-content-head">
              Transforming
              <br /> Ideas into <br />
              <span style={{ color: "#EA5A1B" }}> Visual </span>
              <br /> Masterpieces
            </h1>
            <p className="graphic-content-para">
              Bringing your brand to life through stunning visuals and
              innovative design solutions.
            </p>
          </div>
        </div>
        <div className="graphic-countainer1">
          <div className="graphic-detail-container">
            <h2 className="graphic-detail">Crafting <span style={{ color: "#EA5A1B" }}> Stories Through</span> Visual <br/> Innovation</h2>
            <p className="graphic-detail-para">
              Our graphic designing service is a creative hub where imagination
              and innovation blend seamlessly to bring your ideas to life. With
              a team of skilled designers, we specialize in crafting compelling
              visual experiences that resonate with your target audience. From
              logo designs that embody your brand's essence to captivating
              marketing materials that leave a lasting impression, we're
              dedicated to transforming concepts into stunning reality. Our
              meticulous attention to detail and keen understanding of design
              principles ensure that each project is a unique masterpiece,
              tailored to elevate your brand's identity and communication.
              Whether you're a startup or an established enterprise, we're here
              to translate your vision into a visual narrative that speaks
              volumes and sets you apart in the competitive landscape.
            </p>
          </div>
          <div className="graphic-detail-img">
            <img src="/public/Images/serviceweoffer/graphicDesigner-content.webp" alt="" />
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default GraphicDesigning;
