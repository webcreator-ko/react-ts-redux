// Redux DevTools 拡張
// History 型をインポート
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

// ストアの作成
// @ts-ignore
const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch; // dispatch の型

export default store;
