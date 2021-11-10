import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { NavLink,Link } from "react-router-dom";
import CounterInput from "react-counter-input";
import { Container, Row, Col, Breadcrumb, Image, Form } from "react-bootstrap";
import HomeFeatues from "../Home/HomeFeatues";
import * as Config from '../../common/Config';
import httpClient from '../../connection/httpClient';
import ScaleLoader from "react-spinners/ScaleLoader";
import StorageManager from '../../common/StorageManager';
import {getUserID} from '../../common/Helper';
import {connect} from 'react-redux';
import { showloginmodel } from "../actions";
class Cart extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          cartItems : [],
          cartCount :0,
          errors: {},
          loading : false,
          subTotal: 0,
          is_applied:false,
          coupon_code:'',
          CoponDetails:[],
          coupon_amount:0,
          coupon_msg:'',
          delivery_method: "0",
          
      }
      this.handleChange = this.updateCouponCode.bind(this);
      this.onChangeRadio = this.onChangeRadio.bind(this);
  }
  componentDidMount()
  {   
      if(StorageManager.getIsLoggedIn()){this.loadCart();}
  }
  onChangeRadio(e){
    this.setState({delivery_method : e.target.value})
  }
  updateCouponCode  = (e) => {
    //console.log('ccc',e.target.value);
    if(e.target.value == ''){
      this.setState({
        coupon_code :'',
        is_applied:false,
      coupon_code:'',
      CoponDetails:[],
      coupon_amount:0,
      coupon_msg:'',
      });
    }else{
    this.setState({
      coupon_code : e.target.value,
      
    });
  }
   
  }
  checkCoupon() {
    if(this.state.is_applied ==false){
    let requestObj = {
      project_api_token: Config.API_TOKEN,
      //company_id:StorageManager.getCompany
      company_id:1,
      user_id:getUserID(),
      coupon_code:this.state.coupon_code,
    }
    httpClient.post("apply-coupon", requestObj)
        .then((response) => {
           
            const { data } = response;
            const { status, message } = data;
           
            if (status || status == true) {
                const results = data.data,
                is_valid = results.is_valid;
              
              if(is_valid == false){
                this.setState({
                    is_applied:false,
                    CoponDetails:[],
                    coupon_amount :0,
                    coupon_msg:message
                });
              }else {
              console.log('rikita',results.data);
               
                this.setState({
                  is_applied:true,
                  CoponDetails:results.data,
                  coupon_amount :results.data.discount,
                  coupon_msg:message
                });
            }
            }else{
              this.setState({
                is_applied:false,
                CoponDetails:[],
                coupon_amount :0,
                coupon_msg:''
              });
            }
        }).catch((error) => { });
    }else {
      //remove apply coupon
      this.setState({
        is_applied:false,
        CoponDetails:[],
       
        coupon_code:'',
       
        coupon_amount:0,
        coupon_msg:'',
      });
      this.state.coupon_code
    }
  }
  removeItem(item_id) {
    //console.log('item id'+item_id);
    let requestObj = {
      project_api_token: Config.API_TOKEN,
      page:this.state.page,
      // company_id:StorageManager.getCompany
      company_id:1,
      user_id:getUserID(),
      id:item_id
     
    }
    httpClient.post("remove-cart-item", requestObj)
        .then((response) => {
           
            const { data } = response;
            const { status, message } = data;
           
            if (status || status == true) {
                const results = data.data,
                cartItems = results.data,
                cartCount = results.count
                
                if(cartItems.length){
                 
                  this.setState({
                    cartItems : cartItems,
                    loading: false,
                  });
              }else {
                this.setState({
                  cartItems : [],
                  loading: false,
                  delivery_method: "0",
                });
              }
            }else{
              
            }
        }).catch((error) => { });

}
  updateQty = (qty,item_id) => {
    //console.log(qty +" -"+item_id);
    let requestObj = {
      project_api_token: Config.API_TOKEN,
      page:this.state.page,
      // company_id:StorageManager.getCompany
      company_id:1,
      qty:qty,
      user_id:getUserID(),
      user_cart_id:item_id
     
    }
    httpClient.post("update-cart-item-qty", requestObj)
        .then((response) => {
           
            const { data } = response;
            const { status, message } = data;
           
            if (status || status == true) {
                const results = data.data,
                cartItems = results.data,
                cartCount = results.count
                
                if(cartItems.length){
                 
                  this.setState({
                    cartItems : cartItems,
                    loading: false,
                  });
              }else {
                this.setState({
                  cartItems : [],
                  loading: false,
                  delivery_method: "0",
                });
              }
            }else{
              
            }
        }).catch((error) => { });
  }
  loadCart = () =>{
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
      httpClient.post("get-user-cart", requestObj)
        .then((response) => {
           
            const { data } = response;
            const { status, message } = data;
           
            if (status || status == true) {
                const results = data.data,
                cartItems = results.data,
                cartCount = results.count
                
                if(cartItems.length){
                 
                  this.setState({
                    cartItems : cartItems,
                    loading: false,
                  });
                 
                  this.setState({
                    subTotal: subTotal,
                  });
                }else{
                  this.setState({
                    delivery_method: "0",
                  });
                }
              }else{
                this.setState({
                  delivery_method: "0",
                });
              }
        }).catch((error) => { });
       
    }
  }
 
  
  getCartItems= () =>{ 
    return this.state.cartItems.length ? this.state.cartItems.map((cartItem, index) =>
            <div className="dc-table-content dc-table-row" key={index}>
            <a href="#" key={index} id={cartItem.id} onClick={(e) => this.removeItem(cartItem.id)}  className="table-close-icon">
              <span className="ti-close"></span>
            </a>
            <Row>
              <Col lg={2} md={12}>
                <div className="dc-product-img">
                  <a href="ProductDetail" className="text-black">
                    <Image
                      alt="free shipping icon"
                      src={cartItem.product_thumbnail}
                      fluid
                    />
                  </a>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="dc-product-detail dc-product-data">
                  <a href="ProductDetail" className="text-black d-block">
                    <h6>
                      <label className="table-label">
                        Product Details:
                      </label>
                      {cartItem.product_name}
                    </h6>
                    <p className="m-b-0">
                      <span className="label"> Size :</span> 12*13 inch,10mm
                      <span className="label"> Coverage:</span> 1Sqft / pc
                      <span className="label"> Material :</span> Marbel
                      <span className="label"> Usage:</span> Wall and Floor
                      <span className="label"> Color:</span> White
                      <span className="label"> Weight:</span> 3 pound/pc
                    </p>
                  </a>
                </div>
              </Col>
              <Col lg={2} md={12}>
                <div className="dc-product-data dc-quantity-data text-center">
                  <h6>
                    <label className="table-label">Quantity :</label>{" "}
                  </h6>
                  <div className="qt-counter">
                    <CounterInput
                      min={0}
                      max={50}
                      onCountChange={(count) =>this.updateQty(count, cartItem.id)}
                      count={cartItem.qty}
                    />
                  </div>
                </div>
              </Col>
              <Col lg={2} md={12}>
                <div className="dc-product-data text-center">
                  <h6>
                    <label className="table-label">Total :</label>
                    ${cartItem.product_discount_price}
                  </h6>
                </div>
              </Col>
              <Col lg={2} md={12}>
                <div className="dc-product-data text-center">
                  <h6>
                    <label className="table-label">Shiping status :</label>
                    ${(cartItem.qty*cartItem.product_discount_price).toFixed(2)}
                  </h6>
                </div>
              </Col>
              
            </Row>
          </div>) :'Your cart is Empty';
  };
  render() {
    let subTotal = 0; let  grandTotal = 0; 
  
    this.state.cartItems.map(function(cartItem, index){
      subTotal = subTotal + (cartItem.qty * cartItem.product_discount_price)
    })
    if(this.state.is_applied == true){
      subTotal = subTotal - ((subTotal * this.state.coupon_amount)/100);  
      
    }else{
      subTotal = subTotal + ((subTotal * this.state.coupon_amount)/100); 
    }
    grandTotal = subTotal;
    if(subTotal >0){
      if(this.state.delivery_method == "0"){
        grandTotal = subTotal;
      }else{
        grandTotal = grandTotal + 100; 
      }
    }else{
      grandTotal = subTotal;
    }
   
    return (
      
      <div>
       
        <Helmet>
          <title>Dixie Tile - Cart</title>
        </Helmet>
        <section className="breadcum-wrapper p-t-50">
          <Container fluid>
            <Row>
              <Col md={12}>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Cart</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="cart-wrapper section-wrapper p-b-50">
          <Container fluid>
          {StorageManager.getIsLoggedIn()?<>
            <div className="dc-table-wrapper">
              {/* dc table heading */}
              <div className="dc-table-heading dc-table-row">
                <Row>
                  <Col md={2} sm={12}>
                    <h3>Product</h3>
                  </Col>
                  <Col sm={4}>
                    <h3>Product Details</h3>
                  </Col>
                  <Col sm={2}>
                    <h3>Quantity</h3>
                  </Col>
                  <Col sm={2}>
                    <h3>Price</h3>
                  </Col>
                  <Col sm={2}>
                    <h3>Total</h3>
                  </Col>
                 
                </Row>
              </div>
           {this.getCartItems()}

              {/************* dc table row **************/}
              {/* <div className="dc-table-content dc-table-row p-t-0 p-b-0">
                <div className="bg-light-grey grey-bg-pseudo p-t-30 p-b-30">
                  <Row>
                    <Col
                      xl={{ span: 3, offset: 6 }}
                      lg={{ span: 4, offset: 5 }}
                    >
                      <div className="dx-sub-total">
                        <div className="dx-table-flex">
                          <h3 className="m-b-0">Sub Total</h3>
                          <h3 className="total-amount bg-purple p-10">${subTotal.toFixed(2)}</h3>
                        </div>
                        <fieldset>
                        <Form.Group as={Row} className="mb-3">
                        <Col sm={10}>
                         
                          <div className="dx-table-flex">
                          <div className="dx-shiping">
                            <Form.Check
                              type="radio"
                              label="STORE PICKUP"
                              name="delivery_method"
                              id="formHorizontalRadios1"
                              value="0"
                              checked = {this.state.delivery_method === "0"} 
                              onChange = {this.onChangeRadio} 
                              defaultChecked 
                            />
                          </div>
                          <h3 className="m-b-0 p-10 text-black">$0</h3>
                          </div>
                          <div className="dx-table-flex">
                          <div className="dx-shiping">
                            <Form.Check
                              type="radio"
                              label="SHIPPING"
                              name="delivery_method"
                              id="formHorizontalRadios2"
                              value="1"
                              checked = {this.state.delivery_method === "1"} 
                              onChange = {this.onChangeRadio}
                            />
                            <div className="shiiping-info">
                              <p>Flat shipping fee $50.</p>
                              <p>Free shipping for order above $2530.</p>
                            </div>
                           </div>
                           <h3 className="m-b-0 p-10 text-black">$0</h3>
                           </div>
                           </Col>
                        </Form.Group>
                      </fieldset>
                       
                      </div>
                    </Col>
                  </Row>
                </div>
              </div> */}

              {/************* dc table row **************/}
              {/* <div className="dc-table-content dc-table-count dc-table-row p-t-0 p-b-0">
                <Row className="align-center">
                  <Col xl={6} lg={6} sm={6}>
                    <div className="bg-light-grey grey-bg-pseudo">
                      <Row className="justify-content-end">
                        <Col lg={8} xl={6}>
                          <div className="coupon-code-wrapper">
                            <Form>
                              <Form.Group>
                                <Form.Label>
                                  Enter Your Coupon Code Here
                                </Form.Label>
                                <Form.Control type="text" value={this.state.coupon_code}  onChange={(e) => this.updateCouponCode(e)} />
                                {this.state.is_applied == true?<span className="success-green">{this.state.coupon_msg}</span>:''}
                                {this.state.is_applied !== true?<span className="error-red">{this.state.coupon_msg}</span>:''}
                                <button type="button" disabled = {this.state.coupon_code == '' } onClick={(e) => this.checkCoupon()} className="text-purple text-uppercase text-right cart-btn float-right font-bt">
                                  {this.state.is_applied ==true?'Remove Applied Coupon':'Apply Coupon Code'} 
                                </button>
                              </Form.Group>
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xl={3} lg={6} sm={6}>
                    <div className="dx-grand-total">
                      <div className="dx-table-flex">
                        <h3 className="m-b-0">Grand Total</h3>
                        <h3 className="total-amount bg-purple p-10">${grandTotal.toFixed(2)}</h3>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div> */}

              {/************* dc table row **************/}
              <div className="dx-btn-group text-center p-t-50">
              <Link to={`/Home`}
                  className="btn custom-btn transparent-btn purple-text"
                >
                  <span className="text-position">Continue shopping</span>
                </Link>
                <Link to={`/Checkout`}
                  className="btn custom-btn transparent-btn purple-text"
                >
                  <span className="text-position">proceed to checkout</span>
                </Link>
              </div>
            </div>
            </>:<div>You are not login . <a  onClick={() => { this.props.showloginmodel()}} className="cart-btn text-purple text-uppercase font-bt">
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

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
