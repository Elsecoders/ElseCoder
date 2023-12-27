import React from 'react';
import './CustomSoftwareDevelopment.css';
import Navs from '../../../../../Components/Navbar/Navs';
import Footer from '../../../../../Components/footer/Footer';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const CustomSoftwareDevelopment = () => {
  const boxData=[
    { 
      
      title: "Wordpress Setup",
      text: "From domain registration and hosting configuration to theme installation and essential plugin setup, our experts guide you through the process, enabling you to focus on crafting captivating content and engaging experiences for your visitors.",
      imageSrc: "/public/Images/2.png",
    },
    {
      title: "Theme Customization",
      text: "Tailoring your website to reflect your unique vision and brand identity is effortless with our expert assistance. We go beyond the basics, personalizing every aspect of your chosen WordPress theme - from layout and color schemes to fonts and interactive elements.",
      imageSrc: "/public/Images/2.png",
    },
  ]

   
  return (
    <>
    <Navs/>
    <div className="CustomSoftwareDevelopmentSlider mt-2">
        <div className="CustomSoftwareDevelopmentImg">
          <img src="/Images/SliderImg/slider.jpg" alt="Slider" />
        </div>
        <div className="CustomSoftwareDevelopmentcontent">
          <h1>
            <span style={{ color: "black" }}>{`<`}</span>
            <span style={{ color: "#2CA3CC" }}>{`Expert UI/UX`}</span>
            <span style={{ color: "#EA5A1B" }}>{`Design Solutions`}</span>
            <span style={{ color: "black" }}>{`/>`}</span>
          </h1>
          <h3>
            Unlock the full potential of your digital presence with our expert
            UI/UX Design service.
          </h3>
          <h1 />
        </div>
      </div>
      <div className="ProductDescriptionCustomSoftwareDevelopment ">
        <div className="CustomSoftwareDevelopmentContent">
          <h3 style={{ color: "#000" }}>
            Comprehensive UI/UX Design Services for Crafting Exceptional Digital
            Experiences that Captivate, Engage, and Convert
          </h3>
          <p>
            Our comprehensive UI/UX Design services are dedicated to the art of
            creating exceptional digital experiences that go beyond aesthetics.
            With a strategic blend of user-centered design principles and
            creative innovation, we meticulously craft interfaces that captivate
            your audience, engage their senses, and seamlessly guide them
            towards conversion. Our team of seasoned designers and usability
            experts collaborates closely to understand your brand's unique
            identity, goals, and target audience. We begin by conceptualizing
            user journeys and architecting intuitive interfaces that prioritize
            functionality and ease of navigation. From wireframing to
            prototyping, every step is finely tuned to align with your business
            objectives. We pay meticulous attention to every pixel and
            interaction, ensuring that your digital presence resonates with your
            users. Visual elements are harmoniously integrated with interactive
            components to elicit a memorable and immersive experience. By
            combining aesthetics with usability, we empower your users to
            effortlessly engage with your platform.
          </p>
        </div>
        <div className="CustomSoftwareDevelopment-Img">
          <Image src='/public/Images/2.png'></Image>
        </div>
       </div>
       <div className='CustomSoftwareDevelopmentBox m-4'>
          <div className='CustomSoftwareDevelopmentBoxHeading'>
            <h2>Innovative Solutions For Reliable Growth</h2>
          </div>
          <div className='CustomSoftwareDevelopmentboximg'>
          <Row xs={1} md={2} className="">
      {boxData.map((card, idx) => (
        <Col key={idx}>
          <Card style={{height:"270px", width:"320px"}}>
            <Card.Img variant="top"  src={card.imageSrc} style={{height:"170px", width:"160px",marginTop:"-40px"}} />
            <Card.Body>
              <Card.Title style={{marginTop:"-40px", fontWeight:"800"}}>{card.title}</Card.Title>
              <Card.Text>
              {card.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
          </div>
       </div>
    <Footer/>
    </>
  );
}

export default CustomSoftwareDevelopment;
