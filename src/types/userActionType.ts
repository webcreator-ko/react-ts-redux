import { UserStateType } from './userStateType';

export type UserActionType = {
  type: 'SIGN_IN' | 'SIGN_OUT';
  payload: UserStateType & {
    isSignedIn: boolean;
  };
};
