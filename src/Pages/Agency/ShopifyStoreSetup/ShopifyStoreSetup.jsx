import React from 'react';
import './ShopifyStoreSetup.css';
import Navs from '../../../../Components/Navbar/Navs';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../../../../Components/footer/Footer';
import GetInTouch from '../../../../Components/body/GetInTouch/GetInTouch';

const ShopifyStoreSetup = () => {
  return (
    <>
   <div>
      <Navs/>
      <div className="shopify-content-StoreSetup-main mt-4">

      <div className="StoreSetup-img">
          <img src="public/Images/SolutionImplementation/Shopify/ShopifyStoreSetup.jpg" alt="" />
        </div> 
               <div className="StoreSetup-content">
        <h1 class="StoreSetup-custom-heading">
        Setup Your 
        <span class="StoreSetup-color-theme"> Shopify Store </span></h1>
        <p className='shopify-StoreSetup-para'>Welcome to the world of seamless, stress-free online selling! Unlock the full potential of your business with our Shopify Store Setup Services, where we transform your e-commerce vision into a captivating reality.</p>
        </div>
       
      </div>
      <div class="my-4 text-center w-100 ">
        <h2 class="fw-bolder fs-1">What we Offer</h2></div>

        <div className="StoreSetup-cards">
        <Row xs={1} md={3} className="g-4" style={{margin :"40px 60px 0px 60px" }}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{backgroundColor:"#eeeeee"}}>
            <Card.Img style={{width: "100px" , height:"100px" , marginBottom:"-20px"}} variant="top" src="/public/Images/2.png" />
            <Card.Body >
              <Card.Title style={{color:'black' , fontWeight:"700"}}>Card title</Card.Title>
              <Card.Text style={{color:"#777"}}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>       
        </div>
        
    </div>
        <GetInTouch/>   
    
    <Footer />
    </>
  );
}

export default ShopifyStoreSetup;

