import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Button.css";
import TextField from "@mui/material/TextField";
// import { useForm } from "@formspree/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "& > :not(style)": { m: 1, width: "25ch" },
};

const CustomButton = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [enquiryFor, setEnquiryFor] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    enquiryFor: false,
    message: false,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // Reset the form and errors when closing the modal
    setName("");
    setEmail("");
    setEnquiryFor("");
    setMessage("");
    setErrors({
      name: false,
      email: false,
      enquiryFor: false,
      message: false,
    });
  };
  const handleSubmit = () => {
    // Validate form fields
    const newErrors = {
      name: !name,
      email: !email,
      enquiryFor: !enquiryFor,
      message: !message,
      
    };

    if (Object.values(newErrors).some((error) => error)) {
      // If any field is empty, set errors
      setErrors(newErrors);
    } else {
      // Handle form submission logic here
      // For example, send data to an API or perform other actions
      // Reset form and close modal
      handleClose();
      handleSuccessOpen();
    }
  };

  const [successOpen, setSuccessOpen] = React.useState(false);

  const handleSuccessOpen = () => {
    setSuccessOpen(true);
    setTimeout(() => {
      setSuccessOpen(false);
    }, 4000); // Close the success modal after 4 seconds
  };

  const handleCloseSuccessModal = () => {
    setSuccessOpen(false);
  };



  return (
    <>
      <div>
        <button className="inqury-btn" onClick={handleOpen}>
          GET INQUIRY
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form" noValidate autoComplete="off">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Get The Enquiry
            </Typography>
            <Typography>
              <TextField
                fullWidth
                id="standard-basic"
                label="Name"
                required
                variant="standard"
                value={name}
                error={errors.name}
                helperText={errors.name ? "Please fill this field" : ""}
                onChange={(e) => setName(e.target.value)}
              />
            </Typography>
            <Typography>
              <TextField
                fullWidth
                id="standard-basic"
                label="Email"
                required
                variant="standard"
                value={email}
                error={errors.email}
                helperText={errors.email ? "Please fill this field" : ""}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Typography>
            <Typography>
              <TextField
                fullWidth
                id="standard-basic"
                label="EnquiryFor"
                required
                variant="standard"
                value={enquiryFor}
                error={errors.enquiryFor}
                helperText={errors.enquiryFor ? "Please fill this field" : ""}
                onChange={(e) => setEnquiryFor(e.target.value)}
              />
            </Typography>
            <Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                id="outlined-multiline-static"
                label="Message"
                required
                variant="standard"
                value={message}
                error={errors.message}
                helperText={errors.message ? "Please fill this field" : ""}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Typography>
            <Typography>
              <Button
                className="inqury-btn"
                sx={{ color: "white" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Typography>
          </Box>
        </Modal>
        <Modal
          open={successOpen}
          onClose={handleCloseSuccessModal}
          aria-labelledby="success-modal-title"
          aria-describedby="success-modal-description"
        >
          <Box sx={style} component="form" noValidate autoComplete="off">
            <Typography id="success-modal-title" variant="h6" component="h2">
              Thanks for the enquiry
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default CustomButton;
