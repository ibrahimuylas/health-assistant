import * as actionTypes from '../constants/actionTypes';
import reducer from './conditionsReducer';

describe('Reducers::Conditions', () => {
    const getInitialState = () => {
        return {
            isLoading: false,
            errorMessage: undefined,
            data: []
        };
    };

    const getAppState = () => {
        return [
            {
                snippet: "Alzheimer's disease is the most common cause of dementia. Dementia is a group of symptoms associated with a decline in the way your brain functions, affecting your memory and the way you behave.",
                label: "Alzheimer's disease",
                synonyms: [
                    "AD",
                    "Alzheimer disease",
                    "Alzheimers disease"
                ],
                keywords: [
                    "Alzheimer's disease",
                    "dementia"
                ],
                image: "http://assets.your.md/conditions/alzheimers-disease/card/alzheimers-disease-male-card.jpg"
            },
            {
                label: "Sickle cell anaemia",
                synonyms: [
                    "Sickle",
                    "sickle cell"
                ]
            },
        ]
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const expected = getInitialState();

        expect(reducer(undefined, action)).toEqual(expected);
    });

    it('should handle GET_CONDITIONS', () => {
        const action = {
            type: actionTypes.GET_CONDITIONS
        };
        const expected = Object.assign(getInitialState(), { isLoading: true });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle GET_CONDITIONS_SUCCESS', () => {
        const action = {
            type: actionTypes.GET_CONDITIONS_SUCCESS,
            payload: { data: { conditions: getAppState() } }
        };
        const expected = { isLoading: false, errorMessage: undefined, data: getAppState() };

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle GET_CONDITIONS_FAIL', () => {
        const error = 'http 500 internal server error';
        const action = {
            type: actionTypes.GET_CONDITIONS_FAIL,
            payload: { error }
        };
        const expected = Object.assign(getInitialState(), { errorMessage: error });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });
});
