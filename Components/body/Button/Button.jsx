import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./Button.css";
import { useForm } from "@formspree/react";

const CustomButton = () => {
  const [state, handleSubmit] = useForm("xqkrkqeb");

  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    enquireFor: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    enquireFor: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSubmitted(false);
    setFormValues({
      name: "",
      email: "",
      enquireFor: "",
      message: "",
    });
    setErrors({
      name: false,
      email: false,
      enquireFor: false,
      message: false,
    });
  };

  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { name, email, enquireFor, message } = formValues;
    const newErrors = {
      name: !name,
      email: !email,
      enquireFor: !enquireFor,
      message: !message,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((val) => !val)) {
      try {
        await handleSubmit(e);
        setSubmitted(true);
      } catch (error) {
        console.error(error);
        // Handle form submission error here
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <div>
        <button className="inqury-btn" onClick={handleShow}>
          GET INQUIRY
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquire For</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted ? (
            <p>Thank you for your inquiry!</p>
          ) : (
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>
                  Name<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoFocus
                  value={formValues.name}
                  onChange={handleInputChange}
                  isInvalid={errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>
                  Email<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  required
                  autoFocus
                  value={formValues.email}
                  onChange={handleInputChange}
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="enquireFor">
                <Form.Label>
                  Enquire For<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoFocus
                  value={formValues.enquireFor}
                  onChange={handleInputChange}
                  isInvalid={errors.enquireFor}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your Enquiry.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>
                  Example textarea<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  required
                  value={formValues.message}
                  onChange={handleInputChange}
                  isInvalid={errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your Message.
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!submitted && (
            <button className="inqury-btn" type="submit">
              Submit
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomButton;
