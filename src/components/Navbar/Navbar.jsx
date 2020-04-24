import React from "react";
import c from  './Navbar.module.css';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={c.navigation}>
      <ul>
        <li className={c.item}>
          <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to="/messages" activeClassName={c.active}>Messages</NavLink>
        </li>
        <li className={`${c.item}`}>
          <NavLink to="/news" activeClassName={c.active}>News</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to="/setting" activeClassName={c.active}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
