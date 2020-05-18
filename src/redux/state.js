import { rerenderEntireTree } from "../rerender";

let state = {
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
    newPostText: ''
  },
  dialogsPage: {
    messages: [
      {
        id: 1,
        message: "H1",
        photo: 'url(https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg)'
      },
      {
        id: 2,
        message: "Hello!",
        photo: 'url(https://focus.ua/storage/pub/images/2015/grumpy-cat_realgrumpycat-Instagram.jpg)'
      },
      {
        id: 3,
        message: "Haudi",
        photo: 'url(https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg)'
      },
    ],
    newMessage: '',
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
  aside : {
    title : [
      {
        titlefriends: 'Best friends'
      }
    ],
    friends : [
      {
        name: 'Chandler',
        photo: 'https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'
      },
      {
        name: 'Joey',
        photo: 'https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg'
      },
      {
        name: 'Ross',
        photo: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/03/26125843/yorkshire-terrier-cover-500x486.jpg'
      },
      {
        name: 'Gunther',
        photo: 'https://cdn.cnn.com/cnnnext/dam/assets/180316113418-travel-with-a-dog-3-super-169.jpeg'
      }
    ]
  }
};

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    like : 0
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';

  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMsg = () => {
  let newMsg = {
    id: 4,
    message: state.dialogsPage.newMessage,
    photo: 'url(https://focus.ua/storage/pub/images/2015/grumpy-cat_realgrumpycat-Instagram.jpg)'
  };

  state.dialogsPage.messages.push(newMsg);
  state.dialogsPage.newMessage = '';

  rerenderEntireTree(state);
}

export let updateNewMessage = (newMsg) => {
  state.dialogsPage.newMessage = newMsg;
  rerenderEntireTree(state);
};




export default state;
