import React from "react";

import c from "./Posts.module.css";

const Profile = (props) => {

  
  // let postMessage = props.postsData.map((postMessage) => (
  //   <Post message={postMessage.message} like={postMessage.like} />
  // ));

  let newPostElem = React.createRef();

  let onAddPost = () => {
    // props.dispatch(addPostActionCreator());
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElem.current.value;
    props.updateNewPostText(text);

    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
    // props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  };

  return (
    <div>
      <h2 className={c.title}>My posts</h2>


        <div className={c.post_text__wrapp}>
          <textarea
            ref={newPostElem}
            name="text_message"
            onChange={onPostChange}
            className={c.text_message}
            value={props.newPostText}
            placeholder="Write a post..."
          />
          <button className={c.btn_post} onClick={onAddPost}>Publish</button>
        </div>

    </div>
  );
};

export default Profile;
