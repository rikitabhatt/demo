import React, { Component } from "react";
import CustomScroll from "react-custom-scroll";
import "../../../../node_modules/react-custom-scroll/dist/customScroll.css";
import { Image, Dropdown } from "react-bootstrap";
class Notifications extends Component {
  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Image
              className="dropdown-icon"
              alt="notification icon"
              src={process.env.MIX_PUBLIC_URL + "/assets/images/bell.png"}
              fluid
            />
            <span className="badge-icon">01</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <h3 className="dropdonw-title mb-0">Notifications</h3>
            <div className="notification-scroll">
              <CustomScroll>
                <div className="dropdown-height">
                  <div className="hd-inner-title">
                    <h5>New</h5>
                    <a href="#" className="text-purple">
                      View All
                    </a>
                  </div>
                  <div className="hd-dropdown-wrapper">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">
                          Your order for this product is delievered
                        </p>
                        <p className="text-purple mb-0">a day ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="hd-dropdown-wrapper">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">
                          Your order for this product is delievered
                        </p>
                        <p className="text-purple mb-0">a day ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="hd-dropdown-wrapper">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">
                          Your order for this product is delievered
                        </p>
                        <p className="text-purple mb-0">a day ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="hd-inner-title">
                    <h5>Earlier</h5>
                    <a href="#" className="text-purple">
                      View All
                    </a>
                  </div>
                  <div className="hd-dropdown-wrapper">
                    <div className="hd-dropdown-content">
                      <Image
                        src={
                          process.env.MIX_PUBLIC_URL + "assets/images/image2.jpg"
                        }
                        fluid
                        className="person-thumb-small"
                      />
                      <div className="notifications-content">
                        <p className="mb-0">
                          Your order for this product is delievered
                        </p>
                        <p className="text-purple mb-0">a day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomScroll>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Notifications;
