import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as Config from '../../common/Config';

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
import { hideloginmodel } from "../actions";

  class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          show: false,
          password:"",
          email: "",
          message: "",
          login_message:'',
          errors: {},
          loginerroralert:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
    validateLogin(){
      let errors = {};
      let formIsValid = true;
      
        if (!this.state.password) {
          formIsValid = false;
          errors['password'] = 'Please enter your Password';
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
    
    handleSubmit(event) { 
    if(!this.validateLogin()){
       return false;
     }
     let errorsdata = [];
      let requestObj = {
       project_api_token: Config.API_TOKEN,
       company_id:1,
       password :this.state.password,
       email :this.state.email,
      }
      axios
        .post( Config.API_HOST+"login", requestObj)
        .then((response) => {
          const  status = response.data.status, 
          message = response.data.message;
          if(response.data.error){
             errorsdata = response.data.error;
          }else {
            errorsdata = [];
          }
          if (status == true) { 
            StorageManager.setAccessToken(response.data.data.token);
            StorageManager.setIsLoggedIn(status);
            console.log('sf='+response.data.data.users);
            StorageManager.setUser(response.data.data.users);   
            //hide model this.setState({ show: false });
            this.props.hideloginmodel();
         }
         if (status == false) {
          if(message != 'Validation errorr'){
            this.setState({
              loginerroralert: true,login_message:message
            });
            setTimeout(function(){
              this.setState({loginerroralert: false,login_message:'' });
            }.bind(this),5000);
            
          }else{
            let errors = {};
            if(errorsdata.length){
              errorsdata.forEach((error) => {
                errors[error.field] = error.message;
              })
            }
            this.setState({
              errors: errors,
            });
          }
          this.setState({
             errors: errors,
           });
           
           return;
         }
        })
        .catch((error) => {
          console.log(error);
        });
      event.preventDefault();
    }
    render(){
      const showpopup = this.props.showpopup;
      console.log("login model"+showpopup); 
        return(
        <Modal
          ref={(el) => {
            this.dialog = el;
          }}
          show={showpopup} 
          onHide={this.props.hideloginmodel}
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
                        //onClick={this.handlePasswordShow}
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
        </Modal>
        );
      }
    }
    function mapStateToProps1(state) {
      const showpopup = state.loginPopup;
      return {
        showpopup,
      };
    }
     function mapDispatchToProps1(dispatch)  {
       return {
         hideloginmodel: ()=>  dispatch(hideloginmodel())
       };
     }
    export default connect(mapStateToProps1,mapDispatchToProps1)(Login);
    