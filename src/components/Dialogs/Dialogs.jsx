import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/messages/" + props.id;

  return (
    <div>
      <li className={c.item + " " + c.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </li>
    </div>
  );
};

const DialogMessage = (props) => {
  return (
    <div>
      <li className={c.item + " " + c.active}>
        <div className={c.message}>{props.message}</div>
      </li>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <section>
      <h1>Dialogs</h1>
      <div className={c.wrapp_dialogs}>
        <div className={c.dialogs}>
          <ul>
            <DialogItem name="EE" id="1" />
            <DialogItem name="JJ" id="2" />
            <DialogItem name="WS" id="3" />
          </ul>
        </div>
        <div className={c.messages}>
          <ul>
            <DialogMessage message="Hi" />
            <DialogMessage message="Hello!" />
            <DialogMessage message="Haudi!" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
