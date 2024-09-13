import React from 'react';
import useTypedSelector from '@/store/selector';

const Home = () => {
  const user = useTypedSelector((state) => state.users);

  return (
    <div>
      Home
      <dl>
        <dt>ログイン情報</dt>
        <dd>{JSON.stringify(user)}</dd>
      </dl>
    </div>
  );
};

export default Home;
