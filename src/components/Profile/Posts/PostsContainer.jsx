import React from "react";
import Posts from "./Posts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Post from "./Post/Post";


const ProfileContainer = (props) => {
  let state = props.store.getState().profilePage;
  
  let postMessage = state.postsData.map((postMessage) => (
    <Post message={postMessage.message} like={postMessage.like} />
  ));

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    // let text = newPostElem.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
    // props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    
  };

  return (
    <div>
      {postMessage}
      <Posts updateNewPostText={onPostChange} addPost={addPost}  
      posts={state.postsData}
      newPostText = {state.newPostText}
    />
    </div>
  );
};

export default ProfileContainer;
