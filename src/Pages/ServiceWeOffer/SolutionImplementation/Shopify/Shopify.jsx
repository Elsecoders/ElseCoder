import React from "react";
import "./Shopify.css";
import Navs from "../../../../../Components/Navbar/Navs";
import Footer from "../../../../../Components/footer/Footer";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GetInTouch from "../../../../../Components/body/GetInTouch/GetInTouch";
const Shopify = () => {
  const cardsData = [
    {
      title: "Shopify Store Setup",
      text: "Get Started with Your Shopify Store in No Time! Start and Setup Your Services for a Robust Online Presence.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Customized Theme Solutions",
      text: "Immerse your brand in refined design with our Themes Customization Service. Experience a transformative journey as we tailor themes to perfection, offering captivating visuals and seamless user experiences that make a lasting impact.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Shopify Integration",
      text: "Optimize your online store's performance by seamlessly integrating third-party tools, apps, and systems. Create a unified and efficient e-commerce ecosystem that streamlines operations and enhances user satisfaction.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Custom Shopify Development",
      text: "Bring your vision to life with our Custom Shopify Development Service. From crafting tailored themes to implementing advanced functionalities, we sculpt a unique online store that resonates authentically with your brand.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Shopify App Development",
      text: "Enhance your store's capabilities with custom-designed apps that elevate functionality, engage customers, and fuel business growth. Experience the power of tailor-made solutions designed to specifically meet your store's unique requirements.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Shopify Migration",
      text: "Embark on a disruption-free journey with our Shopify Migration Service. Effortlessly transition your e-commerce store, safeguarding essential data, products, and customer information. Enjoy a smooth shift without any interruption to your operations.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Maintenance & Support",
      text: "Ensure your store's consistent performance with our expert Maintenance and Support services. Rely on our team to handle updates, security, and technical upkeep, allowing you to channel your focus into growing your business without the worry of technical intricacies.",
      imageSrc: "/public/Images/2.png",
    },
  ];
  return (
    <>
      <Navs />
      <div className="ShopifySlider mt-2">
        <div className="ShopifyImg">
          <img
            src="public/Images/SolutionImplementation/Shopify/ShopifyStoreSetup.jpg"
            alt="Slider"
          />
        </div>
        <div className="Shopifycontent">
          <h1 style={{ fontSize: "3.9rem" }}>
            <span style={{ color: "black" }}></span>
            <span style={{ color: "#2CA3CC" }}>{`Comprehensive Shopify`}</span>
            <span style={{ color: "#EA5A1B" }}> {`Solutions`}</span>
            <span style={{ color: "black" }}></span>
          </h1>
          <h5 style={{ fontSize: "x-large" }}>
            Empowering Your Ecommerce Success
          </h5>
          <h1 />
        </div>
      </div>

      <div className="shopify-Boxes m-5">
        <Row xs={1} md={3} className="g-4">
          {cardsData.map((card, idx) => (
            <Col key={idx}>
              <Card style={{ height: "270px" }}>
                <Card.Img
                  variant="top"
                  src={card.imageSrc}
                  style={{
                    height: "170px",
                    width: "160px",
                    marginTop: "-40px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ marginTop: "-40px", fontWeight: "800" }}>
                    {card.title}
                  </Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
};

export default Shopify;
