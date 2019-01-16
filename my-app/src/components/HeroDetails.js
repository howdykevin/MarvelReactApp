import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./HeroDetails.css";
import { Link } from "react-router-dom";

class HeroData extends Component {
  render() {
    return (
      <Container fluid={true} className="mt-3 mt-xl-0">
        {/* image and appearance desc includes biography and powerstats */}
        <Row>
          <Col xs="12" sm="8" md="12" lg="5" className="details">
            <img
              className="w-100 img-fluid"
              src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
              alt="Batman"
            />
          </Col>
          <Col xs="12" sm="4" md="12" lg="7" className="details">
            <h1>Lorem ipsom Text can you see me?</h1>
            <Link to="/">
              <Button color="info">Back</Button>
            </Link>
          </Col>
        </Row>
        {/* Biography and powerstats */}
        {/* <Row>
          <Col xs="12" style={tempStyle}>
            <h4>Content</h4>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default HeroData;
