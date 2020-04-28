import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import DialogMessage from "./Dialogmessages/Dialogmessages";

const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map( dialog => 
    <DialogItem name={dialog.name} id={dialog.id} />
  );

  let messgesElements = props.state.messages.map( message => 
    <DialogMessage message={message.message} />
  );

  return (
    <section>
      <h1>Dialogs</h1>
      <div className={c.wrapp_dialogs}>
        <div className={c.dialogs}>
          <ul>
            {dialogElements}
          </ul>
        </div>
        <div className={c.messages}>
          <ul>
            {messgesElements}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
