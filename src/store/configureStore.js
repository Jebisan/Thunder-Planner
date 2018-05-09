import { createStore, combineReducers } from 'redux';
import datesReducer from '../reducers/dates';
import jobsReducer from '../reducers/jobs';

export default () => {
const store = createStore(
    combineReducers({
      dates: datesReducer,
      jobs: jobsReducer
    //  filters: filtersReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  return store;
    }
