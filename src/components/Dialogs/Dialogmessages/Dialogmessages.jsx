import React from "react";
import c from "./Dialogmessages.module.css";

const DialogMessage = (props) => {
  return (
      <li className={c.item + " " + c.active}>
        <p className={c.message}>{props.message}</p>
      </li>
  );
};

export default DialogMessage;
