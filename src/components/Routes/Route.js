import React from "react";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";

import  Fullpage  from "../Layout/Fullpage";
import Hello from '../Pages/Hello';
import Home from '../Pages/Home';
import MyOrder from "../Pages/MyOrder";
import Cart from "../Pages/Cart";
import ProductDetail from "../Pages/ProductDetail";
import ContactUs from "../Pages/ContactUs";
import WishList from "../Pages/WishList";
import OrderDetail from "../Pages/OrderDetail";
import Test from "../Pages/AppTest";
import Faq from "../Pages/Faq";
import Checkout from "../Pages/Checkout";
import { Redirect } from 'react-router';
import { createBrowserHistory } from "history";


export default function index() {
  const history = createBrowserHistory();
  const FullpageRoute = ({ component: Component, ...rest}) => {
    return (
      <Route  history={history}
      {...rest}
        render={matchProps => (
          <Fullpage>
            <Component {...matchProps} />
          </Fullpage> 
        )}
      />
    );
  };
  return (
    <>
      <Switch>
        <FullpageRoute exact path="/" component={Home}/> 
        <FullpageRoute exact path={`/Home`} component={Home}/> 
        <FullpageRoute exact path={`/MyOrder`} component={MyOrder}/> 
        <FullpageRoute exact path={`/WishList`} component={WishList}/> 
        <FullpageRoute exact path={`/Cart`} component={Cart}/> 
        <FullpageRoute exact path="/OrderDetail/:orderitemId" component={OrderDetail}/>
        <FullpageRoute exact path="/ProductDetail/:productId" component={ProductDetail}/>
        <FullpageRoute exact path={`/Faq`} component={Faq}/>
        <FullpageRoute exact path={`/ContactUs`} component={ContactUs}/> 
        <FullpageRoute exact path={`/Test`} component={Test}/> 
        <FullpageRoute exact path={`/Checkout`} component={Checkout}/> 
      </Switch>
    </>
  );
}
