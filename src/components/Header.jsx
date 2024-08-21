import React from "react";
import "./Header.css"; // CSS 파일을 별도로 관리하는 것을 추천합니다.

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <a href="#">경소고 대신 전해드립니다</a>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
    </header>
  );
};

export default Header;
