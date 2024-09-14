import { createSelector } from 'reselect';
import { selectUser } from '../selectors';

// UIDだけを選択するセレクター
export const userIdSelect = createSelector([selectUser], (user) => user.uid);

// 名前だけを選択するセレクター
export const userNameSelect = createSelector(
  [selectUser],
  (user) => user.username
);

// サインイン状態だけを選択するセレクター
export const SignedInSelect = createSelector(
  [selectUser],
  (user) => user.isSignedIn
);

// ユーザーのフル情報を取得するセレクター
// const fullUserInfoSelect = createSelector(
//   [selectUser],
//   (user) => ({
//     uid: user.uid,
//     username: user.username,
//     isSignedIn: user.isSignedIn
//   })
// );
