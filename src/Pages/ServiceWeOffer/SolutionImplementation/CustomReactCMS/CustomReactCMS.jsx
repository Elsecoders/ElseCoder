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
      
      title: "Content Administration",
      text: "Experience precision control with our Custom React CMS Service. Effortlessly generate, modify, and organize content using tailored solutions that tap into the dynamic capabilities of React.",
      imageSrc: "/public/Images/2.png",

    },
    {
      title: "Template Design",
      text: "Design custom templates with the power of React, delivering visually stunning and engaging layouts. Elevate your content management to new heights, creating a unique digital experience that resonates with your brand.",
      imageSrc: "public/Images/SolutionImplementation/CMS/TemplateCreation.png",
    },
    {
      title: "Page Control",
      text: "Utilize the robust features of React to seamlessly generate, organize, and refresh web pages. Revel in intuitive controls and dynamic layouts, ensuring your online footprint remains impactful, responsive, and in harmony with your unique vision.",
      imageSrc: "public/Images/SolutionImplementation/CMS/PageManagement.png",
    },
    {
      title: "Tailored Development",
      text: "Opt for advanced customization in your web applications, achieving flawless functionality and delivering extraordinary user experiences. Elevate your digital presence with tailor-made development solutions that align precisely with your vision and aspirations.",
      imageSrc: "public/Images/SolutionImplementation/CMS/CustomDevelopment.png",
    },
  
  ];
  return (
    <>
    <Navs />
    <div className="wordpressSlider mt-2">
      <div className="wordpressImg">
        <img src="public/Images/SolutionImplementation/CMS/CMS.jpg" alt="Slider" />
      </div>
      <div className="wordpresscontent">
        <h1 style={{fontSize:"3.9rem"}}>
          <span style={{ color: "black" }}></span>
          <span style={{ color: "#000000" }}>{`Tailored React`}</span>
          <span style={{ color: "#EA5A1B" }}> {`CMS Solutions`}</span>
          <span style={{ color: "black" }}></span>
        </h1>
        <h5 style={{fontSize:"x-large"}}>
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
