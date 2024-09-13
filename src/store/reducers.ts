import { combineReducers } from 'redux';
import { UsersReducer } from './users/reducers';

const rootReducer = combineReducers({
  users: UsersReducer,
});

export default rootReducer;
