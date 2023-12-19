import React from 'react';
import './SliderSection.css';

const SliderSection = () => {
 
 
  return (
    <>
    <div className="containerSlider mt-2">
      <div className="img2">
        <img src="/Images/SliderImg/slider.jpg" alt="Slider" />
      </div>
      <div className="content">
        <h1>
        <span style={{ color: 'black' }}>{`<`}</span>
          <span style={{ color: '#2CA3CC' }}>{`E!se`}</span>
          <span style={{ color: '#EA5A1B' }}>{`Coder`}</span>
          <span style={{ color: 'black' }}>{`/>`}</span>
          </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          doloremque vitae laudantium in qui blanditiis fugiat ex quae
          sapiente incidunt enim maiores veniam deserunt necessitatibus.
        </p>

      </div>

    </div>
    </>
  );
};

export default SliderSection;
