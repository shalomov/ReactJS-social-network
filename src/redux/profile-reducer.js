const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
}


const profileReducer = (state = initialState , action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        like: 0,
      };

      state.postsData.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};


export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text
})


export default profileReducer;
