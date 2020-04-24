import React from "react";
import  c from './Profileinfo.module.css';

const Profileinfo = () => {
  return (
    <section>
      <div className={c.content_img}>
        <img
          src="https://images.unsplash.com/photo-1587517495424-978e0364ae20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
          alt=""
        />
      </div>

      <div>ava + desc</div>
    </section>
  );
};

export default Profileinfo;
