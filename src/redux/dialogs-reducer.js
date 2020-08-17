const ADD_MSG = "ADD-MSG";
const UPDTAE_NEW_MESSAGE = "UPDTAE-NEW-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MSG:
      let newMsg = {
        id: 4,
        message: state.newMessage,
        photo:
          "url(https://focus.ua/storage/pub/images/2015/grumpy-cat_realgrumpycat-Instagram.jpg)",
      };

      state.messages.push(newMsg);
      state.newMessage = "";
      return state;

    case UPDTAE_NEW_MESSAGE:
      state.newMessage = action.newMsg;
      return state;

    default:
      return state;
  }
};


export const addMsgActionCreator = () => ({
  type: ADD_MSG
})

export const updateNewMsgTextActionCreator = (text) => ({
  type: UPDTAE_NEW_MESSAGE, 
  newMsg: text
})


export default dialogsReducer;
