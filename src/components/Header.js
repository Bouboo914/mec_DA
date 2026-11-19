import React from 'react';
import { Bell, UserCircle } from 'lucide-react';

function Header({ title }) {
  return (
    <header className="header">
      <div>
        <h2>{title}</h2>
        <p>Hệ thống quản lý kho dược phẩm</p>
      </div>

      <div className="header-right">
        <button className="notification-button">
          <Bell size={21} />
        </button>

        <div className="user-info">
          <UserCircle size={35} />

          <div>
            <strong>Quản trị viên</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;