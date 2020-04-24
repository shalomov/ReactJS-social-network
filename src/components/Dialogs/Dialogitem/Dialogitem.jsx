import React from "react";
import c from "./Dialogitem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/messages/" + props.id;

  return (

      <li className={c.item + " " + c.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </li>
  );
};

export default DialogItem;
