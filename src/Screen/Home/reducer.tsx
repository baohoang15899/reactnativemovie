import { GET_MOVIE_SUCCESS,GET_SEARCH_RESULTS,GET_SEARCH_RESULTS_SUCCESS,GET_TV_SUCCESS } from './constants';

const initialState = {
    movie:[],
    tv:[],
    searchResults:[]
};

const reducer = (state = initialState, action:any) => {
    console.log(action);
    switch (action.type) {
        case GET_SEARCH_RESULTS_SUCCESS:
            return {...state,searchResults:action.payload.results}
        case GET_MOVIE_SUCCESS:
            return {...state,movie:action.payload.movies}
        case GET_TV_SUCCESS:
            return {...state,tv:action.payload.tv}
        default:
            return state;
    }
};

export default reducer;
