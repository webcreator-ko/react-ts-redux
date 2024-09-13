import '@/App.css';

import React from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from './store/selector';
import { signInAction } from './store/users/actions';
import logo from '@/logo.svg';

function App() {
  const dispatch = useDispatch();
  const users = useTypedSelector((state) => state.users);
  console.log(users);

  return (
    <div className="app">
      <header className="appHeader">
        <img src={logo} className="appLogo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="appLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() =>
            dispatch(signInAction({ uid: '0001', username: 'kotaro' }))
          }
        >
          Sign In
        </button>
      </header>
    </div>
  );
}

export default App;
