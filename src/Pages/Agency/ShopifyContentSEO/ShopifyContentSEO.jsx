import React from 'react';
import './ShopifyContentSEO.css';
import Navs from '../../../../Components/Navbar/Navs';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "../../../../Components/footer/Footer";
import GetInTouch from "../../../../Components/body/GetInTouch/GetInTouch";

const ShopifyContentSEO = () => {
  return (
    <>
     <div>
      <Navs/>
      <div className="shopify-content-seo-main mt-4">

      <div className="seo-img">
          <img src="/Public/Images/Contact-us/contactUs-img.jpg" alt="" />
        </div> 
               <div className="seo-content">
        <h1 class="seo-custom-heading">
        Expert 
        <span class="seo-color-theme"> Shopify SEO </span> Services </h1>
        <p className='shopify-seo-para'>Unlock the full potential of your e-commerce empire with our tailored, results-driven Shopify SEO services. We specialize in optimizing your online store for search engines, ensuring that your products and brand stand out in a crowded digital marketplace.</p>
        </div>
       
      </div>
      <div class="my-4 text-center w-100 ">
        <h2 class="fw-bolder fs-1">What you can expect from our Shopify SEO services</h2></div>

        <div className="seo-cards">
        <Row xs={1} md={3} className="g-4" style={{margin :"40px 60px 0px 60px" }}>
      {Array.from({ length: 5 }).map((_, idx) => (
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

    <Footer/>
    </>
   
  );
}

export default ShopifyContentSEO;
