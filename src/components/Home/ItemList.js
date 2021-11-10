import React, { Component } from "react";
import ItemBlock from "../Common/ItemBlock";

import { Container, Row, Col } from "react-bootstrap";

class ItemList extends Component {
  render() {
    return (
      <div>
        <div className="home-items-wrapper m-t-10">
          <Container fluid>
            <Row>
              <Col lg={4} md={6}>
                <ItemBlock />
              </Col>

              <Col lg={4} md={6}>
                <ItemBlock />
              </Col>

              <Col lg={4} md={6}>
                <ItemBlock />
              </Col>
              <Col lg={4} md={6}>
                <ItemBlock />
              </Col>

              <Col lg={4} md={6}>
                <ItemBlock />
              </Col>

              <Col lg={4} md={6}>
                <ItemBlock />
              </Col>
              <Col lg={4} md={6}>
                <ItemBlock />
              </Col>

              <Col lg={4} md={6}>
                <ItemBlock />
              </Col>

              <Col lg={4} md={6}>
                <ItemBlock />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center m-t-30">
                <a href="#" className="btn custom-btn transparent-btn">
                  <span className="text-position">Load More</span>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ItemList;
