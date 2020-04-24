import React from "react";
import Post from "./Post/Post";

const Profile = () => {
  let postsData = [
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
  ];

  let postMessage = postsData.map( postMessage => 
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
