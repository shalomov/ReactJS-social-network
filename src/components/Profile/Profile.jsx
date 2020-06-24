import React from "react";
import Posts from "./Posts/Posts";
import Profileinfo from "../Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    <section>
      <h1>Profile</h1>
      <Profileinfo />
      <Posts postsData={props.state.postsData} newPostText={props.state.newPostText} dispatch={props.dispatch} />
    </section>
  );
};

export default Profile;
