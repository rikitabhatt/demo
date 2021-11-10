import React, { Component } from "react";
import { Container } from "react-bootstrap";
class ProductDesc extends Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    const {productDesc} = this.props;
    return (
      <div>
        <section className="product-decription-wrapper section-wrapper p-t-50 p-b-50">
          <Container fluid>
            <div className="bg-light-grey p-t-50 p-b-50">
              <Container>
                <div className="product-description-text">
                  <h3>Description</h3>
                  {productDesc}
                </div>
              </Container>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

export default ProductDesc;
