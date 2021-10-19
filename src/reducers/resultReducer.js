import { FETCH_RESULTS } from "../actions/types";

const initialState = {
    items: [],
};

export default function foo(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
}
