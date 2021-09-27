import { GET_USER_SUCCESS, LOADING, LOADING_SUCCESS, LOGIN_STATUS, LOG_IN_SUCCESS, LOG_OUT_SUCCESS, NAVIGATE, NAVIGATE_SUCCESS, UPDATE_AVATAR_SUCCESS, UPDATE_PROFILE_SUCCESS } from './constants';

const initialState = {
    user: null,
    loading: false,
    navigate: false,
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case NAVIGATE:
            return {...state, navigate:false}
        case NAVIGATE_SUCCESS:
            return {...state, navigate:true}
        case LOGIN_STATUS:
            return { ...state, user: action.payload.user };
        case GET_USER_SUCCESS:
            return { ...state, user: action.payload.user }
        case LOG_OUT_SUCCESS:
            return { ...state, user: null }
        case LOG_IN_SUCCESS:
            return { ...state }
        case LOADING:
            return { ...state, loading: true }
        case LOADING_SUCCESS:
            return { ...state, loading: false }
        case UPDATE_PROFILE_SUCCESS:
            return {...state, user:action.payload.user}
        default:
            return state;
    }
};

export default reducer;
