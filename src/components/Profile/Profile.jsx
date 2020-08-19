import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import Profileinfo from "../Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    <section>
      <h1>Profile</h1>
      <Profileinfo />
      <PostsContainer store={props.store} state={props.state} />
    </section>
  );
};

export default Profile;
