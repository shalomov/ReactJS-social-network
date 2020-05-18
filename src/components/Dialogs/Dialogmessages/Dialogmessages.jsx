import React from "react";
import c from "./Dialogmessages.module.css";

const DialogMessage = (props) => {

  return (
      <li className={c.item + " " + c.active}>
        <div className={c.author_photo}  style={{backgroundImage: `${props.photo}`}}>
        </div>
        <p className={c.dialog_text}>{props.message} </p>
      </li>
  );
};

export default DialogMessage;
