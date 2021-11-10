
  import React, { Component, useState, useEffect } from 'react'; 
  import ReactDOM from 'react-dom'
  import { BrowserRouter as Router} from "react-router-dom"
  import Header from './Layoutcomponent/Header'
  import Footer from "./Layoutcomponent/Footer";
  import Routes from './Routes/Route';
  import reportWebVitals from "./reportWebVitals";
  import "bootstrap/dist/css/bootstrap.min.css"
  import "../assets/css/themify-icons.css";
  import "../assets/css/font-awesome.min.css";
  import "../assets/css/ma5-menu.css";
  import "../assets/css/slick.css";
  import "../assets/css/slick-theme.css";
  import "../assets/css/lightgallery.css";
  import "../assets/css/style.scss";
  import "../assets/css/responsive.css";
  import Login from  "../components/Model/Login";
  import {useSelector ,useDispatch} from 'react-redux';
  function App() {
    //const loginPopup = useSelector(state => state.loginPopup);
    //const dispatch = useDispatch();
    return (
        <Router basename={'dixie/public/'}>
          <Header/>
          <Login/>
          <Routes/>
          <Footer/>
        </Router>
    );
  }

export default App;
//if (document.getElementById('app')) {  ReactDOM.render(<App />, document.getElementById('app'));}
//reportWebVitals(console.log);
