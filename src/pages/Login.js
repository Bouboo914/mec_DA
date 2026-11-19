import React, { useState } from 'react';
import { Pill, Lock, User } from 'lucide-react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError('Vui lòng nhập đầy đủ tài khoản và mật khẩu.');
      return;
    }

    // Tài khoản demo, chưa kết nối database.
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);

      onLogin();
    } else {
      setError('Tài khoản hoặc mật khẩu không chính xác.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <Pill size={42} />
        </div>

        <h1>PHARMA WAREHOUSE</h1>
        <p className="login-subtitle">
          HỆ THỐNG QUẢN LÝ KHO DƯỢC PHẨM
        </p>

        <form onSubmit={handleSubmit}>
          <label>Tên đăng nhập</label>

          <div className="login-input">
            <User size={19} />
            <input
              type="text"
              placeholder="Nhập tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label>Mật khẩu</label>

          <div className="login-input">
            <Lock size={19} />
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">
            ĐĂNG NHẬP
          </button>
        </form>

        <div className="login-demo">
          <p>Tài khoản dùng thử:</p>
          <strong>admin</strong>
          <span> / </span>
          <strong>123456</strong>
        </div>
      </div>
    </div>
  );
}

export default Login;