import {
    ON_GET_PIECE_TYPE_LIST_SUCCESS,
    ON_GET_PIECE_TYPE_LIST_FAILURE,
    ON_PIECE_TYPE_SELECTED,
} from '../actions/pieceType';

const initialState = {
    "items": [],
    "selected": {"name": ""}
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case ON_GET_PIECE_TYPE_LIST_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                "items": data
            }
        }
        case ON_GET_PIECE_TYPE_LIST_FAILURE:
            return initialState;

        case ON_PIECE_TYPE_SELECTED: {
            return {
                ...state,
                "selected": action.payload
            }
        }

        default:
            return state;
    }
}