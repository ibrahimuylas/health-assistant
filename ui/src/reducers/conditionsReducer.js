import initialState from './initialState';
import { GET_CONDITIONS, GET_CONDITIONS_SUCCESS, GET_CONDITIONS_FAIL } from '../constants/actionTypes';

export default function conditionsReducer(state = initialState.conditions, action) {

    switch (action.type) {
        case GET_CONDITIONS:
            return {
                ...state,
                isLoading: true,
                data: []
            };
        case GET_CONDITIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                errorMessage: undefined,
                data: action.payload.data.conditions
            };
        }
        case GET_CONDITIONS_FAIL: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.error.message || action.payload.error,
            };
        }

        default:
            return state;
    }
}
