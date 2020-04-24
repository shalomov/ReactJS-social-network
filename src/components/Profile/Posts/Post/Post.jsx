import React from "react";

const Post = (props) => {
  return (
    <div>
      <div>
        {props.message}
        <span>like {props.like}</span>
        </div>
    </div>
  );
};

export default Post;
