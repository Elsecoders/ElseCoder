import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const name = e.target.name.value;
    const email = e.target.email.value;
    const enquireFor = e.target.enquireFor.value;
    const message = e.target.message.value;

    if (!name || !email || !enquireFor || !message) {
      setErrorMessage('All fields are mandatory');
      return;
    }

    // Perform your form submission logic here

    // Clear the form after submission if needed
    e.target.reset();
    setErrorMessage('');
  };

  return (
    <div className="GetInTouch">
      <h1 className="HeadingGIT">Get In Touch</h1>
      <form className="form-box1" onSubmit={handleSubmit}>
      <div className='input-container'>
        <input type='text' id='name' className='input-field' placeholder='' required/>
        <label for='name' className='input-label'>Name<span style={{color:'red'}}> *</span></label>
        </div>
        <div className='input-container'>
        <input type='text' id='email' className='input-field' placeholder='' required/>
        <label for='username' className='input-label'>Email<span style={{color:'red'}}> *</span></label>
        </div>
        <div className='input-container'>
        <input type='text' id='text' className='input-field' placeholder='' required/>
        <label for='text' className='input-label'>Enquire For ?<span style={{color:'red'}}> *</span></label>
        </div>
        <div className='input-container'>
        <input type='text' id='email' className='input-field' placeholder='' required/>
        <label for='username' className='input-label'>Message<span style={{color:'red'}}> *</span></label>
        
        </div>
        {/* <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name <span style={{ color: 'red' }}>*</span>
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
          Email <span style={{ color: 'red' }}>*</span>
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enquire For ? <span style={{ color: 'red' }}>*</span>
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Message <span style={{ color: 'red' }}>*</span>
          </label>
          <textarea type="textarea" className="form-control" id="name" required />
        </div> */}
       

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <button type="submit" className="inqury-btn2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GetInTouch;
