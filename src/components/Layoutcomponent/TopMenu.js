import React, { Component } from "react";
import SiteMenu from "./SiteMenu";
import { Row, Col, Image, NavDropdown, Nav, Navbar } from "react-bootstrap";

class TopMenu extends Component {
  render() {
    return (
      <div className="menu-wrapper">
        <Row>
          <Col>
            <button className="ma5menu__toggle" type="button">
              <span className="shop-all">SHOP ALL</span>
              <Image
                alt="menu icon"
                src={process.env.MIX_PUBLIC_URL + "/assets/images/menu.gif"}
                className="menu-ico"
              />
            </button>
          </Col>
          <SiteMenu />
          <Col lg="9">
            <div className="main-menu">
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav>
                    <NavDropdown title="Size" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">12x24</NavDropdown.Item>
                      <NavDropdown.Item href="#">6x36</NavDropdown.Item>
                      <NavDropdown.Item href="#">12x36</NavDropdown.Item>
                      <NavDropdown.Item href="#">24x24</NavDropdown.Item>
                      <NavDropdown.Item href="#">16x32</NavDropdown.Item>
                      <NavDropdown.Item href="#">32x32</NavDropdown.Item>
                      <NavDropdown.Item href="#">36x72</NavDropdown.Item>
                      <NavDropdown.Item href="#">48x96</NavDropdown.Item>
                      <NavDropdown.Item href="#">Customized</NavDropdown.Item>
                      <NavDropdown.Item href="#">24x48</NavDropdown.Item>
                      <NavDropdown.Item href="#">63×126</NavDropdown.Item>
                      <NavDropdown.Item href="#">32x64</NavDropdown.Item>
                      <NavDropdown.Item href="#">30x60</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Color" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">White</NavDropdown.Item>
                      <NavDropdown.Item href="#">Beige</NavDropdown.Item>
                      <NavDropdown.Item href="#">Black</NavDropdown.Item>
                      <NavDropdown.Item href="#">Grey</NavDropdown.Item>
                      <NavDropdown.Item href="#">Silver</NavDropdown.Item>
                      <NavDropdown.Item href="#">Gold</NavDropdown.Item>
                      <NavDropdown.Item href="#"> Brown</NavDropdown.Item>
                      <NavDropdown.Item href="#"> Blue</NavDropdown.Item>
                      <NavDropdown.Item href="#"> Red</NavDropdown.Item>
                      <NavDropdown.Item href="#"> Green</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Style" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">Arabesque</NavDropdown.Item>
                      <NavDropdown.Item href="#">Subway</NavDropdown.Item>
                      <NavDropdown.Item href="#"> Strips</NavDropdown.Item>
                      <NavDropdown.Item href="#">Basket Weave</NavDropdown.Item>
                      <NavDropdown.Item href="#">Hexagon</NavDropdown.Item>
                      <NavDropdown.Item href="#"> Herringbone</NavDropdown.Item>
                      <NavDropdown.Item href="#"> Octagon</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        {" "}
                        Pebble Stone
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#"> Diamond</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        {" "}
                        Other Artistic
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Square</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Material" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">
                        Mother of Pearl
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Porcelain Mosaic
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Ceramic Mosai
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Metal Mosaic</NavDropdown.Item>
                      <NavDropdown.Item href="#">Glass Tile</NavDropdown.Item>
                      <NavDropdown.Item href="#">Ceramic Tile</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Surface" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">Wood Tile</NavDropdown.Item>
                      <NavDropdown.Item href="#">Polished</NavDropdown.Item>
                      <NavDropdown.Item href="#">Matte Tile</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        {" "}
                        Semi-Polished
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Marble Tiles (26)
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Project" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">
                        Kitchen Tiles
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Bathroom Tiles
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Hall Way</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#action2">Accesories</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Col>
          <Col className="sale-icon">
            <a className="sale-link text-uppercase" href="#">
              <span className="blink">SALE!</span>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TopMenu;
