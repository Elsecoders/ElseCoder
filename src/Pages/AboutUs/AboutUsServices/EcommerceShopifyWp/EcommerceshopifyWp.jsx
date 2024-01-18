import {React,useEffect,useState} from 'react';
import Navs from '../../../../../Components/Navbar/Navs';
import Footer from '../../../../../Components/footer/Footer';
import './EcommerceShopifyWp.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GetInTouch from "../../../../../Components/body/GetInTouch/GetInTouch";
const EcommerceshopifyWp = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  const [selectedTechnology, setSelectedTechnology] = useState("Emerence");
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [blink, setBlink] = useState(false);

  const technologyContent = {
    Emerence: {
      head: "Emerence",
      description:
        "We build innovative on-demand food apps with intuitive features, including order tracking, multiple payment options, vendor management, and delivery tracking.",
      image: "../../../../../public/Images/aboutUs/food-seoooo1.jpg",
    },
    SSFebrics: {
      head: "SS Febrics",
      description:
        "Our e-commerce apps are packed with modern features and latest technologies, including a wish list, order tracking, user profiles, multiple payment options, and more.",
      image: "../../../../../public/Images/aboutUs/e-commerce-seoooo1.jpg",
    },
    WalletKing: {
      head: "Wallet King",
      description:
        "We build marketplaces with intuitive vendor and client profiles, interactive user interface, multiple payment options, product listings, simple checkout, and more.",
      image: "../../../../../public/Images/aboutUs/marketplace-seoooo1.jpg",
    },
    TheJacketMaker: {
      head: "The Jacket Maker",
      description:
        "We take e-learning to the next level with our educational apps that target learning behaviors outside a classroom, enabling students to study at their pace without peer pressure.",
      image: "../../../../../public/Images/aboutUs/education-seoooo11.jpg",
    },
    Madora: {
      head: "Madora",
      description:
        "Our social apps are built with an engaging and straightforward user interface that allows millions of users to share pictures, videos, and other media without lag, app crash, or other errors.",
      image: "../../../../../public/Images/aboutUs/social-seoooo11.jpg",
    },
    java:{
     head: "Java" ,
     description: "We offer SMBs, startups, and enterprises, innovation to digitize their businesses, through our expertise in Java for mobile apps, game apps, and much more.<br /> <br /> Java is the easiest official language to work with when developing your first mobile app from our best mobile app development company in USA.",
     image:'../../../../../public/Images/aboutUs/javalogo.png' 
    },
    python:{
      head: "Python" ,
      description: "With a diverse team of programmers, we offer exceptional skills in Kotlin and other programming languages to design innovative solutions for startups, enterprises, and Fortune 500s.<br /> <br /> Kotlin works well for cross-platform applications, allowing businesses to target both Android and iOS simultaneously.",
      image:'../../../../../public/Images/aboutUs/icons8-python-48.png' 
     },    
     javascript:{
      head:  'Javascript',
      description: "Whether it’s a website or a web app, our designers and developers have experience in designing exceptional solutions using HTML5 and other web programming languages.<br /> <br /> With new elements and attributes, HTML5 offers more creative freedom for designers to craft your app as you imagined it.",
      image:'../../../../../public/Images/aboutUs/js-logo.png' 
     },    
     php:{
      head: 'PHP' ,
      description: "Are you looking to invest in iOS apps? Cubix offers exceptional iOS app development services, designing mobile games, finance apps, and more for startups, SMBs, and enterprises.<br /> <br /> Swift is easy to use with a simple learning curve and allows agile development, convenient scalability, and flexibility in app design.",
      image:'../../../../../public/Images/aboutUs/icons8-php-48.png' 
     },    
     Csharp:{
      head:  "C#",
      description: "To help startups and enterprises launch an app on the iOS platform, Mac OS, or iPad, Cubix provides a development team specializing in iOS app development.<br /> <br /> Objective C is a general-purpose, object-oriented language that offers convenience and flexibility in design and development.",
      image:'../../../../../public/Images/aboutUs/icons8-c-48.png' 
     }, 
     mongodb:{
      head:  "MongoDB",
      description: "To help startups and enterprises launch an app on the iOS platform, Mac OS, or iPad, Cubix provides a development team specializing in iOS app development.<br /> <br /> Objective C is a general-purpose, object-oriented language that offers convenience and flexibility in design and development.",
      image:'../../../../../public/Images/aboutUs/mangoDb.png' 
     }, 
     mysql:{
      head:  "MySQL",
      description: "To help startups and enterprises launch an app on the iOS platform, Mac OS, or iPad, Cubix provides a development team specializing in iOS app development.<br /> <br /> Objective C is a general-purpose, object-oriented language that offers convenience and flexibility in design and development.",
      image:'../../../../../public/Images/aboutUs/mysql.png' 
     }, 
     shopify:{
      head:  "Shopify",
      description: "To help startups and enterprises launch an app on the iOS platform, Mac OS, or iPad, Cubix provides a development team specializing in iOS app development.<br /> <br /> Objective C is a general-purpose, object-oriented language that offers convenience and flexibility in design and development.",
      image:'../../../../../public/Images/aboutUs/icons8-shopify-48.png' 
     }, 
     bigcommerce:{
      head:  "BigCommerce",
      description: "To help startups and enterprises launch an app on the iOS platform, Mac OS, or iPad, Cubix provides a development team specializing in iOS app development.<br /> <br /> Objective C is a general-purpose, object-oriented language that offers convenience and flexibility in design and development.",
      image:'../../../../../public/Images/aboutUs/icons8-bigcommerce-48.png' 
     }, 
     magento:{
      head:  "Magento",
      description: "To help startups and enterprises launch an app on the iOS platform, Mac OS, or iPad, Cubix provides a development team specializing in iOS app development.<br /> <br /> Objective C is a general-purpose, object-oriented language that offers convenience and flexibility in design and development.",
      image:'../../../../../public/Images/aboutUs/icons8-magento-48.png' 
     },   
  };

  const handleTechnologyClick = (technology) => {
    setBlink(true); // Set blink to true when content changes
    setTimeout(() => {
      setSelectedTechnology(technology);
      setBlink(false); // Set blink back to false after 200ms
    }, 200);
  };
  const handleLanguageClick = (language) => {
    setBlink(true); // Set blink to true when content changes
    setTimeout(() => {
      setSelectedLanguage(language);
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
          <div
            className={`first-img-container ${
              blink ? "blink active" : "blink"
            }`}
          >
            <div className="first-container-text">
              <div>
              <h2>
                <b style={{ color: "black" }}>
                  Your Trusted Ecommerce Application Development Company
                </b>
              </h2>
              <p>
                Delivering result-driven software application development
                services to our diverse clientele spanning all major industries.
              </p>
            </div>
            <div className="cms-list" style={{ color: "black" }}>
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
                  onClick={() => handleTechnologyClick("Emerence")}
                >
                  Emerence
                </li>
                <li
                  className="underline"
                  onClick={() => handleTechnologyClick("SSFebrics")}
                >
                  SS Febrics
                </li>
                <li
                  className="underline"
                  onClick={() => handleTechnologyClick("WalletKing")}
                >
                  Wallet King
                </li>
                <li
                  className="underline"
                  onClick={() => handleTechnologyClick("TheJacketMaker")}
                >
                  The Jacket Maker
                </li>
                <li
                  className="underline"
                  onClick={() => handleTechnologyClick("Madora")}
                >
                  Madora
                </li>
              </ul>
            </div>
            <h3 style={{ color: "black" }}>
              {technologyContent[selectedTechnology]?.head}
            </h3>
            <p>{technologyContent[selectedTechnology]?.description}</p>
          </div>
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
                and a valuable addition to users lives.
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
            <h2
              style={{ color: "black", fontWeight: "800" }}
              className="mt--0 mb-3"
            >
              Ecommerce App Development - Technology Stack
            </h2>
            <p className="mb-3">
              We create ecommerce apps with scalable and tested technology stack to
              deliver apps par excellence.
            </p>
          </div>
          <div className="row tabs tabs-nav-left tabs-nav-lg m0_auto">
            <div className="col-md-5">
              <div className="mb-3 mb-sm-4 mb-xs-5">
                <h3
                  className="mt-0 font-size-24 mb-sm-4 mt-sm-4"
                  style={{ color: "black", fontWeight: "800" }}
                >
                  Language
                </h3>
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
                    
                    <li
                    className="underline"
                     onClick={() => handleLanguageClick("java")}>
                     <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/javalogo.png" alt="java-logo" />
                    </li>
                    <li
                    className="underline"
                     onClick={() => handleLanguageClick("python")}>
                     <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/icons8-python-48.png" alt="python-logo" />
                    </li>
                    <li
                    className="underline"
                    onClick={() => handleLanguageClick("javascript")}>
                     <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/js-logo.png" alt="javascript-logo" />
                    </li>
                  </ul>
                </div>
                <div className="nav tabs-nav" role="tablelist">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "25px",
                      justifyContent: "left",
                      cursor: "pointer",
                    }}
                  >
                    <li
                    className="underline"
                     onClick={() => handleLanguageClick("php")}>
                     <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/icons8-php-48.png" alt="php-logo" />
                    </li>
                    <li
                    className="underline"
                     onClick={() => handleLanguageClick("Csharp")}>
                     <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/icons8-c-48.png" alt="csharp-logo" />
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="mt-0 font-size-24 mb-sm-4 mt-sm-4"
                    style={{ color: "black", fontWeight: "800" }}
                  >
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
                      cursor: "pointer",
                    }}
                  >
                    <li className="underline"
                    onClick={() => handleLanguageClick("mongodb")}>
                    <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/mangoDb.png" alt="mongodb" />
                    </li>
                    <li className="underline"
                    onClick={() => handleLanguageClick("mysql")}>
                    <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/mysql.png" alt="mysql" />
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="mt-0 font-size-24 mb-sm-4 mt-sm-4"
                    style={{ color: "black", fontWeight: "800" }}
                  >
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
                      cursor: "pointer",
                    }}
                  >
                    <li className="underline"
                    onClick={() => handleLanguageClick("shopify")}>
                    <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/icons8-shopify-48.png" alt="shopify-logo" />
                    </li>
                    <li className="underline"
                    onClick={() => handleLanguageClick("bigcommerce")}>
                    <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/icons8-bigcommerce-48.png" alt="bigcommerce" />
                    
                    </li>
                    <li className="underline"
                    onClick={() => handleLanguageClick("magento")}>
                    <img style={{width:'40px'}} src="../../../../../public/Images/aboutUs/icons8-magento-48.png" alt="magento" />
                    
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="tabs-content mt-sm7">
              <div style={{ backgroundColor: '#fff', borderRadius: '4px' }} className="backgroundwhite-tabsd bgafters bgbefores p-50">
                <div className="boxseo-data">
                      <img src={technologyContent[selectedLanguage].image} alt=""  />
                      <h3>{technologyContent[selectedLanguage]?.head}</h3>
                      <p dangerouslySetInnerHTML={{ __html: technologyContent[selectedLanguage]?.description }}></p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
}

export default EcommerceshopifyWp;
