import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <div className="user-avatar">
            <span>U</span>
          </div>
          <span className="user-name">User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;