import React,{useEffect} from 'react';
import './SocialMediaStrategy.css';
import Navs from '../../../../../Components/Navbar/Navs';
import Footer from '../../../../../Components/footer/Footer';
import GetInTouch from '../../../../../Components/body/GetInTouch/GetInTouch';
const SocialMediaStrategy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <>
    <Navs/>
    <div className="socialmediastrategy-main-container">
        <div className="socialmediastrtegy-page mt-2">
          <div className="socialmediastrategy-img">
            <img
              src="public/Images/SocialMediaManagement/SocialMediaStrategy/SocialMediaStrategy2.jpg"
              alt="Slider"
            />
          </div>
          <div className="socialmediastrategy-content">
            <h1 className="socialmediastrategy-content-head" style={{fontWeight:"800"}}>
              Transforming
              <br /> Ideas into <br />
              <span style={{ color: "#EA5A1B" }}> Visual </span>
              <br /> Masterpieces
            </h1>
            <p className="socialmediastrategy-content-para">
              Bringing your brand to life through stunning visuals and
              innovative design solutions.
            </p>
          </div>
        </div>
        <div className="socialmediastrategy-countainer1">
          <div className="socialmediastrategy-detail-container">
            <h2 className="socialmediastrategy-detail" style={{fontWeight:"800"}}>Crafting <span style={{ color: "#EA5A1B" }}> Stories Through  </span>Visual Innovation</h2>
            <p className="socialmediastrategy-detail-para">
              Our graphic designing service is a creative hub where imagination
              and innovation blend seamlessly to bring your ideas to life. With
              a team of skilled designers, we specialize in crafting compelling
              visual experiences that resonate with your target audience. From
              logo designs that embody your brand's essence to captivating
              marketing materials that leave a lasting impression, we're
              dedicated to transforming concepts into stunning reality. Our
              meticulous attention to detail and keen understanding of design
              principles ensure that each project is a unique masterpiece,
              tailored to elevate your brand's identity and communication.
              Whether you're a startup or an established enterprise, we're here
              to translate your vision into a visual narrative that speaks
              volumes and sets you apart in the competitive landscape.
            </p>
          </div>
          <div className="socialmediastrategy-detail-img">
            <img src="public/Images/SocialMediaManagement/SocialMediaStrategy/SocialMediaStrategy.png" alt="" />
          </div>
        </div>
      </div>
      <GetInTouch />
    <Footer/>
    </>
  );
}

export default SocialMediaStrategy;
