import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';

import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  getBoardList,
  getBoardListSuccess,
  getBoardListFailure,
  boardSelected,
} from '../../modules/actions/board';

class SelectBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
    };
    this.getCards = this.getCards.bind(this);
    this.getBoards = this.getBoards.bind(this);
  }
  
  componentWillMount() {
    this.getBoards();
  }
  
  getBoards() {
    this.props.getBoardList()
      .then(res => this.props.getBoardListSuccess(res.data));
  }

  boardSelected(board) {
    this.props.boardSelected(board);
    this.props.history.push('/select-pad');
  }

  getCards() {
    return this.props.board.items.map((board, index) => {
      return (
        <Col xs="12" sm="12" md="12" key={index} onClick={() => this.boardSelected(board)}>
          <Row>
            <Col xs="12" sm="12" md="12">
              <img src={board.path} style={{"borderRadius": "15px"}}/>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="12">
              {board.name}
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="12">
              {board.numPads}
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

const mapStateToProps = state => ({
  board: state.board
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
)(SelectBoard);