import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import DialogMessage from "./Dialogmessages/Dialogmessages";

const Dialogs = (props) => {
  
  let state = props.dialogsPage;  


  let dialogElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messgesElements = state.messages.map((messages) => (
    <DialogMessage message={messages.message} photo={messages.photo} />
  ));

  let newMsgElem = React.createRef();

  let addMsg = () => {
    props.sendMessage();
  };

  let onMsgChange = () => {
    let text = newMsgElem.current.value;
    props.updateNewMsgText(text);
  };

  return (
    <section>
      <h1>Dialogs</h1>
      <div className={c.wrapp_dialogs}>
        <div className={c.dialogs}>
          <ul>{dialogElements}</ul>
        </div>
        <div className={c.messages}>
          <ul>{messgesElements}</ul>
          <div className={c.dialog_content__wrapp}>
            <textarea
              ref={newMsgElem}
              onChange={onMsgChange}
              name="new_msg"
              className={c.new_msg}
              value={state.newMessage}
              placeholder="Write a message..."
            ></textarea>
            <button className={c.dialog_btn} onClick={addMsg}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
