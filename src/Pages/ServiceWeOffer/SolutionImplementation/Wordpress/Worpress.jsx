import React, { useEffect } from "react";
import "./Wordpress.css";
import Navs from "../../../../../Components/Navbar/Navs";
import Footer from "../../../../../Components/footer/Footer";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GetInTouch from "../../../../../Components/body/GetInTouch/GetInTouch";

 
const Worpress = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  const cardsData = [
    { 
      
      title: "Wordpress Setup",
      text: "From domain registration and hosting configuration to theme installation and essential plugin setup, our experts streamline the process. This empowers you to focus on crafting captivating content and engaging experiences for your visitors, while we take care of the technical intricacies.",
      imageSrc: "public/Images/SolutionImplementation/Wordpress/WordpressSetup.jpg",
    },
    {
      title: "Theme Customization",
      text: "Effortlessly tailor your website to mirror your unique vision and brand identity with our expert assistance. Going beyond the basics, we personalize every aspect of your chosen WordPress theme, from layout and color schemes to fonts and interactive elements.",
      imageSrc: "public/Images/SolutionImplementation/Wordpress/WordpressThemeSetup.png",
    },
    {
      title: "Content Migration",
      text: "Whether you're transitioning to a new domain, upgrading your website, or changing hosting providers, our experts ensure a seamless transfer of all your valuable content. Your transition will be handled with precision and care to preserve the integrity of your digital assets.",
      imageSrc: "public/Images/SolutionImplementation/Wordpress/ContentMigration.png",
    },
    {
      title: "Plugin Integration",
      text: "Tailoring your website to reflect your unique vision and brand identity is effortless with our expert assistance. We go beyond the basics, personalizing every aspect of your chosen WordPress theme - from layout and color schemes to fonts and interactive elements.",
      imageSrc: "public/Images/SolutionImplementation/Wordpress/PluginIntegration.png",
    },
    {
      title: "Maintenance & Support",
      text: "Keeping up with your WordPress maintenance checklist can be a hassle, but it's a necessary aspect of managing a successful online presence. If you're running a business on a WordPress website, it's time to let our experts handle maintenance and other routine tasks. This way, you can focus on growing your business while we take care of the technical details.",
      imageSrc: "public/Images/SolutionImplementation/Wordpress/MaintenanceSupport.jpg",
    },
  ];

  return (
    <>
      <Navs />
      <div className="wordpressSlider mt-2">
        <div className="wordpressImg">
          <img src="public/Images/SolutionImplementation/Wordpress/wordpress.png" alt="Slider" />
        </div>
        <div className="wordpresscontent">
          <h1 style={{fontSize:"3.9rem"}}>
            <span style={{ color: "black" }}></span>
            <span style={{ color: "#2CA3CC" }}>{`Wordpress`}</span> 
            <span style={{ color: "#EA5A1B" }}> {`Development`}</span>
            <span style={{ color: "black" }}></span>
          </h1>
          <h5 style={{fontSize:"x-large"}}>
          Enhance Your Online Presence
          </h5>
          <h1 />
        </div>
      </div>

      <div className="wordpress-Boxes m-5">
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
};

export default Worpress;
