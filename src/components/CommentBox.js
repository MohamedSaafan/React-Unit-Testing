import React from "react";
import { connect } from "react-redux";
import { addComment, fetchComments } from "../actions";

class CommentBox extends React.Component {
  state = {
    comment: "",
  };

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({
      comment: "",
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h4>Add Comment</h4>
          <div className="form-group">
            <textarea
              className="from-control col-4"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Comment
          </button>
        </form>
        <br />
        <button
          className="btn btn-primary"
          onClick={this.props.fetchComments}
          data-test="fetch_comments_button"
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}
export default connect(null, {
  addComment,
  fetchComments,
})(CommentBox);
