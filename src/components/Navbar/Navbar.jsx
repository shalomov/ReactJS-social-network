import React from "react";
import c from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friendsitem from "./Friensitem/Friendsitem";

const Navbar = (props) => {
  let friendsInfo = props.state.friends.map( friends => 
    <Friendsitem name={friends.name} photo={friends.photo} />
  );

  let friendsTitle = props.state.title.map( title => 
    <h3 className={c.title_friend} >{title.titlefriends} </h3>
  );

  return (
    <aside>
      <nav className={c.navigation}>
        <ul>
          <li className={c.item}>
            <NavLink to="/profile" activeClassName={c.active}>
              Profile
            </NavLink>
          </li>
          <li className={c.item}>
            <NavLink to="/messages" activeClassName={c.active}>
              Messages
            </NavLink>
          </li>
          <li className={`${c.item}`}>
            <NavLink to="/news" activeClassName={c.active}>
              News
            </NavLink>
          </li>
          <li className={c.item}>
            <NavLink to="/music" activeClassName={c.active}>
              Music
            </NavLink>
          </li>
          <li className={c.item}>
            <NavLink to="/setting" activeClassName={c.active}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={c.best_friends}>
        {friendsTitle}
        <ul className={c.friends_list}>
          {friendsInfo}
        </ul>
      </div>

    </aside>
  );
};

export default Navbar;
