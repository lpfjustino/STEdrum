import {API_ENDPOINT} from './index';
import {axiosInstance as instance} from '.';

export const ON_GET_VST_LIST_SUCCESS =
  "ON_GET_VST_LIST_SUCCESS";
export const ON_GET_VST_LIST_FAILURE =
  "ON_GET_VST_LIST_FAILURE";
export const ON_VST_SELECTED =
  "ON_VST_SELECTED";

export function getVstList() {
    let endpoint = `${API_ENDPOINT}/vst`;
    const request = instance.get(endpoint);
    return (dispatch) => request
}

export function getVstListSuccess(result) {
  return {
      "type": ON_GET_VST_LIST_SUCCESS,
      "payload": result
  };
}

export function getVstListFailure(result) {
  return {
      "type": ON_GET_VST_LIST_FAILURE,
      "payload": result
  };
}

export function vstSelected(vst) {
    return {
        "type": ON_VST_SELECTED,
        "payload": vst
    };
}