import React from "react";
import Post from "./Post/Post";

const Profile = (props) => {

  
  let postMessage = props.postsData.map( postMessage => 
    <Post message={postMessage.message} like={postMessage.like} />
  );

  let newPostElem = React.createRef();

  let addPost = () => {
    props.addPost();
  }


  let onPostChange = () => {
    let text = newPostElem.current.value;
    props.updateNewPostText(text);
  }


  return (
    <div>
      <h2>my posts</h2>
      <div>
          <div>
            <textarea ref={newPostElem} name="text_message" onChange={ onPostChange } className="text_message"  cols="30" rows="10" value={props.newPostText} />
            <button onClick={ addPost }>Add post</button>
          </div>
          {postMessage}
      </div>
    </div>
  );
};

export default Profile;
