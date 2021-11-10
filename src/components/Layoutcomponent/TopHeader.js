import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Notifications from "./Notifications";
import CartDropDown from "./CartDropDown";
import UserDropDown from "./UserDropDown";
import * as Config from '../../common/Config';
import httpClient from '../../connection/httpClient';
import ScaleLoader from "react-spinners/ScaleLoader";
import StorageManager from '../../common/StorageManager';
import {getUser} from '../../common/Helper';
import {connect} from 'react-redux'


import {
  Container,
  Row,
  Modal,
  Col,
  Image,
  Button,
  Form,
  InputGroup,
  FormControl,Alert
} from "react-bootstrap";
import { showloginmodel } from "../actions";

class TopHeader extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handlePasswordShow = this.handlePasswordShow.bind(this);
    this.handlePasswordClose = this.handlePasswordClose.bind(this);
  
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
     // show: false,
      //Passwordshow: false,
      password:"",
      email: "",
      message: "",
      login_message:'',
      errors: {},
      //loginerroralert:false,
    };
  }

 

  handlePasswordClose() {
    this.setState({ Passwordshow: false });
  }

  handlePasswordShow() {
    this.setState({ show: false });
    this.setState({ Passwordshow: true });
  }
 
  handleLogout(){
    StorageManager.removeIsLoggedIn();
    StorageManager.removeIsLoggedIn();
    StorageManager.removeUser();
    window.location.href = "/"; 
  }
  render() {
    const loginstate = this.props.loginstate;
    console.log("rikita"+loginstate); 
    let styles = this.state.modalVisible
      ? { display: "block" }
      : { display: "none" };
    const isAuthenticated = StorageManager.getIsLoggedIn();
    return (
      
      <div className="top-header">
        <Container fluid>
          <Row className="align-center">
            <Col sm={3}>
              <div className="logo-wrapper">
                <NavLink to="/">
                  <Image
                    alt="logo"
                    src={process.env.MIX_PUBLIC_URL + "/assets/images/logo.png"}
                    fluid
                  />
                </NavLink>
                <a href="#" className="sale-mobile d-mobile">
                  SALE!
                </a>
              </div>
            </Col>
            <Col sm={9}>
              <div className="top-actions-wrapper">
                <ul className="top-actions-list">
                  <li className="header-dropdown">
                    <div className="search-container">
                      <Form action="/search" method="get">
                        <Form.Control
                          type="text"
                          className="search expandright"
                          id="searchright"
                          type="search"
                          name="q"
                          placeholder="Search"
                        />
                        <label
                          className="button searchbutton"
                          htmlFor="searchright"
                        >
                          <Image
                            className="dropdown-icon"
                            alt="search icon"
                            src={
                              process.env.MIX_PUBLIC_URL +"/assets/images/search.png"
                            }
                            fluid
                          />
                        </label>
                      </Form>
                    </div>
                  </li>
                  { isAuthenticated ?
                  <li className="header-dropdown wishlist-dropdown-li">
                    <a href="/WishList" className="btn btn-success link-btn">
                      <Image
                        className="dropdown-icon"
                        alt="notification icon"
                        src={
                          process.env.MIX_PUBLIC_URL + "/assets/images/wishlist.png"
                        }
                        fluid
                      />
                      <span className="badge-icon">04</span>
                    </a>
                  </li>:''}
                  { isAuthenticated ?
                  <li className="header-dropdown cart-dropdown-li">
                    <CartDropDown />
                  </li>:''}
                  { isAuthenticated ?
                  <li className="header-dropdown notification-dropdown-li">
                    <Notifications />
                  </li>:''}
                  { !isAuthenticated ?
                  <li className="header-dropdown">
                    <a
                     onClick={() => {
                      this.props.showloginmodel()
                  }}
                      className="btn btn-success link-btn"
                    >
                      <Image
                        className="dropdown-icon"
                        alt="notification icon"
                        src={process.env.MIX_PUBLIC_URL + "/assets/images/login.png"}
                        fluid
                      />
                    </a>
                  </li>:<li className="header-dropdown user-dropdown-li">
                    <UserDropDown />
                  </li>}
                 
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

        {/* /*<Modal
          ref={(el) => {
            this.dialog = el;
          }}
          show={this.state.show}
          onHide={this.handleClose}
          centered
          size="lg"
        >
          <Modal.Body>
            <div className="modal-container">
              <div className="modal-content-wrapper">
                <h3 className="m-b-30 text-center">User Login</h3>
                <Alert show={this.state.loginerroralert} variant="danger">
                
                  <Alert.Heading>
                  {this.state.login_message}
                  </Alert.Heading>
      
                </Alert>
                <Form>
                  <InputGroup className="user-name-input">
                    <InputGroup.Text id="basic-addon1">
                      <span className="ti-user"></span>
                    </InputGroup.Text>
                    <FormControl
                      aria-label="login Email"
                      aria-describedby="basic-addon1"
                      type="text"
                      value={this.state.email}
                      onChange={this.handleChange}
                      name="email"
                      placeholder="user@email.com"
                    />
                    
                  </InputGroup>
                  <div className='error'>{this.state.errors.email}</div>
                  <InputGroup className="password-input">
                    <FormControl
                      aria-label="login password"
                      aria-describedby="basic-addon2"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      name="password"
                      
                    />
                    
                    <InputGroup.Text id="basic-addon2">
                      <span className="ti-unlock"></span>
                    </InputGroup.Text>
                  </InputGroup>
                  <div className='error'>{this.state.errors.password}</div>
                  <Row>
                    <Col xs={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Remember Me" />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <a
                        href="#"
                        onClick={this.handlePasswordShow}
                        className="float-right text-capitalize forget-link text-underline"
                      >
                        Forgot password
                      </a>
                    </Col>
                  </Row>
                  <div className="text-center m-t-15">
                    <Button onClick={this.handleSubmit} href="#" className="btn custom-btn purple-btn">
                      <span className="text-position">LOGIN</span>
                    </Button>
                    
                  </div>

                  <p className="register-link m-b-0 m-t-25 text-center">
                    Not a uer ?{" "}
                    <a href="/ContactUs" className="text-uppercase">
                      Register Now
                    </a>
                  </p>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal> */}

        <Modal
          ref={(el) => {
            this.dialog = el;
          }}
          show={this.state.Passwordshow}
          onHide={this.handlePasswordClose}
          centered
          size="lg"
        >
          <Modal.Body>
            <div className="modal-container">
              <div className="modal-content-wrapper">
                <h3 className="m-b-30 text-center">Forgot Password</h3>
                <Form>
                  <InputGroup className="user-name-input">
                    <InputGroup.Text id="basic-addon1">
                      <span className="ti-user"></span>
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <div className="text-center m-t-15">
                    <Button href="#" className="btn custom-btn purple-btn">
                      <span className="text-position">Submit</span>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const loginstate = state.loginPopup;
  return {
    loginstate,

  };
}
function mapDispatchToProps(dispatch)  {
  return {
    showloginmodel: () => dispatch(showloginmodel())
      
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(TopHeader);
