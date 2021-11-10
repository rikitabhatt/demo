import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import CounterInput from "react-counter-input";
import StorageManager from '../../common/StorageManager';
import * as Config from '../../common/Config';
import httpClient from '../../connection/httpClient'
import {getUser,getUserID} from '../../common/Helper';
import { alertService } from '../../_services';
import ReactDOM,{ withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {showloginmodel} from '../actions';
class ProductFeatures extends Component {
   constructor(props) {
    super(props);
    this.state = {
      qty: 0,
      is_user_favorite: this.props.productFeatures.in_wishlist,
    }
    console.log('pp', this.props.productFeatures)
  }
  updateQty = (qty) => {
    this.setState({
      qty : qty
    });
   
  }
  addProductToWishlist(product_id,is_fev) {   
   //alert(is_fev);
    if(is_fev == true){
      this.setState({ is_user_favorite : false });  
    }else{
      this.setState({ is_user_favorite : true });  
    }
   
    
    let requestObj = {
    project_api_token: Config.API_TOKEN,
    //company_id:StorageManager.getCompany alertService.success('Success!!', options)
    company_id:1,
    user_id:getUserID(),
    product_id:product_id,
  
  }
  httpClient.post("add-to-wishlist", requestObj)
      .then((response) => {

          const { data } = response;
          const { status, message } = data;
          if (status || status == true) {
              //alert(message);
          }else{
            
          }
      }).catch((error) => {

       }); 

 }
  addProductToItem(product_id) { 
    //alertService.success('Success!!', {autoClose: this.props.autoClose}) ;
    let requestObj = {
      project_api_token: Config.API_TOKEN,
     
      company_id:1,
      user_id:getUserID(),
      product_id:product_id,
      qty:this.state.qty,
    }
    httpClient.post("add-to-cart", requestObj)
        .then((response) => {
            const { data } = response;
            const { status, message } = data;
           
            if (status || status == true) {
               
                window.location.href = "/Cart";
                //prop.history.push(`/Cart`);
            }else{
              
            }
        }).catch((error) => {

         }); 

  }
  render() {
    // if(!this.props.productFeatures.length){
    //   return false;
    // }
  //alert(this.state.is_user_favorite);
    const {productFeatures} = this.props;
  
    const isAuthenticated = StorageManager.getIsLoggedIn();
    const is_fev = productFeatures.in_wishlist;
    return (
      <div>
        <section className="product-decription section-wrapper">
          <div className="product-description-block">
            <Container>
              <div className="product-title-wrapper">
                <Row className="align-center">
                  <Col lg={9} md={8}>
                  <h2 className="product-detail-title">{productFeatures.product_name}
                 
                   { isAuthenticated ?
                      <a onClick={(e) => this.addProductToWishlist(productFeatures.product_id,this.state.is_user_favorite)} 
                          className={"item-block-wishlist " + (this.state.is_user_favorite == true ?"wishlist-ico-hover":"wishlist-ico")}></a>: 
                          <a onClick={() => { this.props.showloginmodel()}} className="item-block-wishlist wishlist-ico"></a>}
                      </h2>
                  </Col>
                  <Col lg={3} md={4}>
                    <div className="product-price-wrapper">
                      <h2 className="old-price">${productFeatures.product_price}</h2>
                      <h2 className="actual-price">${productFeatures.product_discount_price}</h2>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="product-content-wrapper p-t-30">
                <Row>
                  <Col lg={9} md={8}>
                    <div className="product-detail-content">
                      <ul className="product-features">
                      { Object.keys(this.props.productFeatures).length  ? this.props.productFeatures.product_assign_attribute_with_value.map((attribute, index) =>
                        <li>
                          <div className="feature-content">
                            <label>{attribute.attribute_name} :</label>{attribute.value}
                          </div>
                        </li>
                      ) :  '<li><div className="feature-content">No attribute value found</div></li>' }
                      </ul>
                    </div>
                  </Col>
                  <Col lg={3} md={4}>
                    <div className="productpage-cart-details">
                      <div className="productpage-cart-block">
                        <div className="productpage-quanity-block">
                          <label>quantity</label>
                          <div className="qt-counter">
                            <CounterInput
                              min={0}
                              max={50}
                              onCountChange={(count) =>  this.updateQty(count)}
                            />
                          </div>
                        </div>
                      </div>
                     
                      
                      <div className="productpage-cart-block">
                      { isAuthenticated ? <button   disabled = {this.state.qty == 0 } onClick={(e) => this.addProductToItem(productFeatures.product_id)}
                          className="btn custom-btn transparent-btn purple-text w-100 withdisable"
                        > 
                          <span className="text-position">Add to Cart</span>
                        </button>: <a onClick={() => { this.props.showloginmodel()}} className="btn custom-btn transparent-btn w-100 purple-text">
                        Add to cart
                      </a>}
                      </div>
                     
                      {Object.keys(this.props.productFeatures).length && productFeatures.product_tags.length ?
                      <div className="productpage-tags-block">
                        <h5>Tags</h5>
                        <div className="tags-wrapper">
                        { Object.keys(this.props.productFeatures).length  ? this.props.productFeatures.product_tags.map((tags, index) =>
                        
                          <a rel="tag">
                           {tags.name} 
                          </a> 
                          ) :  'No tags found' }
                         </div>  
                      </div>:''}
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const loginpopupstate = state.loginPopup;
  return {
    loginpopupstate,
  };
}
function mapDispatchToProps(dispatch)  {
  return {
    showloginmodel: () => dispatch(showloginmodel())
      
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductFeatures);
