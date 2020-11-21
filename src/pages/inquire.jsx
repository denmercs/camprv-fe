import React from "react";
import { Container } from "react-bootstrap";
import "./inquire.scss";

const Inquire = () => {
  return (
    <Container>
      <h3 className="inquire-title">Inquire Now</h3>
      <iframe
        id="sprout-iframe"
        src="//api.sproutstudio.com/leads/viewform/5b7f5f90f3973e42c3512e1bfe310fd9449ef0039b3d2f79/167179"
        frameBorder="0"
        scrolling="no"
        className="inquire-form"
      ></iframe>
    </Container>
  );
};

export default Inquire;
