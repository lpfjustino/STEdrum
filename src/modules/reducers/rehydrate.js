export default function reduce(state = {}, action) {
    switch (action.type) {
        case 'persist/REHYDRATE': {
            return {...state,
                "persistedState": action.payload};
        }
        default:
            return state;
    }
}