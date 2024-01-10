import "./Agency.css";
import Card from "react-bootstrap/Card";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";

import { NavLink } from "react-router-dom";
const Agency = () => {
  return (
    <>
      <div className="agency mt-5 pb-3 pt-4">
        <div className="heading-agency">
          <h1>
          Collaborate with the Finest eCommerce Development Agency{" "}
          </h1>
          <p className="paragraph-agency">
          Shopify, WordPress, and Wix are just a few to name; we can help you build your eCommerce business without any trouble. 
          </p>
        </div>
        <div className="service-box">
          <Card style={{ width: "18rem", height: "18rem" }} className="card-1">
            <Card.Body>
              <ShoppingBasketOutlinedIcon
                style={{
                  color: "#111",
                  marginRight: "220px",
                  height: "2.5rem",
                }}
              />
              <p className="shopify-div">Shopify Store Setup</p>
              <p className="shopify-bar">___</p>
              <NavLink as={NavLink} to="/shopifystoresetup" style={{textDecoration:"none"}}><p className="shopify-rm">Read More</p></NavLink>
              
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "18rem" }} className="card-2">
            <Card.Body>
              <AssignmentOutlinedIcon
                style={{
                  color: "#111",
                  marginRight: "220px",
                  height: "2.5rem",
                }}
              />
              <p className="shopify-div">Shopify Content SEO</p>
              <p className="shopify-bar">___</p>
            <NavLink as={NavLink} to="/shopifycontentseo" style={{textDecoration:"none"}}><p className="shopify-rm">Read More</p></NavLink>  
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "18rem" }} className="card-3">
            <Card.Body>
              <DashboardCustomizeOutlinedIcon
                style={{
                  color: "#111",
                  marginRight: "220px",
                  height: "2.5rem",
                }}
              />
              <p className="shopify-div">Shopify Theme Customization</p>
              <p className="shopify-bar">___</p>
            <NavLink as={NavLink} to="/shopifythemecustomization" style={{textDecoration:"none"}}><p className="shopify-rm">Read More</p></NavLink>  
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Agency;
