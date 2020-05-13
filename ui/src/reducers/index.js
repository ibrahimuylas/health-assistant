import { combineReducers } from 'redux';
import conditions from './conditionsReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  conditions,
});

export default rootReducer;
