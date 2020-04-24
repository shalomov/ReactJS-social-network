import React from "react";
import Posts from "./Posts/Posts";
import Profileinfo from "../Profileinfo/Profileinfo";

const Profile = () => {
  return (
    <section>
      <h1>Profile</h1>
      <Profileinfo />
      <Posts />
    </section>
  );
};

export default Profile;
