let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "Hi, how areu?",
          like: "122",
        },
        {
          id: 2,
          message: "I'm fine and you?",
          like: "22",
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
  
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
  
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MSG') {
      let newMsg = {
        id: 4,
        message: this._state.dialogsPage.newMessage,
        photo:
          "url(https://focus.ua/storage/pub/images/2015/grumpy-cat_realgrumpycat-Instagram.jpg)",
      };
  
      this._state.dialogsPage.messages.push(newMsg);
      this._state.dialogsPage.newMessage = "";
      this._callSubscriber(this._state);
      
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE') {
      this._state.dialogsPage.newMessage = action.newMsg;
      this._callSubscriber(this._state);
    }
  }
};

export default store;
window.store = store;
