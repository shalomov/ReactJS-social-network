const ADD_MSG = "ADD-MSG";
const UPDTAE_NEW_MESSAGE = "UPDTAE-NEW-MESSAGE";


let initialState = {
  messages: [
    {
      id: 1,
      message: "H1",
      photo:
        "url(https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg)",
    },
    {
      id: 2,
      message: "Hello!",
      photo:
        "url(https://focus.ua/storage/pub/images/2015/grumpy-cat_realgrumpycat-Instagram.jpg)",
    },
    {
      id: 3,
      message: "Haudi",
      photo:
        "url(https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg)",
    },
  ],
  newMessage: "",
  dialogs: [
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
  ],
}

const dialogsReducer = (state = initialState , action) => {
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
