import React, { useEffect } from 'react';
import Navs from '../../../Components/Navbar/Navs';
import Footer from '../../../Components/footer/Footer';
import GetInTouch from '../../../Components/body/GetInTouch/GetInTouch'
import "./contactus.css";

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
      <Navs />
      <div className="containercontactUs mt-2">
        <div className="img2">
          <img src="public/Images/Contact-us/ContactUs.jpg" alt="" />
        </div>
        <div className="Contactus-content">
          <p style={{fontSize: "18px"}}></p>
            Behind the powerful{' '}
            <h1 style={{fontWeight:"800"}}>
              <span style={{ color: "black" }}>{`<`}</span>
              <span style={{ color: "#2CA3CC" }}>{`E!se`}</span>
              <span style={{ color: "#EA5A1B" }}>{`Coder`}</span>
              <span style={{ color: "black" }}>{`/>`}</span>
            </h1>{' '}
        <p style={{fontSize: "18px"}}>    platform is a team of experts ready to help
          </p>
          <h1 />
        </div>
      </div>
      <GetInTouch/>
      <Footer />
    </>
  );
};

export default Contactus;
