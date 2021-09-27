import { CLEAR_DATA_DETAIL, GET_CAST_SUCCESS, GET_DETAIL_SUCCESS, GET_RECOMMENDATION_SUCCESS } from "./constants";

const initialState = {
    detail: {},
    cast: [],
    recommend: []
}

const reducer = (state = initialState, action: any) => {
    console.log(action);
    switch (action.type) {
        case CLEAR_DATA_DETAIL:
            return { ...state, detail: {}, cast: [],recommend:[] }
        case GET_DETAIL_SUCCESS:
            return { ...state, detail: action.payload.info }
        case GET_CAST_SUCCESS:
            return { ...state, cast: action.payload.actors }
        case GET_RECOMMENDATION_SUCCESS:
            return { ...state, recommend: action.payload.recommend }
        default:
            return state;
    }
};

export default reducer