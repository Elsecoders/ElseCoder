import React from 'react';
import './CustomReactCMS.css';
import Navs from '../../../../../Components/Navbar/Navs';
import Footer from '../../../../../Components/footer/Footer';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GetInTouch from "../../../../../Components/body/GetInTouch/GetInTouch";
const CustomReactCMS = () => {

  const cardsData = [
    { 
      
      title: "Content Management",
      text: "Our Custom React CMS Service offers precision control. Seamlessly create, edit, and organize content with tailored solutions that harness the power of React.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Template Creation",
      text: "Design custom templates with the power of React, delivering visually stunning and engaging layouts. Elevate your content management to new heights, creating a unique digital experience that resonates with your brand.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Page Management",
      text: "Seamlessly create, organize, and update web pages using the strength of React. Enjoy intuitive controls and dynamic layouts that ensure your online presence remains impactful, responsive, and aligned with your unique vision.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Custom Development",
      text: "Leverage advanced customization for your web applications, achieving seamless functionality and exceptional user experiences. Elevate your digital presence with bespoke development that aligns precisely with your vision and goals.",
      imageSrc: "/public/Images/2.png",
    },
  
  ];
  return (
    <>
    <Navs />
    <div className="wordpressSlider mt-2">
      <div className="wordpressImg">
        <img src="/Images/SliderImg/slider.jpg" alt="Slider" />
      </div>
      <div className="wordpresscontent">
        <h1>
          <span style={{ color: "black" }}>{`<`}</span>
          <span style={{ color: "#2CA3CC" }}>{`Tailored React`}</span>
          <span style={{ color: "#EA5A1B" }}>{`CMS Solutions`}</span>
          <span style={{ color: "black" }}>{`/>`}</span>
        </h1>
        <h5>
        Empowering Content Management
        </h5>
        <h1 />
      </div>
    </div>

    <div className="wordpres-Boxes m-5">
      <Row xs={1} md={3} className="g-4">
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card style={{height:"270px"}}>
              <Card.Img variant="top" src={card.imageSrc} style={{height:"170px", width:"160px",marginTop:"-40px"}}/>
              <Card.Body>
                <Card.Title style={{marginTop:"-40px", fontWeight:"800"}}>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    <div>
      <GetInTouch/>
    </div>
    <Footer />
  </>
  );
}

export default CustomReactCMS;
