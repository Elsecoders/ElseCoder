
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Aboutus from './Pages/AboutUs/Aboutus';
import MainBody from '../Components/MainBody/MainBody';
import Services from './Pages/ServicesE/Services';
import Contactus from './Pages/ContactUs/Contactus';
import ShopifyContentSEO from './Pages/Agency/ShopifyContentSEO/ShopifyContentSEO';
import ShopifyStoreSetup from './Pages/Agency/ShopifyStoreSetup/ShopifyStoreSetup';
import ShopifyThemeCustomization from './Pages/Agency/ShopifyThemeCustomization/ShopifyThemeCustomization';
import SocialMediaStrategies from'./Pages/InfoBlogPages/SocialMediaStrategies/SocialMediaStrategies';
import WebsiteExperience from'./Pages/InfoBlogPages/WebsiteExperience/WebsiteExperience';
import ECommerceWebsite from './Pages/InfoBlogPages/eCommerceWebsite/eCommerceWebsite';
import Wordpress from './Pages/ServiceWeOffer/SolutionImplementation/Wordpress/Worpress';
import Shopify from './Pages/ServiceWeOffer/SolutionImplementation/Shopify/Shopify';
import CustomSoftwareDevelopment from './Pages/ServiceWeOffer/SoftwareDevelopment/CustomSoftwareDevelopment/CustomSoftwareDevelopment';
import UiUxDesign from './Pages/ServiceWeOffer/SoftwareDevelopment/UiUxDesign/UiUxDesign';
const App = () => {
    return (
      
      <>
      <BrowserRouter>
      <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
        <Route path='/home' element={<MainBody/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/shopifycontentseo' element={<ShopifyContentSEO/>}/>
        <Route path='/shopifystoresetup' element={<ShopifyStoreSetup/>}/>
        <Route path='/shopifythemecustomization' element={<ShopifyThemeCustomization/>}/>
        <Route path='/ecommercewebsite' element={<ECommerceWebsite/>}/>
        <Route path='/socialmediastrategies' element={<SocialMediaStrategies/>}/>
        <Route path='/websiteexperience' element={<WebsiteExperience/>}/>
        <Route path='/wordpress' element={<Wordpress/>}/>
        <Route path='/shopify' element={<Shopify/>}/>
        <Route path='/customsoftwaredevelopment' element={<CustomSoftwareDevelopment/>}/>
        <Route path='uiuxdesign' element={<UiUxDesign/>}/>
      </Routes>
      </BrowserRouter>

      
      </>
    );
  }
  
  export default App;
  





