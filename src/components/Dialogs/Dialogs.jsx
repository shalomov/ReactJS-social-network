import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import DialogMessage from "./Dialogmessages/Dialogmessages";

const Dialogs = (props) => {
  let dialogs = [
    {
      id: 1,
      name: "EE",
    },
    {
      id: 2,
      name: "JJ",
    },
    {
      id: 3,
      name: "WS",
    },
  ];

  let messages = [
    {
      id: 1,
      message: "H1",
    },
    {
      id: 2,
      message: "Hello!",
    },
    {
      id: 3,
      message: "Haudi",
    },
  ];

  let dialogElements = dialogs.map( dialog => 
    <DialogItem name={dialog.name} id={dialog.id} />
  );

  let messgesElements = messages.map( message => 
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
