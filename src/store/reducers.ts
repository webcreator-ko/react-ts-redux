import { combineReducers } from 'redux';
import { UserReducer } from './user/reducers';

const rootReducer = combineReducers({
  user: UserReducer, // リデューサーを1回まとめている
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
