import React from 'react';
import Navs from '../Navbar/Navs';
import Footer from '../footer/Footer';
import SliderSection from '../body/SliderSection/SliderSection';
import Introduction from '../body/Introduction/Introduction';
import Agency from '../body/Agency/Agency';
import MiddleContent from '../body/MiddleContent/MiddleContent';
import ServicesWeOffer from '../body/ServicesWeOffer/ServicesWeOffer';
import InformationalBolg from '../body/InformationalBlog/InformationalBolg';
 import GetInTouch from '../body/GetInTouch/GetInTouch';

const MainBody = () => {
  return (
   <>
   <Navs/>
   <SliderSection/>
   <Introduction/>
   <Agency/>
   <MiddleContent/>
   <ServicesWeOffer/>
   <InformationalBolg/>
   <GetInTouch/>
   <Footer/>
   </>
  );
}

export default MainBody;
