import { RootState } from './reducers';

// セレクターの定義
export const selectUser = (state: RootState) => state.user;
