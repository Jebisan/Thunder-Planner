import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import datesReducer from '../reducers/dates';
import jobsReducer from '../reducers/jobs';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
const store = createStore(
    combineReducers({
      dates: datesReducer,
      jobs: jobsReducer
    }), composeEnhancers(applyMiddleware(thunk))
  );
  
  return store;
    }
