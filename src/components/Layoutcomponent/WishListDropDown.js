import React, { Component } from "react";
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

class WishListDropDown extends Component {
  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Image
              className="dropdown-icon"
              alt="notification icon"
              src={process.env.MIX_PUBLIC_URL + "/assets/images/wishlist.png"}
              fluid
            />
            <span className="badge-icon">04</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <h3 className="dropdonw-title mb-0">My Wishlist</h3>
            <div className="notification-scroll">
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
export default WishListDropDown;
