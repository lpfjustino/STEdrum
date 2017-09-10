import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';

import {axiosInstance as axios} from '../../modules/actions';
import {API_ENDPOINT as api} from '../../modules/actions';

class SelectBoard extends Component {
  constructor(props) {
    super(props);
    console.log(props.history);
    this.state = {
      boards: [],
      selectedVst: props.history.location.state.selectedVst,
      selectedBoard: {}
    };
    this.getCards = this.getCards.bind(this);
    this.getBoards = this.getBoards.bind(this);
  }
  
  componentWillMount() {
    this.getBoards();
  }
  
  getBoards() {
    let endpoint = `${api}/board`;
    axios.get(endpoint)
      .then(res => this.setState({'boards': res.data}));
  }

  onBoardSelected(board) {
    this.setState({'selectedBoard':board});
    this.props.history.push({
      pathname: '/select-pad',
      state: {'selectedBoard': board, 'selectedVst': this.state.selectedVst}
    });
  }

  getCards() {
    return this.state.boards.map((board, index) => {
      return (
        <Col xs="12" sm="12" md="12" key={index} onClick={() => this.onBoardSelected(board)}>
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

export default SelectBoard;