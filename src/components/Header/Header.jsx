import React from "react";
import c from  './Header.module.css';
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className={c.header}>
      <NavLink exact to="/" className={c.logo}>
        <img
          src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
          alt=""
        />
      </NavLink>
    </header>
  );
};

export default Header;
