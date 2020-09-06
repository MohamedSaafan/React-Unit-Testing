import React from "react";

import CommentList from "./CommentList";
import CommentBox from "./CommentBox";

export default (props) => {
  return (
    <div>
      Hello from App.js
      <CommentBox />
      <CommentList />
    </div>
  );
};
