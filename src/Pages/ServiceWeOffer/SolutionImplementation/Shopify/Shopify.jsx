import React from 'react';
import './Shopify.css';
import Navs from '../../../../../Components/Navbar/Navs';
import Footer from '../../../../../Components/footer/Footer';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GetInTouch from "../../../../../Components/body/GetInTouch/GetInTouch";
const Shopify = () => {
  const cardsData = [
    { 
      
      title: "Shopify Store Setup",
      text: "Launch Your Shopify Storefront with Ease! Quick Setup Services for a Seamless Online Presence.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Themes Customization",
      text: "Our Themes Customization Service offers unparalleled design refinement. Elevate your brand with tailor-made themes, captivating visuals, and seamless user experiences that leave a lasting impression.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Shopify Integration",
      text: "Integrate third-party tools, apps, and systems to optimize your online store's performance and create a unified and efficient e-commerce ecosystem",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Custom Shopify Development",
      text: "Our Custom Shopify Development Service brings your vision to life. From tailored themes to advanced functionalities, we create a one-of-a-kind online store that resonates with your brand.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Shopify App Development",
      text: "Elevate your store's capabilities with tailor-made apps that enhance functionality, engage customers, and drive growth.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Shopify Migration",
      text: "Our Shopify Migration Service ensures a smooth shift. Seamlessly move your e-commerce store, preserving data, products, and customer information. Experience a seamless transition without disruption",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Maintenance & Support",
      text: "Ensures your store's consistent performance. Rely on our expert team to handle updates, security, and technical upkeep, so you can focus on growing your business.",
      imageSrc: "/public/Images/2.png",
    },
  ];
  return (
    <>
    <Navs />
    <div className="ShopifySlider mt-2">
      <div className="ShopifyImg">
        <img src="/Images/SliderImg/slider.jpg" alt="Slider" />
      </div>
      <div className="Shopifycontent">
        <h1 style={{fontSize:"3.9rem"}}>
          <span style={{ color: "black" }}></span>
          <span style={{ color: "#2CA3CC" }}>{`Comprehensive Shopify`}</span>
          <span style={{ color: "#EA5A1B" }}> {`Solutions`}</span>
          <span style={{ color: "black" }}></span>
        </h1>
        <h5 style={{fontSize:"x-large"}}>
        Empowering Your Ecommerce Success
        </h5>
        <h1 />
      </div>
    </div>

    <div className="shopify-Boxes m-5">
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

export default Shopify;
