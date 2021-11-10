import React, { Component } from "react";
class SiteMenu extends Component {
  render() {
    return (
      <div style={{ display: "none" }}>
        <ul className="site-menu">
          <li className="active">
            <a>Bathroom Tiles</a>
          </li>
          <li>
            <a>Kitchen Tiles</a>
          </li>
          <li>
            <a>Mosaics/Backsplash</a>
            <ul>
              <li>
                <a>Shop by material</a>
              </li>
              <li>
                <a>Shop by color </a>
                <ul>
                  <li>
                    <a>White </a>
                  </li>
                  <li>
                    <a>Beige </a>
                  </li>
                  <li>
                    <a>Black </a>
                  </li>
                  <li>
                    <a> Grey </a>
                  </li>
                  <li>
                    <a>Silver </a>
                  </li>
                  <li>
                    <a> Gold </a>
                  </li>
                  <li>
                    <a>Brown </a>
                  </li>
                  <li>
                    <a>Blue </a>
                  </li>
                  <li>
                    <a>Red </a>
                  </li>
                  <li>
                    <a>Green </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Shop by popular styles</a>
                <ul>
                  <li>
                    <a>Arabesque</a>
                  </li>
                  <li>
                    <a>Subway</a>
                  </li>
                  <li>
                    <a>Strips</a>
                  </li>
                  <li>
                    <a> Basket Weave</a>
                  </li>
                  <li>
                    <a>Hexagon</a>
                  </li>
                  <li>
                    <a>Herringbone</a>
                  </li>
                  <li>
                    <a> Octagon</a>
                  </li>
                  <li>
                    <a>Pebble Stone</a>
                  </li>
                  <li>
                    <a>Diamond</a>
                  </li>
                  <li>
                    <a>Other Artistic</a>
                  </li>
                  <li>
                    <a>Square</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Glass Tile</a>
              </li>

              <li>
                <a>Natural Stone</a>
                <ul>
                  <li>
                    <a>Crema Marfil</a>
                  </li>
                  <li>
                    <a>Carrara </a>
                  </li>
                  <li>
                    <a>Oriental White </a>
                  </li>
                  <li>
                    <a>Emperador Dark </a>
                  </li>
                  <li>
                    <a>Emperador Light </a>
                  </li>
                  <li>
                    <a>Dolomite White</a>
                  </li>
                  <li>
                    <a>Thasso </a>
                  </li>
                  <li>
                    <a>Timber Wood </a>
                  </li>
                  <li>
                    <a>Ledger Stone </a>
                  </li>
                  <li>
                    <a>stone </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Mother of Pearl</a>
              </li>
              <li>
                <a>Porcelain Mosaic</a>
              </li>
              <li>
                <a>Ceramic Mosaic</a>
              </li>
              <li>
                <a>Ceramic Tile</a>
              </li>
              <li>
                <a>Metal Mosaic</a>
              </li>
              <li>
                <a>All</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Floor/Wall</a>
            <ul>
              <li>
                <a>Marble Tiles</a>
              </li>
              <li>
                <a>Shop by size</a>
                <ul>
                  <li>
                    <a>6x36 </a>
                  </li>
                  <li>
                    <a>12x36 </a>
                  </li>
                  <li>
                    <a>24x24 </a>
                  </li>
                  <li>
                    <a>16x32 </a>
                  </li>
                  <li>
                    <a>32x32 </a>
                  </li>
                  <li>
                    <a>36x72 </a>
                  </li>
                  <li>
                    <a>48x96 </a>
                  </li>
                  <li>
                    <a>Customized </a>
                  </li>
                  <li>
                    <a>24x48 </a>
                  </li>
                  <li>
                    <a>63×126 </a>
                  </li>
                  <li>
                    <a>32x64 </a>
                  </li>
                  <li>
                    <a>30x60 </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Shop by surface finish</a>
                <ul>
                  <li>
                    <a> Wood Tile</a>
                  </li>
                  <li>
                    <a>Polished</a>
                  </li>
                  <li>
                    <a>Matte Tile</a>
                  </li>
                  <li>
                    <a> Semi-Polished</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a>Accessories</a>
            <ul>
              <li>
                <a>Borders</a>
              </li>
              <li>
                <a>Grout</a>
              </li>
              <li>
                <a>Showers</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Pages</a>
            <ul>
              <li>
                <a href="/Faq">FAQ's</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/ContactUs">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SiteMenu;
