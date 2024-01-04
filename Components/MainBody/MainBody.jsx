import React, { useEffect } from 'react';
import Navs from '../Navbar/Navs';
import Footer from '../footer/Footer';
import SliderSection from '../body/SliderSection/SliderSection';
import Introduction from '../body/Introduction/Introduction';
import Agency from '../body/Agency/Agency';
import MiddleContent from '../body/MiddleContent/MiddleContent';
import ServicesWeOffer from '../body/ServicesWeOffer/ServicesWeOffer';
import InformationalBolg from '../body/InformationalBlog/InformationalBolg';
 import GetInTouch from '../body/GetInTouch/GetInTouch';
import Technologies from '../body/Technologies/Technologies';
import Parallax from '../body/Parallax/Parallax';


const MainBody = () => {
  useEffect(() => {
    window.scrollTo(0, 1); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
   <>
   <Navs/>
   <SliderSection/>
   <Introduction/>
   <Parallax/>
   <Agency/>
   <Technologies/>
   <MiddleContent/>
   <ServicesWeOffer/>
   
   
   <InformationalBolg/>
   <GetInTouch/>
   <Footer/>
   
   </>
  );
}

export default MainBody;
