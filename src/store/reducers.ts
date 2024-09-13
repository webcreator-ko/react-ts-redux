import { combineReducers } from 'redux';
import { UsersReducer } from './users/reducers';

const rootReducer = combineReducers({
  users: UsersReducer, // リデューサーを1回まとめている
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
