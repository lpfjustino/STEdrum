import {API_ENDPOINT} from './index';
import {axiosInstance as instance} from '.';

export const ON_GET_BOARD_LIST_SUCCESS =
  "ON_GET_BOARD_LIST_SUCCESS";
export const ON_GET_BOARD_LIST_FAILURE =
  "ON_GET_BOARD_LIST_FAILURE";
export const ON_BOARD_SELECTED =
  "ON_BOARD_SELECTED";

export function getBoardList() {
    let endpoint = `${API_ENDPOINT}/board`;
    const request = instance.get(endpoint);
    return (dispatch) => request
}

export function getBoardListSuccess(result) {
  return {
      "type": ON_GET_BOARD_LIST_SUCCESS,
      "payload": result
  };
}

export function getBoardListFailure(result) {
  return {
      "type": ON_GET_BOARD_LIST_FAILURE,
      "payload": result
  };
}

export function boardSelected(board) {
    return {
        "type": ON_BOARD_SELECTED,
        "payload": board
    };
}