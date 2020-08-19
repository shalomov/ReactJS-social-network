import React from "react";

import {
  addMsgActionCreator,
  updateNewMsgTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let addMsg = () => {
    props.store.dispatch(addMsgActionCreator());
  };

  let onMsgChange = (text) => {
    props.store.dispatch(updateNewMsgTextActionCreator(text));
  };

  return (
    <Dialogs updateNewMsgText={onMsgChange} sendMessage={addMsg} 
    dialogsPage={state} />
  );
};

export default DialogsContainer;
