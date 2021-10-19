import { FETCH_RESULTS } from "./types";

export const fetchResults = () => (dispatch) => {
    fetch("http://localhost:3001/results")
        .then((res) => res.json())
        .then((results) =>
            dispatch({
                type: FETCH_RESULTS,
                payload: results,
            })
        );
};
