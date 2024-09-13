import { combineReducers } from 'redux';
import { UsersReducer } from './users/reducers';

const rootReducer = combineReducers({
  user: UsersReducer,
});

export default rootReducer;
