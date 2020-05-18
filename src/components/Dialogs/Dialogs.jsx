import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import DialogMessage from "./Dialogmessages/Dialogmessages";

const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map( dialog => 
    <DialogItem name={dialog.name} id={dialog.id} />
  );

  let messgesElements = props.state.messages.map( messages => 
    <DialogMessage message={messages.message} photo={messages.photo} />
  );


  
  let newMsgElem = React.createRef();

  let addMsg = () => {
    props.addMsg();
  }

  let onMsgChange = () => {
    let text = newMsgElem.current.value;
    props.updateNewMessage(text);
  }
  
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
          <textarea ref={newMsgElem} onChange={ onMsgChange } name="new_msg" className="new_msg" cols="30" rows="10" value={props.newMessage}></textarea>
          <button onClick={ addMsg }>Send</button>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
