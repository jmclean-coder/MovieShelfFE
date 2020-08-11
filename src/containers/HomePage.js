import React from "react";
import Container from "react-bootstrap/Container";

function HomePage() {
  return (
      <Container className="content-wrapper" style={{marginTop: 20, marginBottom: 20}}>
        <img
          src={
            "https://techcrunch.com/wp-content/uploads/2018/09/GettyImages-104187321.jpg"
          }
          style={{ width: "100%", height: 575 }}
        ></img>
      </Container>
  );
}
export default HomePage;
