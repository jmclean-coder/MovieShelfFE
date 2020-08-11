import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <Container id="site-footer">
      <h3 className="footer-text">
        Created by:{" "}
        <a href="https://github.com/justinclanglinais" style={{ color: "white" }}>Justin Langlinais</a>,{" "}
        <a href="https://github.com/ckaiser258" style={{ color: "white" }}>Colton Kaiser</a>,{" "}
        <a href="https://github.com/jmclean-coder" style={{ color: "white" }}>Joshua Mclean</a>, and{" "}
        <a href="https://github.com/MikaJakePizzaBake" style={{ color: "white" }}>Trevor Low</a>
      </h3>
    </Container>
  );
}
