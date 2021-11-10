import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Image,
  Form,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import HomeFeatues from "../Home/HomeFeatues";
import StorageManager from '../../common/StorageManager';
import * as Config from '../../common/Config';
import httpClient from '../../connection/httpClient';


function Faq() {
  const [activeId, setActiveId] = useState(0);
  const [teamData, setTeamData] = useState([]);

  const nbaData = async () => {
    let requestObj = {
      project_api_token: Config.API_TOKEN,
      // company_id:StorageManager.getCompany
      company_id: 1,
    }
    httpClient.post("get-faq-list", requestObj)
      .then((response) => {
        const { data } = response;
        const { status, message } = data;
        if (status || status == true) {
          const faqList = data.data;
          
          setTeamData(faqList);
        }
      })


  };
  const toggleActive = (id) => {
    console.log('here',activeId);
      setActiveId(id);
   
  }
  
  useEffect(() => {
    nbaData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Dixie Tile - Faq's</title>
      </Helmet>
      <section className="breadcum-wrapper p-t-50">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Faq's</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="faq-wrapper section-wrapper p-b-50">
        <Container>
          <div className="faq faq-block">

            <div>

              <Accordion defaultActiveKey={teamData[0]!= undefined?teamData[0].id:0}>



                {teamData.map(({ id, title, description }) => (
                  <div key={id}
                    className={
                      activeId === id ? "panel-wrap active-panel" : "panel-wrap"
                    }
                  >
                    <div className="panel-header">
                      <Accordion.Toggle
                        onClick={() => toggleActive(id)}
                        className="panel-toggle"
                        eventKey={id}
                      >
                        {title}
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey={id}>
                      <div className="panel-body">
                        <p>
                          {description}
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                ))}

              </Accordion>
            </div>




          </div>
        </Container>
      </section>
      <HomeFeatues />
    </div>
  );
}

export default Faq;
