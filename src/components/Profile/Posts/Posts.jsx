import React from "react";
import Post from "./Post/Post";


const Profile = () => {
  return (
    <div>
      <h2>my posts</h2>
      <div>
        <h2>new post </h2>
        <Post message="Hi, how areu?" like="22"/>
        <Post message="I'm fine and you?" like="122"/>
      </div>
  </div>
  );
};

export default Profile;
