import React, {Component} from "react";
import {Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBlock} from "reactstrap";
import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getPieceTypeList,
  getPieceTypeListSuccess,
  getPieceTypeListFailure,
  pieceTypeSelected,
} from '../../../modules/actions/pieceType';

const PieceTypeCards = ({pieceTypes, pieceTypeSelected}) => {
  return(
    <Row>
      {
        pieceTypes.items.map((pieceType, index) =>
            <Col xs="6" sm="4" md="3" key={index} onClick={() => pieceTypeSelected(pieceType)}>
              <Row>
                <Col xs="12" sm="12" md="12">
                  <img src={pieceType.path} style={{"borderRadius": "15px"}}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12">
                  {pieceType.name}
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12">
                  {pieceType.type}
                </Col>
              </Row> 
            </Col>
          )
      }
    </Row>
  );
};

const MapPieces = ({pieces, selectedPieceType, associate}) => {
  return(
    <Row>
      {
        pieces
          .filter(piece => piece.type === selectedPieceType.name)
          .map((piece, index) =>
            <Col xs="6" sm="4" md="6" key={index} onClick={() => {}}>
              <Row>
                <Col xs="10" sm="10" md="10">
                  {piece.name}
                </Col>
                <Col xs="2" sm="2" md="2">
                  {piece.midiNote}
                </Col>
                <Col xs="12" sm="12" md="12">
                  {piece.type}
                </Col>
              </Row>
            </Col>
          )
      }
    </Row>
  );
};

class PieceTypeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "pieceTypeSelected": false
    }
    this.getContent = this.getContent.bind(this);
    this.pieceTypeSelected = this.pieceTypeSelected.bind(this);
  }

  getContent() {
    return this.state.pieceTypeSelected
      ? <MapPieces
      pieces={this.props.vst.selected.drumMap.pieces}
      selectedPieceType={this.props.pieceType.selected} />
      : <PieceTypeCards
      pieceTypes={this.props.pieceType}
      pieceTypeSelected={this.pieceTypeSelected}/>;
  }

  componentWillMount() {
    this.getPieceTypes();
  }
  
  getPieceTypes() {
    this.props.getPieceTypeList()
      .then(res => this.props.getPieceTypeListSuccess(res.data));
  }

  pieceTypeSelected(pieceType) {
    this.props.pieceTypeSelected(pieceType);
    this.setState({"pieceTypeSelected": true})
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          {this.getContent()}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pieceType: state.pieceType,
  vst: state.vst
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPieceTypeList: () => dispatch(getPieceTypeList()),
    getPieceTypeListSuccess: (response) =>
    dispatch(getPieceTypeListSuccess(response)),
    getPieceTypeListFailure: () =>
    dispatch(getPieceTypeListFailure()),
    pieceTypeSelected: (pieceType) => dispatch(pieceTypeSelected(pieceType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieceTypeModal);
