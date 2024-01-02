import React from "react";
import "./MobileApplication.css";
import Navs from "../../../../../Components/Navbar/Navs";
import Footer from "../../../../../Components/footer/Footer";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const MobileApplication = () => {
  const dataBox = [
    {
      imageSrc: "/public/Images/serviceweoffer/MobileApplication/hybridMobileApplogo.png",
      title: "Hybrid Mobile App Development",
      text: "Unlock the full potential of mobile technology with our native app development expertise.",
    },
    {
      imageSrc: "/public/Images/serviceweoffer/MobileApplication/nativeMobileApplogo.png",
      title: "Hybrid Mobile App Development",
      text: "Elevate your digital presence with our hybrid mobile app development, seamlessly blending.",
    },
  ];

  const dataBbox2 =[
    {
      title:"Android App Development",
      paragraph:"Utilizing cutting-edge technology to empower businesses in establishing their footprint across diverse Android devices and platforms.",
      text:["• Android Mobile App Development ",
      " • Android TV App Development ",
      " • Android Tablet App Development ",
      " • Android Wear App Development ",
  ]},
    {
      title:"IOS App Development",
      paragraph:"With our comprehensive expertise and leading-edge technologies, we offer everything required to create IOS apps that are feature-rich and scalable.",
      text:[
        "• iPhone App Development. ",
        " • iPad App Development " ,
        "• Apple Watch App Development ",
        "• Apple TV App Development ",
   ] }
  ]
  return (
    <>
      <Navs />
      <div className="MobileApplicationSlider mt-2">
        <div className="MobileApplicationImg">
          <img src="/Images/SliderImg/slider.jpg" alt="Slider" />
        </div>
        <div className="MobileApplicationcontent">
          <h1 style={{ fontSize: "3.9rem" }}>
            <span style={{ color: "black" }}></span>
            <span style={{ color: "black" }}>{`Transforming`}</span>
            <span style={{ color: "#EA5A1B" }}> {`Ideas `}</span>
            <span style={{ color: "black" }}>into Apps</span>
          </h1>
          <h3 style={{ fontSize: "x-large" }}>
            Apps that Amaze, Experiences that Engage - Beyond Apps, We Deliver
            Experiences. Our agile, responsive, and scalable mobile app
            development accelerates your competitive edge.
          </h3>
          <h1 />
        </div>
      </div>
      <div className="ProductDescriptionMobileApplication ">
        <div className="MobileApplicationContent">
          <h2 style={{ color: "#000", textAlign: "left", fontSize: "2rem" }}>
            Turning Ideas into{" "}
            <span style={{ color: "#EA5A1B" }}>
              {" "}
              {`Functional Mobile Apps`}
            </span>
          </h2>
          <p style={{ textAlign: "left", fontSize: "15px" }}>
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
          <Image src="/public/Images/2.png" style={{ height: "400px" }}></Image>
        </div>
      </div>

      <div
        className="mb-4 mt-4"
        style={{ backgroundColor: "rgba(243, 243, 243, 0.688)" }}
      >
        <div
          className="Mobile-app-development-head"
          style={{ textAlign: "center" }}
        >
          <h1 style={{ color: "black" }}>
            Explore Our Services in{" "}
            <span style={{ color: "#EA5A1B" }}>Mobile App Development</span>
          </h1>
          <p>
            Crafting mobile experiences through our comprehensive development
            services.
          </p>
        </div>
        <div className="Mobile-app-development-Box">
          <Row xs={1} md={2} className="g-4 px-4 pe-4 pb-4">
            {dataBox.map((card, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img src={card.imageSrc} style={{height:"70px", width:"70px", padding:"10px"}} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className=" " style={{color:"black", display:"flex",justifyContent:"center", flexWrap:"wrap"}}>
        <div className="" style={{paddingLeft:"40px", paddingRight:"40px"}}>
          <h1 className="">How may our assistance serve you?</h1>
          <p>
            Delivering Innovative App Development for Enhanced User Experiences.
          </p>
        </div>
        <div className="">
        <Row xs={1} md={2} className="g-4 px-4 pe-4 pb-4">
            {dataBbox2.map((card1, idx) => (
              <Col key={idx}>
                <Card style={{ padding:"10px"}}>
                  <Card.Title >{card1.title}</Card.Title>
                  <Card.Body>
                    <Card.Text>{card1.paragraph}</Card.Text>
                    <Card.Text>{card1.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
           </div>
      </div>

      <Footer />
    </>
  );
};

export default MobileApplication;
