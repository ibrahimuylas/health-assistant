import * as actionTypes from '../constants/actionTypes';
import * as actions from './conditionsActions';
import * as apiUrl from '../constants/apiUrl';
import HttpStatus from 'http-status-codes';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions::Conditions', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    const conditions = {
        conditions: [
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


    it('should create an action to to get conditions', () => {
        fetchMock.getOnce(apiUrl.Conditions, {
            status: HttpStatus.OK,
            body: JSON.stringify(conditions)
        });

        const payload = { data: conditions, error: undefined, status: HttpStatus.OK };

        const expectedActions = [
            { type: actionTypes.GET_CONDITIONS },
            { type: actionTypes.GET_CONDITIONS_SUCCESS, payload }
        ];

        expect(typeof (actions.getConditions())).toEqual('function');
        const store = mockStore({ conditions: [] })

        return store.dispatch(actions.getConditions()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


});
