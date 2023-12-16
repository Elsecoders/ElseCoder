import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access form data using state or form refs
    handleClose(); // Close the modal after form submission
  };

  const modalStyle = {
    backgroundColor:'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  };

  const formStyle = {
    display: 'flex',
    backgroundColor: '#fff',
    transition: 'box-shadow 0.3s',
    flexDirection: 'column',
    gap: '20px',
    
    
  };

  const inputContainerStyle = {
    position: 'relative',
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  // const inputStyle = {
  //   width: '100%',
  //   padding: '10px',
  //   border: 'none',
  //   borderRadius: '3px',
  //   backgroundColor: '#fff',
  //   transition: 'box-shadow 0.3s',
  //   fontSize: '16px',
  //   outline: 'none',
  // };

  const labelStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    fontSize: '16px',
    transition: 'top 0.3s, font-size 0.3s, color 0.3s, padding 0.3s, background-color 0.3s, border-radius 0.3s, font-weight 0.3s',
    color: '#999',
    padding: '3px',
    backgroundColor: '#fff',
    borderRadius: '3px',
    fontWeight: 'normal',
  };
  const buttonStyle = {
    width: '50%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    alignSelf: 'center',
  };
  const modalButtonStyle = {
    width: '50%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    alignSelf: 'center',
    position: 'relative',
    fontFamily: 'Inter',
    outline: 'none',
    boxShadow: '0px 0px 10px',
  };

  const modalButtonBefore = {
    content: '""',
    background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    backgroundSize: '400%',
    zIndex: '-1',
    filter: 'blur(5px)',
    width: 'calc(100% + 4px)',
    height: 'calc(100% + 4px)',
    animation: 'glowingbn5 20s linear infinite',
    opacity: '0',
    transition: 'opacity 0.3s ease-in-out',
    borderRadius: '5px',
  };


  const handleInputFocus = (e) => {
    e.target.nextElementSibling.style.top = '0%';
    e.target.nextElementSibling.style.fontSize = '12px';
    e.target.nextElementSibling.style.color = '#000';
    e.target.nextElementSibling.style.padding = '3px';
    e.target.nextElementSibling.style.backgroundColor = '#eafcff';
    e.target.nextElementSibling.style.borderRadius = '3px';
    e.target.nextElementSibling.style.fontWeight = '700';
  };

  return (
    <>
      <div>
        <button className="inqury-btn" onClick={handleOpen}>
          GET INQUIRY
        </button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
              Get In Touch
            </Typography>
            <form onSubmit={handleSubmit} style={formStyle}>
              <div style={inputContainerStyle}>
                <input
                  type="text"
                  className="input-field"
                 
                  onFocus={handleInputFocus}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.nextElementSibling.style.top = '50%';
                      e.target.nextElementSibling.style.fontSize = '16px';
                      e.target.nextElementSibling.style.color = '#999';
                      e.target.nextElementSibling.style.padding = '0';
                      e.target.nextElementSibling.style.backgroundColor = '#fff';
                      e.target.nextElementSibling.style.borderRadius = '0';
                      e.target.nextElementSibling.style.fontWeight = 'normal';
                    }
                  }}
                  required
                />
                <label className="input-label" style={labelStyle}>
                  Name *
                </label>
              </div>
              <div style={inputContainerStyle}>
                <input
                  type="email"
                  className="input-field"
                  
                  onFocus={handleInputFocus}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.nextElementSibling.style.top = '50%';
                      e.target.nextElementSibling.style.fontSize = '16px';
                      e.target.nextElementSibling.style.color = '#999';
                      e.target.nextElementSibling.style.padding = '0';
                      e.target.nextElementSibling.style.backgroundColor = '#fff';
                      e.target.nextElementSibling.style.borderRadius = '0';
                      e.target.nextElementSibling.style.fontWeight = 'normal';
                    }
                  }}
                  required
                />
                <label className="input-label" style={labelStyle}>
                  Email *
                </label>
              </div>
              <div style={inputContainerStyle}>
                <input
                  type="text"
                  className="input-field"
                  
                  onFocus={handleInputFocus}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.nextElementSibling.style.top = '50%';
                      e.target.nextElementSibling.style.fontSize = '16px';
                      e.target.nextElementSibling.style.color = '#999';
                      e.target.nextElementSibling.style.padding = '0';
                      e.target.nextElementSibling.style.backgroundColor = '#fff';
                      e.target.nextElementSibling.style.borderRadius = '0';
                      e.target.nextElementSibling.style.fontWeight = 'normal';
                    }
                  }}
                  required
                />
                <label className="input-label" style={labelStyle}>
                  Enquire For? *
                </label>
              </div>
              <div style={inputContainerStyle}>
                <textarea
                  className="input-field"
                 
                  rows={4}
                  onFocus={handleInputFocus}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.nextElementSibling.style.top = '50%';
                      e.target.nextElementSibling.style.fontSize = '16px';
                      e.target.nextElementSibling.style.color = '#999';
                      e.target.nextElementSibling.style.padding = '0';
                      e.target.nextElementSibling.style.backgroundColor = '#fff';
                      e.target.nextElementSibling.style.borderRadius = '0';
                      e.target.nextElementSibling.style.fontWeight = 'normal';
                    }
                  }}
                  required
                ></textarea>
                <label className="input-label" style={labelStyle}>
                  Message *
                </label>
              </div>
              <button type="submit" className="submit-btn" style={modalButtonStyle}>
                Submit
                <span style={modalButtonBefore}></span>
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CustomButton;
