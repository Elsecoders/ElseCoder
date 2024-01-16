import React, { useState,useEffect } from "react";
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cards = [
 
    { img:'/public/Images/2.png',title: 'How to create a successful e-commerce website for your business', description: 'Card 2 Description', link: '/ecommercewebsite' },
    { img:'/public/Images/2.png',title: 'The role of social media in modern marketing strategies', description: 'Card 1 Description', Navlink: '/socialmediastrategies' },
    { img:'/public/Images/2.png',title: 'eCommerce Website', description: 'Card 1 Description', link: '#' },
    { img:'/public/Images/2.png',title: 'Social Media Strategies', description: 'Card 2 Description', link: '#' },
    { img:'/public/Images/2.png',title: 'Website Experience', description: 'Card 2 Description', link: '#' },
    { img:'/public/Images/2.png',title: 'Seo Keyword Research', description: 'Card 2 Description', link: '#' },
    { img:'/public/Images/2.png',title: 'Seo BackLink Buildings', description: 'Card 2 Description', link: '#' },
    { img:'/public/Images/2.png',title: 'Web Application Block', description: 'Card 2 Description', link: '#' },
    { img:'/public/Images/2.png',title: 'Social Media Campaign', description: 'Card 2 Description', link: '#' },
    { img:'/public/Images/2.png',title: 'Backend Framework', description: 'Card 2 Description', link: '#' },
    { img:'/public/Images/2.png',title: 'Mobile App development', description: 'Card 2 Description', link: '#' },

    // Add more cards as needed with different content
  ];
  return (
    <>
      <div className="InformationalBlog">
        <div className="Info-Blog-heading">
          <h2 style={{fontWeight: "800"}}>Insights to help you stay ahead of change</h2>
          <p>Informational Blogs</p>
          <div className="main-countainer">
            <div className="col-12 col-md-3 col-lg-2  card-mini">
              <div className="card-body">
                <h5 className="card-title">Informational Blogs</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div className="mini-card-grid col-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`col-9 col-md-4 col-lg-3 mini-card ${hoveredCards[index] ? 'hovered' : ''} ${scrollPosition > 50 ? 'hidden' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="card-content">
          <Card.Img variant="top" src={card.img} />
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.description}</p>
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
