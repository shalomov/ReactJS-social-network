import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";



let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ducimus non?",
          like: "122",
        },
        {
          id: 2,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ducimus non?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ducimus non?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ducimus non?",
          like: "22",
        },
        {
          id: 3,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ducimus non?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ducimus non?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ducimus non?",
          like: "212",
        },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    aside: {
      title: [
        {
          titlefriends: "Best friends",
        },
      ],
      friends: [
        {
          name: "Chandler",
          photo:
            "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        },
        {
          name: "Joey",
          photo:
            "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg",
        },
        {
          name: "Ross",
          photo:
            "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/03/26125843/yorkshire-terrier-cover-500x486.jpg",
        },
        {
          name: "Gunther",
          photo:
            "https://cdn.cnn.com/cnnnext/dam/assets/180316113418-travel-with-a-dog-3-super-169.jpeg",
        },
      ],
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profileReducer = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.aside = asideReducer(this._state.aside, action);

    this._callSubscriber(this._state);

  }
 
};

export default store;
window.store = store;
