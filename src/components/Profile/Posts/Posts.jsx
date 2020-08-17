import React from "react";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import c from "./Posts.module.css";

const Profile = (props) => {
  let postMessage = props.postsData.map((postMessage) => (
    <Post message={postMessage.message} like={postMessage.like} />
  ));

  let newPostElem = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElem.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    // props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  };

  return (
    <div>
      <h2 className={c.title}>My posts</h2>

        {postMessage}
        <div className={c.post_text__wrapp}>
          <textarea
            ref={newPostElem}
            name="text_message"
            onChange={onPostChange}
            className={c.text_message}
            value={props.newPostText}
            placeholder="Write a post..."
          />
          <button className={c.btn_post} onClick={addPost}>Publish</button>
        </div>

    </div>
  );
};

export default Profile;
