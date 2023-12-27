import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { Carousel } from "bootstrap"; // Import Carousel component

import Navs from "../../../Components/Navbar/Navs";
import Footer from "../../../Components/footer/Footer";
import "./Aboutus.css";

const Aboutus = () => {
  useEffect(() => {
    const initCarousel = () => {
      const carouselElement = document.getElementById(
        "carouselMultiItemExample"
      );
      const carousel = new Carousel(carouselElement, {
        interval: 5000, // Set interval to 5000 milliseconds (5 seconds)
      });

      // Optionally, you can pause the carousel on hover
      carouselElement.addEventListener("mouseenter", () => {
        carousel.pause();
      });

      carouselElement.addEventListener("mouseleave", () => {
        carousel.cycle();
      });
    };

    // Initialize the carousel when the component mounts
    initCarousel();

    // Destroy the carousel when the component unmounts
    return () => {
      const carouselElement = document.getElementById(
        "carouselMultiItemExample"
      );
      carouselElement.removeEventListener("mouseenter", () => {});
      carouselElement.removeEventListener("mouseleave", () => {});
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render
  return (
    <>
      <Navs />
      <div className="about-container">
        <div className="aboutus-page mt-2">
          <div className="about-img">
            <img src="/Images/aboutUs/aboutUs-page.jpg" alt="Slider" />
          </div>
          <div className="about-content">
            <h1 className="about-content-head">
              <span style={{ color: "black" }}>{`About `}</span>
              <span style={{ color: "black" }}>{`<`}</span>
              <span style={{ color: "#2CA3CC" }}>{`E!se`}</span>
              <span style={{ color: "#EA5A1B" }}>{`Coder`}</span>
              <span style={{ color: "black" }}>{`/>`}</span>
            </h1>
            <p className="about-content-para">
              Design, Develop, Deploy - We Make It Happen
            </p>
          </div>
        </div>
        <div className="about-tag">
          <h3 className="about-head">
            We Are PRO..
            <br />
            ProNetizens.
          </h3>
          <p className="about-para">
            Here at Pro Netizens, we strive for perfection in everything we do.
            <br /> <br />
            We help you to create a cutting-edge web to propel your organization
            towards its immediate and long-term objectives. As a company, we
            specialize
            <br /> in developing fully-fledged, highly reliable, and extensible
            applications. Our ultimate objective is to provide you with a
            high-quality web <br />
            application that efficiently uses your resources while remaining
            affordable.
            <br /> <br />
            No matter what you need, we can provide a scalable, user-friendly
            solution to help your organization run more smoothly and effectively
            now and in
            <br /> the future. With our years of relevant experience, we can
            help you dethrone your competitors and increase your revenue.
          </p>
        </div>
        <div className="about-mission">
          <div>
            <h3 className="mission-head">
              <b>Mission And Vision </b>
            </h3>
          </div>
          <div className="mission-container">
            <div className="container-img">
              <img
                src="/public/Images/aboutUs/Vision-Mission.png"
                alt="Mission Image"
              />
            </div>
            <div className="moto-vision">
              <h4>
                <b>Our Vision</b>
              </h4>
              <p>
                Our goal is to enable businesses of all sizes to flourish in the
                digital era by providing innovative and effective software
                solutions and marketing strategies. We aim to become the
                preferred agency for our clients by helping them achieve their
                objectives and surpass their expectations.
              </p>
              <h4>
                <b>Our Moto</b>
              </h4>
              <p>Design, Develop, Deploy - We Make It Happen</p>
            </div>
          </div>
        </div>
        <div className="ourvalue-head">
          <h3>
            <b>Our Values</b>
          </h3>
        </div>
        <div className="ourvalue-container">
          <div className="ourvalue-subcontainer">
            <img
              className="value-container-img"
              src="/public/Images/aboutUs/passion.png"
              alt="Passion"
            />
            <h6 className="value-container-head">
              <b>Passion</b>
            </h6>
            <p className="value-container-para">
              We are fueled by our passion and committed to infusing purpose
              into every aspect of our endeavors.
            </p>
          </div>
          <div className="ourvalue-subcontainer">
            <img
              className="value-container-img1"
              src="/public/Images/aboutUs/innovation.png"
              alt="Innovation"
            />
            <h6 className="value-container-head1">
              <b>Impactful Innovation</b>
            </h6>
            <p className="value-container-para1">
              We constantly strive to challenge the current norms and envision
              the future demands of the market in order to create significant
              value.
            </p>
          </div>
          <div className="ourvalue-subcontainer">
            <img
              className="value-container-img2"
              src="/public/Images/aboutUs/trust.png"
              alt="Trust"
            />
            <h6 className="value-container-head2">
              <b>Trust & Diversity</b>
            </h6>
            <p className="value-container-para2">
              We honor and embrace a variety of viewpoints, while cultivating a
              culture of mutual reliance and responsibility
            </p>
          </div>
        </div>
        <div className="application-services">
          <h3>
            <b>End-to-end application services</b>
          </h3>
        </div>
        <div className="ecommerce">
          <div className="ecommerce-container">
            <div className="countainer12">
              <div className="image-service">
                <img
                  className="service-image"
                  src="/public/Images/aboutUs/online-shopping.png"
                  alt="development"
                />
              </div>
              <h5 className="service-head">Application Development</h5>
              <p className="service-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
                neque.
              </p>
              <span className="service-more">
                Learn More
                <i> &#8594;</i>
              </span>
            </div>
            <div className="countainer12">
              <div className="image-service">
                  <img
                    className="service-image"
                    src="/public/Images/aboutUs/online-shopping.png"
                    alt="development"
                  />
              
              </div>
              <h5 className="service-head">Application Development</h5>
              <p className="service-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
                neque.
              </p>
              <span className="service-more">
                Learn More
                <i> &#8594;</i>
              </span>
            </div>
          </div>
        </div>
        <div className="ecommerce">
          <div className="ecommerce-container">
            <div className="countainer12">
              <div className="image-service">
                <img
                  className="service-image"
                  src="/public/Images/aboutUs/online-shopping.png"
                  alt="development"
                />
              </div>

              <h5 className="service-head">SEO development</h5>
              <p className="service-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
                neque.
              </p>
              <span className="service-more">
                Learn More
                <i> &#8594;</i>
              </span>
            </div>
            <div className="countainer12">
              <div className="image-service">
                <img
                  className="service-image"
                  src="/public/Images/aboutUs/online-shopping.png"
                  alt="development"
                />
              </div>
              <h5 className="service-head">Social Media Marketing</h5>
              <p className="service-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
                neque.
              </p>
              <span className="service-more">
                Learn More
                <i> &#8594;</i>
              </span>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="service-buttuon">
            <button className="service-btn" type="button">
              See All Services
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="customerreview-head">
          <h5 className="head">
            <b>See What Our Customer Says About Us</b>
          </h5>
        </div>
        <div className="customerreview-content">
          <div
            id="carouselMultiItemExample"
            className="carousel slide carousel-dark text-center"
            data-mdb-ride="carousel"
          >
            {/* Controls */}
            <div className="d-flex justify-content-center mb-4">
              <button
                className="carousel-control-prev position-relative"
                type="button"
                data-bs-target="#carouselMultiItemExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next position-relative"
                type="button"
                data-bs-target="#carouselMultiItemExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Inner */}
            <div className="carousel-inner py-4">
              {/* Single item */}
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">Anna Deynah</h5>
                      <p>UX Designer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod eos id officiis hic tenetur quae quaerat ad
                        velit ab hic tenetur.
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-4 d-lg-block">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">John Doe</h5>
                      <p>Web Developer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid
                        commodi.
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star-half-alt fa-sm"></i>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-4 d-lg-block">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">Maria Kate</h5>
                      <p>Photographer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti.
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="far fa-star fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://placekitten.com/150/150"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">Kitty Cat</h5>
                      <p>Cute Critic</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Meow meow meow, purr purr purr. Pawsitively delightful!
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 d-lg-block">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://placekitten.com/160/150"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">Whiskers McFluffy</h5>
                      <p>Furry Developer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Code, sleep, eat, repeat. The life of a coding cat!
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star-half-alt fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 d-lg-block">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://placekitten.com/150/150"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">Kitty Cat</h5>
                      <p>Cute Critic</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Meow meow meow, purr purr purr. Pawsitively delightful!
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                    {/* Add more reviewers for Slide 2 */}
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              {/* <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://placekitten.com/160/150"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">Whiskers McFluffy</h5>
                      <p>Furry Developer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Code, sleep, eat, repeat. The life of a coding cat!
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star-half-alt fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                    {/* Add more reviewers for Slide 3 */}
              {/* </div>
                </div>
              </div> */}

              {/* Additional items go here */}
            </div>
            {/* Inner */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;
