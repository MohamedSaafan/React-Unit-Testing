import React from "react";
import { connect } from "react-redux";

const CommentList = (props) => {
  const renderList = () => {
    return (
      <ul>
        {props.comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    );
  };
  return <div> {renderList()}</div>;
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(CommentList);
