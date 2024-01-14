import React, { useEffect } from "react";
import "./ShopifyStoreSetup.css";
import Navs from "../../../../Components/Navbar/Navs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "../../../../Components/footer/Footer";
import GetInTouch from "../../../../Components/body/GetInTouch/GetInTouch";

const ShopifyStoreSetup = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  const datacards = [
    {
      imageSrc:
        "public/Images/SolutionImplementation/Shopify/ShopifyStoreCreation.png",

      // :imageSrc
      //   "public/Images/SolutionImplementation/Shopify/ShopifyStoreCreation.jpg",

      title: "Tailored Store Creation",
      text: "We understand that no two businesses are the same. That's why our expert team crafts a unique, custom Shopify store that perfectly aligns with your brand and vision.",
    },
    {
      imageSrc:
        "public/Images/SolutionImplementation/ShopifyTheme/ShopifyTheme.png",
      title: "Stunning Designs",
      text: "Our design wizards ensure that your store is a visual masterpiece, enticing customers with an irresistible, user-friendly interface.",
    },
    {
      imageSrc:
        "public/Images/SolutionImplementation/Shopify/HassleFreeSetup.png",
      title: "Hassle-Free Setup",
      text: "Leave the technicalities to us. We'll handle the setup, configurations, and integration of payment gateways, ensuring a smooth and secure transaction process.",
    },
    {
      imageSrc: "public/Images/SolutionImplementation/Shopify/SEO.png",
      title: "SEO Optimization",
      text: "Your success starts with visibility. Our SEO specialists will optimize your store to rank higher in search engines, boosting your online presence.",
    },
    {
      imageSrc:
        "public/Images/SolutionImplementation/Shopify/MobileResposivness.png",

      title: "Mobile Responsiveness",
      text: "In today's mobile-driven world, we make sure your store looks and works flawlessly on all devices, keeping your customers engaged wherever they are.",
    },
    {
      imageSrc:
        "public/Images/SolutionImplementation/Shopify/ProductUpload.png",
      title: "Product Upload",
      text: "Save time and effort. Our team can upload your products, complete with descriptions, images, and pricing, allowing you to focus on what you do best.",
    },
  ];
  return (
   <>
    <div>
        <Navs />
        <div className="shopify-content-StoreSetup-main mt-4">
          <div className="StoreSetup-img">
          <img
            src="public/Images/SolutionImplementation/Shopify/ShopifyStoreSetup.jpg"
            alt=""
          />
          </div>
          <div className="StoreSetup-content">
            <h1 className="StoreSetup-custom-heading">
              Setup Your
              <span className="StoreSetup-color-theme"> Shopify Store </span>
            </h1>
            <p className="shopify-StoreSetup-para">
              Welcome to the world of seamless, stress-free online selling!
              Unlock the full potential of your business with our Shopify Store
              Setup Services, where we transform your e-commerce vision into a
              captivating reality.
            </p>
          </div>
        </div>
        <div className="StoreSetup-content">
          <h1 className="StoreSetup-custom-heading">
            Setup Your
            <span className="StoreSetup-color-theme"> Shopify Store </span>
          </h1>
          <p className="shopify-StoreSetup-para">
            Welcome to the world of seamless, stress-free online selling! Unlock
            the full potential of your business with our Shopify Store Setup
            Services, where we transform your e-commerce vision into a
            captivating reality.
          </p>
        </div>
      </div>
      <div className="my-4 text-center w-100 ">
        <h2 className="fw-bolder fs-1">What we Offer</h2>

        <div className="StoreSetup-cards">
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ margin: "40px 60px 0px 60px" }}
          >
            {datacards.map((card, idx) => (
              <Col key={idx}>
                <Card style={{ backgroundColor: "#eeeeee" }}>
                  <Card.Img
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "-20px",
                    }}
                    variant="top"
                    src={card.imageSrc}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "black", fontWeight: "700" }}>
                      {card.title}
                    </Card.Title>
                    <Card.Text style={{ color: "#777" }}>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <GetInTouch />

      <Footer />
      
    
   </>

     
   
  );
};

export default ShopifyStoreSetup;
