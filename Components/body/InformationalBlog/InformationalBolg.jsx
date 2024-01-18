import React, { useState, useEffect } from "react";
import "./informationalBlog.css";

import Card from "react-bootstrap/Card";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const InformationalBolg = () => {
  const [hoveredCards, setHoveredCards] = useState(Array(10).fill(false));

  const handleMouseEnter = (index) => {
    setHoveredCards((prev) => {
      const updatedHoveredCards = [...prev];
      updatedHoveredCards[index] = true;
      return updatedHoveredCards;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredCards((prev) => {
      const updatedHoveredCards = [...prev];
      updatedHoveredCards[index] = false;
      return updatedHoveredCards;
    });
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cards = [

 
    { img:'/public/Images/InfoblogPages/Ecom/Ecom.jpg',title: 'eCommerce Website', description: 'Elevate sales with a captivating online shopping experience.', link: '/ecommercewebsite-blog' },
    { img:'/public/Images/InfoblogPages/SocialMediaStrategies/socialmediastrategies.jpg',title: 'Social Media Strategies', description: 'Tailored strategies for maximum social media impact.', link: '/socialmediastrategies-blog' },
    { img:'/public/Images/InfoblogPages/WebsiteExperience/webdesign.png',title: 'Website Experience', description: 'Enhancing user satisfaction with a seamless website journey.', link: '/websiteexperience-blog' },
    { img:'/public/Images/InfoblogPages/SeoKeywordResearch/keywordblg.jpg',title: 'Seo Keyword Research', description: 'Uncover optimal keywords for enhanced search visibility.', link: '/seokeywordresearch-blog' },
    { img:'/public/Images/InfoblogPages/Seobacklinkbuilding/backlinkbuilding.jpg',title: 'Seo BackLink Buildings', description: 'Boosting online presence through strategic backlinking.', link: '/backlinkbuildingblog' },
    { img:'/public/Images/InfoblogPages/WebApplication/webapp.jpg',title: 'Web Application ', description: 'Transforming ideas into dynamic and user-friendly web apps.', link: '/web-application-blog' },
    { img:'/public/Images/InfoblogPages/SocialMediaCampaign/socialmedia.jpg',title: 'Social Media Campaign', description: 'Drive engagement with strategic and compelling social content.', link: '#' },
    { img:'/public/Images/InfoblogPages/BackendFramework/backendframe.jpg',title: 'Backend Framework', description: 'Powering seamless operations with robust backend solutions.', link: '/backend-framework-blog' },
    { img:'/public/Images/InfoblogPages/MobileAppDevelopment/mobileapp.jpg',title: 'Mobile App development', description: 'Elevate user satisfaction through a seamless website journey.', link: '/mobile-app-development-blog' },


    // Add more cards as needed with different content
  ];
  return (
    <>
      <div className="InformationalBlog">
        <div className="Info-Blog-heading">
          <h2 style={{ fontWeight: "800" }}>
            Insights to help you stay ahead of change
          </h2>
          <p>Informational Blogs</p>
          <div className="main-countainer">
            <div className="col-12 col-md-3 col-lg-2  card-mini">
              <div className="card-body" style={{alignItems:"center", top:"-120px", position:"relative"}}>
                <img src="/public/Images/InfoblogPages/blg.jpg" style={{width:"45%", aspectRatio:"3/2", objectFit:"contain"}}/>
                <h5 className="card-title" style={{color:"black", fontWeight:"800"}}>Informational Blogs</h5>
                <p className="card-text" style={{fontSize:"15px"}}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>

            <div className="mini-card-grid col-13">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`col-8 col-md-4 col-lg-4 mini-card ${hoveredCards[index] ? 'hovered' : ''} ${scrollPosition > 50 ? 'hidden' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="card-content">
          <Card.Img variant="top" src={card.img} style={{width:"45%", aspectRatio:"3/2", objectFit:"contain"}} />
            <h5 className="card-title mt-4" style={{color:"black" , fontWeight:"800"}}>{card.title}</h5>
            <p className="card-text" style={{fontSize:"17px"}}>{card.description}</p>
            <NavLink to={card.link} ><ReadMoreButton /></NavLink>
          </div>
        </div>
      ))}
    </div>

          </div>
          {/* <Card style={{ width: "18rem" }} className="fles">
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  The role of social media in modern marketing strategies
                </Card.Title>
                <Card.Text>
                  The world of marketing has seen a massive transformation over
                  the last few decades, thanks to the advent of social media
                  platforms
                </Card.Text>
                <NavLink to='/socialmediastrategies' ><ReadMoreButton /></NavLink>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  How to improve your website's user experience for better
                  engagement
                </Card.Title>
                <Card.Text>
                  In the present era of digitalization, it is imperative for any
                  business to have a website.
                </Card.Text>
                <NavLink to='/websiteexperience' ><ReadMoreButton /></NavLink>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  How to create a successful e-commerce website for your
                  business
                </Card.Title>
                <Card.Text>
                  As more and more people turn to online shopping, it's becoming
                  increasingly important for businesses to have a successful
                  e-commerce website
                </Card.Text>
                <NavLink to='/ecommercewebsite' ><ReadMoreButton /></NavLink>
                
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="fles">
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  The role of social media in modern marketing strategies
                </Card.Title>
                <Card.Text>
                  The world of marketing has seen a massive transformation over
                  the last few decades, thanks to the advent of social media
                  platforms
                </Card.Text>
                <NavLink to='/socialmediastrategies' ><ReadMoreButton /></NavLink>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  How to improve your website's user experience for better
                  engagement
                </Card.Title>
                <Card.Text>
                  In the present era of digitalization, it is imperative for any
                  business to have a website.
                </Card.Text>
                <NavLink to='/websiteexperience' ><ReadMoreButton /></NavLink>
              </Card.Body>
            </Card> */}
        </div>
      </div>
    </>
  );
};

export default InformationalBolg;
