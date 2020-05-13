import * as actionTypes from '../constants/actionTypes';
import * as apiClient from '../services/apiCient';
import * as apiUrl from '../constants/apiUrl';

export function getConditions() {
    return dispatch => {
        dispatch({ type: actionTypes.GET_CONDITIONS });

        return apiClient.get(apiUrl.Conditions).then(payload => {
            if (payload.error) {
                return dispatch({ type: actionTypes.GET_CONDITIONS_FAIL, payload });
            }

            return dispatch({ type: actionTypes.GET_CONDITIONS_SUCCESS, payload });
        });
    };
}