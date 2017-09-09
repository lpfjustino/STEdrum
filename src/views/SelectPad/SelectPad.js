import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';

import {axiosInstance as axios} from '../../modules';
import {API_ENDPOINT as api} from '../../modules';

class SelectPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPad: "",
      numPads: props.history.location.state.selectedBoard.numPads,
    };
    this.getCards = this.getCards.bind(this);
  }
  
  componentWillMount() {
    this.getPads();
  }
  
  getPads() {
  }

  onPadSelected(pad) {
  }

  getCards() {
    const cards = [];

    for (var pad = 0; pad < this.state.numPads; pad++) {
        cards.push(
          <Col xs="6" sm="4" md="2" key={pad}>
            {"Pad " + pad+1}
          </Col>
        );
    }

    return cards;
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

export default SelectPad;