import {
    ON_GET_VST_LIST_SUCCESS,
    ON_GET_VST_LIST_FAILURE,
    ON_VST_SELECTED,
} from '../actions/vst';

const initialState = {
    "items": [],
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case ON_GET_VST_LIST_SUCCESS: {
            const data = action.payload;
            return {
                "items": data
            }
        }
        case ON_GET_VST_LIST_FAILURE:
            return initialState;

        case ON_VST_SELECTED: {
            return {
                ...state,
                "selected": action.payload
            }
        }

        default:
            return state;
    }
}