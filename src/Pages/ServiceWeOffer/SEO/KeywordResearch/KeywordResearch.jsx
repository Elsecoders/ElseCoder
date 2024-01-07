import React, { useEffect } from 'react';
import './KeywordResearch.css';
import Navs from '../../../../../Components/Navbar/Navs';
import Footer from '../../../../../Components/footer/Footer';
import GetInTouch from '../../../../../Components/body/GetInTouch/GetInTouch';
const KeywordResearch = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <>
    <Navs/>
    <div className="container-keywordResearch mt-4" style={{width:"90%" , margin: "auto auto 50px auto"}}>
        <div className="img2">
          <img src="public/Images/SEO/KeywordResearch/KeywordResearch.jpg" alt="Slider" />
        </div>
        <div className="content-keywordResearch">
          <h1>
          Our Expert
        <span class="keywordResearch-color-theme"> Keyword Research </span> Services
          </h1>
          <p>
          Unlock the potential of your online presence with our expert keyword research service, optimizing your content for maximum visibility and engagement.          </p>
          <h1 />
        </div>
      </div>

      <div className="container-keywordResearch-1 " style={{width:"90%" , margin: "auto" , marginTop:"70px" }}>
      <div className="content-keywordResearch-1">
          <h1>
          Dominate <span class="Backlinkbuilding-color-theme"> Your Digital </span> Landscape
          </h1>
          <p>
          Unveil the power of precision with our expert Keyword Research service. In the dynamic landscape of online presence, keywords act as the foundational bridge connecting businesses to their target audience. Our cutting-edge service goes beyond mere words; we identify the pivotal phrases that unlock doors to higher visibility, enhanced traffic, and increased conversions. Whether you're a startup looking to establish a strong online presence or an established enterprise aiming to maintain relevance, our Keyword Research service equips you with the insights needed to dominate your niche. Step confidently into the digital realm with keywords that matter.</p>
        </div>
        <div className="img2-1">
          <img src="public/Images/SEO/KeywordResearch/KeywordResearch2.png" alt="Slider" />
        </div>
      </div>



    <GetInTouch/>
    <Footer/>
    </>
  );
}

export default KeywordResearch;
