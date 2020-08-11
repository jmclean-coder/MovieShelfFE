import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <Container id="site-footer">
      <h3 className="footer-text">
        Created by:{" "}
        <a
          href="https://github.com/justinclanglinais"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Justin Langlinais
        </a>
        ,{" "}
        <a
          href="https://github.com/ckaiser258"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Colton Kaiser
        </a>
        ,{" "}
        <a
          href="https://github.com/jmclean-coder"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Joshua Mclean
        </a>
        , and{" "}
        <a
          href="https://github.com/MikaJakePizzaBake"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Trevor Low
        </a>
      </h3>
      {
        //Ran into trouble trying to style these in the css file or in the h2/container tags. So styles are declared inline here
      }
    </Container>
  );
}
