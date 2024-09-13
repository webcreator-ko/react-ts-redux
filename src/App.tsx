import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

// React Router v6 では、Switch は Routes に置き換わりました。
// Route の component や render 属性も廃止され、代わりに element 属性を使用します。
// もし Switch を使おうとしてエラーが出る場合、React Router v6 に移行している可能性が高いので、上記の修正を行ってください。

// exact パラメータについて
// React Router v5 以前で使われていたオプションで、ルートマッチングの挙動を制御していました。
// しかし、React Router v6 では exact は不要になり、デフォルト(完全一致)で期待されるマッチング動作が行われるようになっています。

// exact の役割（React Router v5）
// React Router v5 では、部分的な URL マッチングがデフォルトでした。
// そのため、exact を使わないと、部分的に一致するパスが複数ある場合、最初にマッチしたルートが表示される可能性がありました。

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default App;
