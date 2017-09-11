import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';

import {axiosInstance as axios} from '../../modules/actions';
import {API_ENDPOINT as api} from '../../modules/actions';

import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

class SelectPad extends Component {
  constructor(props) {
    super(props);
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

    for (var pad = 0; pad < this.props.board.selected.numPads; pad++) {
        cards.push(
          <Col xs="6" sm="4" md="2" key={pad}>
            {"Pad " + (pad+1)}
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

const mapStateToProps = state => ({
  board: state.board,
  vst: state.vst
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPad);