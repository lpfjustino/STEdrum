import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';

import {axiosInstance as axios} from '../../modules';
import {API_ENDPOINT as api} from '../../modules';

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
    let endpoint = `${api}/vst`;
    axios.get(endpoint)
      .then(res => this.setState({'vsts': res.data}));
  }

  onVstSelected(vst) {
    this.props.history.push({
      pathname: '/select-board',
      state: {'selectedVst': vst}
    });
  }

  getCards() {
    return this.state.vsts.map((vst, index) => {
      return (
        <Col xs="6" sm="4" md="2" key={index} onClick={() => this.onVstSelected(vst)}>
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

export default SelectVST;