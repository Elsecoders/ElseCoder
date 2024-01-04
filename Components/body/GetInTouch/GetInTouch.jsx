import React, { useState, useEffect } from "react";
import "./GetInTouch.css";
import { useForm } from "@formspree/react";
const GetInTouch = () => {
  const [state, handleSubmit] = useForm("xoqgqebo");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);

      // Hide the success message after 2 seconds and reset the form
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      organization: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  return (
    <>
      <div className="GiT-div">
        <div className="contact-boxC">
          <div className="contact-headingC">Get in touch</div>
          {showSuccessMessage && (
            <h1 style={{ color: "#EA5A1B" }}>Thanks for joining!</h1>
          )}
          <div className="contact-textC">
            <p>
              Got any questions? Reach out to our team who is ready to support
              your global expansion plans. If you have any questions or need
              assistance, reach out to us, and we'll be delighted to help.
              Elevate your online presence with our comprehensive WordPress
              development services.
            </p>
          </div>
          <form
            className="contact-formC"
            onSubmit={(e) => {
              handleSubmit(e);
              resetForm();
            }}
            action="https://formspree.io/f/xoqgqebo"
            method="POST"
          >
            <div className="form-rowC">
              <div className="form-fieldC">
                <label htmlFor="firstName">
                  First Name <span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-fieldC">
                <label htmlFor="lastName">
                  Last Name<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-rowC">
              <div className="form-fieldC full-width">
                <label htmlFor="organization">
                  Organization<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-rowC">
              <div className="form-fieldC">
                <label htmlFor="email">
                  Email<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-fieldC">
                <label htmlFor="phoneNumber">
                  Phone Number<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-rowC">
              <div className="form-fieldC full-width">
                <label htmlFor="message">
                  How can we help and what are your challenges?
                  <span style={{ color: "red" }}> *</span>
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <p className="form-note">
                  We normally respond within 24 hours. If you haven't received
                  anything, check your spam folder.
                </p>
              </div>
            </div>
            <div className="form-rowC">
              <div className="form-fieldC full-width">
                <button className="submit-formC" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
