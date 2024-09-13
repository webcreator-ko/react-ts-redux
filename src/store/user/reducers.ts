import * as Actions from './actions';
import initialState from './initialState';
import { UserActionType } from '@/types/userActionType';

export const UserReducer = (
  state = initialState.user,
  action: UserActionType
) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        // state を返すのは state が書き換わる際に上書きされるので action から受け取った不足分の値が消えないようにする
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...initialState.user, // ログアウト時は初期状態に戻す
      };
    default:
      return state;
  }
};
