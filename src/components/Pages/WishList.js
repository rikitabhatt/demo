import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CounterInput from "react-counter-input";
import { Container, Row, Col, Breadcrumb, Image, Form } from "react-bootstrap";
import HomeFeatues from "../Home/HomeFeatues";

import StorageManager from '../../common/StorageManager';
import * as Config from '../../common/Config';
import httpClient from '../../connection/httpClient'
import {getUser,getUserID} from '../../common/Helper';
import {connect} from 'react-redux';
import { showloginmodel } from "../actions";
class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoClose: true,
      listItems : [],
      values :[],
      id:[],
      wishListCount :0,
      errors: {},
      loading : false,
    }
    //this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount()
  {
      if(StorageManager.getIsLoggedIn()){this.loadWishlist();}
  }
  handleChange(count, index) {
    console.log(count+'dwerrew'+index); 
    let values = [...this.state.values];
    values[index] = count;
    this.setState({ values });
   
 }
 
 
  loadWishlist = () =>{
    if(!this.state.loading){
      // Set loading state to true to
      this.setState({
        loading : true,
      });

      let requestObj = {
          project_api_token: Config.API_TOKEN,
          page:this.state.page,
          // company_id:StorageManager.getCompany
          company_id:1,
          user_id:getUserID()
         
      }
      httpClient.post("get-user-wishlist", requestObj)
        .then((response) => {
           
            const { data } = response;
            const { status, message } = data;
           
            if (status || status == true) {
                const results = data.data,
                listItems = results.data,
                cartCount = results.count
                
                if(listItems.length){
                 
                  this.setState({
                    listItems : listItems,
                    loading: false,
                  });
                 
                  
              }
            }else{
              
            }
        }).catch((error) => { });
       
    }
  }
  removeItem(item_id) {
    //console.log('item id'+item_id);
    let requestObj = {
      project_api_token: Config.API_TOKEN,
      //company_id:StorageManager.getCompany
      company_id:1,
      user_id:getUserID(),
      id:item_id
    }
    httpClient.post("remove-wishlist-item", requestObj)
        .then((response) => {
           
            const { data } = response;
            const { status, message } = data;
           
            if (status || status == true) {
                const results = data.data,
                listItems = results.data,
                cartCount = results.count
                if(listItems.length){
                  this.setState({
                    listItems : listItems,
                    loading: false,
                  });
              }else {
                this.setState({
                  listItems : [],
                  loading: false,
                });
              }
            }else{
              
            }
        }).catch((error) => { });

  }
addProductToCart(index,product_id,item_id) { 
    
    const qty = this.state.values[index];
    let requestObj = {
    project_api_token: Config.API_TOKEN,
    //company_id:StorageManager.getCompany alertService.success('Success!!', options)
    company_id:1,
    user_id:getUserID(),
    product_id:product_id,
    qty:qty,
  }
  httpClient.post("add-to-cart", requestObj)
      .then((response) => {
          const { data } = response;
          const { status, message } = data;
         
          if (status || status == true) {
              //// remover item from wishlist
              this.removeItem(item_id);
              
          }else{
            
          }
      }).catch((error) => {

       }); 

}
  getItems= () =>{  console.log(this.state.listItems);
    return this.state.listItems.length ? this.state.listItems.map((item, index) =>
    <div key={index} className="dc-table-content dc-table-row">
    <a href="#" key={index} id={item.id} onClick={(e) => this.removeItem(item.id)} className="table-close-icon">
      <span className="ti-close"></span>
    </a>
    <Row>
      <Col lg={2} md={12}>
        <div className="dc-product-img">
          <Link key={item.product_id} to={`/ProductDetail/${item.product_id}`} className="text-black">
            <Image
              alt="free shipping icon"
              src={item.product_thumbnail}
              
              fluid
            />
          </Link>
        </div>
      </Col>
      <Col lg={2} md={12}>
        <div className="dc-product-detail dc-product-data">
          <Link key={item.product_id} to={`/ProductDetail/${item.product_id}`}  className="text-black d-block">
            <h6>
              <label className="table-label">
                Product Details:
              </label>
              {item.product_name}
            </h6>
            {Object.keys(item.product_assign_attribute_with_value).length && item.product_assign_attribute_with_value.length ?
                    <p className="m-b-0">
                      {Object.keys(item.product_assign_attribute_with_value).length ? item.product_assign_attribute_with_value.map((items, index) =>
                        <span className="label"><b>{items.attribute_name}</b>: {items.value}   </span>):''}
                       
                    </p>:''}
          </Link>
        </div>
      </Col>
      <Col lg={2} md={12}>
        <div className="dc-product-data dc-quantity-data text-center">
          <h6>
            <label className="table-label">Quantity :</label>{" "}
          </h6>
          <div className="qt-counter">
            <CounterInput  name={'customRadio' + item.id} dataId={item.id}
              min={0}
              max={50}
              onCountChange={(count) => {this.handleChange(count, index)}
              }
            />
          </div>
        </div>
      </Col>
      <Col lg={2} md={12}>
        <div className="dc-product-data text-center">
          <h6>
            <label className="table-label">Total :</label>
            ${item.product_discount_price}
          </h6>
        </div>
      </Col>
      <Col lg={1} md={12}>
        <div className="dc-product-data text-center">
          <h6>
            <label className="table-label">Stock :</label>
            {item.product_stock?'In Stock':'Not in Stock'}
            
          </h6>
        </div>
      </Col>
      <Col lg={3} md={12}>
        <div className="dc-product-data text-center">
          <button disabled = {item.product_stock == 0}
           className="btn custom-btn transparent-btn purple-text"
           onClick={(e) => this.addProductToCart(index,item.product_id,item.id)}
          >
            <span className="text-position">Add To cart</span>
          </button>
        </div>
      </Col>
    </Row>
  </div>) :'Your Wishlist is Empty';
  };
 
  render() {
   
    const isAuthenticated = StorageManager.getIsLoggedIn();
    return (
      <div>
        <Helmet>
          <title>Dixie Tile -Wishlist</title>
        </Helmet>
        <section className="breadcum-wrapper p-t-50">
          <Container fluid>
            <Row>
              <Col md={12}>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Wishlist</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="cart-wrapper section-wrapper p-b-50">
          <Container fluid>
            {isAuthenticated?
            <div className="dc-table-wrapper">
              {/* dc table heading */}
              <div className="dc-table-heading dc-table-row">
                <Row>
                  <Col md={2} sm={12}>
                    <h3>Product</h3>
                  </Col>
                  <Col sm={2}>
                    <h3>Product Details</h3>
                  </Col>
                  <Col sm={2}>
                    <h3>Quantity</h3>
                  </Col>
                  <Col sm={2}>
                    <h3>Price</h3>
                  </Col>
                  <Col sm={1}>
                    <h3>Stock</h3>
                  </Col>
                  <Col sm={2}>
                    <h3>&nbsp;</h3>
                  </Col>
                </Row>
              </div>

              {/************* dc table row **************/}
             
              {this.getItems()}               
            
            </div>:<div>You are not login . <a  onClick={() => { this.props.showloginmodel()}} className="cart-btn text-purple text-uppercase font-bt">
Sign in to your account</a></div>}
          </Container>
        </section>
        <HomeFeatues />
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

export default connect(mapStateToProps,mapDispatchToProps)(WishList);
