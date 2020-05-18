import React from "react";

const Post = (props) => {
  return (
    <div>
      <div>
        <div>{props.message}</div>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
