import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import CustomScroll from "react-custom-scroll";
import "../../../../node_modules/react-custom-scroll/dist/customScroll.css";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  Dropdown,
  NavDropdown,
  Nav,
  Navbar,
} from "react-bootstrap";
class CartDropDown extends Component {
  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Image
              className="dropdown-icon"
              alt="notification icon"
              src={process.env.MIX_PUBLIC_URL + "/assets/images/shopping-bag.png"}
              fluid
            />
            <span className="badge-icon">06</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="notification-scroll">
              <div className="hd-inner-title m-t-0 m-b-5">
                <h3 className="mb-0">Your Cart</h3>
                <NavLink to="/Cart" className="text-purple">
                  View All
                </NavLink>
              </div>
              <CustomScroll>
                <div className="dropdown-height">
                  <a href="#" className="hd-dropdown-wrapper dx-dropdownlink">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">Artistic Mosaic Tile – YMT001</p>
                        <p className="dorpdown-quantity mb-0">
                          <label>Quantity : </label>
                          <span className="dropdown-quantity-count">01</span>
                        </p>
                      </div>
                      <span className="ti-close dropdown-icon-area"></span>
                    </div>
                  </a>
                  <a href="#" className="hd-dropdown-wrapper dx-dropdownlink">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">Artistic Mosaic Tile – YMT001</p>
                        <p className="dorpdown-quantity mb-0">
                          <label>Quantity : </label>
                          <span className="dropdown-quantity-count">01</span>
                        </p>
                      </div>
                      <span className="ti-close dropdown-icon-area"></span>
                    </div>
                  </a>
                  <a href="#" className="hd-dropdown-wrapper dx-dropdownlink">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">Artistic Mosaic Tile – YMT001</p>
                        <p className="dorpdown-quantity mb-0">
                          <label>Quantity : </label>
                          <span className="dropdown-quantity-count">01</span>
                        </p>
                      </div>
                      <span className="ti-close dropdown-icon-area"></span>
                    </div>
                  </a>
                  <a href="#" className="hd-dropdown-wrapper dx-dropdownlink">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">Artistic Mosaic Tile – YMT001</p>
                        <p className="dorpdown-quantity mb-0">
                          <label>Quantity : </label>
                          <span className="dropdown-quantity-count">01</span>
                        </p>
                      </div>
                      <span className="ti-close dropdown-icon-area"></span>
                    </div>
                  </a>
                  <a href="#" className="hd-dropdown-wrapper dx-dropdownlink">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">Artistic Mosaic Tile – YMT001</p>
                        <p className="dorpdown-quantity mb-0">
                          <label>Quantity : </label>
                          <span className="dropdown-quantity-count">01</span>
                        </p>
                      </div>
                      <span className="ti-close dropdown-icon-area"></span>
                    </div>
                  </a>
                  <a href="#" className="hd-dropdown-wrapper dx-dropdownlink">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">Artistic Mosaic Tile – YMT001</p>
                        <p className="dorpdown-quantity mb-0">
                          <label>Quantity : </label>
                          <span className="dropdown-quantity-count">01</span>
                        </p>
                      </div>
                      <span className="ti-close dropdown-icon-area"></span>
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

export default CartDropDown;
