import React from "react";
import Container from "react-bootstrap/Container";

function HomePage() {
  return (
    <header>
      <br></br>
      <h1>Welcome!</h1>

      <Container>
        <img
          src={
            "https://techcrunch.com/wp-content/uploads/2018/09/GettyImages-104187321.jpg"
          }
          style={{ width: "100%", height: 575 }}
        ></img>
      </Container>
    </header>
  );
}
export default HomePage;
