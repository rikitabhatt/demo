import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import * as Config from '../../common/Config';

import httpClient from '../../connection/httpClient';
import ScaleLoader from "react-spinners/ScaleLoader";
import StorageManager from '../../common/StorageManager';

import {toast} from 'react-toastify';


import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Image,
  Form,
  Button, Alert,
} from "react-bootstrap";
import HomeFeatues from "../Home/HomeFeatues";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phoneno: "",
      email: "",
      message: "",
      errors: {},
      show:false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validateForm(){
    let errors = {};
    let formIsValid = true;
    
      if (!this.state.firstname) {
        formIsValid = false;
        errors['firstname'] = 'Please enter your First name';
      }
      if (!this.state.lastname) {
        formIsValid = false;
        errors['lastname'] = 'Please enter your Last name';
      }
      if (!this.state.phoneno) {
        formIsValid = false;
        errors['phoneno'] = 'Please enter your Phone no';
      }
      if (!this.state.message) {
        formIsValid = false;
        errors['message'] = 'Please enter your message';
      }
      if (!this.state.email) {
        formIsValid = false;
        errors['email'] = 'Please enter your Email address';
      }
      var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      var email = this.state.email;
      if (!emailPattern.test(email)) {
        formIsValid = false;
        errors["email"] = "Please enter valid Email address.";

      }
    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
  AlertDismissible = (event) => {
    
    this.setState({
      show: false,
    });
      
  };
  handleReset() {
    this.setState({
      firstname: "",
      lastname: "",
      phoneno: "",
      email: "",
      message: "",
      errors: {},
    });
  };
  handleSubmit(event) {
    
   
    if(!this.validateForm()){
      return false;
    }
    let requestObj = {
     project_api_token: Config.API_TOKEN,
     company_id:1,
     firstname :this.state.firstname,
     lastname :this.state.lastname,
     email :this.state.email,
     phoneno :this.state.phoneno,
     message :this.state.message
    }
    httpClient.post("contact-us", requestObj)
    .then((response) => {
     
        const  status = response.data.status, 
               message = response.data.message, 
               errorsdata = response.data.error;
       
        if (status == true) { 
          this.handleReset();
          this.setState({
            show: true,
          });
        }
        if (status == false) {
        

          let errors = {};
          errorsdata.forEach((error) => {
            errors[error.field] = error.message;
          })
         
          this.setState({
            errors: errors,
          });
          console.log('err-data', this.state.errors);
          return;
        }
    })
    .catch((error) => {
        toast.error(error);
  });
    event.preventDefault();
  }
 
  render() {
   
    return (
      <div>
        <Helmet>
          <title>Dixie Tile - Contac Us</title>
        </Helmet>
        
        <section className="breadcum-wrapper p-t-50">
          <Container fluid>
            <Row>
              <Col md={12}>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="contact-wrapper section-wrapper p-b-50">
          <Container>
            <div className="contact-border">
              <Row>
                <Col md={12}>
                <Alert show={this.state.show} variant="success">
                  <Alert.Heading></Alert.Heading>
                  <p>Thank you for getting in touch!</p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button   type="button"
                         onClick={this.AlertDismissible} variant="outline-success">
                      Close me y'all!
                    </Button>
                  </div>
                </Alert>
                </Col>
              </Row>
              <Row>
                <Col md={6} lg={4}>
                  <div className="contact-address-wrapper p-35">
                    {/* address block 1 */}
                    <div className="contact-address-block">
                      <h3>Reach Us</h3>
                      <div className="contact-detail-wrapper">
                        <div className="contact-detail-content">
                          <p className="contact-label">Address</p>
                          <p className="mb-0">
                            1375 Aimco Blvd Unit 3-4, Mississauga, ON L4W 1B5
                          </p>
                        </div>
                        <div className="contact-detail-content">
                          <p className="contact-label">Say hello</p>
                          <a href="tel:(905)-752-6880">(905)-752-6880</a>
                        </div>
                        <div className="contact-detail-content">
                          <p className="contact-label">Email us</p>
                          <a href="mailto:info@dixietileshop.com">
                            info@dixietileshop.com
                          </a>
                        </div>
                      </div>
                      <hr className="contct-border" />
                      <div className="contact-detail-wrapper">
                        <div className="contact-detail-content">
                          <p className="contact-label">Address</p>
                          <p className="mb-0">
                            1375 Aimco Blvd Unit 3-4, Mississauga, ON L4W 1B5
                          </p>
                        </div>
                        <div className="contact-detail-content">
                          <p className="contact-label">Say hello</p>
                          <a href="tel:(905)-752-6880">(905)-752-6880</a>
                        </div>
                        <div className="contact-detail-content">
                          <p className="contact-label">Email us</p>
                          <a href="mailto:info@dixietileshop.com">
                            info@dixietileshop.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={8}>
                  <div className="contact-form-wrapper p-35">
                    <h3>Get in Touch</h3>
                    <p>
                      Feel free to include anything you would like us to know.
                    </p>
                    <Form id="contactus">
                      <Row>
                        <Col lg={6}>
                          <Form.Group controlId="firstname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              value={this.state.firstname}
                              onChange={this.handleChange}
                              name="firstname"
                            />
                             <div className='error'>{this.state.errors.firstname}</div>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group controlId="lastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              value={this.state.lastname}
                              onChange={this.handleChange}
                              name="lastname"
                            />
                             <div className='error'>{this.state.errors.lastname}</div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="text"
                              value={this.state.phoneno}
                              onChange={this.handleChange}
                              name="phoneno"
                            />
                             <div className='error'>{this.state.errors.phoneno}</div>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                              type="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              name="email"
                            />
                             <div className='error'>{this.state.errors.email}</div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={this.state.message}
                          onChange={this.handleChange}
                          name="message"
                        />
                        <div className='error'>{this.state.errors.message}</div>
                      </Form.Group>
                      <Button
                        className="btn custom-btn  white-btn"
                        type="button"
                         onClick={this.handleSubmit}
                      >
                        <span className="text-position">Submit</span>
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <HomeFeatues />
      </div>
    );
  }
}

export default ContactUs;
