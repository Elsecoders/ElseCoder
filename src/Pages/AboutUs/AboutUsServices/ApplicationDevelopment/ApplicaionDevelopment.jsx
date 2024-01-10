import Navs from "../../../../../Components/Navbar/Navs";
import { useState ,  useEffect  } from "react";
import Footer from "../../../../../Components/footer/Footer";
import "./ApplicationDevelopment.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaJava, FaSwift } from "react-icons/fa";
import { TbBrandKotlin, TbBrandJavascript } from "react-icons/tb";
import { TfiApple } from "react-icons/tfi";
import GetInTouch from "../../../../../Components/body/GetInTouch/GetInTouch";
const ApplicaionDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  const [selectedTechnology, setSelectedTechnology] = useState("food");
  const [blink, setBlink] = useState(false);

  const technologyContent = {
    food: {
      head: "Food",
      description:
        "We build innovative on-demand food apps with intuitive features, including order tracking, multiple payment options, vendor management, and delivery tracking.",
      image: "../../../../../public/Images/aboutUs/food-seoooo1.jpg",
    },
    ecommerce: {
      head: "eCommerce",
      description:
        "Our e-commerce apps are packed with modern features and latest technologies, including a wish list, order tracking, user profiles, multiple payment options, and more.",
      image: "../../../../../public/Images/aboutUs/e-commerce-seoooo1.jpg",
    },
    marketplace: {
      head: "MarketPlace",
      description:
        "We build marketplaces with intuitive vendor and client profiles, interactive user interface, multiple payment options, product listings, simple checkout, and more.",
      image: "../../../../../public/Images/aboutUs/marketplace-seoooo1.jpg",
    },
    education: {
      head: "Education",
      description: "We take e-learning to the next level with our educational apps that target learning behaviors outside a classroom, enabling students to study at their pace without peer pressure.",
      image: "../../../../../public/Images/aboutUs/education-seoooo11.jpg",
    },
    social: {
      head: "Social",
      description: "Our social apps are built with an engaging and straightforward user interface that allows millions of users to share pictures, videos, and other media without lag, app crash, or other errors.",
      image: "../../../../../public/Images/aboutUs/social-seoooo11.jpg",
    },
  };

  const handleTechnologyClick = (technology) => {
    setBlink(true); // Set blink to true when content changes
    setTimeout(() => {
      setSelectedTechnology(technology);
      setBlink(false); // Set blink back to false after 200ms
    }, 200);
  };
 
  return (
    <>
      <Navs />
      <div className="app-container mt-4">
        <div className="first-container col-lg-12 col-md-12 col-xs-8">
          <div className="first-img-container">
            {technologyContent[selectedTechnology] && (
              <img src={technologyContent[selectedTechnology].image} alt="" />
            )}
          </div>
          <div className={`first-img-container ${blink ? 'blink active' : 'blink'}`}>
            <div>
              <h2>
                <b style={{color:"black"}}>Your Trusted Mobile Application Development Company</b>
              </h2>
              <p>
                Delivering result-driven software application development
                services to our diverse clientele spanning all major industries.
              </p>
            </div>
            <div className="cms-list" style={{color:"black"}}>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px",
                  // justifyContent: "center",
                  fontSize: "19px",
                }}
              >
                <li
                  className="underline"
                  onClick={() => handleTechnologyClick("food")}
                >
                  Food
                </li>
                <li
                  className="underline"
                  onClick={() => handleTechnologyClick("ecommerce")}
                >
                  Ecommerce
                </li>
                <li
                  className="underline"
                  onClick={() => handleTechnologyClick("marketplace")}
                >
                  Marketplaces
                </li>
                <li
                  className="underline"
                  onClick={() => handleTechnologyClick("social")}
                >
                  Social
                </li>
                <li
                  className="underline"
                  onClick={() => handleTechnologyClick("education")}
                >
                  Education
                </li>
              </ul>
            </div>
            <h3 style={{color:"black"}}>{technologyContent[selectedTechnology]?.head}</h3>
            <p>{technologyContent[selectedTechnology]?.description}</p>
          </div>
        </div>
        <div className="secound-container">
          <div className="secound-header">
            <div className="heading">
              <h2>App Development Process</h2>
            </div>
            <div>
              <p className="para">
                Being a quality-focused Mobile App Development Company, Cubix
                guarantees intuitive mobile apps that are performance-oriented
                and a valuable addition to users' lives.
              </p>
            </div>
          </div>
          <div className="row d-flex div-centers">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="box-bullits">
                <h2 className="font-size-90 text-black mt-0 mb-0">01</h2>
                <h3 className="font-size-23 text-black mt-0 mb-0">Plan</h3>
                <hr className="hrsetseo" />
                <ul>
                  <li>Business analysis</li>
                  <li>Documenting specifications</li>
                  <li>Documenting specifications</li>
                  <li>Documenting specifications</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="box-bullits">
                <h2 className="font-size-90 text-black mt-0 mb-0">02</h2>
                <h3 className="font-size-23 text-black mt-0 mb-0">Design</h3>
                <hr className="hrsetseo" />
                <ul>
                  <li>UI/UX design</li>
                  <li>Wireframing</li>
                  <li>Prototype creation</li>
                  <li>Feedback gathering</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="box-bullits">
                <h2 className="font-size-90 text-black mt-0 mb-0">03</h2>
                <h3 className="font-size-23 text-black mt-0 mb-0">Develop</h3>
                <hr className="hrsetseo" />
                <ul>
                  <li>Front-end development</li>
                  <li>Back-end development</li>
                  <li>Testing</li>
                  <li>Code review</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="third-container">
          <div className="mb-5">
            <h2 className="mt--0 mb-3">
              Mobile App Development - Technology Stack
            </h2>
            <p className="mb-3">
              We create mobile apps with scalable and tested technology stack to
              deliver apps par excellence.
            </p>
          </div>
          <div className="row tabs tabs-nav-left tabs-nav-lg m0_auto">
            <div className="col-md-5">
              <div className="mb-3 mb-sm-4 mb-xs-5">
                <h3 className="mt-0 font-size-24 mb-sm-4 mt-sm-4">Language</h3>
                <div className="nav tabs-nav" role="tablelist">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "center",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("mobile")}>
                      <FaJava size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("frontend")}>
                      <TbBrandKotlin size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("database")}>
                      <TbBrandJavascript size={40} />
                    </li>
                  </ul>
                </div>
                <div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "left",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("backend")}>
                      <FaSwift size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("cms")}>
                      <TfiApple size={40} />
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mt-0 font-size-24 mb-sm-4 mt-sm-4">
                    Database
                  </h3>
                </div>
                <div className="nav tabs-nav" role="tablelist">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "center",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("mobile")}>
                      <FaJava size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("frontend")}>
                      <TbBrandKotlin size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("database")}>
                      <TbBrandJavascript size={40} />
                    </li>
                  </ul>
                </div>
                <div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "left",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("backend")}>
                      <FaSwift size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("cms")}>
                      <TfiApple size={40} />
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mt-0 font-size-24 mb-sm-4 mt-sm-4">
                    Framework
                  </h3>
                </div>
                <div className="nav tabs-nav" role="tablelist">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "center",
                    }}
                  >
                    <li onClick={() => handleTechnologyClick("mobile")}>
                      <FaJava size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("frontend")}>
                      <TbBrandKotlin size={40} />
                    </li>
                    <li onClick={() => handleTechnologyClick("database")}>
                      <TbBrandJavascript size={40} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="tabs-content mt-sm7">
                <div className="backgroundwhite-tabsd bgafters bgbefores p-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedTechnology === "mobile" && <Food />}
      <GetInTouch/>
      <Footer />
    </>
  );
};

export default ApplicaionDevelopment;
