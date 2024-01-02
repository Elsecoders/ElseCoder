import React from 'react';
import './ShopifyThemeCustomization.css';
import Navs from '../../../../Components/Navbar/Navs';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "../../../../Components/footer/Footer";
import GetInTouch from "../../../../Components/body/GetInTouch/GetInTouch";

const ShopifyThemeCustomization = () => {
  const datacards = [
    {
      imageSrc: "/public/Images/2.png",
      title: "Tailored Design",
      text: "We'll craft a custom look and feel for your Shopify store, ensuring it aligns perfectly with your brand identity and values",
    },
    {
      imageSrc: "/public/Images/2.png",
      title: "Mobile-Optimized",
      text: "With the majority of shoppers browsing on mobile devices, we'll make sure your site is responsive and looks exceptional on all screens.",
    },
    {
      imageSrc: "/public/Images/2.png",
      title: "Enhanced User Experience",
      text: "We optimize navigation, page load times, and user interfaces to keep your customers engaged and satisfied.",
    },
    {
      imageSrc: "/public/Images/2.png",
      title: "Conversion-Boosting Features",
      text: "Implement the latest eCommerce best practices to increase sales, from intuitive product pages to a seamless checkout process.",
    },
    {
      imageSrc: "/public/Images/2.png",
      title: "SEO Optimization",
      text: "Improve your store's search engine visibility to attract more organic traffic and potential customers.",
    },
   
  ];
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
{datacards.map((card, idx) => (
  <Col key={idx}>
    <Card style={{backgroundColor:"#eeeeee"}}>
      <Card.Img style={{width: "100px" , height:"100px" , marginBottom:"-20px"}} variant="top" src={card.imageSrc} />
      <Card.Body >
        <Card.Title style={{color:'black' , fontWeight:"700"}}> {card.title}</Card.Title>
        <Card.Text style={{color:"#777"}}>
        {card.text}
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
