import React from "react";
import "./informationalBlog.css";

import Card from "react-bootstrap/Card";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import { NavLink } from "react-router-dom";

const InformationalBolg = () => {
  return (
    <>
      <div className="InformationalBlog">
        <div className="Info-Blog-heading">
          <h3>Insights to help you stay ahead of change</h3>
          <p>Informational Blogs</p>

          <div className="Blog-Box">
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
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationalBolg;
