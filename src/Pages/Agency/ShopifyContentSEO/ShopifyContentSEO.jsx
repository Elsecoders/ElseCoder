import React from 'react';
import './ShopifyContentSEO.css';
import Navs from '../../../../Components/Navbar/Navs';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "../../../../Components/footer/Footer";
import GetInTouch from "../../../../Components/body/GetInTouch/GetInTouch";

const ShopifyContentSEO = () => {
  const datacards = [
    {
      imageSrc: "public/Images/SolutionImplementation/ShopifySEO/EnhancedVisibility.png",
      title: "Enhanced Visibility",
      text: "Watch your website rise through the search engine ranks, so you're visible to your target audience when they're ready to make a purchase.",
    },
    {
      imageSrc: "public/Images/SolutionImplementation/ShopifySEO/IncreasedTraffic.png",
      title: "Increased Traffic",
      text: "More clicks mean more potential customers. Our SEO efforts will boost your website's traffic, resulting in higher conversion rates",
    },
    {
      imageSrc: "public/Images/SolutionImplementation/ShopifySEO/BetterROI.png",
      title: "Better ROI",
      text: "With targeted, organic traffic flowing to your Shopify store, you'll enjoy a higher return on investment (ROI) as your sales and revenue soar.",
    },
    {
      imageSrc: "public/Images/SolutionImplementation/ShopifySEO/CustomizedStrategy.png",
      title: "Customized Strategies",
      text: "We understand that every Shopify store is unique, so we create a custom SEO strategy tailored to your specific business goals.",
    },
    {
      imageSrc: "public/Images/SolutionImplementation/ShopifySEO/TransparentReporting.png",
      title: "Transparent Reporting",
      text: "You'll receive regular reports on the progress of your SEO campaign, so you can see the tangible results of our efforts.",
    },
   
  ];
  return (
    <>
     <div>
      <Navs/>
      <div className="shopify-content-seo-main mt-4">

      <div className="seo-img">
          <img src="public/Images/SolutionImplementation/ShopifySEO/SEO.png" alt="" />
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
      {datacards.map((card, idx) => (
        <Col key={idx}>
          <Card style={{backgroundColor:"#eeeeee"}}>
            <Card.Img style={{width: "100px" , height:"100px" , marginBottom:"-20px"}} variant="top" src={card.imageSrc} />
            <Card.Body >
              <Card.Title style={{color:'black' , fontWeight:"700"}}>{card.title}</Card.Title>
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

export default ShopifyContentSEO;
