import React from 'react';
import { useSelector } from 'react-redux';
import { userNameSelect } from '@/store/user/selectors';

const Home = () => {
  // const user = useTypedSelector((state) => state.users);
  const username = useSelector(userNameSelect);

  return (
    <div>
      Home
      <dl>
        <dt>ログイン情報</dt>
        <dd>{JSON.stringify(username)}</dd>
      </dl>
    </div>
  );
};

export default Home;
