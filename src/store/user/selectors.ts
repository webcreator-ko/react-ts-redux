import { createSelector } from 'reselect';
import { selectUser } from '../selectors';

// UIDだけを選択するセレクター
export const selectUserUid = createSelector([selectUser], (user) => user.uid);

// 名前だけを選択するセレクター
export const selectUserName = createSelector(
  [selectUser],
  (user) => user.username
);

// サインイン状態だけを選択するセレクター
export const selectIsSignedIn = createSelector(
  [selectUser],
  (user) => user.isSignedIn
);

// ユーザーのフル情報を取得するセレクター
// const selectFullUserInfo = createSelector(
//   [selectUser],
//   (user) => ({
//     uid: user.uid,
//     username: user.username,
//     isSignedIn: user.isSignedIn
//   })
// );
