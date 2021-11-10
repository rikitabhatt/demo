import React from 'react';
import { Component , useState, useEffect } from "react";
import {Router, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import HomeFeatues from "../Home/HomeFeatues";
import AboutCompany from "../Home/AboutCompany";
import ProductDesc from "../Product/ProductDesc";
import ProductFeatures from "../Product/ProductFeatures";
import ProductDetailSlider from "../Product/ProductDetailSlider";
import RelatedProduct from "../Common/RelatedProduct";

import * as Config from '../../common/Config';
import httpClient from '../../connection/httpClient';
import StorageManager from '../../common/StorageManager';
import {getUser,getUserID} from '../../common/Helper';


import { matchPath } from 'react-router';
class ProductDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      result : [],
      loading : false
  }
  }
  componentDidMount() {
    let requestObj = {
      project_api_token: Config.API_TOKEN,
      // company_id:StorageManager.getCompany
      company_id:1,
      product_id: this.props.match.params.productId,
      user_id:StorageManager.getIsLoggedIn()?getUserID():'',
    }
   
    httpClient.post("get-product-detail", requestObj)
      .then((response) => {
          const { data } = response;
          const { status, message } = data;
          if (status || status == true) {
            this.setState({ result:data.data });
             
          }else{
            
          }
      })
      .catch((error) => {
         console.log(error);
    });
      
     
  }
  render() {
    let product = this.state.result;
    const isAuthenticated = StorageManager.getIsLoggedIn();
    console.log('erdsder',this.state.result);
    return (
    
      <div>
        <Helmet>
          <title>Dixie Tile - Product Details</title>
        </Helmet>
        <section className="breadcum-wrapper p-t-50">
          <Container fluid>
            <Row>
              <Col md={12}>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  {/* <Breadcrumb.Item href="#">
                    Shop whole project{" "}
                  </Breadcrumb.Item> */}
                  <Breadcrumb.Item href="#">Kitchen tiles</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                   {product.product_name}
                   
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>
        {(product.product_gallery_images) ?
        <ProductDetailSlider ProductDetailSlider={product}/>:''}
         {this.state.result != '' && this.state.result != '' ?<ProductFeatures productFeatures={this.state.result}/>:''}
       
        <ProductDesc productDesc={product.product_description}/>
       
        <AboutCompany />
        <HomeFeatues />
      </div>
    );
  }
}

export default ProductDetail;
