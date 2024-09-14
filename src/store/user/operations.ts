import { Dispatch } from 'redux';
import { RootState } from '../reducers';
import { signInAction } from './actions';
import sleep from '@/utils/sleep';

export const signInOperation = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const state = getState();
    const isSignedIn = state.user.isSignedIn;

    // 既にサインインしている場合は何もしない
    if (isSignedIn) return;

    const url = 'https://66e5282c5cc7f9b6273c79a8.mockapi.io/users';

    try {
      await sleep(5000);
      const res = await fetch(url);

      // レスポンスがOKでない場合のエラーハンドリング
      if (!res.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await res.json();
      console.log(data);

      // サンプルデータからユーザーを選択
      const user = {
        uid: data[0].id, // 取得したデータからユーザーIDを使用
        username: data[0].name, // 取得したデータからユーザー名を使用
      };

      dispatch(signInAction(user));
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
};
