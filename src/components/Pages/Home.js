import React, { Component } from 'react';
import AboutCompany from "../Home/AboutCompany";
import HomeFeatues from "../Home/HomeFeatues";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getCompanyName, Capitalize,readMore } from '../../common/Helper';
import ItemBlock from "../Common/ItemBlock";
import * as Config from '../../common/Config';
import httpClient from '../../connection/httpClient';
import ScaleLoader from "react-spinners/ScaleLoader";
import StorageManager from '../../common/StorageManager';
import {getUser,getUserID} from '../../common/Helper.js';


class Home extends Component {
  constructor(props)
    {
        super(props);
        this.state = {
            productList : [],
            page:0,
            errors: {},
            loading : false
            
        }
    }
  componentDidMount()
  {
      this.loadMoreProducts();
  }
  loadMoreProducts = () =>{
    if(!this.state.loading){
      // Set loading state to true to
    
      this.setState({
        loading : true,
      });

      let requestObj = {
          project_api_token: Config.API_TOKEN,
          page:this.state.page,
          // company_id:StorageManager.getCompany
          company_id:1,
          user_id:StorageManager.getIsLoggedIn()?getUserID():'',
          
      }
      httpClient.post("get-product-list", requestObj)
        .then((response) => {
            const { data } = response;
            const { status, message } = data;
          
            if (status || status == true) {
                const results = data.data,
                      productList = results.products,
                      next_page= results.next_page;
                if(productList.length){
                  
                  this.setState({
                      productList : [...this.state.productList , ...productList],
                      page : next_page,
                      loading: false,
                  });
              }
            }else{
              
            }
        })
        .catch((error) => {
          
      });
  }
  }
  
  getProducts = () =>{ 
    return this.state.productList.length ? this.state.productList.map((product, index) =>
            <Col lg={4} md={6} key={index}>
              <ItemBlock  product={product} index={index}/>
            </Col>
            ) :
        'No Products found';
  };

  showLoadMoreButton = () =>{ 
    //console.log(this.state.page);
    return (this.state.page > 0 ?<Col md={12} className="text-center m-t-30"><a  onClick={this.loadMoreProducts} className="btn custom-btn transparent-btn"><span className="text-position" >Load More</span></a></Col>:'No more');
  };
  
  render() {
    return (
      <div>
        <Helmet>
          <title>Dixie Tile</title>
        </Helmet>
        <div className="home-items-wrapper m-t-10">
          <Container fluid>
            <Row>
              {this.getProducts()}
              <div className="loading-spinner" style={{margin: "auto"}}>   
                <ScaleLoader
                    color={'#67459b'}
                    loading={this.state.loading}
                    margin={2}
                />
              </div>
            </Row>
            <Row>
              {this.showLoadMoreButton()}
            </Row>
          </Container>
        </div>
        <Container fluid>
          <hr className="m-t-50" />
        </Container>
        <AboutCompany />
        <HomeFeatues />
      </div>
    );
  }
}

export default Home;
