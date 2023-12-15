import React from "react";
import "./Introduction.css";
import Card from 'react-bootstrap/Card';

const Introduction = () => {
  return (
    <>
      <div className="intro-Dock">
        <div className="introduction">
          <div className="heading">
            <h1>OUR IMPRESSION.</h1>
          </div>
          <div className="paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              tempore modi corrupti, nam inventore odio quam accusantium
              repellendus quibusdam consectetur, provident eos officiis,
              doloremque iusto ullam nostrum aut quis sapiente. Quidem rem
              impedit tenetur consequuntur voluptatibus, architecto consequatur
              quasi eos perferendis. Consectetur incidunt autem dolorem
              provident earum! Assumenda repudiandae numquam, alias repellat
              adipisci praesentium consequatur nemo laudantium hic vitae
            </p>
          </div>
        </div>
        <div className="evalution mt-5">
          <div className="years">
            <h1 style={{color:"#2CA3CC"}}>
              5 <span className="" style={{ fontSize: "12px", color: "#777" }}>Years</span>
            </h1>
          </div>
          <div className="Industries">
            <h1 style={{color:"#2CA3CC"}}>
              6 <span className="" style={{ fontSize: "12px", color: "#777" }}>Industries</span>
            </h1>
          </div>
          <div className="Brands">
            <h1 style={{color:"#2CA3CC"}}>
              4 <span className="" style={{ fontSize: "12px", color: "#777" }}>Brands</span>
            </h1>
          </div>
          <div className="Technology">
            <h1 style={{color:"#2CA3CC"}}>
              20+ <span className="" style={{ fontSize: "12px", color: "#777" }}>Technologies</span>
            </h1>
          </div>
          
        </div>
        <div className="projects mt-5 ">
        <Card className="jbsaeed" style={{ width: '10rem', height:"10rem" }}>
      <Card.Img variant="center" src="/Images/2.png" style={{ width: '10rem', height:"10rem" }} />
       </Card>
       <Card className="jbsaeed" style={{ width: '10rem', height:"10rem" }}>
      <Card.Img variant="center" src="/Images/2.png" style={{ width: '10rem', height:"10rem" }} />
       </Card>
       <Card className="jbsaeed" style={{ width: '10rem', height:"10rem" }}>
      <Card.Img variant="center" src="/Images/2.png" style={{ width: '10rem', height:"10rem" }} />
       </Card>
       <Card className="jbsaeed" style={{ width: '10rem', height:"10rem" }}>
      <Card.Img variant="center" src="/Images/2.png" style={{ width: '10rem', height:"10rem" }} />
       </Card>
        </div>
        <div className="projects mt-5">
        <Card className="jbsaeed" style={{ width: '10rem', height:"10rem" }}>
      <Card.Img variant="center" src="/Images/2.png" style={{ width: '10rem', height:"10rem" }} />
       </Card>
       <Card className="jbsaeed" style={{ width: '10rem', height:"10rem" }}>
      <Card.Img variant="center" src="/Images/2.png" style={{ width: '10rem', height:"10rem" }} />
       </Card>
       <Card className="jbsaeed" style={{ width: '10rem', height:"10rem" }}>
      <Card.Img variant="center" src="/Images/2.png" style={{ width: '10rem', height:"10rem" }} />
       </Card>
       <Card className="jbsaeed" style={{ width: '10rem', height:"10rem" }}>
      <Card.Img variant="center" src="/Images/2.png" style={{ width: '10rem', height:"10rem" }} />
       </Card>
        </div>
      </div>
    </>
  );
};

export default Introduction;
