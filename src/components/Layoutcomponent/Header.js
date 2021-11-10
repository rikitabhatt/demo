
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import TopHeader from ".//TopHeader";
import TopMenu from ".//TopMenu";
import { Container } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      
      <div>
      <div className="header-wrapper">
        <TopHeader />
        <TopMenu />
      </div>
    </div>
    );
  }
}

export default Header;