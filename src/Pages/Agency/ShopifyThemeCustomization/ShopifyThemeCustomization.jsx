import React from 'react';
import './ShopifyThemeCustomization.css';
import Navs from '../../../../Components/Navbar/Navs';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "../../../../Components/footer/Footer";
import GetInTouch from "../../../../Components/body/GetInTouch/GetInTouch";

const ShopifyThemeCustomization = () => {
  return (
    <>    
    <div>
      <Navs/>
      <div className="shopify-content-theme-main mt-4">

<div className="shopify-theme-img">
    <img src="public/Images/SolutionImplementation/ShopifyTheme/ShopifyTheme.png" alt="" />
  </div> 
         <div className="shopify-theme-content">
  <h1 class="shopify-theme-custom-heading">
  Expert 
  <span class="shopify-theme-color-theme"> Shopify </span> Theme Customization</h1>
  <p className='shopify-theme-para'>Our team of skilled designers and developers is here to transform your Shopify store into a visually stunning and user-friendly masterpiece.</p>
  </div>
 
</div>
<div class="my-4 text-center w-100 ">
  <h2 class="fw-bolder fs-1">What We Offer</h2></div>

  <div className="shopify-theme-cards">
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

export default ShopifyThemeCustomization;
