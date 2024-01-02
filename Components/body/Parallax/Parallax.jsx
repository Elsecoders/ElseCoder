import React from 'react';
import './Parallax.css';

const ParallaxComponent = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-background" />
      <div className="parallax-content">
        <h1 className="parallax-text">WHERE <span style={{color:"#ea5a1b"}}>ALGORITHM </span>MEETS IMAGINATIONS</h1>
      </div>
    </div>
  );
};

export default ParallaxComponent;
