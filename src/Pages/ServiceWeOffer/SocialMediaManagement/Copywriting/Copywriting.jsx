import React, { useEffect } from "react";
import "./Copywriting.css";
import Navs from "../../../../../Components/Navbar/Navs";
import Footer from "../../../../../Components/footer/Footer";
import GetInTouch from "../../../../../Components/body/GetInTouch/GetInTouch";
const Copywriting = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <>
      <Navs />
      <div className="copywriting-main-container">
        <div className="copywriting-page mt-2">
          <div className="copywriting-img">
            <img
              src="public/Images/SocialMediaManagement/Copywriting/Copywriting.png"
              alt="Slider"
            />
          </div>
          <div className="copywriting-content">
            <h1 className="copywriting-content-head">
              Transforming
              <br /> Ideas into <br />
              <span style={{ color: "#EA5A1B" }}> Visual </span>
              <br /> Masterpieces
            </h1>
            <p className="copywriting-content-para">
              Bringing your brand to life through stunning visuals and
              innovative design solutions.
            </p>
          </div>
        </div>
        <div className="copywriting-countainer1">
          <div className="copywriting-detail-container">
            <h2 className="copywriting-detail">
              Crafting <span style={{ color: "#EA5A1B" }}> Stories Through</span>{" "}
               Visual <br /> Innovation
            </h2>
            <p className="copywriting-detail-para">
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
              volumes and sets you apart in the competitives landscape.
            </p>
          </div>
          <div className="copywriting-detail-img">
            <img
              src="public/Images/SocialMediaManagement/Copywriting/Copywriting2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Copywriting;
