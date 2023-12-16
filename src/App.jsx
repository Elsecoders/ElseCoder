
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navs from '../Components/Navbar/Navs';
import SliderSection from '../Components/body/SliderSection/SliderSection';
import Introduction from '../Components/body/Introduction/Introduction';
import Agency from '../Components/body/Agency/Agency';
import MiddleContent from '../Components/body/MiddleContent/MiddleContent';
import ServicesWeOffer from '../Components/body/ServicesWeOffer/ServicesWeOffer';
import InformationalBolg from '../Components/body/InformationalBlog/InformationalBolg';
import Footer from '../Components/footer/Footer';

  const App = () => {
    return (
      <div>
        <Navs/>
        <SliderSection/>
        <Introduction/>
        <Agency/>
        <MiddleContent/>
        <ServicesWeOffer/>
        <InformationalBolg/>
        <Footer/>
      </div>
    );
  }
  
  export default App;
  





