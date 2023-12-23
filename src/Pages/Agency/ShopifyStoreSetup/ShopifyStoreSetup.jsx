import React from 'react';
import './ShopifyStoreSetup.css';
import Navs from '../../../../Components/Navbar/Navs';
import Footer from '../../../../Components/footer/Footer';
import GetInTouch from '../../../../Components/body/GetInTouch/GetInTouch';

const ShopifyStoreSetup = () => {
  return (
    <>
    <Navs />
    <div>
      <div className='shopify-store-creation-main mt-4'>
      <div className="shopify-store-creation-content">
        <h1 class="custom-heading">
          Setup Your 
        <span class="color-theme"> Shopify Store</span></h1>
        <p className='shopify-store-creation-para'>Welcome to the world of seamless, stress-free online selling! Unlock the full potential of your business with our Shopify Store Setup Services, where we transform your e-commerce vision into a captivating reality.</p>
      </div>

      <div className="image-container">
        <img src="/Public/Images/Contact-us/contactUs-img.jpg" alt="Shopify Store Image" />
      </div>
      </div>
      <div class="my-4 text-center w-100 "><h2 class="fw-bolder fs-1">What We Offer</h2></div>

      <div className="ecommerce">
          <div className="countainer1">
            <img
              className="service-image"
              src="/public/Images/shopify-store-creation/shape.png"
              alt="development"
            />
            <h5 className="service-head">Tailored Store Creation</h5>
            <p className="service-para">
            We understand that no two businesses are the same. That's why our expert team crafts a unique, custom Shopify store that perfectly aligns with your brand and vision.</p>
          </div>
          <div className="countainer1">
            <div>
              <img
                className="service-image"
                src="/public/Images/shopify-store-creation/puzzle.png"
                alt="development"
              />
            </div>
            <h5 className="service-head">Tailored Store Creation</h5>
            <p className="service-para">
            Our design wizards ensure that your store is a visual masterpiece, enticing customers with an irresistible, user-friendly interface.            </p>
            
          </div>
          <div className="countainer1">
            <img
              className="service-image"
              src="/public/Images/shopify-store-creation/migration.png"
              alt="development"
            />
            <h5 className="service-head">Tailored Store Creation</h5>
            <p className="service-para">
            We understand that no two businesses are the same. That's why our expert team crafts a unique, custom Shopify store that perfectly aligns with your brand and vision.</p>
          </div>
          </div>
          <div className="ecommerce">
          <div className="countainer1">
            <img
              className="service-image"
              src="/public/Images/shopify-store-creation/social-media.png"
              alt="development"
            />
            <h5 className="service-head">Tailored Store Creation</h5>
            <p className="service-para">
            We understand that no two businesses are the same. That's why our expert team crafts a unique, custom Shopify store that perfectly aligns with your brand and vision.</p>
          </div>
          <div className="countainer1">
            <img
              className="service-image"
              src="/public/Images/shopify-store-creation/blog-management.png"
              alt="development"
            />
            <h5 className="service-head">Tailored Store Creation</h5>
            <p className="service-para">
            We understand that no two businesses are the same. That's why our expert team crafts a unique, custom Shopify store that perfectly aligns with your brand and vision.</p>
          </div>
          <div className="countainer1">
            <img
              className="service-image"
              src="/public/Images/shopify-store-creation/shape.png"
              alt="development"
            />
            <h5 className="service-head">Tailored Store Creation</h5>
            <p className="service-para">
            We understand that no two businesses are the same. That's why our expert team crafts a unique, custom Shopify store that perfectly aligns with your brand and vision.</p>
          </div>
        </div>

        <GetInTouch/>   
       </div>

    <Footer />
    </>
  );
}

export default ShopifyStoreSetup;

