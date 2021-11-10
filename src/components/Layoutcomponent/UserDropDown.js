import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import CustomScroll from "react-custom-scroll";
import "../../../../node_modules/react-custom-scroll/dist/customScroll.css";
import StorageManager from '../../common/StorageManager';
import {getUser} from '../../common/Helper';
import {
  Container,
  Row,
  Modal,
  Col,
  Image,
  Button,
  Form,
  Dropdown,
  InputGroup,
  FormControl,
} from "react-bootstrap";

class UserDropDown extends Component {
  constructor(props, context) {
    super(props, context);
    //this.handleLogout = this.handleLogout.bind(this);
    
  }
  handleLogout(){
    StorageManager.removeIsLoggedIn();
    StorageManager.removeIsLoggedIn();
    StorageManager.removeUser();
    window.location.href = "/"; 
  }
  render() {
    const isAuthenticated = StorageManager.getIsLoggedIn();
  
    const userName = getUser();
   
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Image
              className="dropdown-icon"
              alt="notification icon"
              src={process.env.MIX_PUBLIC_URL + "/assets/images/user.png"}
              fluid
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <h3 className="dropdonw-title mb-0">
              <span className="welcome-title">Welcome</span>{userName.name}
            </h3>
            <div className="notification-scroll">
              <CustomScroll>
                <div className="dropdown-height">
                  <a
                    href="/MyOrder"
                    className="hd-dropdown-wrapper dx-dropdownlink"
                  >
                    <div className="hd-dropdown-content">
                      <div className="notifications-content">
                        <p className="mb-0">My Orders</p>
                      </div>
                      <span className="ti-shopping-cart-full dropdown-icon-area"></span>
                    </div>
                  </a>
                  <a
                    onClick={this.handleLogout} 
                    className="hd-dropdown-wrapper dx-dropdownlink"
                  >
                    <div className="hd-dropdown-content">
                      <div className="notifications-content">
                        <p  className="mb-0">Logout</p>
                      </div>
                      <span className="ti-lock dropdown-icon-area"></span>
                    </div>
                  </a>
                </div>
              </CustomScroll>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
export default UserDropDown;
