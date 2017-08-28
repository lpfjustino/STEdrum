import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';
import {vsts} from '../../../public/resources/vsts';

class SelectVST extends Component {
  constructor(props) {
    super(props);
    this.getCards = this.getCards.bind(this);
    console.log(Object.keys(vsts));
  }

  getCards() {
    return Object.keys(vsts).map((vst, index) => {
      return (
        <Col xs="6" sm="4" md="2" key={index}>
          <Card>
            <CardHeader>
              {vsts[vst]['product']}
            </CardHeader>
            <CardBlock className="card-body">
              <img src={vsts[vst]['path']} />
            </CardBlock>
          </Card>
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

export default SelectVST;