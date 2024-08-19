import React from "react";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>{"Contact"}</title>
      </Helmet>

      <div className="contacts">
        <h1 className="contacts-heading">Contact</h1>
        <div className="contacts-container">
          <div className="contact">
            <h2 className="contact-title">Email</h2>
            <p className="contact-description">saihvadde1@gmail.com</p>
          </div>
          <div className="contact">
            <h2 className="contact-title">Phone</h2>
            <p className="contact-description">9695201653</p>
          </div>
          <div className="contact">
            <h2 className="contact-title">LinkedIn</h2>
            <p className="contact-description">
              https://www.linkedin.com/in/sai-harsha-vadde/
            </p>
            <Button
              className="contact-button"
              href="https://www.linkedin.com/in/sai-harsha-vadde/"
            >
              <p className="linkedin">LinkedIn</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
