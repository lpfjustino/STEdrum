import {API_ENDPOINT} from './index';
import {axiosInstance as instance} from '.';

export const ON_GET_PIECE_TYPE_LIST_SUCCESS =
  "ON_GET_PIECE_TYPE_LIST_SUCCESS";
export const ON_GET_PIECE_TYPE_LIST_FAILURE =
  "ON_GET_PIECE_TYPE_LIST_FAILURE";
export const ON_PIECE_TYPE_SELECTED =
  "ON_PIECE_TYPE_SELECTED";

export function getPieceTypeList() {
    let endpoint = `${API_ENDPOINT}/piecetype`;
    const request = instance.get(endpoint);
    return (dispatch) => request
}

export function getPieceTypeListSuccess(result) {
  return {
      "type": ON_GET_PIECE_TYPE_LIST_SUCCESS,
      "payload": result
  };
}

export function getPieceTypeListFailure(result) {
  return {
      "type": ON_GET_PIECE_TYPE_LIST_FAILURE,
      "payload": result
  };
}

export function pieceTypeSelected(piecetype) {
    return {
        "type": ON_PIECE_TYPE_SELECTED,
        "payload": piecetype
    };
}