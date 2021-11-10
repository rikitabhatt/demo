import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ItemBlock from "../Common/ItemBlock";
class RelatedProduct extends Component {
  render() {
    return (
      <div>
        <section className="related-products-wrapper section-wrapper">
          <Container fluid>
            <div className="related-products-block">
              <h3>Related Products</h3>
            </div>
            <div className="related-products-slider">
              <div className="slick-carousel related-slider">
                <div className="realted-product-item">
                  <ItemBlock />
                </div>
                <div className="realted-product-item">
                  <ItemBlock />
                </div>
                <div className="realted-product-item">
                  <ItemBlock />
                </div>
                <div className="realted-product-item">
                  <ItemBlock />
                </div>
                <div className="realted-product-item">
                  <ItemBlock />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}
export default RelatedProduct;
