// import React from "react";
import "./SliderSection.css";

const SliderSection = () => {
  return (
    <>
      <div className="containerSlider mt-2">
        <div className="img2">
          <img src="/Images/SliderImg/slider.jpg" alt="Slider" />
        </div>
        <div className="content">
          <h1>
            <span style={{ color: "black" }}>{`<`}</span>
            <span style={{ color: "#2CA3CC" }}>{`E!se`}</span>
            <span style={{ color: "#EA5A1B" }}>{`Coder`}</span>
            <span style={{ color: "black" }}>{`/>`}</span>
          </h1>
          <p>
            Get the best services from our experts, who have years of experience
            when it comes to handling, writing, and deploying top-notch
            websites.
          </p>
          <h1 />
        </div>
      </div>
    </>
  );
};

export default SliderSection;
