import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@/store/selectors';
import { signInAction } from '@/store/user/actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useNavigate によるページ遷移では、Redux の state はリセットされず維持されます。
  // const user = useTypedSelector((state) => state.users);
  const username = useSelector(selectUser);

  const handleLogin = () => {
    // 仮のユーザー情報
    const user = {
      uid: '12345',
      username: 'John Doe',
    };

    // Redux のアクションをディスパッチして、ユーザー情報を更新
    dispatch(signInAction(user));

    // ログイン後にホームページへ遷移
    // navigate('/');
  };

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={handleLogin}>ログイン</button>
      <dl>
        <dt>ユーザー情報</dt>
        <dd>{JSON.stringify(username)}</dd>
      </dl>
      <p>
        <a href="/">通常トップ</a>
      </p>
      <p>
        <Link to="/">Linkからのトップ</Link>
      </p>
    </div>
  );
};

export default Login;
