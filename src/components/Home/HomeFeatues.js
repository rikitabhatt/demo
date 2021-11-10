import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Image } from "react-bootstrap";
class HomeFeatues extends Component {
  render() {
    return (
      <div>
        <section className="home-features-wrapper section-wrapper bg-light-grey p-t-50 p-b-50">
          <Container>
            <Row>
              <Col sm={4}>
                <div className="feature-block after-border-right text-center">
                  <div className="feature-img">
                    <Image
                      alt="free shipping icon"
                      src={
                        process.env.MIX_PUBLIC_URL +"/assets/images/free-shipping.png"
                      }
                      fluid
                    />
                  </div>
                  <div className="feature-content font-bt text-black">
                    <h6 className="mb-0">
                      <span className="text-uppercase">FREE SHIPPING</span>
                      <br />
                      for orders above $1000
                    </h6>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div className="feature-block after-border-right text-center">
                  <div className="feature-img">
                    <Image
                      alt="free shipping icon"
                      src={
                        process.env.MIX_PUBLIC_URL + "/assets/images/earth-icon.png"
                      }
                      fluid
                    />
                  </div>
                  <div className="feature-content font-bt text-black">
                    <h6 className="mb-0">
                      North America <br />
                      Wide Deliver
                    </h6>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div className="feature-block text-center">
                  <div className="feature-img">
                    <Image
                      alt="free shipping icon"
                      src={
                        process.env.MIX_PUBLIC_URL + "/assets/images/pre-icon.png"
                      }
                      fluid
                    />
                  </div>
                  <div className="feature-content font-bt text-black">
                    <h6 className="mb-0">
                      100% Premium <br />
                      Quality and Thickness
                    </h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
export default HomeFeatues;
