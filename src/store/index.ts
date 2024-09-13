// Redux DevTools 拡張
// History 型をインポート
import { createStore } from 'redux';
import rootReducer from './reducers';

// ストアの作成
const store = createStore(
  rootReducer
  // applyMiddleware(thunk)
);

export type AppDispatch = typeof store.dispatch; // dispatch の型

export default store;
