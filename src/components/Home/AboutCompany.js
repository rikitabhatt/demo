import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";

class AboutCompany extends Component {
  render() {
    return (
      <div>
        <section className="home-about-wrapper section-wrapper p-t-50 p-b-50">
          <Container>
            <Row>
              <Col md={12}>
                <div className="home-about-block">
                  <h6 className="text-uppercase">About Company</h6>
                  <p className="mb-0">
                    Dixie Tile Shop is a Retailer that sells: mosaic tiles,
                    backsplash tiles, kitchen tiles, floor tiles, wall tiles,
                    bathroom tiles, and much more..! We have 100 of artistic
                    collections in Mississauga Showroom. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default AboutCompany;
