import React from "react";
import Post from "./Post/Post";

const Profile = (props) => {

  
  let postMessage = props.postsData.map( postMessage => 
    <Post message={postMessage.message} like={postMessage.like} />
  );


  return (
    <div>
      <h2>my posts</h2>
      <div>
        <h2>new post </h2>
          {postMessage}
      </div>
    </div>
  );
};

export default Profile;
