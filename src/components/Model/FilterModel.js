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

class FilterModel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      
    };
    
}
render(){
  
    return(
    <Modal
          ref={(el) => {
            this.dialog = el;
          }}
          show={this.state.show}
          onHide={this.handleClose}
          centered
          size="xl"
        >
          <Modal.Header className="close-popup" closeButton></Modal.Header>
          <Modal.Body>
            <div className="modal-container">
              <div className="modal-content-wrapper">
                <h3 className="m-b-30 text-left">
                  Select attributes according to your choice
                </h3>
                <Form>
                  <div className="filter-wrapper">
                    <div className="filter-block">
                      <h6 className="text-purple text-uppercase">Size</h6>
                      <ul className="filter-list">
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter1"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter1"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter2"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter2"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter3"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter3"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter4"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter4"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter5"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter5"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter6"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter6"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter7"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter7"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter8"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter8"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter9"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter9"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter10"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter10"
                              className="form-check-label"
                            >
                              36*72 inch
                            </label>
                          </div>
                        </li>
                      </ul>
                      <div className="view-more-less-filter text-right">
                        <a href="#" className="text-purple view-more-filters">
                          View more
                        </a>
                      </div>
                    </div>

                    <div className="filter-block">
                      <h6 className="text-purple text-uppercase">COLOR</h6>
                      <ul className="filter-list">
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter12"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter12"
                              className="form-check-label"
                            >
                              <span className="color-ico bg-black"></span>
                              Black
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter13"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter13"
                              className="form-check-label"
                            >
                              <span className="color-ico bg-golden"></span>
                              Golden
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter14"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter14"
                              className="form-check-label"
                            >
                              <span className="color-ico bg-purple"></span>
                              Purple
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter16"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter16"
                              className="form-check-label"
                            >
                              <span className="color-ico bg-green"></span>
                              Green
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter17"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter17"
                              className="form-check-label"
                            >
                              <span className="color-ico bg-grey"></span>
                              Grey
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter18"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter18"
                              className="form-check-label"
                            >
                              <span className="color-ico bg-black"></span>
                              Black
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter19"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter19"
                              className="form-check-label"
                            >
                              <span className="color-ico bg-golden"></span>
                              Golden
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="filter-block">
                      <h6 className="text-purple text-uppercase">STYLE</h6>
                      <ul className="filter-list">
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter21"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter21"
                              className="form-check-label"
                            >
                              Round
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter22"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter22"
                              className="form-check-label"
                            >
                              <span className="filter-icon">
                                <Image
                                  className="filter-icon-img"
                                  alt="notification icon"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "assets/images/hexagon.png"
                                  }
                                  fluid
                                />
                              </span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter23"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter23"
                              className="form-check-label"
                            >
                              Diamond
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter24"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter24"
                              className="form-check-label"
                            >
                              Subway
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="filter-block">
                      <h6 className="text-purple text-uppercase">SURFACE</h6>
                      <ul className="filter-list">
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter31"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter31"
                              className="form-check-label"
                            >
                              Wood tile
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter33"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter33"
                              className="form-check-label"
                            >
                              Diamond
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter32"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter32"
                              className="form-check-label"
                            >
                              <span className="filter-icon">
                                <Image
                                  className="filter-icon-img"
                                  alt="notification icon"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "assets/images/wood-board.png"
                                  }
                                  fluid
                                />
                              </span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter34"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter34"
                              className="form-check-label"
                            >
                              Wood tile
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter35"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter35"
                              className="form-check-label"
                            >
                              Polished
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter36"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter36"
                              className="form-check-label"
                            >
                              Matte Style
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter37"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter37"
                              className="form-check-label"
                            >
                              Marble Tiles
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="filter-block">
                      <h6 className="text-purple text-uppercase">PROJECT</h6>
                      <ul className="filter-list">
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter41"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter41"
                              className="form-check-label"
                            >
                              Kitchen Tiles
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter43"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter43"
                              className="form-check-label"
                            >
                              Bathroom tiles
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter44"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter44"
                              className="form-check-label"
                            >
                              Hall way
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="filter-block">
                      <h6 className="text-purple text-uppercase">
                        Accessories
                      </h6>
                      <ul className="filter-list">
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter52"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter52"
                              className="form-check-label"
                            >
                              Sinks
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter54"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter54"
                              className="form-check-label"
                            >
                              Borders
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter55"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter55"
                              className="form-check-label"
                            >
                              Showers
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="filter56"
                              className="form-check-input"
                            />
                            <label
                              title=""
                              for="filter56"
                              className="form-check-label"
                            >
                              Vanity
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="dx-btn-group text-left p-t-20">
                    <a
                      href="#"
                      className="btn custom-btn transparent-btn purple-text"
                    >
                      <span className="text-position">Apply Filters</span>
                    </a>
                    <a
                      href="#"
                      className="btn custom-btn transparent-btn purple-text"
                    >
                      <span className="text-position">Clear Filters</span>
                    </a>
                  </div>
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
    export default connect(null,null)(FilterModel);