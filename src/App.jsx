// import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Aboutus from "./Pages/AboutUs/Aboutus";
import MainBody from "../Components/MainBody/MainBody";
import Services from "./Pages/ServicesE/Services";
import Contactus from "./Pages/ContactUs/Contactus";
import ShopifyContentSEO from "./Pages/Agency/ShopifyContentSEO/ShopifyContentSEO";
import ShopifyStoreSetup from "./Pages/Agency/ShopifyStoreSetup/ShopifyStoreSetup";
import ShopifyThemeCustomization from "./Pages/Agency/ShopifyThemeCustomization/ShopifyThemeCustomization";
import SocialMediaStrategies from "./Pages/InfoBlogPages/SocialMediaStrategies/SocialMediaStrategies";
import WebsiteExperience from "./Pages/InfoBlogPages/WebsiteExperience/WebsiteExperience";
import ECommerceWebsite from "./Pages/InfoBlogPages/eCommerceWebsite/eCommerceWebsite";
import Wordpress from "./Pages/ServiceWeOffer/SolutionImplementation/Wordpress/Worpress";
import Shopify from "./Pages/ServiceWeOffer/SolutionImplementation/Shopify/Shopify";
import CustomSoftwareDevelopment from "./Pages/ServiceWeOffer/SoftwareDevelopment/CustomSoftwareDevelopment/CustomSoftwareDevelopment";
import UiUxDesign from "./Pages/ServiceWeOffer/SoftwareDevelopment/UiUxDesign/UiUxDesign";
import MobileApplication from "./Pages/ServiceWeOffer/SoftwareDevelopment/MobileApplication/MobileApplication";
import GraphicDesigning from "./Pages/ServiceWeOffer/SocialMediaManagement/GraphicDesigning/GraphicDesigning";
import Copywriting from "./Pages/ServiceWeOffer/SocialMediaManagement/Copywriting/Copywriting";

import SocialMediaContent from "./Pages/ServiceWeOffer/SocialMediaManagement/SocialMediaContent/SocialMediaContent";
import SocialMediaStrategy from "./Pages/ServiceWeOffer/SocialMediaManagement/SocialMediaStrategy/SocialMediaStrategy";
import BacklinkBuilding from "./Pages/ServiceWeOffer/SEO/BacklinkBuilding/Backlinkbuilding";
import ContentCreation from "./Pages/ServiceWeOffer/SEO/ContentCreation/ContentCreation";
import KeywordResearch from "./Pages/ServiceWeOffer/SEO/KeywordResearch/KeywordResearch";
import OnsiteOptimization from "./Pages/ServiceWeOffer/SEO/OnsiteOptimization/Onsiteoptimization";
import CustomReactCMS from "./Pages/ServiceWeOffer/SolutionImplementation/CustomReactCMS/CustomReactCMS";
import ApplicaionDevelopment from "./Pages/AboutUs/AboutUsServices/ApplicationDevelopment/ApplicaionDevelopment";
import SeoDevelopment from "./Pages/AboutUs/AboutUsServices/SEO Development/SeoDevelopment";
import SocialMediaDevelopment from "./Pages/AboutUs/SocialMediaDevelopment/SocialMediaDevelopment";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<MainBody />} />

          <Route path="/aboutus" element={<Aboutus />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contactus" element={<Contactus />} />
          <Route path="/shopifycontentseo" element={<ShopifyContentSEO />} />
          <Route path="/shopifystoresetup" element={<ShopifyStoreSetup />} />
          <Route
            path="/shopifythemecustomization"
            element={<ShopifyThemeCustomization />}
          />
          <Route path="/ecommercewebsite" element={<ECommerceWebsite />} />
          <Route
            path="/socialmediastrategies"
            element={<SocialMediaStrategies />}
          />
          <Route path="/websiteexperience" element={<WebsiteExperience />} />
          <Route path="/wordpress" element={<Wordpress />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route
            path="/customsoftwaredevelopment"
            element={<CustomSoftwareDevelopment />}
          />
          <Route path="/uiuxdesign" element={<UiUxDesign />} />
          <Route path="/mobileapplication" element={<MobileApplication />} />
          <Route path="/graphicdesigning" element={<GraphicDesigning />} />
          <Route path="/socialMediacontent" element={<SocialMediaContent />} />
          <Route
            path="/socialmediastrategy"
            element={<SocialMediaStrategy />}
          />
          <Route path="/backlinkbuilding" element={<BacklinkBuilding />} />
          <Route path="/contentcreation" element={<ContentCreation />} />
          <Route path="/keywordresearch" element={<KeywordResearch />} />
          <Route path="/onsiteoptimization" element={<OnsiteOptimization />} />
          <Route path="/customreactcms" element={<CustomReactCMS />} />
          <Route path="/copywriting" element={<Copywriting />} />
          <Route path="/applicationdevelopment" element={<ApplicaionDevelopment/>}/>
          <Route path="/seodevelopment" element={<SeoDevelopment/>}/>
          <Route path="/socialmediadevelopment" element={<SocialMediaDevelopment/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
