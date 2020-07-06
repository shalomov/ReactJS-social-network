import React from "react";
import c from '../Posts.module.css'

const Post = (props) => {
  return (
    <div className={c.content}>
        <p>{props.message}</p>
        <span>like</span>
        <span>{props.like}</span>
    </div>
  );
};

export default Post;
