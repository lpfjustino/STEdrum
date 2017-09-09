import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';
import {vsts} from '../../../public/resources/vsts';

class SelectBoard extends Component {
  constructor(props) {
    super(props);
    this.getCards = this.getCards.bind(this);
    console.log(Object.keys(vsts));
  }

  getCards() {
    return Object.keys(vsts).map((vst, index) => {
      return (
        <Col xs="6" sm="4" md="2" key={index}>
          <Row>
            <Col xs="12" sm="12" md="12">
              <img src={vsts[vst]['path']} style={{"border-radius": "15px"}}/>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="12">
              {vsts[vst]['producer']}
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="12">
              {vsts[vst]['product']}
            </Col>
          </Row>
        </Col>
      );
    })
  }

  render() {
    return (
      <div className="animated fade-in">
        <Row>
          {this.getCards()}
        </Row>
      </div>
    );
  }
}

export default SelectBoard;