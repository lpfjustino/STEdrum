import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';
import PieceTypeModal from '../components/PieceTypeModal';

import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

class SelectPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };
    this.getCards = this.getCards.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  
  onPadSelected(pad) {
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  getCards() {
    const cards = [];

    for (var pad = 0; pad < this.props.board.selected.numPads; pad++) {
        cards.push(
          <Col xs="6" sm="4" md="2" key={pad} onClick={this.toggle}>
            <Card>
              <CardHeader> {"Pad"} </CardHeader>
              <CardBlock> {(pad+1)} </CardBlock>
            </Card>
          </Col>
        );
    }

    return cards;
  }

  render() {
    return (
      <div className="animated fade-in">
        <PieceTypeModal isOpen={this.state.modal} toggle={this.toggle} />
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
    getBoardList: () => dispatch(getBoardList()),
    getBoardListSuccess: (response) =>
    dispatch(getBoardListSuccess(response)),
    getBoardListFailure: () =>
    dispatch(getBoardListFailure()),
    boardSelected: (board) => dispatch(boardSelected(board)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPad);