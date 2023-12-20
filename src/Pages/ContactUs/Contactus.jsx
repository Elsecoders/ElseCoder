import React from 'react';
import Navs from '../../../Components/Navbar/Navs';
import Footer from '../../../Components/footer/Footer';
import "./contactus.css";

const Contactus = () => {
  return (
    <>
      <Navs />
      <div className="containercontactUs mt-2">
        <div className="img2">
          <img src="/Images/Contact-us/contactUs-img.jpg" alt="" />
        </div>
        <div className="content">
          <p>
            Behind the powerful{' '}
            <h1>
              <span style={{ color: "black" }}>{`<`}</span>
              <span style={{ color: "#2CA3CC" }}>{`E!se`}</span>
              <span style={{ color: "#EA5A1B" }}>{`Coder`}</span>
              <span style={{ color: "black" }}>{`/>`}</span>
            </h1>{' '}
            platform is a team of experts ready to help
          </p>
          <h1 />
        </div>
      </div>
      <div class="contact-box">
        <div class="contact-heading">Get in touch</div>
        <div class="contact-text">
          <p>
            Our team of regional experts is here to support you with your global expansion plans.
            If you have any questions, just get in touch, and we will be delighted to help.
          </p>
        </div>
        <form class="contact-form">
          <div class="form-row">
            <div class="form-field">
              <label for="firstName">
                First Name <span style={{ color: 'red' }}> *</span>
              </label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div class="form-field">
              <label for="lastName">
                Last Name<span style={{ color: 'red' }}> *</span>
              </label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-field full-width">
              <label for="organization">Organization<span style={{ color: 'red' }}> *</span></label>
              <input type="text" id="organization" name="organization" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label for="email">Email<span style={{ color: 'red' }}> *</span></label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-field">
              <label for="phoneNumber">Phone Number<span style={{ color: 'red' }}> *</span></label>
              <input type="tel" id="phoneNumber" name="phoneNumber" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-field full-width">
              <label for="message">How can we help and what are your challenges?<span style={{ color: 'red' }}> *</span></label>
              <textarea id="message" name="message" rows="4" required></textarea>
              <p className="form-note">
                We normally respond within 24 hours. If you haven't received anything, check your spam folder.
              </p>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field full-width">
              <button class="submit-form" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
