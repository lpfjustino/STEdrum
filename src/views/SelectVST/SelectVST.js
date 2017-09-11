import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';

import {axiosInstance as axios} from '../../modules/actions';
import {API_ENDPOINT as api} from '../../modules/actions';

import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  getVstList,
  getVstListSuccess,
  getVstListFailure,
  vstSelected,
} from '../../modules/actions/vst';

class SelectVST extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vsts: [],
    };
    this.getCards = this.getCards.bind(this);
    this.getVsts = this.getVsts.bind(this);
  }
  
  componentWillMount() {
    this.getVsts();
  }
  
  getVsts() {
    this.props.getVstList()
      .then(res => this.props.getVstListSuccess(res.data));
  }

  vstSelected(vst) {
    this.props.vstSelected(vst);
    this.props.history.push('/select-board');
  }

  getCards() {
    return this.props.vst.items.map((vst, index) => {
      return (
        <Col xs="6" sm="4" md="2" key={index} onClick={() => this.vstSelected(vst)}>
          <Row>
            <Col xs="12" sm="12" md="12">
              <img src={vst.path} style={{"borderRadius": "15px"}}/>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="12">
              {vst.producer}
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="12">
              {vst.product}
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
  vst: state.vst
});

const mapDispatchToProps = (dispatch) => {
  return {
    getVstList: () => dispatch(getVstList()),
    getVstListSuccess: (response) =>
    dispatch(getVstListSuccess(response)),
    getVstListFailure: () =>
    dispatch(getVstListFailure()),
    vstSelected: (vst) => dispatch(vstSelected(vst)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectVST);