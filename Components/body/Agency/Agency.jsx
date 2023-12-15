import "./Agency.css";
import Card from "react-bootstrap/Card";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
const Agency = () => {
  return (
    <>
      <div className="agency mt-5 ">
        <div className="heading-agency">
          <h1>ElseCoder is a top-rated eCommerce development agency</h1>
          <p className="paragraph-agency">
            With certified Shopify experts we can assist in expanding your
            business. We offer exceptional support and services to ensure the
            best possible results.
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
              <p className="shopify-rm">Read More</p>
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
              <p className="shopify-rm">Read More</p>
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
              <p className="shopify-rm">Read More</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Agency;
