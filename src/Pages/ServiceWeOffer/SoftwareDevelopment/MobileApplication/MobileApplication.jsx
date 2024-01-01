import React from "react";
import "./MobileApplication.css";
import Navs from "../../../../../Components/Navbar/Navs";
import Footer from "../../../../../Components/footer/Footer";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const MobileApplication = () => {
  const boxData = [
    {
      title: "Wordpress Setup",
      text: "From domain registration and hosting configuration to theme installation and essential plugin setup, our experts guide you through the process, enabling you to focus on crafting captivating content and engaging experiences for your visitors.",
      
    },
    {
      title: "Theme Customization",
      text: "Tailoring your website to reflect your unique vision and brand identity is effortless with our expert assistance. We go beyond the basics, personalizing every aspect of your chosen WordPress theme - from layout and color schemes to fonts and interactive elements.",
      bulletPoints: [
        "Bullet point 1",
        "Bullet point 2",
        "Bullet point 3"
      ]
    },
  ];
  const exploreData=[
    {
      title: "Theme Customization",
      text: "Tailoring your website to reflect your unique vision and brand identity is effortless with our expert assistance. We go beyond the basics, personalizing every aspect of your chosen WordPress theme - from layout and color schemes to fonts and interactive elements.",
    },
    {
      title: "Theme Customization",
      text: "Tailoring your website to reflect your unique vision and brand identity is effortless with our expert assistance. We go beyond the basics, personalizing every aspect of your chosen WordPress theme - from layout and color schemes to fonts and interactive elements.",
    },
  ]
  return (
    <>
      <Navs />
      <div className="MobileApplicationSlider mt-2">
        <div className="MobileApplicationImg">
          <img src="/Images/SliderImg/slider.jpg" alt="Slider" />
        </div>
        <div className="MobileApplicationcontent">
          <h1 style={{fontSize:'3.9rem'}}>
            <span style={{ color: "black" }}></span>
            <span style={{ color: "black" }}>{`Transforming`}</span>
            <span style={{ color: "#EA5A1B" }}> {`Ideas `}</span>
            <span style={{ color: "black" }}>into Apps</span>
          </h1>
          <h3 style={{fontSize:'x-large'}}>
            Apps that Amaze, Experiences that Engage - Beyond Apps, We Deliver
            Experiences. Our agile, responsive, and scalable mobile app
            development accelerates your competitive edge.
          </h3>
          <h1 />
        </div>
      </div>
      <div className="ProductDescriptionMobileApplication ">
        <div className="MobileApplicationContent">
          <h2 style={{ color: "#000" , textAlign:"left" , fontSize:"2rem"}}>
            Turning Ideas into <span style={{ color: "#EA5A1B" }}> {`Functional Mobile Apps`}</span>
          </h2>
          <p style={{ textAlign:"left" , fontSize:"15px"}}>
            Experience excellence in mobile app development with our
            cutting-edge services. We specialize in transforming ideas into
            fully functional, user-centric apps that drive engagement and
            deliver seamless experiences. Our skilled team crafts solutions that
            cater to your unique business needs, ensuring fast development,
            responsiveness, and scalability. Stay ahead of the competition with
            our expert mobile app development that brings innovation to your
            fingertips.
          </p>
        </div>
        <div className="MobileApplication-Img">
          <Image src="/public/Images/2.png" style={{height:"400px", }}></Image>
        </div>
      </div>
      {/* <div className="MobileApplicationExplore mt-5" style={{backgroundColor:"rgb(248, 248, 248)", height:"300px"}}>
<div className="ExploreContent" style={{margin:"40px", textAlign:"center"}}>
    <h2>Explore Our Services in Mobile App Development</h2>
    <p>Crafting mobile experiences through our comprehensive development services.</p>
    <Row xs={1} md={2} className="g-4">
      {exploreData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
               {card.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
</div>
      </div> */}
      {/* <div className="MobileApplicationBox m-4">
        <div className="MobileApplicationBoxHeading">
          <h2>How may our assistance serve you?</h2>
          <p>
            Delivering Innovative App Development for Enhanced User Experiences.
          </p>
        </div>
        <div className="MobileApplicationboximg" >
          <Row xs={1} md={2} className="">
            {boxData.map((card, idx) => (
              <Col key={idx}>
                <Card style={{ height: "270px", width: "320px" }}>
              
                  <Card.Body>
                    <Card.Title
                      style={{ marginTop: "-40px", fontWeight: "800" }}
                    >
                      {card.title}
                    </Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default MobileApplication;
