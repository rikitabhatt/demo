import React, { Component } from "react";
import { Image } from "react-bootstrap";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import StorageManager from '../../common/StorageManager';
import * as Config from '../../common/Config';
import httpClient from '../../connection/httpClient'
import {getUser,getUserID} from '../../common/Helper';
import { alertService } from '../../_services';
import {connect} from 'react-redux';
import { showloginmodel } from "../actions";
class ItemBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoClose: true,
      loading : false,
      is_user_favorite: this.props.product.is_user_favorite,
    }
    
  }

  addProductToCart(product_id) { 
  
      let requestObj = {
      project_api_token: Config.API_TOKEN,
      
      //company_id:StorageManager.getCompany alertService.success('Success!!', options)
      company_id:1,
      user_id:getUserID(),
      product_id:product_id,
      qty:1,
    }
    httpClient.post("add-to-cart", requestObj)
        .then((response) => {

            const { data } = response;
            const { status, message } = data;
           
            if (status || status == true) {
                alert(message);
            }else{
              
            }
        }).catch((error) => {

         }); 

  }
  addProductToWishlist(e,product_id,is_fev) { 
    if(is_fev == true){
      this.setState({ is_user_favorite : false });  
    }else{
      this.setState({ is_user_favorite : true });  
    }
    let requestObj = {
    project_api_token: Config.API_TOKEN,
    
    //company_id:StorageManager.getCompany alertService.success('Success!!', options)
    company_id:1,
    user_id:getUserID(),
    product_id:product_id,
  
  }
  httpClient.post("add-to-wishlist", requestObj)
      .then((response) => {

          const { data } = response;
          const { status, message } = data;
         
          if (status || status == true) {
              //alert(message);
          }else{
            
          }
      }).catch((error) => {

       }); 

 }
  render() {
    const isAuthenticated = StorageManager.getIsLoggedIn();
    const {product, index} = this.props;
    const is_fev = product.is_user_favorite;
    const sort_description = product.sort_description.substring(0, 160);
    return (  
     
      <div className="item-block-wrapper">
          <a className="product-link text-black">
            <div className="item-block-img">
              <Image src={product.product_thumbnail_image_path} fluid/>
              {isAuthenticated?
              <a onClick={(e) => this.addProductToWishlist(e,product.id, this.state.is_user_favorite)} 
                                   className={"item-block-wishlist " + (this.state.is_user_favorite == true?"wishlist-ico-hover":"wishlist-ico")}></a>:
                                   <a onClick={() => { this.props.showloginmodel()}} className="wishlist-ico"></a>}
            </div>
            <div className="item-block-description">
            <div className="item-block-info">
              <h6 className="font-bt"><Link to={`/ProductDetail/${product.id}`}>{product.product_name}</Link></h6>
              <h6 className="font-bt text-light-black">Tile – CBH002</h6>
              {/* <p>{product.sort_description.length > 160 ? sort_description+'....' : product.sort_description}
               </p> */}
               <p>
                  <label>Type :</label>Polish / Matt etc
                </p>
                <p>
                  <label>Size :</label>11″ x 11″ Inches, 10 mm Thick
                </p>
            </div>
            <div className="item-block-price">
                <p className="front-block-price">
                  <span className="old-price">${product.price}</span>
                  <span className="new-price font-bold text-purple">${product.discount_price}</span>
                </p>
              </div>
            </div>
          </a>
          <div className="item-add-cart">
            {isAuthenticated ?
            <a onClick={(e) => this.addProductToCart(product.id)} className="block-cart-btn  text-uppercase font-bt">
              Add to cart
            </a>:<a onClick={(e) => { this.props.showloginmodel()}} className="block-cart-btn  text-uppercase font-bt">
              Add to cart
            </a>}
            <Link to={`/ProductDetail/${product.id}`} className="block-cart-btn  text-uppercase font-bt">
              Buy Now
            </Link>
          </div>
           {/* <div className="item-add-cart">
          { isAuthenticated ?
            <a onClick={(e) => this.addProductToCart(product.id)} className="cart-btn text-purple text-uppercase font-bt">
              Add to cart
            </a> : <a onClick={() => { this.props.showloginmodel()}} className="cart-btn text-purple text-uppercase font-bt">
              Add to cart
            </a> } 
            { isAuthenticated ? <a href="#" onClick={(e) => this.addProductToWishlist(e,product.id, this.state.is_user_favorite)} 
                                   className={"" + (this.state.is_user_favorite == true?"wishlist-ico-hover":"wishlist-ico")}>{ this.state.text}</a>:
                   <a onClick={() => { this.props.showloginmodel()}} className="wishlist-ico"></a> }
          </div> */}
        </div>
      
    );
  }
}
function mapStateToProps(state) {
  const loginpopupstate = state.loginPopup;
  return {
    loginpopupstate,
  };
}
function mapDispatchToProps(dispatch)  {
  return {
    showloginmodel: () => dispatch(showloginmodel())
      
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemBlock);
