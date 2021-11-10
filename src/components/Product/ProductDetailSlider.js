import React from 'react';
import { Component , useState, useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
class ProductDetailSlider extends Component {
  constructor(props) {
    super(props);
   
  }


  render() {
    return (
      <div>
        <section className="detail-page-wrapper section-wrapper p-b-50">
          <Container fluid>
            <div className="product-main-slider">
              <div className="slider slider-content">
              {Object.keys(this.props.ProductDetailSlider).length  ? this.props.ProductDetailSlider.product_gallery_images.map((image, index) =>
              <div className="slick-item" key={index}>
              <div className="lightgallery product-slider-img">
                <div
                  data-src={
                    image.small
                  }
                >
                  <Image
                    src={
                      image.small
                    }
                    fluid
                  />
                  <span className="ti-zoom-in magnifier-icon"></span>
                </div>
              </div>
            </div>  
                
            ) :
        'No Products found'}
               
           
              </div>

              <div className="slick-thumbnail-wrapper bg-light-grey">
                <Row className="justify-content-center">
                  <Col md={12} lg={4}>
                  <div className="slider slider-thumb">
                  { Object.keys(this.props.ProductDetailSlider).length  ? this.props.ProductDetailSlider.product_gallery_images.map((image, index) =>
                   
                       <div className="slick-thumb-item"  key={index}>
                        <div className="slick-thumb">
                          <Image
                            src={
                              image.orignal
                            }
                            fluid
                          />
                        </div>
                      </div>
                      ) :  'No Products found'}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="clearfix"></div>
          </Container>
        </section>
      </div>
    );
  }
}

export default ProductDetailSlider;
